import { ACCOUNTS } from '../utils/address';
import { cofi, ClusterType, CofiSolanaConfig } from '../types';
import { Provider, Program, web3, } from '@project-serum/anchor';

export async function getCofiMintAccount(
  cofiSolanaConfig: CofiSolanaConfig
) {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  const cofiProgram = 
    new Program<cofi.Cofi>(cofi.IDL, ACCOUNTS.COFI_PROGRAM_ID(cluster), provider);
  return cofiProgram.account.cofiMint.fetch(await ACCOUNTS.COFI_MINT(cluster));
}