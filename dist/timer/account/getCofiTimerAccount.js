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
exports.getCollectableInterest = exports.getCofiTimerAddress = exports.getCofiTimerAccount = void 0;
const address_1 = require("../../utils/address");
const types_1 = require("../../types");
const anchor_1 = require("@project-serum/anchor");
const __1 = require("../..");
function getCofiTimerAccount(cofiSolanaConfig, publicKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const { version, cluster, provider } = cofiSolanaConfig;
        const cofiTimerProgram = new anchor_1.Program(types_1.cofiTimer.IDL, address_1.ACCOUNTS.COFI_TIMER_ID(cluster), provider);
        return cofiTimerProgram.account.cofiTimer.fetch(publicKey);
    });
}
exports.getCofiTimerAccount = getCofiTimerAccount;
function getCofiTimerAddress(cofiSolanaConfig, timerOwnedAccountPublicKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const { version, cluster, provider } = cofiSolanaConfig;
        return (yield anchor_1.web3.PublicKey.findProgramAddress([
            Buffer.from('cofi_timer', 'utf-8'), timerOwnedAccountPublicKey.toBuffer(),
        ], address_1.ACCOUNTS.COFI_TIMER_ID(cluster)))[0];
    });
}
exports.getCofiTimerAddress = getCofiTimerAddress;
function getCollectableInterest(cofiSolanaConfig, timerOwnedAccountPublicKey, withdrawFeeRate) {
    return __awaiter(this, void 0, void 0, function* () {
        const { version, cluster, provider, } = cofiSolanaConfig;
        const cofiTimerAccount = yield getCofiTimerAccount(cofiSolanaConfig, yield getCofiTimerAddress(cofiSolanaConfig, timerOwnedAccountPublicKey));
        const withdrawableLiquidity = yield (0, __1.getWithdrawableLiquidity)(cofiSolanaConfig, timerOwnedAccountPublicKey, withdrawFeeRate);
        if (cofiTimerAccount.depositCollected) {
            return withdrawableLiquidity;
        }
        else {
            return withdrawableLiquidity.sub(cofiTimerAccount.amount);
        }
    });
}
exports.getCollectableInterest = getCollectableInterest;
