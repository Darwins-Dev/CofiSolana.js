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
exports.ACCOUNTS = exports.DEVNET_COFI_STRATEGY_SOL = exports.DEVNET_COFI_SOL = exports.MAINNET_USDC_MINT = exports.MAINNET_USDC_RESERVE_LIQ_SUPPLY = exports.MAINNET_USDC_CTOKEN = exports.MAINNET_USDC_RESERVE = exports.MAINNET_LENDING_MARKET_AUTH = exports.MAINNET_LENDING_MARKET = exports.MAINNET_PROGRAM_ID = exports.DEVNET_SOL_RESERVE_LIQ_SUPPLY = exports.DEVNET_SOL_CTOKEN = exports.DEVNET_SOL_RESERVE = exports.DEVNET_SOL_MINT = exports.DEVNET_USDC_MINT = exports.DEVNET_USDC_RESERVE_LIQ_SUPPLY = exports.DEVNET_USDC_CTOKEN = exports.DEVNET_USDC_RESERVE = exports.DEVNET_LENDING_MARKET_AUTH = exports.DEVNET_LENDING_MARKET = exports.DEVNET_PROGRAM_ID = void 0;
const anchor_1 = require("@project-serum/anchor");
exports.DEVNET_PROGRAM_ID = new anchor_1.web3.PublicKey("ALend7Ketfx5bxh6ghsCDXAoDrhvEmsXT3cynB6aPLgx");
exports.DEVNET_LENDING_MARKET = new anchor_1.web3.PublicKey("GvjoVKNjBvQcFaSKUW1gTE7DxhSpjHbE69umVR5nPuQp");
exports.DEVNET_LENDING_MARKET_AUTH = new anchor_1.web3.PublicKey("EhJ4fwaXUp7aiwvZThSUaGWCaBQAJe3AEaJJJVCn3UCK");
exports.DEVNET_USDC_RESERVE = new anchor_1.web3.PublicKey("FNNkz4RCQezSSS71rW2tvqZH1LCkTzaiG7Nd1LeA5x5y");
exports.DEVNET_USDC_CTOKEN = new anchor_1.web3.PublicKey("E2PSSXsXJGdpqhhaV3rYPpuy1inRCQAWxcdykA1DTmYr");
exports.DEVNET_USDC_RESERVE_LIQ_SUPPLY = new anchor_1.web3.PublicKey("HixjFJoeD2ggqKgFHQxrcJFjVvE5nXKuUPYNijFg7Kc5");
exports.DEVNET_USDC_MINT = new anchor_1.web3.PublicKey("zVzi5VAf4qMEwzv7NXECVx5v2pQ7xnqVVjCXZwS9XzA");
exports.DEVNET_SOL_MINT = new anchor_1.web3.PublicKey("So11111111111111111111111111111111111111112");
exports.DEVNET_SOL_RESERVE = new anchor_1.web3.PublicKey("5VVLD7BQp8y3bTgyF5ezm1ResyMTR3PhYsT4iHFU8Sxz");
exports.DEVNET_SOL_CTOKEN = new anchor_1.web3.PublicKey("FzwZWRMc3GCqjSrcpVX3ueJc6UpcV6iWWb7ZMsTXE3Gf");
exports.DEVNET_SOL_RESERVE_LIQ_SUPPLY = new anchor_1.web3.PublicKey("furd3XUtjXZ2gRvSsoUts9A5m8cMJNqdsyR2Rt8vY9s");
exports.MAINNET_PROGRAM_ID = new anchor_1.web3.PublicKey("So1endDq2YkqhipRh3WViPa8hdiSpxWy6z3Z6tMCpAo");
exports.MAINNET_LENDING_MARKET = new anchor_1.web3.PublicKey("4UpD2fh7xH3VP9QQaXtsS1YY3bxzWhtfpks7FatyKvdY");
exports.MAINNET_LENDING_MARKET_AUTH = new anchor_1.web3.PublicKey("DdZR6zRFiUt4S5mg7AV1uKB2z1f1WzcNYCaTEEWPAuby");
exports.MAINNET_USDC_RESERVE = new anchor_1.web3.PublicKey("BgxfHJDzm44T7XG68MYKx7YisTjZu73tVovyZSjJMpmw");
exports.MAINNET_USDC_CTOKEN = new anchor_1.web3.PublicKey("993dVFL2uXWYeoXuEBFXR4BijeXdTv4s6BzsCjJZuwqk");
exports.MAINNET_USDC_RESERVE_LIQ_SUPPLY = new anchor_1.web3.PublicKey("8SheGtsopRUDzdiD6v6BR9a6bqZ9QwywYQY99Fp5meNf");
exports.MAINNET_USDC_MINT = new anchor_1.web3.PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");
exports.DEVNET_COFI_SOL = new anchor_1.web3.PublicKey("2Xi8qBg2T66Q6SDoLq4mwU7wW3Yf4SAFZRocD2nZdzAe");
exports.DEVNET_COFI_STRATEGY_SOL = new anchor_1.web3.PublicKey("9MKNtecXPBb6WxF36fhDDX1tBqTe4LeuCYfkgmUUkpaq");
exports.ACCOUNTS = {
    SOLEND_PROGRAM_ID: (cluster) => {
        switch (cluster) {
            case "devnet":
                return exports.DEVNET_PROGRAM_ID;
            case "mainnet":
                return exports.MAINNET_PROGRAM_ID;
        }
    },
    SOLEND_LENDING_MARKET: (cluster) => {
        switch (cluster) {
            case "devnet":
                return exports.DEVNET_LENDING_MARKET;
            case "mainnet":
                return exports.MAINNET_LENDING_MARKET;
        }
    },
    SOLEND_LENDING_MARKET_AUTH: (cluster) => {
        switch (cluster) {
            case "devnet":
                return exports.DEVNET_LENDING_MARKET_AUTH;
            case "mainnet":
                return exports.MAINNET_LENDING_MARKET_AUTH;
        }
    },
    SOLEND_RESERVE: (cluster) => {
        switch (cluster) {
            case "devnet":
                return exports.DEVNET_SOL_RESERVE;
            case "mainnet":
                return exports.MAINNET_USDC_RESERVE;
        }
    },
    SOLEND_RESERVE_LIQ_SUPPLY: (cluster) => {
        switch (cluster) {
            case "devnet":
                return exports.DEVNET_SOL_RESERVE_LIQ_SUPPLY;
            case "mainnet":
                return exports.MAINNET_USDC_RESERVE_LIQ_SUPPLY;
        }
    },
    SOLEND_CTOKEN: (cluster) => {
        switch (cluster) {
            case "devnet":
                return exports.DEVNET_SOL_CTOKEN;
            case "mainnet":
                return exports.MAINNET_USDC_CTOKEN;
        }
    },
    LIQUIDITY_MINT: (cluster) => {
        switch (cluster) {
            case "devnet":
                return exports.DEVNET_SOL_MINT;
            case "mainnet":
                return exports.MAINNET_USDC_MINT;
        }
    },
    COFI_PROGRAM_ID: (cluster) => {
        return exports.DEVNET_COFI_SOL;
    },
    COFI_STRATEGY_PROGRAM_ID: (cluster) => {
        return exports.DEVNET_COFI_STRATEGY_SOL;
    },
    COFI_MINT: (version, cluster) => __awaiter(void 0, void 0, void 0, function* () {
        return (yield anchor_1.web3.PublicKey.findProgramAddress([Buffer.from('cofi_mint', 'utf-8'), Uint8Array.from([version, 0, 0, 0, 0, 0, 0, 0, 0])], exports.ACCOUNTS.COFI_PROGRAM_ID(cluster)))[0];
    }),
    COFI_STRATEGY: (version, cluster) => __awaiter(void 0, void 0, void 0, function* () {
        return (yield anchor_1.web3.PublicKey.findProgramAddress([
            Buffer.from('cofi_strategy', 'utf-8'),
            exports.ACCOUNTS.SOLEND_PROGRAM_ID(cluster).toBuffer(),
            Uint8Array.from([version, 0, 0, 0, 0, 0, 0, 0, 0]),
        ], exports.ACCOUNTS.COFI_STRATEGY_PROGRAM_ID(cluster)))[0];
    }),
    COFI_COLLATERAL_RESERVE: (version, cluster) => __awaiter(void 0, void 0, void 0, function* () {
        return (yield anchor_1.web3.PublicKey.findProgramAddress([Buffer.from('cofi_collateral_reserve', 'utf-8'),
            (yield exports.ACCOUNTS.COFI_MINT(version, cluster)).toBuffer(),
            exports.ACCOUNTS.SOLEND_CTOKEN(cluster).toBuffer()], exports.ACCOUNTS.COFI_PROGRAM_ID(cluster)))[0];
    })
};
