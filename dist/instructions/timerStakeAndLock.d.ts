import { CofiSolanaConfig } from '../types';
import { web3, BN } from '@project-serum/anchor';
export declare function timerStakeAndLock(cofiSolanaConfig: CofiSolanaConfig, stakerAuthority: web3.PublicKey, stakerAccount: web3.PublicKey, timerOwnedAccount: web3.PublicKey, timerCofiStakeAccount: web3.PublicKey, amount: BN | string | number): Promise<web3.TransactionInstruction>;
