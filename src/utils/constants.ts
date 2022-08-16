import { web3 } from '@project-serum/anchor';

export const DEVNET_PROGRAM_ID = new web3.PublicKey("ALend7Ketfx5bxh6ghsCDXAoDrhvEmsXT3cynB6aPLgx");
export const DEVNET_LENDING_MARKET = new web3.PublicKey("GvjoVKNjBvQcFaSKUW1gTE7DxhSpjHbE69umVR5nPuQp");
export const DEVNET_LENDING_MARKET_AUTH = new web3.PublicKey("EhJ4fwaXUp7aiwvZThSUaGWCaBQAJe3AEaJJJVCn3UCK");

export const DEVNET_USDC_RESERVE = new web3.PublicKey("FNNkz4RCQezSSS71rW2tvqZH1LCkTzaiG7Nd1LeA5x5y");
export const DEVNET_USDC_CTOKEN = new web3.PublicKey("E2PSSXsXJGdpqhhaV3rYPpuy1inRCQAWxcdykA1DTmYr");
export const DEVNET_USDC_RESERVE_LIQ_SUPPLY = new web3.PublicKey("HixjFJoeD2ggqKgFHQxrcJFjVvE5nXKuUPYNijFg7Kc5");
export const DEVNET_USDC_MINT = new web3.PublicKey("zVzi5VAf4qMEwzv7NXECVx5v2pQ7xnqVVjCXZwS9XzA");

export const DEVNET_SOL_MINT = new web3.PublicKey("So11111111111111111111111111111111111111112");
export const DEVNET_SOL_RESERVE = new web3.PublicKey("5VVLD7BQp8y3bTgyF5ezm1ResyMTR3PhYsT4iHFU8Sxz");
export const DEVNET_SOL_CTOKEN = new web3.PublicKey("FzwZWRMc3GCqjSrcpVX3ueJc6UpcV6iWWb7ZMsTXE3Gf");
export const DEVNET_SOL_RESERVE_LIQ_SUPPLY = new web3.PublicKey("furd3XUtjXZ2gRvSsoUts9A5m8cMJNqdsyR2Rt8vY9s");

export const DEVNET_SIMP_MINT = new web3.PublicKey("8HFjaos5KaoP25VU3XAnHxacymHV2qEcM95Kw7RKJetn");
export const DEVNET_SIMP_CTOKEN = new web3.PublicKey("DHrXwJAeCZmwpV2FbrQ2HerC2Jo8ZhBZeLJkpiPgEr2G");
export const DEVNET_SIMP_LIQ_SUPPLY = new web3.PublicKey("Bpy8EA7SLCbkppEHWfXTCwNzdYePjH5rm7sPsmdN7a95");

export const MAINNET_PROGRAM_ID = new web3.PublicKey("So1endDq2YkqhipRh3WViPa8hdiSpxWy6z3Z6tMCpAo");
export const MAINNET_LENDING_MARKET = new web3.PublicKey("4UpD2fh7xH3VP9QQaXtsS1YY3bxzWhtfpks7FatyKvdY");
export const MAINNET_LENDING_MARKET_AUTH = new web3.PublicKey("DdZR6zRFiUt4S5mg7AV1uKB2z1f1WzcNYCaTEEWPAuby");

export const MAINNET_USDC_RESERVE = new web3.PublicKey("BgxfHJDzm44T7XG68MYKx7YisTjZu73tVovyZSjJMpmw");
export const MAINNET_USDC_CTOKEN = new web3.PublicKey("993dVFL2uXWYeoXuEBFXR4BijeXdTv4s6BzsCjJZuwqk");
export const MAINNET_USDC_RESERVE_LIQ_SUPPLY = new web3.PublicKey("8SheGtsopRUDzdiD6v6BR9a6bqZ9QwywYQY99Fp5meNf");
export const MAINNET_USDC_MINT = new web3.PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");

export const DEVNET_COFI_SOL = new web3.PublicKey("2Xi8qBg2T66Q6SDoLq4mwU7wW3Yf4SAFZRocD2nZdzAe");
export const DEVNET_COFI_STRATEGY_SOL = new web3.PublicKey("9MKNtecXPBb6WxF36fhDDX1tBqTe4LeuCYfkgmUUkpaq");

export const DEVNET_COFI_SIMP = new web3.PublicKey("BLG2ZfiVKRWtcy1aqAjeUFabRtkRA7y7HsBmodfyh6gh");
export const DEVNET_COFI_STRATEGY_SIMP = new web3.PublicKey("Gp3ppaJZbbtJtBGBNbKbyZSjibKXmDZj1MRb2PUN3xai");

export const DEVNET_COFI_SIMP_FEE_RECEIVER = new web3.PublicKey("FXccWBWFZ6HxoaYgVmb6PPPLQ7UhEsMMEi3gHHZDKBTG");

export type ClusterType = "devnet" | "mainnet" | "simp";

export const ACCOUNTS = {
  SOLEND_PROGRAM_ID: (cluster: ClusterType): web3.PublicKey=>{
    switch(cluster) {
      case "devnet":
      case "simp":
        return DEVNET_PROGRAM_ID
      case "mainnet":
        return MAINNET_PROGRAM_ID
    }
  },
  SOLEND_LENDING_MARKET: (cluster: ClusterType): web3.PublicKey=>{
    switch(cluster) {
      case "devnet":
      case "simp":
        return DEVNET_LENDING_MARKET
      case "mainnet":
        return MAINNET_LENDING_MARKET
    }
  },
  SOLEND_LENDING_MARKET_AUTH: (cluster: ClusterType): web3.PublicKey=>{
    switch(cluster) {
      case "devnet":
      case "simp":
        return DEVNET_LENDING_MARKET_AUTH
      case "mainnet":
        return MAINNET_LENDING_MARKET_AUTH
    }
  },
  SOLEND_RESERVE: (cluster: ClusterType): web3.PublicKey=>{
    switch(cluster) {
      case "simp":
      case "devnet":
        return DEVNET_SOL_RESERVE
      case "mainnet":
        return MAINNET_USDC_RESERVE
    }
  },
  SOLEND_RESERVE_LIQ_SUPPLY: (cluster: ClusterType): web3.PublicKey=>{
    switch(cluster) {
      case "devnet":
        return DEVNET_SOL_RESERVE_LIQ_SUPPLY
      case "simp":
        return DEVNET_SIMP_LIQ_SUPPLY
      case "mainnet":
        return MAINNET_USDC_RESERVE_LIQ_SUPPLY
    }
  },
  SOLEND_CTOKEN: (cluster: ClusterType): web3.PublicKey=>{
    switch(cluster) {
      case "devnet":
        return DEVNET_SOL_CTOKEN
      case "simp":
        return DEVNET_SIMP_CTOKEN
      case "mainnet":
        return MAINNET_USDC_CTOKEN
    }
  },
  LIQUIDITY_MINT: (cluster: ClusterType): web3.PublicKey=>{
    switch(cluster) {
      case "devnet":
        return DEVNET_SOL_MINT
      case "simp":
        return DEVNET_SIMP_MINT
      case "mainnet":
        return MAINNET_USDC_MINT
    }
  },
  COFI_FEE_RECEIVER: (cluster: ClusterType): web3.PublicKey=>{
    switch(cluster) {
      case "devnet":
      case "simp":
      case "mainnet":
        return DEVNET_COFI_SIMP_FEE_RECEIVER
    }
  },
  COFI_PROGRAM_ID: (cluster: ClusterType): web3.PublicKey=>{
    switch(cluster) {
      case "devnet":
        return DEVNET_COFI_SOL
      case "simp":
        return DEVNET_COFI_SIMP
      case "mainnet":
        throw new Error("MAINNET NOT READY YET")
    }
    return DEVNET_COFI_SOL
  },
  COFI_STRATEGY_PROGRAM_ID: (cluster: ClusterType): web3.PublicKey=>{
    switch(cluster) {
      case "devnet":
        return DEVNET_COFI_STRATEGY_SOL
      case "simp":
        return DEVNET_COFI_STRATEGY_SIMP
      case "mainnet":
        throw new Error("MAINNET NOT READY YET")
    }
  },
  COFI_MINT: async (version: number, cluster: ClusterType): Promise<web3.PublicKey> => {
    return (await web3.PublicKey.findProgramAddress(
      [Buffer.from('cofi_mint', 'utf-8'), Uint8Array.from([version, 0, 0, 0, 0, 0, 0, 0, 0])],
      ACCOUNTS.COFI_PROGRAM_ID(cluster)
    ))[0];
  },
  COFI_STRATEGY: async (version: number, cluster: ClusterType): Promise<web3.PublicKey> => {
    return (await web3.PublicKey.findProgramAddress([
      Buffer.from('cofi_strategy', 'utf-8'),
      ACCOUNTS.SOLEND_PROGRAM_ID(cluster).toBuffer(),
      Uint8Array.from([version, 0, 0, 0, 0, 0, 0, 0, 0]),
    ], ACCOUNTS.COFI_STRATEGY_PROGRAM_ID(cluster)))[0]
  },
  COFI_COLLATERAL_RESERVE: async(version: number, cluster: ClusterType): Promise<web3.PublicKey> => {
    return (await web3.PublicKey.findProgramAddress(
      [Buffer.from('cofi_collateral_reserve', 'utf-8'), 
        (await ACCOUNTS.COFI_MINT(version, cluster)).toBuffer(), 
        ACCOUNTS.SOLEND_CTOKEN(cluster).toBuffer()],
        ACCOUNTS.COFI_PROGRAM_ID(cluster),))[0];
  }
}