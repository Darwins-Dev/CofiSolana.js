import { ClusterType } from '../utils/constants';
import { web3 } from '@project-serum/anchor';
export declare function initAssociatedCofiAccountInstruction(version: number, cluster: ClusterType, payer: web3.PublicKey, owner: web3.PublicKey): Promise<web3.TransactionInstruction>;
