import { CofiSolanaConfig } from '../../types';
import { web3 } from '@project-serum/anchor';
export declare function collectDepositInstruction(cofiSolanaConfig: CofiSolanaConfig, timerOwnedAccount: web3.PublicKey, destinationLiquidityAccount?: web3.PublicKey): Promise<web3.TransactionInstruction>;
