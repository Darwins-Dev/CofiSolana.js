import { web3 } from '@project-serum/anchor';
import { ClusterType } from '../types';
export declare const DEVNET_INITIALIZER: web3.PublicKey;
export declare const MAINNET_INITIALIZER: web3.PublicKey;
export declare const DEVNET_PROGRAM_ID: web3.PublicKey;
export declare const DEVNET_LENDING_MARKET: web3.PublicKey;
export declare const DEVNET_LENDING_MARKET_AUTH: web3.PublicKey;
export declare const DEVNET_USDC_RESERVE: web3.PublicKey;
export declare const DEVNET_USDC_CTOKEN: web3.PublicKey;
export declare const DEVNET_USDC_RESERVE_LIQ_SUPPLY: web3.PublicKey;
export declare const DEVNET_USDC_MINT: web3.PublicKey;
export declare const DEVNET_SOL_MINT: web3.PublicKey;
export declare const DEVNET_SOL_RESERVE: web3.PublicKey;
export declare const DEVNET_SOL_CTOKEN: web3.PublicKey;
export declare const DEVNET_SOL_RESERVE_LIQ_SUPPLY: web3.PublicKey;
export declare const DEVNET_SIMP_MINT: web3.PublicKey;
export declare const DEVNET_SIMP_CTOKEN: web3.PublicKey;
export declare const DEVNET_SIMP_LIQ_SUPPLY: web3.PublicKey;
export declare const DEVNET_COFI_SOL: web3.PublicKey;
export declare const DEVNET_COFI_STRATEGY_SOL: web3.PublicKey;
export declare const DEVNET_COFI_SIMP: web3.PublicKey;
export declare const DEVNET_COFI_STRATEGY_SIMP: web3.PublicKey;
export declare const DEVNET_COFI_TIMER_SIMP: web3.PublicKey;
export declare const DEVNET_COFI_SIMP_FEE_RECEIVER: web3.PublicKey;
export declare const MAINNET_COFI_USDC_FEE_RECEIVER: web3.PublicKey;
export declare const MAINNET_PROGRAM_ID: web3.PublicKey;
export declare const MAINNET_LENDING_MARKET: web3.PublicKey;
export declare const MAINNET_LENDING_MARKET_AUTH: web3.PublicKey;
export declare const MAINNET_USDC_RESERVE: web3.PublicKey;
export declare const MAINNET_USDC_CTOKEN: web3.PublicKey;
export declare const MAINNET_USDC_RESERVE_LIQ_SUPPLY: web3.PublicKey;
export declare const MAINNET_USDC_MINT: web3.PublicKey;
export declare const MAINNET_COFI_STRATEGY_USDC: web3.PublicKey;
export declare const MAINNET_COFI_USDC: web3.PublicKey;
export declare const MAINNET_COFI_TIMER_USDC: web3.PublicKey;
export declare const ACCOUNTS: {
    SOLEND_PROGRAM_ID: (cluster: ClusterType) => web3.PublicKey;
    SOLEND_LENDING_MARKET: (cluster: ClusterType) => web3.PublicKey;
    SOLEND_LENDING_MARKET_AUTH: (cluster: ClusterType) => web3.PublicKey;
    SOLEND_RESERVE: (cluster: ClusterType) => web3.PublicKey;
    SOLEND_RESERVE_LIQ_SUPPLY: (cluster: ClusterType) => web3.PublicKey;
    SOLEND_CTOKEN: (cluster: ClusterType) => web3.PublicKey;
    LIQUIDITY_MINT: (cluster: ClusterType) => web3.PublicKey;
    COFI_PROGRAM_ID: (cluster: ClusterType) => web3.PublicKey;
    COFI_TIMER_ID: (cluster: ClusterType) => web3.PublicKey;
    COFI_STRATEGY_PROGRAM_ID: (cluster: ClusterType) => web3.PublicKey;
    COFI_MINT: (cluster: ClusterType) => Promise<web3.PublicKey>;
    COFI_FEE_RECEIVER: (cluster: ClusterType) => Promise<web3.PublicKey>;
    COFI_STRATEGY: (version: number, cluster: ClusterType) => Promise<web3.PublicKey>;
    COFI_COLLATERAL_RESERVE: (cluster: ClusterType) => Promise<web3.PublicKey>;
    COFI_LIQUIDITY_RESERVE: (cluster: ClusterType) => Promise<web3.PublicKey>;
    MINT_INITIALIER: (cluster: ClusterType) => web3.PublicKey;
};
