import { ClusterType } from '../utils/constants';
import { web3 } from '@project-serum/anchor';
export declare function initCofiStake(version: number, cluster: ClusterType, payer: web3.PublicKey, staker: web3.PublicKey, beneficiary: web3.PublicKey): Promise<web3.TransactionInstruction>;
