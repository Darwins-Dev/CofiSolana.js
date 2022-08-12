import { ClusterType } from '../utils/constants';
import { web3, Provider } from '@project-serum/anchor';
export declare function mergeAccountsInstruction(version: number, cluster: ClusterType, provider: Provider, owner: web3.PublicKey, sourceAccount: web3.PublicKey, destinationAccount: web3.PublicKey): Promise<web3.TransactionInstruction>;
