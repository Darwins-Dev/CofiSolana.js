import { ACCOUNTS, } from '../utils/address';
import { cofi, CofiSolanaConfig } from '../types';
import { web3, Program, Provider } from '@project-serum/anchor';

export async function getCofiAccount(
  cofiSolanaConfig: CofiSolanaConfig,
  publicKey: web3.PublicKey,
) {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  const cofiProgram =
    new Program<cofi.Cofi>(cofi.IDL, ACCOUNTS.COFI_PROGRAM_ID(cluster), provider);
  return cofiProgram.account.cofiAccount.fetch(publicKey);
}

export async function getAssociatedCofiAccountAddress(
  cofiSolanaConfig: CofiSolanaConfig,
  owner: web3.PublicKey,
): Promise<web3.PublicKey> {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  return (await web3.PublicKey.findProgramAddress([
      Buffer.from('cofi_account', 'utf-8'), owner.toBuffer(),
    ], ACCOUNTS.COFI_PROGRAM_ID(cluster)
  ))[0]
}