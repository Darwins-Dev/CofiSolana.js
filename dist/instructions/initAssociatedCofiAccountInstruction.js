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
exports.initAssociatedCofiAccountInstruction = void 0;
const address_1 = require("../utils/address");
const types_1 = require("../types");
const anchor_1 = require("@project-serum/anchor");
function initAssociatedCofiAccountInstruction(cofiSolanaConfig, payer, authority) {
    return __awaiter(this, void 0, void 0, function* () {
        const { version, cluster, provider } = cofiSolanaConfig;
        const cofiProgram = new anchor_1.Program(types_1.cofi.IDL, address_1.ACCOUNTS.COFI_PROGRAM_ID(cluster), provider);
        const cofiMint = yield address_1.ACCOUNTS.COFI_MINT(cluster);
        const [associatedCofiAccountAddress,] = yield anchor_1.web3.PublicKey.findProgramAddress([Buffer.from('cofi_account', 'utf-8'), cofiMint.toBuffer(), authority.toBuffer(),], cofiProgram.programId);
        return yield cofiProgram.methods.initAssociatedCofiAcc()
            .accounts({
            initializer: payer,
            authority,
            mint: cofiMint,
            account: associatedCofiAccountAddress,
            systemProgram: anchor_1.web3.SystemProgram.programId,
            rent: anchor_1.web3.SYSVAR_RENT_PUBKEY,
        }).instruction();
    });
}
exports.initAssociatedCofiAccountInstruction = initAssociatedCofiAccountInstruction;
