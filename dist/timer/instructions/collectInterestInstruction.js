"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectInterestInstruction = void 0;
const address_1 = require("../../utils/address");
const types_1 = require("../../types");
const anchor_1 = require("@project-serum/anchor");
const spl_token_1 = require("@solana/spl-token");
const getCofiTimerAccount_1 = require("../../account/getCofiTimerAccount");
const __1 = require("../..");
function collectInterestInstruction(cofiSolanaConfig, timerOwnedAccount, destinationLiquidityAccount) {
    return __awaiter(this, void 0, void 0, function* () {
        const { version, cluster, provider } = cofiSolanaConfig;
        const cofiTimerProgram = new anchor_1.Program(types_1.cofiTimer.IDL, address_1.ACCOUNTS.COFI_TIMER_ID(cluster), provider);
        const cofiTimerAccount = yield (0, getCofiTimerAccount_1.getCofiTimerAddress)(cofiSolanaConfig, timerOwnedAccount);
        const cofiMint = yield address_1.ACCOUNTS.COFI_MINT(cluster);
        const strategy = yield address_1.ACCOUNTS.COFI_STRATEGY(version, cluster);
        const collateralReserve = yield address_1.ACCOUNTS.COFI_COLLATERAL_RESERVE(cluster);
        const feeReceiver = yield address_1.ACCOUNTS.COFI_FEE_RECEIVER(cluster);
        const cofiTimerAccountState = yield (0, getCofiTimerAccount_1.getCofiTimerAccount)(cofiSolanaConfig, cofiTimerAccount);
        const beneficiaryAccount = cofiTimerAccountState.beneficiaryAccount;
        if (!destinationLiquidityAccount) {
            const beneficiaryAccountState = yield (0, __1.getCofiAccount)(cofiSolanaConfig, beneficiaryAccount);
            destinationLiquidityAccount = yield (0, __1.getAssociatedLiquidityAddress)(cofiSolanaConfig, beneficiaryAccountState.authority);
        }
        return yield cofiTimerProgram.methods.collectInterest()
            .accounts({
            cofiTimer: cofiTimerAccount,
            timerOwnedAccount,
            beneficiaryCofiAccount: beneficiaryAccount,
            beneficiaryLiquidityAccount: destinationLiquidityAccount,
            cofiMintCollateralReserve: collateralReserve,
            cofiMint,
            cofiStrategy: strategy,
            feeReceiver,
            cofiProgram: address_1.ACCOUNTS.COFI_PROGRAM_ID(cluster),
            cofiStrategyProgram: address_1.ACCOUNTS.COFI_STRATEGY_PROGRAM_ID(cluster),
            clock: anchor_1.web3.SYSVAR_CLOCK_PUBKEY,
        }).remainingAccounts([{
                pubkey: address_1.ACCOUNTS.SOLEND_PROGRAM_ID(cluster),
                isSigner: false,
                isWritable: false,
            }, {
                pubkey: address_1.ACCOUNTS.SOLEND_RESERVE(cluster),
                isSigner: false,
                isWritable: true,
            }, {
                pubkey: address_1.ACCOUNTS.SOLEND_CTOKEN(cluster),
                isSigner: false,
                isWritable: true,
            }, {
                pubkey: address_1.ACCOUNTS.SOLEND_RESERVE_LIQ_SUPPLY(cluster),
                isSigner: false,
                isWritable: true,
            }, {
                pubkey: address_1.ACCOUNTS.SOLEND_LENDING_MARKET(cluster),
                isSigner: false,
                isWritable: false,
            }, {
                pubkey: address_1.ACCOUNTS.SOLEND_LENDING_MARKET_AUTH(cluster),
                isSigner: false,
                isWritable: false,
            }, {
                pubkey: cofiMint,
                isSigner: false,
                isWritable: false,
            }, {
                pubkey: anchor_1.web3.SYSVAR_CLOCK_PUBKEY,
                isSigner: false,
                isWritable: false,
            }, {
                pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                isSigner: false,
                isWritable: false,
            },]).instruction();
    });
}
exports.collectInterestInstruction = collectInterestInstruction;
// #[derive(Accounts)]
// pub struct WithdrawInterest<'info> {
//   #[account(
//     mut,
//     seeds = [b"cofi_timer", timer_owned_account.key().as_ref()],
//     bump,
//     constraint = cofi_timer.expiration.lt(&clock.unix_timestamp)
//   )]
//   pub cofi_timer: Box<Account<'info, CofiTimer>>,
//   #[account(
//     mut,
//   )]
//   pub timer_owned_account: Box<Account<'info, cofi::state::CofiAccount>>,
//   #[account(
//     constraint = beneficiary_cofi_account.key().eq(&cofi_timer.beneficiary_account)
//   )]
//   pub beneficiary_cofi_account: Box<Account<'info, cofi::state::CofiAccount>>,
//   #[account(
//     mut,
//     token::authority = beneficiary_cofi_account.authority,
//   )]
//   pub beneficiary_liquidity_account: Box<Account<'info, TokenAccount>>,
//   #[account(mut)]
//   pub cofi_mint_collateral_reserve: Box<Account<'info, TokenAccount>>,
//   #[account(mut)]
//   pub cofi_mint: Box<Account<'info, cofi::state::CofiMint>>,
//   #[account(mut)]
//   pub cofi_strategy: Box<Account<'info, cofi_strategy::state::Strategy>>,
//   #[account(
//     mut,
//     constraint = cofi_mint.fee_receiver_account.eq(&fee_receiver_account.key()),
//   )]
//   pub fee_receiver_account: Box<Account<'info, cofi::state::CofiAccount>>,
//   pub cofi_program: Program<'info, Cofi>,
//   pub cofi_strategy_program: Program<'info, CofiStrategy>,
//   pub clock: Sysvar<'info, Clock>,
// }
