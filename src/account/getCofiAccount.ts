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

export async function getAssociatedCofiAccountAddress(
  cluster: ClusterType,
  owner: web3.PublicKey,
): Promise<web3.PublicKey> {
  return (await web3.PublicKey.findProgramAddress([
      Buffer.from('cofi_account', 'utf-8'), owner.toBuffer(),
    ], ACCOUNTS.COFI_PROGRAM_ID(cluster)
  ))[0]
}