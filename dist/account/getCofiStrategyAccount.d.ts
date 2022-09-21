import { CofiSolanaConfig, cofiStrategy } from '../types';
export declare function getCofiStrategyAccount(cofiSolanaConfig: CofiSolanaConfig): Promise<import("@project-serum/anchor/dist/cjs/program/namespace/types").TypeDef<{
    name: "strategy";
    type: {
        kind: "struct";
        fields: [{
            name: "bump";
            docs: ["pda bump"];
            type: "u8";
        }, {
            name: "version";
            docs: ["strategy account version"];
            type: "u8";
        }, {
            name: "isActive";
            docs: ["any instruction involving this strategy account requires `is_active==true'"];
            type: "bool";
        }, {
            name: "lastUpdate";
            docs: ["last update slot"];
            type: {
                defined: "LastUpdate";
            };
        }, {
            name: "liquidity";
            docs: ["liquidity spl-token information"];
            type: {
                defined: "StrategyLiquidity";
            };
        }, {
            name: "collateral";
            docs: ["collateral spl-token collateral"];
            type: {
                defined: "StrategyCollateral";
            };
        }, {
            name: "strategyProgramId";
            docs: ["program id of underlying defi protocol e.g. Solend program"];
            type: "publicKey";
        }, {
            name: "depositInstruction";
            docs: ["deposit or equivalent instruction discriminator"];
            type: {
                defined: "StrategyInstruction";
            };
        }, {
            name: "mintToInstruction";
            docs: ["mint_to or equivalent instruciton discriminator"];
            type: {
                defined: "StrategyInstruction";
            };
        }, {
            name: "withdrawInstruction";
            docs: ["withdraw or equivalent instruction discriminator"];
            type: {
                defined: "StrategyInstruction";
            };
        }, {
            name: "redeemInstruction";
            docs: ["redeem or equivalent instruction info"];
            type: {
                defined: "StrategyInstruction";
            };
        }, {
            name: "exchangeRate";
            docs: ["liquidity to collateral exchange rate"];
            type: "u128";
        }, {
            name: "authority";
            docs: ["strategy account authority"];
            type: "publicKey";
        }];
    };
}, import("@project-serum/anchor").IdlTypes<cofiStrategy.CofiStrategy>>>;
