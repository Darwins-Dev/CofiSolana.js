/// <reference types="node" />
import { CofiSolanaConfig } from '../../types';
import { web3, BN } from '@project-serum/anchor';
export declare function initTimerOwnedAccountInstruction(cofiSolanaConfig: CofiSolanaConfig, payer: web3.PublicKey, staker: web3.PublicKey, beneficiary: web3.PublicKey, timerOwnedAccount: web3.PublicKey, sourceLiquidityAuthority: web3.PublicKey, sourceLiquidityAccount: web3.PublicKey, expiration: number | string | number[] | Uint8Array | Buffer | BN, amount: number | string | number[] | Uint8Array | Buffer | BN): Promise<web3.TransactionInstruction>;
