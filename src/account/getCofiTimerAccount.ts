import { ACCOUNTS, } from '../utils/address';
import { cofi, cofiStrategy, cofiTimer, CofiSolanaConfig } from '../types';
import { web3, Provider, Program, SplToken, Spl, BN } from '@project-serum/anchor';

export async function getCofiTimerAccount(
  cofiSolanaConfig: CofiSolanaConfig,
  cofiTimerAddress: web3.PublicKey,
) {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  const cofiTimerProgram = new Program<cofiTimer.CofiTimer>(cofiTimer.IDL, ACCOUNTS.COFI_TIMER_ID(cluster), provider);
  return await cofiTimerProgram.account.cofiTimer.fetch(cofiTimerAddress)
}

export async function getCofiTimerAddress(
  cofiSolanaConfig: CofiSolanaConfig,
  timerOwnedAccount: web3.PublicKey,
): Promise<web3.PublicKey> {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  const cofiTimerProgram = new Program<cofiTimer.CofiTimer>(cofiTimer.IDL, ACCOUNTS.COFI_TIMER_ID(cluster), provider);
  return (await web3.PublicKey.findProgramAddress(
    [Buffer.from('cofi_timer', 'utf-8'), timerOwnedAccount.toBuffer()],
    cofiTimerProgram.programId,
  ))[0];
}