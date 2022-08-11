import { ACCOUNTS, ClusterType } from '../utils/constants';
import { cofi } from '../types';
import { Provider, Program, } from '@project-serum/anchor';

export async function getMintAccount(
  version: number,
  cluster: ClusterType,
  provider: Provider,
) {
  const cofiProgram = 
    new Program<cofi.Cofi>(cofi.IDL, ACCOUNTS.COFI_PROGRAM_ID(cluster), provider);
  return cofiProgram.account.cofiMint.fetch(await ACCOUNTS.COFI_MINT(version, cluster));
}