import { ACCOUNTS, } from '../../utils/address';
import { cofiTimer, CofiSolanaConfig } from '../../types';
import { web3, Program, BN, } from '@project-serum/anchor';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { getCofiTimerAccount, getCofiTimerAddress } from '../../account/getCofiTimerAccount';
import { getAssociatedLiquidityAddress, getCofiAccount } from '../..';

export async function collectInterestInstruction(
  cofiSolanaConfig: CofiSolanaConfig,
  timerOwnedAccount: web3.PublicKey,
  destinationLiquidityAccount?: web3.PublicKey,
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
  const beneficiaryAccount = cofiTimerAccountState.beneficiaryAccount;
  if(!destinationLiquidityAccount) {
    const beneficiaryAccountState = await getCofiAccount(cofiSolanaConfig, beneficiaryAccount);
    destinationLiquidityAccount = await getAssociatedLiquidityAddress(cofiSolanaConfig, beneficiaryAccountState.authority);
  }

  return await cofiTimerProgram.methods.collectInterest() 
    .accounts({
      cofiTimer: cofiTimerAccount,
      timerOwnedAccount, 
      beneficiaryCofiAccount: beneficiaryAccount,
      beneficiaryLiquidityAccount: destinationLiquidityAccount,
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

// #[derive(Accounts)]
// pub struct WithdrawInterest<'info> {
//   #[account(
//     mut,
//     seeds = [b"cofi_timer", timer_owned_account.key().as_ref()],
//     bump,
//     constraint = cofi_timer.expiration.lt(&clock.unix_timestamp)
//   )]
//   pub cofi_timer: Box<Account<'info, CofiTimer>>,
//   #[account(
//     mut,
//   )]
//   pub timer_owned_account: Box<Account<'info, cofi::state::CofiAccount>>,
//   #[account(
//     constraint = beneficiary_cofi_account.key().eq(&cofi_timer.beneficiary_account)
//   )]
//   pub beneficiary_cofi_account: Box<Account<'info, cofi::state::CofiAccount>>,
//   #[account(
//     mut,
//     token::authority = beneficiary_cofi_account.authority,
//   )]
//   pub beneficiary_liquidity_account: Box<Account<'info, TokenAccount>>,

//   #[account(mut)]
//   pub cofi_mint_collateral_reserve: Box<Account<'info, TokenAccount>>,
//   #[account(mut)]
//   pub cofi_mint: Box<Account<'info, cofi::state::CofiMint>>,
//   #[account(mut)]
//   pub cofi_strategy: Box<Account<'info, cofi_strategy::state::Strategy>>,
//   #[account(
//     mut,
//     constraint = cofi_mint.fee_receiver_account.eq(&fee_receiver_account.key()),
//   )]
//   pub fee_receiver_account: Box<Account<'info, cofi::state::CofiAccount>>,
//   pub cofi_program: Program<'info, Cofi>,
//   pub cofi_strategy_program: Program<'info, CofiStrategy>,
//   pub clock: Sysvar<'info, Clock>,
// }