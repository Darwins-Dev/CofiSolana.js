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
exports.withdrawInstruction = void 0;
const address_1 = require("../utils/address");
const types_1 = require("../types");
const anchor_1 = require("@project-serum/anchor");
const spl_token_1 = require("@solana/spl-token");
function withdrawInstruction(cofiSolanaConfig, cofiAccountAuthority, sourceCofiAccount, destinationLiquidityAccount, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const { version, cluster, provider } = cofiSolanaConfig;
        const cofiProgram = new anchor_1.Program(types_1.cofi.IDL, address_1.ACCOUNTS.COFI_PROGRAM_ID(cluster), provider);
        const cofiMint = yield address_1.ACCOUNTS.COFI_MINT(cluster);
        const strategy = yield address_1.ACCOUNTS.COFI_STRATEGY(version, cluster);
        const collateralReserve = yield address_1.ACCOUNTS.COFI_COLLATERAL_RESERVE(cluster);
        const feeReceiver = yield address_1.ACCOUNTS.COFI_FEE_RECEIVER(cluster);
        return yield cofiProgram.methods.withdraw(new anchor_1.BN(amount))
            .accounts({
            cofiAccountAuthority,
            sourceCofiAccount,
            feeReceiver,
            destinationLiquidityAccount,
            cofiMint,
            cofiStrategy: strategy,
            cofiMintCollateralReserve: collateralReserve,
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
exports.withdrawInstruction = withdrawInstruction;
