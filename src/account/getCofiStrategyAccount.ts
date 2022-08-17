import { ACCOUNTS } from '../utils/address';
import { cofi, CofiSolanaConfig, cofiStrategy, } from '../types';
import { Provider, Program, web3, } from '@project-serum/anchor';

export async function getCofiStrategyAccount (
  cofiSolanaConfig: CofiSolanaConfig,
) {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  const cofiStrategyProgram =
    new Program<cofiStrategy.CofiStrategy>(cofiStrategy.IDL, ACCOUNTS.COFI_STRATEGY_PROGRAM_ID(cluster), provider);
  return cofiStrategyProgram.account.strategy.fetch(await ACCOUNTS.COFI_STRATEGY(version, cluster));
}