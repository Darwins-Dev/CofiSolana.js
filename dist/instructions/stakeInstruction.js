"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.stakeInstruction = void 0;
const constants_1 = require("../utils/constants");
const cofi = __importStar(require("../types/cofi"));
const cofiStrategy = __importStar(require("../types/cofi_strategy"));
const anchor_1 = require("@project-serum/anchor");
function stakeInstruction(version, cluster, stakerAuthority, staker, beneficiary, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const cofiProgram = new anchor_1.Program(cofi.IDL, constants_1.ACCOUNTS.COFI_PROGRAM_ID(cluster));
        const strategyProgram = new anchor_1.Program(cofiStrategy.IDL, constants_1.ACCOUNTS.COFI_STRATEGY_PROGRAM_ID(cluster));
        const [stakePairAccount, stakePairAccountBump] = yield anchor_1.web3.PublicKey.findProgramAddress([
            Buffer.from("cofi_stake", 'utf-8'), staker.toBuffer(), beneficiary.toBuffer(),
        ], cofiProgram.programId);
        const cofiMint = yield constants_1.ACCOUNTS.COFI_MINT(version, cluster);
        const strategy = yield constants_1.ACCOUNTS.COFI_STRATEGY(version, cluster);
        return yield cofiProgram.methods.stake(amount)
            .accounts({
            stakerAccountAuthority: stakerAuthority,
            stakerCofiAccount: staker,
            beneficiaryCofiAccount: beneficiary,
            cofiStakePair: stakePairAccount,
            cofiMint,
            cofiStrategy: strategy,
            cofiStrategyProgram: strategyProgram.programId,
            clock: anchor_1.web3.SYSVAR_CLOCK_PUBKEY,
        }).remainingAccounts([
            {
                pubkey: constants_1.ACCOUNTS.COFI_PROGRAM_ID(cluster),
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
exports.stakeInstruction = stakeInstruction;