/// <reference types="node" />
import { CofiSolanaConfig } from '../types';
import { web3, BN } from '@project-serum/anchor';
export declare function unstakeInstruction(cofiSolanaConfig: CofiSolanaConfig, stakerAuthority: web3.PublicKey, staker: web3.PublicKey, beneficiary: web3.PublicKey, amount: number | string | number[] | Uint8Array | Buffer | BN): Promise<web3.TransactionInstruction>;
