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
exports.getCofiStrategyAccount = void 0;
const address_1 = require("../utils/address");
const types_1 = require("../types");
const anchor_1 = require("@project-serum/anchor");
function getCofiStrategyAccount(cofiSolanaConfig) {
    return __awaiter(this, void 0, void 0, function* () {
        const { version, cluster, provider } = cofiSolanaConfig;
        const cofiStrategyProgram = new anchor_1.Program(types_1.cofiStrategy.IDL, address_1.ACCOUNTS.COFI_STRATEGY_PROGRAM_ID(cluster), provider);
        return cofiStrategyProgram.account.strategy.fetch(yield address_1.ACCOUNTS.COFI_STRATEGY(version, cluster));
    });
}
exports.getCofiStrategyAccount = getCofiStrategyAccount;
