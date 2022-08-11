import { ACCOUNTS, ClusterType } from '../utils/constants';
import { cofi, cofiStrategy } from '../types';
import { web3, Provider, Program, SplToken, Spl, BN } from '@project-serum/anchor';

export async function initCofiAccountInstruction(
  version: number,
  cluster: ClusterType,
  payer: web3.PublicKey,
  staker: web3.PublicKey,
  beneficiary: web3.PublicKey,
): Promise<web3.TransactionInstruction> {
  const cofiProgram = 
    new Program<cofi.Cofi>(cofi.IDL, ACCOUNTS.COFI_PROGRAM_ID(cluster));
  let [stakePairAccount, stakePairAccountBump] = await web3.PublicKey.findProgramAddress([
    Buffer.from("cofi_stake", 'utf-8'), staker.toBuffer(), beneficiary.toBuffer(),
  ], cofiProgram.programId);

  return await cofiProgram.methods.initCofiStake().accounts({
      initializer: payer,
      staker,
      recipient: beneficiary,
      cofiStake: stakePairAccount,
      systemProgram: web3.SystemProgram.programId,
      rent: web3.SYSVAR_RENT_PUBKEY,
    }).instruction()
}