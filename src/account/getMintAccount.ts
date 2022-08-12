import { ACCOUNTS, ClusterType } from '../utils/constants';
import { cofi } from '../types';
import { Provider, Program, web3, } from '@project-serum/anchor';

export async function getCofiMintAccount(
  version: number,
  cluster: ClusterType,
  provider: Provider,
) {
  const cofiProgram = 
    new Program<cofi.Cofi>(cofi.IDL, ACCOUNTS.COFI_PROGRAM_ID(cluster), provider);
  return cofiProgram.account.cofiMint.fetch(await ACCOUNTS.COFI_MINT(version, cluster));
}

export async function getCofiMintAddress(
  version: number,
  cluster: ClusterType,
): Promise<web3.PublicKey> {
  return (await web3.PublicKey.findProgramAddress([
    Buffer.from('cofi_strategy', 'utf-8'),
    ACCOUNTS.SOLEND_PROGRAM_ID(cluster).toBuffer(),
    Uint8Array.from([version, 0, 0, 0, 0, 0, 0, 0, 0]),
  ], ACCOUNTS.COFI_STRATEGY_PROGRAM_ID(cluster)))[0]
}