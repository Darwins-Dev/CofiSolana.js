import { ACCOUNTS, } from '../utils/address';
import { cofi, cofiStrategy, ClusterType, CofiSolanaConfig } from '../types';
import { web3, Provider, Program, BN } from '@project-serum/anchor';

export async function mergeAccountsInstruction(
  cofiSolanaConfig: CofiSolanaConfig,
  owner: web3.PublicKey,
  sourceAccount: web3.PublicKey,
  destinationAccount: web3.PublicKey,
): Promise<web3.TransactionInstruction> {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  const cofiProgram =
    new Program<cofi.Cofi>(cofi.IDL, ACCOUNTS.COFI_PROGRAM_ID(cluster), provider);
  return await cofiProgram.methods.mergeAccounts().accounts({
    sourceAccountAuthority: owner,
    sourceCofiAccount: sourceAccount,
    destinationCofiAccount: destinationAccount,
    cofiMint: await ACCOUNTS.COFI_MINT(version, cluster),
  }).instruction();
}