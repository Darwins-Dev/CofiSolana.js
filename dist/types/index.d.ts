import { Provider } from '@project-serum/anchor';
export * as cofi from './cofi';
export * as cofiStrategy from './cofi_strategy';
export interface CofiSolanaConfig {
    version: number;
    cluster: ClusterType;
    provider: Provider;
}
export declare type ClusterType = "devnet" | "mainnet" | "simp";
