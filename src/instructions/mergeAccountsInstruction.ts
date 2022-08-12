import { ACCOUNTS, ClusterType } from '../utils/constants';
import { cofi, cofiStrategy } from '../types';
import { web3, Provider, Program, BN } from '@project-serum/anchor';

export async function mergeAccountsInstruction(
  version: number,
  cluster: ClusterType,
  provider: Provider,
  owner: web3.PublicKey,
  sourceAccount: web3.PublicKey,
  destinationAccount: web3.PublicKey,
): Promise<web3.TransactionInstruction> {
  const cofiProgram =
    new Program<cofi.Cofi>(cofi.IDL, ACCOUNTS.COFI_PROGRAM_ID(cluster), provider);
  return await cofiProgram.methods.mergeAccounts().accounts({
    sourceAccountAuthority: owner,
    sourceCofiAccount: sourceAccount,
    destinationCofiAccount: destinationAccount,
    cofiMint: await ACCOUNTS.COFI_MINT(version, cluster),
  }).instruction();
}