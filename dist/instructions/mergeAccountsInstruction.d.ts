import { CofiSolanaConfig } from '../types';
import { web3 } from '@project-serum/anchor';
export declare function mergeAccountsInstruction(cofiSolanaConfig: CofiSolanaConfig, owner: web3.PublicKey, sourceAccount: web3.PublicKey, destinationAccount: web3.PublicKey): Promise<web3.TransactionInstruction>;
