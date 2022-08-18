import { ACCOUNTS, } from '../utils/address';
import { cofi, CofiSolanaConfig } from '../types';
import { web3, Program, BN, } from '@project-serum/anchor';
import { sharesToLiquidity } from '..';
import { getAssociatedTokenAddress, getAccount } from '@solana/spl-token';

export async function getAssociatedLiquidityAccount(
  cofiSolanaConfig: CofiSolanaConfig,
  owner: web3.PublicKey,
) {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  let liquidityMint = await ACCOUNTS.LIQUIDITY_MINT(cluster);
  return getAssociatedTokenAddress(liquidityMint, owner).then(
    (address: web3.PublicKey) => { getAccount(provider.connection, address) }
  )
}

export async function getAssociatedLiquidityAddress(
  cofiSolanaConfig: CofiSolanaConfig,
  owner: web3.PublicKey,
): Promise<web3.PublicKey> {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  let liquidityMint = await ACCOUNTS.LIQUIDITY_MINT(cluster);
  return getAssociatedTokenAddress(liquidityMint, owner)
}