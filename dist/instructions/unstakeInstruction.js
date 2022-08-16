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
exports.unstakeInstruction = void 0;
const constants_1 = require("../utils/constants");
const types_1 = require("../types");
const anchor_1 = require("@project-serum/anchor");
function unstakeInstruction(version, cluster, provider, stakerAuthority, staker, beneficiary, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const cofiProgram = new anchor_1.Program(types_1.cofi.IDL, constants_1.ACCOUNTS.COFI_PROGRAM_ID(cluster), provider);
        const [stakePairAccount, stakePairAccountBump] = yield anchor_1.web3.PublicKey.findProgramAddress([
            Buffer.from("cofi_stake", 'utf-8'), staker.toBuffer(), beneficiary.toBuffer(),
        ], cofiProgram.programId);
        const cofiMint = yield constants_1.ACCOUNTS.COFI_MINT(version, cluster);
        const strategy = yield constants_1.ACCOUNTS.COFI_STRATEGY(version, cluster);
        return yield cofiProgram.methods.unstake(amount)
            .accounts({
            stakerAccountAuthority: stakerAuthority,
            stakerCofiAccount: staker,
            beneficiaryCofiAccount: beneficiary,
            cofiStakePair: stakePairAccount,
            cofiMint,
            cofiStrategy: strategy,
            cofiStrategyProgram: constants_1.ACCOUNTS.COFI_STRATEGY_PROGRAM_ID(cluster),
            clock: anchor_1.web3.SYSVAR_CLOCK_PUBKEY,
        }).remainingAccounts([
            {
                pubkey: constants_1.ACCOUNTS.SOLEND_PROGRAM_ID(cluster),
                isSigner: false,
                isWritable: false,
            }, {
                pubkey: constants_1.ACCOUNTS.SOLEND_RESERVE(cluster),
                isSigner: false,
                isWritable: true,
            },
        ]).instruction();
    });
}
exports.unstakeInstruction = unstakeInstruction;
