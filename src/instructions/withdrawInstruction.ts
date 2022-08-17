import { ACCOUNTS, } from '../utils/address';
import { cofi, CofiSolanaConfig } from '../types';
import { web3, Provider, Program, SplToken, Spl, BN } from '@project-serum/anchor';

export async function withdrawInstruction(
  cofiSolanaConfig: CofiSolanaConfig,
  cofiAccountAuthority: web3.PublicKey,
  sourceCofiAccount: web3.PublicKey,
  destinationLiquidityAccount: web3.PublicKey,
  amount: BN,
): Promise<web3.TransactionInstruction> {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  const cofiProgram = 
    new Program<cofi.Cofi>(cofi.IDL, ACCOUNTS.COFI_PROGRAM_ID(cluster), provider);
  const tokenProgram: Program<SplToken> = Spl.token();

  const cofiMint = await ACCOUNTS.COFI_MINT(version, cluster);
  const strategy = await ACCOUNTS.COFI_STRATEGY(version, cluster);
  const collateralReserve = await ACCOUNTS.COFI_COLLATERAL_RESERVE(version, cluster);
  const feeReceiverAccount = ACCOUNTS.COFI_FEE_RECEIVER(cluster);

  return await cofiProgram.methods.withdraw(amount)
    .accounts({
      cofiAccountAuthority,
      sourceCofiAccount,
      feeReceiverAccount,
      destinationLiquidityAccount,
      cofiMint,
      cofiStrategy: strategy,
      cofiMintCollateralReserve: collateralReserve,
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
      pubkey: tokenProgram.programId,
      isSigner: false,
      isWritable: false,
    },]).instruction();
}