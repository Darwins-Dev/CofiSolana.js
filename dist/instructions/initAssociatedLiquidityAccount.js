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
exports.initAssociatedLiquidityAccount = void 0;
const address_1 = require("../utils/address");
const spl_token_1 = require("@solana/spl-token");
function initAssociatedLiquidityAccount(cofiSolanaConfig, payer, authority) {
    return __awaiter(this, void 0, void 0, function* () {
        const { version, cluster, provider } = cofiSolanaConfig;
        let liquidityMint = yield address_1.ACCOUNTS.LIQUIDITY_MINT(cluster);
        return (0, spl_token_1.createAssociatedTokenAccountInstruction)(payer, yield (0, spl_token_1.getAssociatedTokenAddress)(liquidityMint, authority), authority, liquidityMint);
    });
}
exports.initAssociatedLiquidityAccount = initAssociatedLiquidityAccount;
