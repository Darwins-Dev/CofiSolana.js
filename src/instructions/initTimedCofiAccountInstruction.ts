import { ACCOUNTS, } from '../utils/address';
import { cofi, CofiSolanaConfig } from '../types';
import { web3, Provider, Program, SplToken, Spl, BN } from '@project-serum/anchor';

export async function initTimedCofiAccountInstruction(
  cofiSolanaConfig: CofiSolanaConfig,
  payer: web3.PublicKey,
  owner: web3.PublicKey,
  account: web3.PublicKey,
  expiration: BN | string | number,
): Promise<web3.TransactionInstruction> {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  const cofiProgram = 
    new Program<cofi.Cofi>(cofi.IDL, ACCOUNTS.COFI_PROGRAM_ID(cluster), provider);
  const cofiMint = await ACCOUNTS.COFI_MINT(version, cluster);

  return await cofiProgram.methods.initCofiTimedAcc(new BN(expiration))
    .accounts({
      initializer: payer,
      owner,
      account,
      mint: cofiMint,
      systemProgram: web3.SystemProgram.programId,
      rent: web3.SYSVAR_RENT_PUBKEY,
    }).instruction();
}