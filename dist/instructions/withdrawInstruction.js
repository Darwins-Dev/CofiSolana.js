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
const constants_1 = require("../utils/constants");
const types_1 = require("../types");
const anchor_1 = require("@project-serum/anchor");
function withdrawInstruction(version, cluster, provider, cofiAccountAuthority, sourceCofiAccount, destinationLiquidityAccount, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const cofiProgram = new anchor_1.Program(types_1.cofi.IDL, constants_1.ACCOUNTS.COFI_PROGRAM_ID(cluster), provider);
        const tokenProgram = anchor_1.Spl.token();
        const cofiMint = yield constants_1.ACCOUNTS.COFI_MINT(version, cluster);
        const strategy = yield constants_1.ACCOUNTS.COFI_STRATEGY(version, cluster);
        const collateralReserve = yield constants_1.ACCOUNTS.COFI_COLLATERAL_RESERVE(version, cluster);
        const feeReceiverAccount = constants_1.ACCOUNTS.COFI_FEE_RECEIVER(cluster);
        return yield cofiProgram.methods.withdraw(amount)
            .accounts({
            cofiAccountAuthority,
            sourceCofiAccount,
            feeReceiverAccount,
            destinationLiquidityAccount,
            cofiMint,
            cofiStrategy: strategy,
            cofiMintCollateralReserve: collateralReserve,
            cofiStrategyProgram: constants_1.ACCOUNTS.COFI_STRATEGY_PROGRAM_ID(cluster),
            clock: anchor_1.web3.SYSVAR_CLOCK_PUBKEY,
        }).remainingAccounts([{
                pubkey: constants_1.ACCOUNTS.SOLEND_PROGRAM_ID(cluster),
                isSigner: false,
                isWritable: false,
            }, {
                pubkey: constants_1.ACCOUNTS.SOLEND_RESERVE(cluster),
                isSigner: false,
                isWritable: true,
            }, {
                pubkey: constants_1.ACCOUNTS.SOLEND_CTOKEN(cluster),
                isSigner: false,
                isWritable: true,
            }, {
                pubkey: constants_1.ACCOUNTS.SOLEND_RESERVE_LIQ_SUPPLY(cluster),
                isSigner: false,
                isWritable: true,
            }, {
                pubkey: constants_1.ACCOUNTS.SOLEND_LENDING_MARKET(cluster),
                isSigner: false,
                isWritable: false,
            }, {
                pubkey: constants_1.ACCOUNTS.SOLEND_LENDING_MARKET_AUTH(cluster),
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
                pubkey: tokenProgram.programId,
                isSigner: false,
                isWritable: false,
            },]).instruction();
    });
}
exports.withdrawInstruction = withdrawInstruction;
