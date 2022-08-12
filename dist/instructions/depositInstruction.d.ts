import { ClusterType } from '../utils/constants';
import { web3, Provider, BN } from '@project-serum/anchor';
export declare function depositInstruction(version: number, cluster: ClusterType, provider: Provider, sourceLiquidityAuthority: web3.PublicKey, sourceLiquidityAccount: web3.PublicKey, destinationCofiAccount: web3.PublicKey, amount: BN): Promise<web3.TransactionInstruction>;
