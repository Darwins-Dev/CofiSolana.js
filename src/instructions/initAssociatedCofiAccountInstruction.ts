import { ACCOUNTS, } from '../utils/address';
import { cofi, CofiSolanaConfig } from '../types';
import { web3, Provider, Program, SplToken, Spl, BN } from '@project-serum/anchor';

export async function initAssociatedCofiAccountInstruction(
  cofiSolanaConfig: CofiSolanaConfig,
  payer: web3.PublicKey,
  authority: web3.PublicKey,
): Promise<web3.TransactionInstruction> {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  const cofiProgram = 
    new Program<cofi.Cofi>(cofi.IDL, ACCOUNTS.COFI_PROGRAM_ID(cluster), provider);
  const cofiMint = await ACCOUNTS.COFI_MINT(cluster);
  const [associatedCofiAccountAddress,] = await web3.PublicKey.findProgramAddress(
    [Buffer.from('cofi_account','utf-8'), cofiMint.toBuffer(), authority.toBuffer(),],
    cofiProgram.programId,
  );

  return await cofiProgram.methods.initAssociatedCofiAcc()
    .accounts({
      initializer: payer,
      authority,
      mint: cofiMint,
      account: associatedCofiAccountAddress,
      systemProgram: web3.SystemProgram.programId,
      rent: web3.SYSVAR_RENT_PUBKEY,
    }).instruction();
}