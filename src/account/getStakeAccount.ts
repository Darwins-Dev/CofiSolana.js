import { ACCOUNTS, ClusterType } from '../utils/constants';
import { cofi } from '../types';
import { web3, Program, Provider } from '@project-serum/anchor';

export async function getStakeAccount(
  cluster: ClusterType,
  provider: Provider,
  staker: web3.PublicKey,
  beneficiary: web3.PublicKey,
) {
  const cofiProgram =
    new Program<cofi.Cofi>(cofi.IDL, ACCOUNTS.COFI_PROGRAM_ID(cluster), provider);
    const [stakePairAccount,] = await web3.PublicKey.findProgramAddress([
      Buffer.from("cofi_stake", 'utf-8'), staker.toBuffer(), beneficiary.toBuffer(),
    ], cofiProgram.programId);
  return cofiProgram.account.cofiStake.fetch(stakePairAccount);
}