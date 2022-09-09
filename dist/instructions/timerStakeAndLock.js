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
exports.timerStakeAndLock = void 0;
const address_1 = require("../utils/address");
const types_1 = require("../types");
const anchor_1 = require("@project-serum/anchor");
function timerStakeAndLock(cofiSolanaConfig, stakerAuthority, stakerAccount, timerOwnedAccount, timerCofiStakeAccount, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const { version, cluster, provider } = cofiSolanaConfig;
        const cofiTimerProgram = new anchor_1.Program(types_1.cofiTimer.IDL, address_1.ACCOUNTS.COFI_TIMER_ID(cluster), provider);
        let [cofiTimerAddress,] = yield anchor_1.web3.PublicKey.findProgramAddress([Buffer.from('cofi_timer', 'utf-8'), timerOwnedAccount.toBuffer()], cofiTimerProgram.programId);
        return yield cofiTimerProgram.methods.stakeAndLock(new anchor_1.BN(amount))
            .accounts({
            stakerAccountAuthority: stakerAuthority,
            cofiTimer: cofiTimerAddress,
            stakerCofiAccount: stakerAccount,
            timerOwnedAccount,
            timerCofiStakePair: timerCofiStakeAccount,
            cofiMint: yield address_1.ACCOUNTS.COFI_MINT(version, cluster),
            feeReceiverAccount: address_1.ACCOUNTS.COFI_FEE_RECEIVER(cluster),
            cofiStrategy: yield address_1.ACCOUNTS.COFI_STRATEGY(version, cluster),
            cofiProgram: address_1.ACCOUNTS.COFI_PROGRAM_ID(cluster),
            cofiStrategyProgram: address_1.ACCOUNTS.COFI_STRATEGY_PROGRAM_ID(cluster),
            clock: anchor_1.web3.SYSVAR_CLOCK_PUBKEY,
        }).instruction();
    });
}
exports.timerStakeAndLock = timerStakeAndLock;
