import { cofi, CofiSolanaConfig } from '../types';
import { web3 } from '@project-serum/anchor';
export declare function getCofiMintAccount(cofiSolanaConfig: CofiSolanaConfig): Promise<import("@project-serum/anchor/dist/cjs/program/namespace/types").TypeDef<{
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
    name: "cofiMint";
    type: {
        kind: "struct";
        fields: [{
            name: "version";
            docs: ["cofi mint version"];
            type: "u8";
        }, {
            name: "bump";
            docs: ["`CofiMint` account pubkey pda bump"];
            type: "u8";
        }, {
            name: "withdrawFeeRate";
            docs: ["withdraw fee ppm"];
            type: "u32";
        }, {
            name: "isActive";
            docs: ["all instructions that involve this `CofiMint` requires `is_active == true`"];
            type: "bool";
        }, {
            name: "totalShares";
            docs: ["total shares minted."];
            type: "u64";
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
            name: "authority";
            docs: ["mint authority. any change to state requires authority signature."];
            type: "publicKey";
        }, {
            name: "rateUpdateSlotsElapsed";
            docs: ["minimum slots elapsed to update exchange rate on strategy"];
            type: "u64";
        }, {
            name: "activeStrategy";
            docs: ["strategy used for interest generation. pubkey for strategy account."];
            type: "publicKey";
        }, {
            name: "feeReceiver";
            docs: ["fee receiver authority"];
            type: "publicKey";
        }, {
            name: "feeReceiverAccount";
            docs: ["fee receiver cofi account, the authority of which is `fee_receiver`."];
            type: "publicKey";
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
            name: "bump";
            docs: ["pda bump"];
            type: "u8";
        }, {
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
export declare function getCofiMintAddress(cofiSolanaConfig: CofiSolanaConfig): Promise<web3.PublicKey>;
