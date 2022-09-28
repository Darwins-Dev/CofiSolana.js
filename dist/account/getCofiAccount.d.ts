import { cofi, CofiSolanaConfig } from '../types';
import { web3, BN } from '@project-serum/anchor';
export declare function getCofiAccount(cofiSolanaConfig: CofiSolanaConfig, publicKey: web3.PublicKey): Promise<import("@project-serum/anchor/dist/cjs/program/namespace/types").TypeDef<{
    name: "cofiAccount";
    type: {
        kind: "struct";
        fields: [{
            name: "shareAmount";
            docs: ["shares of total collateral allocated this account."];
            type: "u64";
        }, {
            name: "stakeAmount";
            docs: ["total liquidity staked into account."];
            type: "u64";
        }, {
            name: "depositAmount";
            docs: ["total liquidity deposited by authority."];
            type: "u64";
        }, {
            name: "mint";
            docs: ["[state::CofiMint] this account was initialized with."];
            type: "publicKey";
        }, {
            name: "authority";
            docs: ["signer or \"owner\" of this account. Any change to state requires authority signature."];
            type: "publicKey";
        }, {
            name: "isLocked";
            docs: ["cannot interact with a locked account"];
            type: "bool";
        }, {
            name: "extraSpace";
            type: {
                array: ["u8", 512];
            };
        }];
    };
} | {
    name: "cofiFeeReceiver";
    type: {
        kind: "struct";
        fields: [{
            name: "shareAmount";
            docs: ["share_amount allocated to fee receiver"];
            type: "u64";
        }, {
            name: "rate";
            docs: ["fee rate on interest generated"];
            type: "u32";
        }, {
            name: "authority";
            docs: ["authority of fee receiver"];
            type: "publicKey";
        }, {
            name: "extraSpace";
            type: {
                array: ["u8", 512];
            };
        }];
    };
} | {
    name: "cofiMint";
    type: {
        kind: "struct";
        fields: [{
            name: "totalShares";
            docs: ["total shares minted."];
            type: "u64";
        }, {
            name: "authority";
            docs: ["mint authority. any change to state requires authority signature."];
            type: "publicKey";
        }, {
            name: "liquidityReserve";
            docs: ["liquidity reserve. holds liquidity owned by this `CofiMint`"];
            type: {
                defined: "SplReserve";
            };
        }, {
            name: "collateralReserve";
            docs: ["collateral reserve. holds collateral owned by this `CofiMint`."];
            type: {
                defined: "SplReserve";
            };
        }, {
            name: "activeStrategy";
            docs: ["strategy used for interest generation. pubkey for strategy account."];
            type: "publicKey";
        }, {
            name: "bump";
            docs: ["`CofiMint` account pubkey pda bump"];
            type: "u8";
        }, {
            name: "initializer";
            docs: ["initializer address"];
            type: "publicKey";
        }, {
            name: "isActive";
            docs: ["withdraw fee ppm"];
            type: "bool";
        }, {
            name: "minSlotsElapsedForRateUpdate";
            docs: ["minimum slots elapsed to update exchange rate on strategy"];
            type: "u64";
        }, {
            name: "extraSpace";
            type: {
                array: ["u8", 512];
            };
        }];
    };
} | {
    name: "cofiStake";
    type: {
        kind: "struct";
        fields: [{
            name: "amount";
            docs: ["liquidity staked by staker to beneficiary"];
            type: "u64";
        }, {
            name: "staker";
            docs: ["staker cofi account"];
            type: "publicKey";
        }, {
            name: "beneficiary";
            docs: ["beneficiary cofi account"];
            type: "publicKey";
        }, {
            name: "isLocked";
            docs: ["Excluding [stake_lock_switch()], any instruciton involving this `CofiStake` requires `is_locked == false`"];
            type: "bool";
        }, {
            name: "extraSpace";
            type: {
                array: ["u8", 512];
            };
        }];
    };
}, import("@project-serum/anchor").IdlTypes<cofi.Cofi>>>;
export declare function getAssociatedCofiAccountAddress(cofiSolanaConfig: CofiSolanaConfig, authority: web3.PublicKey): Promise<web3.PublicKey>;
export declare function getWithdrawableLiquidity(cofiSolanaConfig: CofiSolanaConfig, cofiAccountPublicKey: web3.PublicKey, withdrawFeeRate: BN | number | string): Promise<BN>;
export declare function getInterestGenerated(cofiSolanaConfig: CofiSolanaConfig, cofiAccountPublicKey: web3.PublicKey): Promise<BN>;
