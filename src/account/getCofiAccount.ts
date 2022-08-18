import { ACCOUNTS, } from '../utils/address';
import { cofi, CofiSolanaConfig } from '../types';
import { web3, Program, BN, } from '@project-serum/anchor';
import { sharesToLiquidity } from '..';

export async function getCofiAccount(
  cofiSolanaConfig: CofiSolanaConfig,
  publicKey: web3.PublicKey,
) {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  const cofiProgram =
    new Program<cofi.Cofi>(cofi.IDL, ACCOUNTS.COFI_PROGRAM_ID(cluster), provider);
  return cofiProgram.account.cofiAccount.fetch(publicKey);
}

export async function getAssociatedCofiAccountAddress(
  cofiSolanaConfig: CofiSolanaConfig,
  owner: web3.PublicKey,
): Promise<web3.PublicKey> {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  return (await web3.PublicKey.findProgramAddress([
      Buffer.from('cofi_account', 'utf-8'), owner.toBuffer(),
    ], ACCOUNTS.COFI_PROGRAM_ID(cluster)
  ))[0]
}

export async function getWithdrawableLiquidity(
  cofiSolanaConfig: CofiSolanaConfig,
  cofiAccountPublicKey: web3.PublicKey,
  withdrawFeeRate: BN | number | string,  /// in ppm
): Promise<BN> {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  let cofiAccount = await getCofiAccount(cofiSolanaConfig, cofiAccountPublicKey);
  if(cofiAccountPublicKey.equals(ACCOUNTS.COFI_FEE_RECEIVER(cluster))) {
    return sharesToLiquidity(cofiSolanaConfig, cofiAccount.shareAmount)
  } else {
    let interestGenerated = await getInterestGenerated(
      cofiSolanaConfig, cofiAccountPublicKey,
    );
    let withdrawFee = interestGenerated.mul(new BN(withdrawFeeRate)).div(new BN(1000000));
    return withdrawFee
  }
}

export async function getInterestGenerated(
  cofiSolanaConfig: CofiSolanaConfig,
  cofiAccountPublicKey: web3.PublicKey,
): Promise<BN> {
  const {
    version, cluster, provider
  } = cofiSolanaConfig;
  let cofiAccount = await getCofiAccount(cofiSolanaConfig, cofiAccountPublicKey);
  return (await sharesToLiquidity(cofiSolanaConfig, cofiAccount.shareAmount))
    .sub(cofiAccount.depositAmount)
}