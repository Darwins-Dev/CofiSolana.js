import { CofiSolanaConfig } from '../types';
import { web3, BN } from '@project-serum/anchor';
export declare function initTimerOwnedAccount(cofiSolanaConfig: CofiSolanaConfig, payer: web3.PublicKey, stakerAuthority: web3.PublicKey, stakerAccount: web3.PublicKey, beneficiaryAccount: web3.PublicKey, timerOwnedAccount: web3.PublicKey, expiration: BN | string | number): Promise<web3.TransactionInstruction>;
