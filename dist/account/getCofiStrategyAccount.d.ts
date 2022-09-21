import { CofiSolanaConfig, cofiStrategy } from '../types';
export declare function getCofiStrategyAccount(cofiSolanaConfig: CofiSolanaConfig): Promise<import("@project-serum/anchor/dist/cjs/program/namespace/types").TypeDef<{
    name: "strategy";
    type: {
        kind: "struct";
        fields: [{
            name: "bump";
            type: "u8";
        }, {
            name: "version";
            type: "u8";
        }, {
            name: "isActive";
            type: "bool";
        }, {
            name: "lastUpdate";
            type: {
                defined: "LastUpdate";
            };
        }, {
            name: "liquidity";
            type: {
                defined: "StrategyLiquidity";
            };
        }, {
            name: "collateral";
            type: {
                defined: "StrategyCollateral";
            };
        }, {
            name: "strategyProgramId";
            type: "publicKey";
        }, {
            name: "depositInstruction";
            docs: ["deposit instruction info"];
            type: {
                defined: "StrategyInstruction";
            };
        }, {
            name: "mintToInstruction";
            docs: ["mint_to instruciton info"];
            type: {
                defined: "StrategyInstruction";
            };
        }, {
            name: "withdrawInstruction";
            docs: ["withdraw instruction info"];
            type: {
                defined: "StrategyInstruction";
            };
        }, {
            name: "redeemInstruction";
            docs: ["redeem instruction info"];
            type: {
                defined: "StrategyInstruction";
            };
        }, {
            name: "exchangeRate";
            docs: ["configurables", "liquidity to collateral exchange rate"];
            type: "u128";
        }];
    };
}, import("@project-serum/anchor").IdlTypes<cofiStrategy.CofiStrategy>>>;
