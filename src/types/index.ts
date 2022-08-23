import { Provider } from '@project-serum/anchor';
import * as cofi from './cofi';
import * as cofiStrategy from './cofi_strategy';
import * as cofiTimer from './cofi_timer';

export * as cofi from './cofi';
export * as cofiStrategy from './cofi_strategy';
export * as cofiTimer from './cofi_timer';

export interface CofiSolanaConfig {
  version: number,
  cluster: ClusterType,
  provider: Provider,
}

export type ClusterType = "devnet" | "mainnet" | "simp";