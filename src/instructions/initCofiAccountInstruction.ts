import { ACCOUNTS, ClusterType } from '../utils/constants';
import { cofi, cofiStrategy } from '../types';
import { web3, Provider, Program, SplToken, Spl, BN } from '@project-serum/anchor';

export async function initCofiAccountInstruction(
  version: number,
  cluster: ClusterType,
  provider: Provider,
  payer: web3.PublicKey,
  owner: web3.PublicKey,
  account: web3.PublicKey,
): Promise<web3.TransactionInstruction> {
  const cofiProgram = 
    new Program<cofi.Cofi>(cofi.IDL, ACCOUNTS.COFI_PROGRAM_ID(cluster), provider);
  const cofiMint = await ACCOUNTS.COFI_MINT(version, cluster);

  return await cofiProgram.methods.initCofiAcc()
    .accounts({
      initializer: payer,
      owner,
      account,
      mint: cofiMint,
      systemProgram: web3.SystemProgram.programId,
      rent: web3.SYSVAR_RENT_PUBKEY,
    }).instruction();
}