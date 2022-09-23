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
exports.getInterestGenerated = exports.getWithdrawableLiquidity = exports.getAssociatedCofiAccountAddress = exports.getCofiAccount = void 0;
const address_1 = require("../utils/address");
const types_1 = require("../types");
const anchor_1 = require("@project-serum/anchor");
const __1 = require("..");
function getCofiAccount(cofiSolanaConfig, publicKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const { version, cluster, provider } = cofiSolanaConfig;
        const cofiProgram = new anchor_1.Program(types_1.cofi.IDL, address_1.ACCOUNTS.COFI_PROGRAM_ID(cluster), provider);
        return cofiProgram.account.cofiAccount.fetch(publicKey);
    });
}
exports.getCofiAccount = getCofiAccount;
function getAssociatedCofiAccountAddress(cofiSolanaConfig, owner) {
    return __awaiter(this, void 0, void 0, function* () {
        const { version, cluster, provider } = cofiSolanaConfig;
        return (yield anchor_1.web3.PublicKey.findProgramAddress([
            Buffer.from('cofi_account', 'utf-8'), owner.toBuffer(),
        ], address_1.ACCOUNTS.COFI_PROGRAM_ID(cluster)))[0];
    });
}
exports.getAssociatedCofiAccountAddress = getAssociatedCofiAccountAddress;
function getWithdrawableLiquidity(cofiSolanaConfig, cofiAccountPublicKey, withdrawFeeRate) {
    return __awaiter(this, void 0, void 0, function* () {
        const { version, cluster, provider } = cofiSolanaConfig;
        let cofiAccount = yield getCofiAccount(cofiSolanaConfig, cofiAccountPublicKey);
        if (cofiAccountPublicKey.equals(yield address_1.ACCOUNTS.COFI_FEE_RECEIVER(cluster))) {
            return (0, __1.sharesToLiquidity)(cofiSolanaConfig, cofiAccount.shareAmount);
        }
        else {
            let depositNstakes = cofiAccount.depositAmount.add(cofiAccount.stakeAmount);
            let sharesAsLiquidity = yield (0, __1.sharesToLiquidity)(cofiSolanaConfig, cofiAccount.shareAmount);
            let interestGenerated = (sharesAsLiquidity.gt(depositNstakes)) ? sharesAsLiquidity.sub(depositNstakes) : new anchor_1.BN(0);
            let withdrawFee = interestGenerated.mul(new anchor_1.BN(withdrawFeeRate)).div(new anchor_1.BN(1000000));
            return sharesAsLiquidity.sub(cofiAccount.stakeAmount).sub(withdrawFee);
        }
    });
}
exports.getWithdrawableLiquidity = getWithdrawableLiquidity;
function getInterestGenerated(cofiSolanaConfig, cofiAccountPublicKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const { version, cluster, provider } = cofiSolanaConfig;
        let cofiAccount = yield getCofiAccount(cofiSolanaConfig, cofiAccountPublicKey);
        let depositNstakes = cofiAccount.depositAmount.add(cofiAccount.stakeAmount);
        let sharesAsLiquidity = yield (0, __1.sharesToLiquidity)(cofiSolanaConfig, cofiAccount.shareAmount);
        if (sharesAsLiquidity.gt(depositNstakes))
            return sharesAsLiquidity.sub(depositNstakes);
        else
            return new anchor_1.BN(0);
    });
}
exports.getInterestGenerated = getInterestGenerated;
