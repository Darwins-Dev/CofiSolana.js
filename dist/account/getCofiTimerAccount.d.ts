import { cofiTimer, CofiSolanaConfig } from '../types';
import { web3 } from '@project-serum/anchor';
export declare function getCofiTimerAccount(cofiSolanaConfig: CofiSolanaConfig, cofiTimerAddress: web3.PublicKey): Promise<import("@project-serum/anchor/dist/cjs/program/namespace/types").TypeDef<{
    name: "cofiTimer";
    type: {
        kind: "struct";
        fields: [{
            name: "stakerAccount";
            type: "publicKey";
        }, {
            name: "beneficiaryAccount";
            type: "publicKey";
        }, {
            name: "timerOwnedAccount";
            type: "publicKey";
        }, {
            name: "timerBump";
            type: "u8";
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
}, import("@project-serum/anchor").IdlTypes<cofiTimer.CofiTimer>>>;
export declare function getCofiTimerAddress(cofiSolanaConfig: CofiSolanaConfig, timerOwnedAccount: web3.PublicKey): Promise<web3.PublicKey>;
