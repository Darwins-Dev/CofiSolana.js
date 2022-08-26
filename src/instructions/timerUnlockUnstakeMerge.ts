import { ACCOUNTS, } from '../utils/address';
import { cofi, cofiStrategy, cofiTimer, CofiSolanaConfig } from '../types';
import { web3, Provider, Program, SplToken, Spl, BN } from '@project-serum/anchor';

export async function timerStakeAndLock(
  cofiSolanaConfig: CofiSolanaConfig,
  stakerAuthority: web3.PublicKey,
  stakerAccount: web3.PublicKey,
  beneficiaryAccount: web3.PublicKey,
  timerOwnedAccount: web3.PublicKey,
  timerCofiStakeAccount: web3.PublicKey,
): Promise<web3.TransactionInstruction> {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  const cofiTimerProgram = new Program<cofiTimer.CofiTimer>(cofiTimer.IDL, ACCOUNTS.COFI_TIMER_ID(cluster), provider);
  let [cofiTimerAddress,] = await web3.PublicKey.findProgramAddress(
    [Buffer.from('cofi_timer', 'utf-8'), timerOwnedAccount.toBuffer()],
    cofiTimerProgram.programId,
  );
  return await cofiTimerProgram.methods.unlockUnstakeMerge()
    .accounts({
      stakerAccountAuthority: stakerAuthority,
      cofiTimer: cofiTimerAddress,
      timerOwnedAccount,
      timerCofiStakePair: timerCofiStakeAccount,
      cofiMint: await ACCOUNTS.COFI_MINT(version, cluster),
      cofiStrategy: await ACCOUNTS.COFI_STRATEGY(version, cluster),
      cofiProgram: ACCOUNTS.COFI_PROGRAM_ID,
      cofiStrategyProgram: ACCOUNTS.COFI_STRATEGY_PROGRAM_ID,
      clock: web3.SYSVAR_CLOCK_PUBKEY,
    }).instruction()
}