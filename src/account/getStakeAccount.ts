import { ACCOUNTS, ClusterType } from '../utils/constants';
import { cofi } from '../types';
import { web3, Program, Provider } from '@project-serum/anchor';

export async function getStakeAccount(
  cluster: ClusterType,
  provider: Provider,
  publicKey: web3.PublicKey,
) {
  const cofiProgram =
    new Program<cofi.Cofi>(cofi.IDL, ACCOUNTS.COFI_PROGRAM_ID(cluster), provider);
  return cofiProgram.account.cofiStake.fetch(publicKey);
}

export async function getStakeAccountAddress(
  cluster: ClusterType,
  staker: web3.PublicKey,
  beneficiary: web3.PublicKey,
): Promise<web3.PublicKey> {
  return (await web3.PublicKey.findProgramAddress([
    Buffer.from("cofi_stake", 'utf-8'), staker.toBuffer(), beneficiary.toBuffer(),
  ], ACCOUNTS.COFI_PROGRAM_ID(cluster)))[0]
}