import { CofiSolanaConfig } from '../types';
import { web3 } from '@project-serum/anchor';
export declare function timerUnlockUnstakeMerge(cofiSolanaConfig: CofiSolanaConfig, stakerAuthority: web3.PublicKey, stakerAccount: web3.PublicKey, beneficiaryAccount: web3.PublicKey, timerOwnedAccount: web3.PublicKey, timerCofiStakeAccount: web3.PublicKey): Promise<web3.TransactionInstruction>;
