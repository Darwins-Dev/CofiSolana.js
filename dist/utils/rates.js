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
exports.collateralToLiquidity = exports.liquidityToCollateral = void 0;
const anchor_1 = require("@project-serum/anchor");
const getCofiStrategyAccount_1 = require("../account/getCofiStrategyAccount");
const constants_1 = require("./constants");
function liquidityToCollateral(cofiSolanaConfig, liquidityAmount) {
    return __awaiter(this, void 0, void 0, function* () {
        let amount = new anchor_1.BN(liquidityAmount);
        let strategyState = yield (0, getCofiStrategyAccount_1.getCofiStrategyAccount)(cofiSolanaConfig);
        let l2cAsWAD = strategyState.exchangeRate;
        return l2cAsWAD.mul(amount).div(constants_1.WAD);
    });
}
exports.liquidityToCollateral = liquidityToCollateral;
function collateralToLiquidity(cofiSolanaConfig, collateraAmount) {
    return __awaiter(this, void 0, void 0, function* () {
        let amount = new anchor_1.BN(collateraAmount);
        let strategyState = yield (0, getCofiStrategyAccount_1.getCofiStrategyAccount)(cofiSolanaConfig);
        let l2cAsWAD = strategyState.exchangeRate;
        return constants_1.WAD.mul(constants_1.WAD).div(l2cAsWAD).mul(amount).div(constants_1.WAD);
    });
}
exports.collateralToLiquidity = collateralToLiquidity;
