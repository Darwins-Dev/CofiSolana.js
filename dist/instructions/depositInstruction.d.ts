import { CofiSolanaConfig } from '../types';
import { web3, BN } from '@project-serum/anchor';
export declare function depositInstruction(cofiSolanaConfig: CofiSolanaConfig, sourceLiquidityAuthority: web3.PublicKey, sourceLiquidityAccount: web3.PublicKey, destinationCofiAccount: web3.PublicKey, amount: BN): Promise<web3.TransactionInstruction>;
