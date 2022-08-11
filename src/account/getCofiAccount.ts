import { ACCOUNTS, ClusterType } from '../utils/constants';
import { cofi } from '../types';
import { web3, Program, Provider } from '@project-serum/anchor';

export async function getCofiAccount(
  cluster: ClusterType,
  provider: Provider,
  publicKey: web3.PublicKey,
) {
  const cofiProgram =
    new Program<cofi.Cofi>(cofi.IDL, ACCOUNTS.COFI_PROGRAM_ID(cluster), provider);
  return cofiProgram.account.cofiAccount.fetch(publicKey);
}