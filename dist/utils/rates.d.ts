import { BN } from "@project-serum/anchor";
import { CofiSolanaConfig } from "../types";
export declare function liquidityToCollateral(cofiSolanaConfig: CofiSolanaConfig, liquidityAmount: BN | number | string): Promise<BN>;
export declare function collateralToLiquidity(cofiSolanaConfig: CofiSolanaConfig, collateraAmount: BN | number | string): Promise<BN>;
