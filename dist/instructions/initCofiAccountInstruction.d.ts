import { CofiSolanaConfig } from '../types';
import { web3 } from '@project-serum/anchor';
export declare function initCofiAccountInstruction(cofiSolanaConfig: CofiSolanaConfig, payer: web3.PublicKey, owner: web3.PublicKey, account: web3.PublicKey): Promise<web3.TransactionInstruction>;
