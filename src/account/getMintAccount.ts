import { ACCOUNTS } from '../utils/address';
import { cofi, ClusterType, CofiSolanaConfig } from '../types';
import { Provider, Program, web3, } from '@project-serum/anchor';

export async function getCofiMintAccount(
  cofiSolanaConfig: CofiSolanaConfig
) {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  const cofiProgram = 
    new Program<cofi.Cofi>(cofi.IDL, ACCOUNTS.COFI_PROGRAM_ID(cluster), provider);
  return cofiProgram.account.cofiMint.fetch(await ACCOUNTS.COFI_MINT(version, cluster));
}

export async function getCofiMintAddress(
  cofiSolanaConfig: CofiSolanaConfig,
): Promise<web3.PublicKey> {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  return (await web3.PublicKey.findProgramAddress([
    Buffer.from('cofi_strategy', 'utf-8'),
    ACCOUNTS.SOLEND_PROGRAM_ID(cluster).toBuffer(),
    Uint8Array.from([version, 0, 0, 0, 0, 0, 0, 0, 0]),
  ], ACCOUNTS.COFI_STRATEGY_PROGRAM_ID(cluster)))[0]
}