import { CofiSolanaConfig } from '../types';
import { web3, BN } from '@project-serum/anchor';
export declare function withdrawInstruction(cofiSolanaConfig: CofiSolanaConfig, cofiAccountAuthority: web3.PublicKey, sourceCofiAccount: web3.PublicKey, destinationLiquidityAccount: web3.PublicKey, amount: BN): Promise<web3.TransactionInstruction>;
