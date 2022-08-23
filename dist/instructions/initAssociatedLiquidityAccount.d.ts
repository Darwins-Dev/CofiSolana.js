import { CofiSolanaConfig } from '../types';
import { web3 } from '@project-serum/anchor';
export declare function initAssociatedLiquidityAccount(cofiSolanaConfig: CofiSolanaConfig, payer: web3.PublicKey, authority: web3.PublicKey): Promise<web3.TransactionInstruction>;
