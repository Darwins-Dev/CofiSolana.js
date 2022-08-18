import { ACCOUNTS, } from '../utils/address';
import { cofi, CofiSolanaConfig } from '../types';
import { web3, Provider, Program, SplToken, Spl, BN } from '@project-serum/anchor';

export async function initCofiStakeInstruction(
  cofiSolanaConfig: CofiSolanaConfig,
  payer: web3.PublicKey,
  staker: web3.PublicKey,
  beneficiary: web3.PublicKey,
): Promise<web3.TransactionInstruction> {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  const cofiProgram = 
    new Program<cofi.Cofi>(cofi.IDL, ACCOUNTS.COFI_PROGRAM_ID(cluster), provider);
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