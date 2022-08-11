import { ACCOUNTS, ClusterType } from '../utils/constants';
import { cofi, cofiStrategy } from '../types';
import { web3, Provider, Program, SplToken, Spl, BN } from '@project-serum/anchor';

export async function initAssociatedCofiAccountInstruction(
  version: number,
  cluster: ClusterType,
  payer: web3.PublicKey,
  owner: web3.PublicKey,
): Promise<web3.TransactionInstruction> {
  const cofiProgram = 
    new Program<cofi.Cofi>(cofi.IDL, ACCOUNTS.COFI_PROGRAM_ID(cluster));
  const strategyProgram = 
    new Program<cofiStrategy.CofiStrategy>(cofiStrategy.IDL, ACCOUNTS.COFI_STRATEGY_PROGRAM_ID(cluster));
  const cofiMint = await ACCOUNTS.COFI_MINT(version, cluster);
  const [associatedCofiAccountAddress,] = await web3.PublicKey.findProgramAddress(
    [Buffer.from('cofi_account','utf-8'), owner.toBuffer(),],
    cofiProgram.programId,
  );

  return await cofiProgram.methods.initAssociatedCofiAcc()
    .accounts({
      initializer: payer,
      owner,
      mint: cofiMint,
      account: associatedCofiAccountAddress,
      systemProgram: web3.SystemProgram.programId,
      rent: web3.SYSVAR_RENT_PUBKEY,
    }).instruction();
}