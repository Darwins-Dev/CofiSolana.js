import { ClusterType } from '../utils/constants';
import { web3, BN } from '@project-serum/anchor';
export declare function withdrawInstruction(version: number, cluster: ClusterType, cofiAccountAuthority: web3.PublicKey, sourceCofiAccount: web3.PublicKey, destinationLiquidityAccount: web3.PublicKey, feeReceiverAccount: web3.PublicKey, amount: BN): Promise<web3.TransactionInstruction>;
