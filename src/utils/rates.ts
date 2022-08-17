import { Provider, BN } from "@project-serum/anchor";
import { getCofiStrategyAccount } from "../account/getCofiStrategyAccount";
import { CofiSolanaConfig, } from "../types";
import { WAD } from "./constants";

export async function liquidityToCollateral(
  cofiSolanaConfig: CofiSolanaConfig,
  liquidityAmount: BN | number | string,
): Promise<BN> {
  let amount = new BN(liquidityAmount);
  let strategyState = await getCofiStrategyAccount(cofiSolanaConfig);
  let l2cAsWAD: BN = strategyState.exchangeRate;
  return l2cAsWAD.mul(amount).div(WAD);
}

export async function collateralToLiquidity(
  cofiSolanaConfig: CofiSolanaConfig,
  collateraAmount: BN | number | string
): Promise<BN> {
  let amount = new BN(collateraAmount);
  let strategyState = await getCofiStrategyAccount(cofiSolanaConfig);
  let l2cAsWAD: BN = strategyState.exchangeRate;
  return WAD.mul(WAD).div(l2cAsWAD).mul(amount).div(WAD);
}