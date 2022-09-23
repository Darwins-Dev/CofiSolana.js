import { ACCOUNTS, } from '../utils/address';
import { cofi, cofiStrategy, CofiSolanaConfig } from '../types';
import { web3, Provider, Program, SplToken, Spl, BN } from '@project-serum/anchor';

export async function initCofiAccountInstruction(
  cofiSolanaConfig: CofiSolanaConfig,
  payer: web3.PublicKey,
  authority: web3.PublicKey,
  account: web3.PublicKey,
): Promise<web3.TransactionInstruction> {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  const cofiProgram = 
    new Program<cofi.Cofi>(cofi.IDL, ACCOUNTS.COFI_PROGRAM_ID(cluster), provider);
  const cofiMint = await ACCOUNTS.COFI_MINT(cluster);

  return await cofiProgram.methods.initCofiAcc()
    .accounts({
      initializer: payer,
      authority,
      account,
      mint: cofiMint,
      systemProgram: web3.SystemProgram.programId,
      rent: web3.SYSVAR_RENT_PUBKEY,
    }).instruction();
}