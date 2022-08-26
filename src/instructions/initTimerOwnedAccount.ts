import { ACCOUNTS, } from '../utils/address';
import { cofi, cofiStrategy, cofiTimer, CofiSolanaConfig } from '../types';
import { web3, Provider, Program, SplToken, Spl, BN } from '@project-serum/anchor';

export async function initTimerOwnedAccount(
  cofiSolanaConfig: CofiSolanaConfig,
  payer: web3.PublicKey,
  stakerAuthority: web3.PublicKey,
  stakerAccount: web3.PublicKey,
  beneficiaryAccount: web3.PublicKey,
  timerOwnedAccount: web3.PublicKey,
  expiration: BN | string | number,
): Promise<web3.TransactionInstruction> {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  const cofiTimerProgram = new Program<cofiTimer.CofiTimer>(cofiTimer.IDL, ACCOUNTS.COFI_TIMER_ID(cluster), provider);
  let [cofiTimerAccount,] = await web3.PublicKey.findProgramAddress(
    [Buffer.from('cofi_timer', 'utf-8'), timerOwnedAccount.toBuffer()],
    cofiTimerProgram.programId,
  );
  return await cofiTimerProgram.methods.initTimerOwnedAccount(new BN(expiration))
    .accounts({
      initializer: payer,
      stakerAuthority,
      staker: stakerAccount,
      beneficiary: beneficiaryAccount,
      timerCofiAccount: timerOwnedAccount,
      cofiTimer: cofiTimerAccount,
      cofiMint: await ACCOUNTS.COFI_MINT(version, cluster),
      systemProgram: web3.SystemProgram.programId,
      rent: web3.SYSVAR_RENT_PUBKEY,
    }).instruction()
}