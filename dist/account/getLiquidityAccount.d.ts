import { CofiSolanaConfig } from '../types';
import { web3 } from '@project-serum/anchor';
import { Account } from '@solana/spl-token';
export declare function getAssociatedLiquidityAccount(cofiSolanaConfig: CofiSolanaConfig, owner: web3.PublicKey): Promise<Account>;
export declare function getAssociatedLiquidityAddress(cofiSolanaConfig: CofiSolanaConfig, owner: web3.PublicKey): Promise<web3.PublicKey>;
