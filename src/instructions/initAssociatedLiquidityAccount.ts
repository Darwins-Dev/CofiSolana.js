import { ACCOUNTS, } from '../utils/address';
import { cofi, CofiSolanaConfig } from '../types';
import { web3, Provider, Program, SplToken, Spl, BN } from '@project-serum/anchor';
import {createAssociatedTokenAccountInstruction, ASSOCIATED_TOKEN_PROGRAM_ID, getAssociatedTokenAddress} from '@solana/spl-token';

export async function initAssociatedLiquidityAccount(
  cofiSolanaConfig: CofiSolanaConfig,
  payer: web3.PublicKey,
  authority: web3.PublicKey,
): Promise<web3.TransactionInstruction> {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  let liquidityMint = await ACCOUNTS.LIQUIDITY_MINT(cluster);
  return createAssociatedTokenAccountInstruction(
    payer, await getAssociatedTokenAddress(liquidityMint, authority), authority, liquidityMint,
  )
}