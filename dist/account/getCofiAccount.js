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
exports.getAssociatedCofiAccountAddress = exports.getCofiAccount = void 0;
const constants_1 = require("../utils/constants");
const types_1 = require("../types");
const anchor_1 = require("@project-serum/anchor");
function getCofiAccount(cluster, provider, publicKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const cofiProgram = new anchor_1.Program(types_1.cofi.IDL, constants_1.ACCOUNTS.COFI_PROGRAM_ID(cluster), provider);
        return cofiProgram.account.cofiAccount.fetch(publicKey);
    });
}
exports.getCofiAccount = getCofiAccount;
function getAssociatedCofiAccountAddress(cluster, owner) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield anchor_1.web3.PublicKey.findProgramAddress([
            Buffer.from('cofi_account', 'utf-8'), owner.toBuffer(),
        ], constants_1.ACCOUNTS.COFI_PROGRAM_ID(cluster)))[0];
    });
}
exports.getAssociatedCofiAccountAddress = getAssociatedCofiAccountAddress;
