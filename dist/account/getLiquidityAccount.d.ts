import { CofiSolanaConfig } from '../types';
import { web3 } from '@project-serum/anchor';
export declare function getAssociatedLiquidityAccount(cofiSolanaConfig: CofiSolanaConfig, owner: web3.PublicKey): Promise<void>;
export declare function getAssociatedLiquidityAddress(cofiSolanaConfig: CofiSolanaConfig, owner: web3.PublicKey): Promise<web3.PublicKey>;
