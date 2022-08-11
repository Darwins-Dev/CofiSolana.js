import { ClusterType } from '../utils/constants';
import { cofi } from '../types';
import { web3, Provider } from '@project-serum/anchor';
export declare function getCofiAccount(cluster: ClusterType, provider: Provider, publicKey: web3.PublicKey): Promise<import("@project-serum/anchor/dist/cjs/program/namespace/types").TypeDef<{
    name: "cofiAccount";
    type: {
        kind: "struct";
        fields: [{
            name: "shareAmount";
            docs: ["total shares allocated to user"];
            type: "u64";
        }, {
            name: "stakeAmount";
            docs: ["total liquidity staked into user (excluding the user themselves)"];
            type: "u64";
        }, {
            name: "depositAmount";
            docs: ["total liquidity deposited by user"];
            type: "u64";
        }, {
            name: "mint";
            type: "publicKey";
        }, {
            name: "owner";
            type: "publicKey";
        }, {
            name: "expiration";
            type: "i64";
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
            docs: ["pda bump"];
            type: "u8";
        }, {
            name: "withdrawFeeRate";
            docs: ["withdraw fee ppm"];
            type: "u32";
        }, {
            name: "isActive";
            docs: ["all instructions paused"];
            type: "bool";
        }, {
            name: "totalShares";
            docs: ["total shares minted"];
            type: "u64";
        }, {
            name: "liquidityReserve";
            docs: ["liquidity account"];
            type: {
                defined: "SplReserve";
            };
        }, {
            name: "collateralReserve";
            docs: ["collateral account"];
            type: {
                defined: "SplReserve";
            };
        }, {
            name: "authority";
            docs: ["mint authority"];
            type: "publicKey";
        }, {
            name: "activeStrategy";
            docs: ["strategy used for interest generation. pubkey for strategy account."];
            type: "publicKey";
        }, {
            name: "feeReceiver";
            docs: ["fee receiver signateur"];
            type: "publicKey";
        }, {
            name: "feeReceiverAccount";
            docs: ["fee receiver cofi account"];
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
            type: "u8";
        }, {
            name: "amount";
            type: "u64";
        }, {
            name: "staker";
            type: "publicKey";
        }, {
            name: "recipient";
            type: "publicKey";
        }, {
            name: "extraSpace";
            type: {
                array: ["u8", 512];
            };
        }];
    };
}, import("@project-serum/anchor").IdlTypes<cofi.Cofi>>>;
export declare function getAssociatedCofiAccountAddress(cluster: ClusterType, owner: web3.PublicKey): Promise<web3.PublicKey>;
