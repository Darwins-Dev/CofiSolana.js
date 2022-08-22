import { CofiSolanaConfig } from '../types';
import { web3, BN } from '@project-serum/anchor';
export declare function initTimedCofiAccountInstruction(cofiSolanaConfig: CofiSolanaConfig, payer: web3.PublicKey, owner: web3.PublicKey, account: web3.PublicKey, expiration: BN | string | number): Promise<web3.TransactionInstruction>;
