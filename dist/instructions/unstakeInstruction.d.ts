import { ClusterType } from '../utils/constants';
import { web3, BN } from '@project-serum/anchor';
export declare function unstakeInstruction(version: number, cluster: ClusterType, stakerAuthority: web3.PublicKey, staker: web3.PublicKey, beneficiary: web3.PublicKey, amount: BN): Promise<web3.TransactionInstruction>;
