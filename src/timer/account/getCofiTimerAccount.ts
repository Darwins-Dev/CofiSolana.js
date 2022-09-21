import { ACCOUNTS, } from '../../utils/address';
import { cofiTimer, CofiSolanaConfig } from '../../types';
import { web3, Program, BN, } from '@project-serum/anchor';

export async function getCofiTimerAccount(
  cofiSolanaConfig: CofiSolanaConfig,
  publicKey: web3.PublicKey,
) {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  const cofiTimerProgram = new Program<cofiTimer.CofiTimer>(cofiTimer.IDL, ACCOUNTS.COFI_TIMER_ID(cluster), provider);
  return cofiTimerProgram.account.cofiTimer.fetch(publicKey)
}

export async function getCofiTimerAddress(
  cofiSolanaConfig: CofiSolanaConfig,
  timerOwnedAccountPublicKey: web3.PublicKey,
): Promise<web3.PublicKey> {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  return (await web3.PublicKey.findProgramAddress([
    Buffer.from('cofi_timer', 'utf-8'), timerOwnedAccountPublicKey.toBuffer(),
  ], ACCOUNTS.COFI_TIMER_ID(cluster)))[0]
}