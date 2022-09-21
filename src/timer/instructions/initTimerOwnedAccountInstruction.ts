import { ACCOUNTS, } from '../../utils/address';
import { cofiTimer, CofiSolanaConfig } from '../../types';
import { web3, Program, BN, } from '@project-serum/anchor';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { getCofiTimerAddress } from '../../account/getCofiTimerAccount';

export async function initTimerOwnedAccountInstruction(
  cofiSolanaConfig: CofiSolanaConfig,
  payer: web3.PublicKey,
  staker: web3.PublicKey,
  beneficiary: web3.PublicKey,
  timerOwnedAccount: web3.PublicKey,
  sourceLiquidityAuthority: web3.PublicKey,
  sourceLiquidityAccount: web3.PublicKey,
  expiration: number | string | number[] | Uint8Array | Buffer | BN,
  amount: number | string | number[] | Uint8Array | Buffer | BN,
): Promise<web3.TransactionInstruction> {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  const cofiTimerProgram = new Program<cofiTimer.CofiTimer>(cofiTimer.IDL, ACCOUNTS.COFI_TIMER_ID(cluster), provider);
  const cofiTimerAccount = await getCofiTimerAddress(cofiSolanaConfig, timerOwnedAccount);
  const cofiMint = await ACCOUNTS.COFI_MINT(version, cluster);
  const strategy = await ACCOUNTS.COFI_STRATEGY(version, cluster);
  const collateralReserve = await ACCOUNTS.COFI_COLLATERAL_RESERVE(version, cluster);

  return await cofiTimerProgram.methods.initTimerOwnedAccount(new BN(expiration), new BN(amount)) 
    .accounts({
      initializer: payer,
      staker, beneficiary,
      timerOwnedAccount, sourceLiquidityAccount, sourceLiquidityAuthority,
      cofiTimer: cofiTimerAccount,
      cofiMintCollateralReserve: collateralReserve,
      cofiMint,
      cofiStrategy: strategy,
      cofiProgram: ACCOUNTS.COFI_PROGRAM_ID(cluster),
      cofiStrategyProgram: ACCOUNTS.COFI_STRATEGY_PROGRAM_ID(cluster),
      rent: web3.SYSVAR_RENT_PUBKEY,
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
      pubkey: ACCOUNTS.SOLEND_RESERVE_LIQ_SUPPLY(cluster),
      isSigner: false,
      isWritable: true,
    },{
      pubkey: ACCOUNTS.SOLEND_CTOKEN(cluster),
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
      pubkey: sourceLiquidityAuthority,
      isSigner: true,
      isWritable: false,
    },{
      pubkey: web3.SYSVAR_CLOCK_PUBKEY,
      isSigner: false,
      isWritable: false,
    },{
      pubkey: TOKEN_PROGRAM_ID,
      isSigner: false,
      isWritable: false,
    },
  ]).instruction()
}

// #[derive(Accounts)]
// pub struct InitTimerOwnedAccount<'info> {
//   #[account(mut)]
//   pub initializer: Signer<'info>,
//   pub staker: Box<Account<'info, cofi::state::CofiAccount>>,
//   pub beneficiary: Box<Account<'info, cofi::state::CofiAccount>>,
//   /// CHECK: Owned by external program
//   #[account(
//     mut, signer,
//   )]
//   pub timer_owned_account: AccountInfo<'info>,
//   #[account(
//     init,
//     payer = initializer,
//     space = CofiTimer::size(),
//     seeds = [b"cofi_timer", timer_owned_account.key().as_ref()],
//     bump,
//   )]
//   pub cofi_timer: Box<Account<'info, CofiTimer>>,
//   pub source_liquidity_authority: Signer<'info>,
//   #[account(
//     mut,
//     token::authority = source_liquidity_authority,
//   )]
//   pub source_liquidity_account: Box<Account<'info, TokenAccount>>,

//   #[account(mut)]
//   pub cofi_mint_collateral_reserve: Box<Account<'info, TokenAccount>>,
//   #[account(mut)]
//   pub cofi_mint: Box<Account<'info, cofi::state::CofiMint>>,
//   #[account(mut)]
//   pub cofi_strategy: Box<Account<'info, cofi_strategy::state::Strategy>>,
//   pub cofi_program: Program<'info, Cofi>,
//   pub cofi_strategy_program: Program<'info, CofiStrategy>,
//   pub system_program: Program<'info, System>,
//   pub rent: Sysvar<'info, Rent>,
//   pub clock: Sysvar<'info, Clock>,
// }