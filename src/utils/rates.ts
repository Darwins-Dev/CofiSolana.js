import { Provider, BN } from "@project-serum/anchor";
import { getCofiMintAccount, getCofiStrategyAccount } from "../account";
import { CofiSolanaConfig, } from "../types";
import { WAD } from "./constants";

export async function getLiquidityToCollateralExchangeRate(
  cofiSolanaConfig: CofiSolanaConfig
): Promise<BN> {
  let strategyState = await getCofiStrategyAccount(cofiSolanaConfig);
  return strategyState.exchangeRate;
}

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

export async function collateralToShares(
  cofiSolanaConfig: CofiSolanaConfig,
  collateralAmount: BN | number | string,
): Promise<BN> {
  let mintState = await getCofiMintAccount(cofiSolanaConfig);
  let c2sAsWADrate: BN = mintState.totalShares.mul(WAD).div(mintState.collateralReserve.amount);
  return c2sAsWADrate.mul(new BN(collateralAmount)).div(WAD)
}

export async function sharesToCollateral(
  cofiSolanaConfig: CofiSolanaConfig,
  shareAmount: BN | number | string,
): Promise<BN> {
  let mintState = await getCofiMintAccount(cofiSolanaConfig);
  let s2cWADrate: BN = mintState.collateralReserve.amount.mul(WAD).div(mintState.totalShares);
  return s2cWADrate.mul(new BN(shareAmount)).div(WAD)
}

export async function liquidityToShares(
  cofiSolanaConfig: CofiSolanaConfig,
  liquidityAmount: BN | number | string,
): Promise<BN> {
  return liquidityToCollateral(cofiSolanaConfig, liquidityAmount).then(
    (collateraAmount) => collateralToShares(cofiSolanaConfig, collateraAmount))
}

export async function sharesToLiquidity(
  cofiSolanaConfig: CofiSolanaConfig,
  shareAmount: BN | number | string,
): Promise<BN> {
  return sharesToCollateral(cofiSolanaConfig, shareAmount).then(
    (collateraAmount) => collateralToLiquidity(cofiSolanaConfig, collateraAmount))
}