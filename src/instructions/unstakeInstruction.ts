import { ACCOUNTS, ClusterType } from '../utils/constants';
import { cofi, cofiStrategy } from '../types';
import { web3, Provider, Program, BN } from '@project-serum/anchor';

export async function unstakeInstruction(
  version: number,
  cluster: ClusterType,
  provider: Provider,
  stakerAuthority: web3.PublicKey,
  staker: web3.PublicKey,
  beneficiary: web3.PublicKey,
  amount: BN,
): Promise<web3.TransactionInstruction> {
  const cofiProgram = 
    new Program<cofi.Cofi>(cofi.IDL, ACCOUNTS.COFI_PROGRAM_ID(cluster), provider);
  const [stakePairAccount, stakePairAccountBump] = await web3.PublicKey.findProgramAddress([
    Buffer.from("cofi_stake", 'utf-8'), staker.toBuffer(), beneficiary.toBuffer(),
  ], cofiProgram.programId);

  const cofiMint = await ACCOUNTS.COFI_MINT(version, cluster);
  const strategy = await ACCOUNTS.COFI_STRATEGY(version, cluster);

  return await cofiProgram.methods.unstake(amount)
    .accounts({
      stakerAccountAuthority: stakerAuthority,
      stakerCofiAccount: staker,
      beneficiaryCofiAccount: beneficiary,
      cofiStakePair: stakePairAccount,
      cofiMint,
      cofiStrategy: strategy,
      cofiStrategyProgram: ACCOUNTS.COFI_STRATEGY_PROGRAM_ID(cluster),
      clock: web3.SYSVAR_CLOCK_PUBKEY,  
    }).remainingAccounts([
      {
        pubkey: ACCOUNTS.COFI_PROGRAM_ID(cluster),
        isSigner: false,
        isWritable: false,
      },{
        pubkey: ACCOUNTS.SOLEND_RESERVE(cluster),
        isSigner: false,
        isWritable: true,
      },
    ]).instruction()
}