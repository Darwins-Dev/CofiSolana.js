import { ClusterType } from '../utils/constants';
import { web3 } from '@project-serum/anchor';
export declare function initCofiAccountInstruction(version: number, cluster: ClusterType, payer: web3.PublicKey, owner: web3.PublicKey, account: web3.PublicKey): Promise<web3.TransactionInstruction>;
