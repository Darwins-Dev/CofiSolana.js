import { ACCOUNTS, } from '../utils/address';
import { web3, Program, Provider } from '@project-serum/anchor';
import { cofi, CofiSolanaConfig } from '../types';

export async function getStakeAccount(
  cofiSolanaConfig: CofiSolanaConfig,
  publicKey: web3.PublicKey,
) {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  const cofiProgram =
    new Program<cofi.Cofi>(cofi.IDL, ACCOUNTS.COFI_PROGRAM_ID(cluster), provider);
  return cofiProgram.account.cofiStake.fetch(publicKey);
}

export async function getStakeAccountAddress(
  cofiSolanaConfig: CofiSolanaConfig,
  staker: web3.PublicKey,
  beneficiary: web3.PublicKey,
): Promise<web3.PublicKey> {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  return (await web3.PublicKey.findProgramAddress([
    Buffer.from("cofi_stake", 'utf-8'), staker.toBuffer(), beneficiary.toBuffer(),
  ], ACCOUNTS.COFI_PROGRAM_ID(cluster)))[0]
}