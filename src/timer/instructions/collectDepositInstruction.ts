import { ACCOUNTS, } from '../../utils/address';
import { cofiTimer, CofiSolanaConfig } from '../../types';
import { web3, Program, BN, } from '@project-serum/anchor';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { getCofiTimerAccount, getCofiTimerAddress } from '../../account/getCofiTimerAccount';
import { getAssociatedLiquidityAddress, getCofiAccount } from '../..';

export async function collectDepositInstruction(
  cofiSolanaConfig: CofiSolanaConfig,
  timerOwnedAccount: web3.PublicKey,
  destinationLiquidityAccount: web3.PublicKey,
): Promise<web3.TransactionInstruction> {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  const cofiTimerProgram = new Program<cofiTimer.CofiTimer>(cofiTimer.IDL, ACCOUNTS.COFI_TIMER_ID(cluster), provider);
  const cofiTimerAccount = await getCofiTimerAddress(cofiSolanaConfig, timerOwnedAccount);
  const cofiMint = await ACCOUNTS.COFI_MINT(version, cluster);
  const strategy = await ACCOUNTS.COFI_STRATEGY(version, cluster);
  const collateralReserve = await ACCOUNTS.COFI_COLLATERAL_RESERVE(version, cluster);

  const cofiTimerAccountState = await getCofiTimerAccount(cofiSolanaConfig, cofiTimerAccount);
  const stakerAccount = cofiTimerAccountState.stakerAccount;
  // if(!destinationLiquidityAccount) {
  //   const stakerAccountState = await getCofiAccount(cofiSolanaConfig, stakerAccount);
  //   destinationLiquidityAccount = await getAssociatedLiquidityAddress(cofiSolanaConfig, stakerAccountState.authority);
  // }

  return await cofiTimerProgram.methods.collectDeposit() 
    .accounts({
      cofiTimer: cofiTimerAccount,
      timerOwnedAccount, 
      stakerCofiAccount: stakerAccount,
      stakerLiquidityAccount: destinationLiquidityAccount,
      cofiMintCollateralReserve: collateralReserve,
      cofiMint,
      cofiStrategy: strategy,
      feeReceiverAccount: ACCOUNTS.COFI_FEE_RECEIVER(cluster),
      cofiProgram: ACCOUNTS.COFI_PROGRAM_ID(cluster),
      cofiStrategyProgram: ACCOUNTS.COFI_STRATEGY_PROGRAM_ID(cluster),
      clock: web3.SYSVAR_CLOCK_PUBKEY,
    }).remainingAccounts([{
      pubkey: ACCOUNTS.SOLEND_PROGRAM_ID(cluster),
      isSigner: false,
      isWritable: false,
    },{
      pubkey: ACCOUNTS.SOLEND_RESERVE(cluster),
      isSigner: false,
      isWritable: true,
    },{
      pubkey: ACCOUNTS.SOLEND_CTOKEN(cluster),
      isSigner: false,
      isWritable: true,
    },{
      pubkey: ACCOUNTS.SOLEND_RESERVE_LIQ_SUPPLY(cluster),
      isSigner: false,
      isWritable: true,
    },{
      pubkey: ACCOUNTS.SOLEND_LENDING_MARKET(cluster),
      isSigner: false,
      isWritable: false,
    },{
      pubkey: ACCOUNTS.SOLEND_LENDING_MARKET_AUTH(cluster),
      isSigner: false,
      isWritable: false,
    },{
      pubkey: cofiMint,
      isSigner: false,
      isWritable: false,
    },{
      pubkey: web3.SYSVAR_CLOCK_PUBKEY,
      isSigner: false,
      isWritable: false,
    },{
      pubkey: TOKEN_PROGRAM_ID,
      isSigner: false,
      isWritable: false,
    },]).instruction()
}