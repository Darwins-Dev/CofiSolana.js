export type CofiStrategy = {
  "version": "0.1.0",
  "name": "cofi_strategy",
  "instructions": [
    {
      "name": "initialize",
      "docs": [
        "initialize strategy account"
      ],
      "accounts": [
        {
          "name": "initializer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "strategy",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liquidityMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "liquidity mint and supply accounts"
          ]
        },
        {
          "name": "collateralMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "collateral mint and supply accounts"
          ]
        },
        {
          "name": "collateralReserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "strategyProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "solendReserve",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "version",
          "type": "u8"
        },
        {
          "name": "activate",
          "type": "bool"
        },
        {
          "name": "depositInstruction",
          "type": "bytes"
        },
        {
          "name": "mintToInstruction",
          "type": "bytes"
        },
        {
          "name": "withdrawInstruction",
          "type": "bytes"
        },
        {
          "name": "redeemInstruction",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "deposit",
      "docs": [
        "deposit liqudity into strategy and receive collateral"
      ],
      "accounts": [
        {
          "name": "sourceLiquidityAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "sourceLiquidityAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destinationCollateralAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "strategy",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdraw",
      "docs": [
        "withdraw liquidity from strategy and receive collateral"
      ],
      "accounts": [
        {
          "name": "sourceCollateralAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "sourceCollateralAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destinationLiquidityAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "strategy",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateExchangeRate",
      "docs": [
        "get up-to-date exchange rate"
      ],
      "accounts": [
        {
          "name": "strategy",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "pauseOrUnpause",
      "docs": [
        "pause or unpause strategy interactions"
      ],
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "strategy",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "strategy",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "docs": [
              "pda bump"
            ],
            "type": "u8"
          },
          {
            "name": "version",
            "docs": [
              "strategy account version"
            ],
            "type": "u8"
          },
          {
            "name": "isActive",
            "docs": [
              "any instruction involving this strategy account requires `is_active==true'"
            ],
            "type": "bool"
          },
          {
            "name": "lastUpdate",
            "docs": [
              "last update slot"
            ],
            "type": {
              "defined": "LastUpdate"
            }
          },
          {
            "name": "liquidity",
            "docs": [
              "liquidity spl-token information"
            ],
            "type": {
              "defined": "StrategyLiquidity"
            }
          },
          {
            "name": "collateral",
            "docs": [
              "collateral spl-token information"
            ],
            "type": {
              "defined": "StrategyCollateral"
            }
          },
          {
            "name": "strategyProgramId",
            "docs": [
              "program id of underlying defi protocol e.g. Solend program"
            ],
            "type": "publicKey"
          },
          {
            "name": "depositInstruction",
            "docs": [
              "deposit or equivalent instruction discriminator"
            ],
            "type": {
              "defined": "StrategyInstruction"
            }
          },
          {
            "name": "mintToInstruction",
            "docs": [
              "mint_to or equivalent instruciton discriminator"
            ],
            "type": {
              "defined": "StrategyInstruction"
            }
          },
          {
            "name": "withdrawInstruction",
            "docs": [
              "withdraw or equivalent instruction discriminator"
            ],
            "type": {
              "defined": "StrategyInstruction"
            }
          },
          {
            "name": "redeemInstruction",
            "docs": [
              "redeem or equivalent instruction info"
            ],
            "type": {
              "defined": "StrategyInstruction"
            }
          },
          {
            "name": "exchangeRate",
            "docs": [
              "liquidity to collateral exchange rate"
            ],
            "type": "u128"
          },
          {
            "name": "authority",
            "docs": [
              "strategy account authority"
            ],
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ReserveConfig",
      "docs": [
        "Reserve configuration values"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "optimalUtilizationRate",
            "docs": [
              "Optimal utilization rate, as a percentage"
            ],
            "type": "u8"
          },
          {
            "name": "loanToValueRatio",
            "docs": [
              "Target ratio of the value of borrows to deposits, as a percentage",
              "0 if use as collateral is disabled"
            ],
            "type": "u8"
          },
          {
            "name": "liquidationBonus",
            "docs": [
              "Bonus a liquidator gets when repaying part of an unhealthy obligation, as a percentage"
            ],
            "type": "u8"
          },
          {
            "name": "liquidationThreshold",
            "docs": [
              "Loan to value ratio at which an obligation can be liquidated, as a percentage"
            ],
            "type": "u8"
          },
          {
            "name": "minBorrowRate",
            "docs": [
              "Min borrow APY"
            ],
            "type": "u8"
          },
          {
            "name": "optimalBorrowRate",
            "docs": [
              "Optimal (utilization) borrow APY"
            ],
            "type": "u8"
          },
          {
            "name": "maxBorrowRate",
            "docs": [
              "Max borrow APY"
            ],
            "type": "u8"
          },
          {
            "name": "fees",
            "docs": [
              "Program owner fees assessed, separate from gains due to interest accrual"
            ],
            "type": {
              "defined": "ReserveFees"
            }
          },
          {
            "name": "depositLimit",
            "docs": [
              "Maximum deposit limit of liquidity in native units, u64::MAX for inf"
            ],
            "type": "u64"
          },
          {
            "name": "borrowLimit",
            "docs": [
              "Borrows disabled"
            ],
            "type": "u64"
          },
          {
            "name": "feeReceiver",
            "docs": [
              "Reserve liquidity fee receiver address"
            ],
            "type": "publicKey"
          },
          {
            "name": "protocolLiquidationFee",
            "docs": [
              "Cut of the liquidation bonus that the protocol receives, as a percentage"
            ],
            "type": "u8"
          },
          {
            "name": "protocolTakeRate",
            "docs": [
              "Protocol take rate is the amount borrowed interest protocol recieves, as a percentage"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "ReserveFees",
      "docs": [
        "Additional fee information on a reserve",
        "",
        "These exist separately from interest accrual fees, and are specifically for the program owner",
        "and frontend host. The fees are paid out as a percentage of liquidity token amounts during",
        "repayments and liquidations."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "borrowFeeWad",
            "docs": [
              "Fee assessed on `BorrowObligationLiquidity`, expressed as a Wad.",
              "Must be between 0 and 10^18, such that 10^18 = 1.  A few examples for",
              "clarity:",
              "1% = 10_000_000_000_000_000",
              "0.01% (1 basis point) = 100_000_000_000_000",
              "0.00001% (Aave borrow fee) = 100_000_000_000"
            ],
            "type": "u64"
          },
          {
            "name": "flashLoanFeeWad",
            "docs": [
              "Fee for flash loan, expressed as a Wad.",
              "0.3% (Aave flash loan fee) = 3_000_000_000_000_000"
            ],
            "type": "u64"
          },
          {
            "name": "hostFeePercentage",
            "docs": [
              "Amount of fee going to host account, if provided in liquidate and repay"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "LastUpdate",
      "docs": [
        "Last update state"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "slot",
            "docs": [
              "Last slot when updated"
            ],
            "type": "u64"
          },
          {
            "name": "stale",
            "docs": [
              "True when marked stale, false when slot updated"
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "StrategyLiquidity",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mintPubkey",
            "docs": [
              "liquidity mint address"
            ],
            "type": "publicKey"
          },
          {
            "name": "mintDecimals",
            "docs": [
              "liquidity mint decimals"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "StrategyCollateral",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mintPubkey",
            "docs": [
              "collateral mint address"
            ],
            "type": "publicKey"
          },
          {
            "name": "mintDecimals",
            "docs": [
              "collateral decimals"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "StrategyConfig",
      "type": {
        "kind": "struct",
        "fields": []
      }
    },
    {
      "name": "StrategyInstruction",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "discriminator",
            "docs": [
              "discriminators for strategy instructions"
            ],
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "LendingInstruction",
      "docs": [
        "Instructions supported by the lending program."
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "InitLendingMarket",
            "fields": [
              {
                "name": "owner",
                "docs": [
                  "Owner authority which can add new reserves"
                ],
                "type": "publicKey"
              },
              {
                "name": "quote_currency",
                "docs": [
                  "Currency market prices are quoted in",
                  "e.g. \"USD\" null padded (`*b\"USD\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\"`) or SPL token mint pubkey"
                ],
                "type": {
                  "array": [
                    "u8",
                    32
                  ]
                }
              }
            ]
          },
          {
            "name": "SetLendingMarketOwner",
            "fields": [
              {
                "name": "new_owner",
                "docs": [
                  "The new owner"
                ],
                "type": "publicKey"
              }
            ]
          },
          {
            "name": "InitReserve",
            "fields": [
              {
                "name": "liquidity_amount",
                "docs": [
                  "Initial amount of liquidity to deposit into the new reserve"
                ],
                "type": "u64"
              },
              {
                "name": "config",
                "docs": [
                  "Reserve configuration values"
                ],
                "type": {
                  "defined": "ReserveConfig"
                }
              }
            ]
          },
          {
            "name": "RefreshReserve"
          },
          {
            "name": "DepositReserveLiquidity",
            "fields": [
              {
                "name": "liquidity_amount",
                "docs": [
                  "Amount of liquidity to deposit in exchange for collateral tokens"
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "RedeemReserveCollateral",
            "fields": [
              {
                "name": "collateral_amount",
                "docs": [
                  "Amount of collateral tokens to redeem in exchange for liquidity"
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "InitObligation"
          },
          {
            "name": "RefreshObligation"
          },
          {
            "name": "DepositObligationCollateral",
            "fields": [
              {
                "name": "collateral_amount",
                "docs": [
                  "Amount of collateral tokens to deposit"
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "WithdrawObligationCollateral",
            "fields": [
              {
                "name": "collateral_amount",
                "docs": [
                  "Amount of collateral tokens to withdraw - u64::MAX for up to 100% of deposited amount"
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "BorrowObligationLiquidity",
            "fields": [
              {
                "name": "liquidity_amount",
                "docs": [
                  "Amount of liquidity to borrow - u64::MAX for 100% of borrowing power"
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "RepayObligationLiquidity",
            "fields": [
              {
                "name": "liquidity_amount",
                "docs": [
                  "Amount of liquidity to repay - u64::MAX for 100% of borrowed amount"
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "LiquidateObligation",
            "fields": [
              {
                "name": "liquidity_amount",
                "docs": [
                  "Amount of liquidity to repay - u64::MAX for up to 100% of borrowed amount"
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "FlashLoan",
            "fields": [
              {
                "name": "amount",
                "docs": [
                  "The amount that is to be borrowed - u64::MAX for up to 100% of available liquidity"
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "DepositReserveLiquidityAndObligationCollateral",
            "fields": [
              {
                "name": "liquidity_amount",
                "docs": [
                  "Amount of liquidity to deposit in exchange"
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "WithdrawObligationCollateralAndRedeemReserveCollateral",
            "fields": [
              {
                "name": "collateral_amount",
                "docs": [
                  "liquidity_amount is the amount of collateral tokens to withdraw"
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "UpdateReserveConfig",
            "fields": [
              {
                "name": "config",
                "docs": [
                  "Reserve config to update to"
                ],
                "type": {
                  "defined": "ReserveConfig"
                }
              }
            ]
          },
          {
            "name": "LiquidateObligationAndRedeemReserveCollateral",
            "fields": [
              {
                "name": "liquidity_amount",
                "docs": [
                  "Amount of liquidity to repay - u64::MAX for up to 100% of borrowed amount"
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "RedeemFees"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "UnknownError",
      "msg": "unknown"
    },
    {
      "code": 6001,
      "name": "InvalidCluster",
      "msg": "connected to invalid cluster"
    },
    {
      "code": 6002,
      "name": "InvalidInitAccount",
      "msg": "invalid initialization account"
    },
    {
      "code": 6003,
      "name": "MathOverflow",
      "msg": "math overflow"
    },
    {
      "code": 6004,
      "name": "MathUnderflow",
      "msg": "math underflow"
    },
    {
      "code": 6005,
      "name": "MintPaused",
      "msg": "mint is paused so cannot execute"
    },
    {
      "code": 6006,
      "name": "InvalidSolendReserveData",
      "msg": "issue unpacking solend reserve account"
    },
    {
      "code": 6007,
      "name": "SolendInteractionError",
      "msg": "failed to construct solend instruction"
    },
    {
      "code": 6008,
      "name": "InsufficientLiquidity",
      "msg": "insufficient liquidity balance"
    },
    {
      "code": 6009,
      "name": "InsufficientCollateral",
      "msg": "insufficient collateral balance"
    }
  ]
};

export const IDL: CofiStrategy = {
  "version": "0.1.0",
  "name": "cofi_strategy",
  "instructions": [
    {
      "name": "initialize",
      "docs": [
        "initialize strategy account"
      ],
      "accounts": [
        {
          "name": "initializer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "strategy",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liquidityMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "liquidity mint and supply accounts"
          ]
        },
        {
          "name": "collateralMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "collateral mint and supply accounts"
          ]
        },
        {
          "name": "collateralReserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "strategyProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "solendReserve",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "version",
          "type": "u8"
        },
        {
          "name": "activate",
          "type": "bool"
        },
        {
          "name": "depositInstruction",
          "type": "bytes"
        },
        {
          "name": "mintToInstruction",
          "type": "bytes"
        },
        {
          "name": "withdrawInstruction",
          "type": "bytes"
        },
        {
          "name": "redeemInstruction",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "deposit",
      "docs": [
        "deposit liqudity into strategy and receive collateral"
      ],
      "accounts": [
        {
          "name": "sourceLiquidityAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "sourceLiquidityAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destinationCollateralAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "strategy",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdraw",
      "docs": [
        "withdraw liquidity from strategy and receive collateral"
      ],
      "accounts": [
        {
          "name": "sourceCollateralAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "sourceCollateralAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destinationLiquidityAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "strategy",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateExchangeRate",
      "docs": [
        "get up-to-date exchange rate"
      ],
      "accounts": [
        {
          "name": "strategy",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "pauseOrUnpause",
      "docs": [
        "pause or unpause strategy interactions"
      ],
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "strategy",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "strategy",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "docs": [
              "pda bump"
            ],
            "type": "u8"
          },
          {
            "name": "version",
            "docs": [
              "strategy account version"
            ],
            "type": "u8"
          },
          {
            "name": "isActive",
            "docs": [
              "any instruction involving this strategy account requires `is_active==true'"
            ],
            "type": "bool"
          },
          {
            "name": "lastUpdate",
            "docs": [
              "last update slot"
            ],
            "type": {
              "defined": "LastUpdate"
            }
          },
          {
            "name": "liquidity",
            "docs": [
              "liquidity spl-token information"
            ],
            "type": {
              "defined": "StrategyLiquidity"
            }
          },
          {
            "name": "collateral",
            "docs": [
              "collateral spl-token information"
            ],
            "type": {
              "defined": "StrategyCollateral"
            }
          },
          {
            "name": "strategyProgramId",
            "docs": [
              "program id of underlying defi protocol e.g. Solend program"
            ],
            "type": "publicKey"
          },
          {
            "name": "depositInstruction",
            "docs": [
              "deposit or equivalent instruction discriminator"
            ],
            "type": {
              "defined": "StrategyInstruction"
            }
          },
          {
            "name": "mintToInstruction",
            "docs": [
              "mint_to or equivalent instruciton discriminator"
            ],
            "type": {
              "defined": "StrategyInstruction"
            }
          },
          {
            "name": "withdrawInstruction",
            "docs": [
              "withdraw or equivalent instruction discriminator"
            ],
            "type": {
              "defined": "StrategyInstruction"
            }
          },
          {
            "name": "redeemInstruction",
            "docs": [
              "redeem or equivalent instruction info"
            ],
            "type": {
              "defined": "StrategyInstruction"
            }
          },
          {
            "name": "exchangeRate",
            "docs": [
              "liquidity to collateral exchange rate"
            ],
            "type": "u128"
          },
          {
            "name": "authority",
            "docs": [
              "strategy account authority"
            ],
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ReserveConfig",
      "docs": [
        "Reserve configuration values"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "optimalUtilizationRate",
            "docs": [
              "Optimal utilization rate, as a percentage"
            ],
            "type": "u8"
          },
          {
            "name": "loanToValueRatio",
            "docs": [
              "Target ratio of the value of borrows to deposits, as a percentage",
              "0 if use as collateral is disabled"
            ],
            "type": "u8"
          },
          {
            "name": "liquidationBonus",
            "docs": [
              "Bonus a liquidator gets when repaying part of an unhealthy obligation, as a percentage"
            ],
            "type": "u8"
          },
          {
            "name": "liquidationThreshold",
            "docs": [
              "Loan to value ratio at which an obligation can be liquidated, as a percentage"
            ],
            "type": "u8"
          },
          {
            "name": "minBorrowRate",
            "docs": [
              "Min borrow APY"
            ],
            "type": "u8"
          },
          {
            "name": "optimalBorrowRate",
            "docs": [
              "Optimal (utilization) borrow APY"
            ],
            "type": "u8"
          },
          {
            "name": "maxBorrowRate",
            "docs": [
              "Max borrow APY"
            ],
            "type": "u8"
          },
          {
            "name": "fees",
            "docs": [
              "Program owner fees assessed, separate from gains due to interest accrual"
            ],
            "type": {
              "defined": "ReserveFees"
            }
          },
          {
            "name": "depositLimit",
            "docs": [
              "Maximum deposit limit of liquidity in native units, u64::MAX for inf"
            ],
            "type": "u64"
          },
          {
            "name": "borrowLimit",
            "docs": [
              "Borrows disabled"
            ],
            "type": "u64"
          },
          {
            "name": "feeReceiver",
            "docs": [
              "Reserve liquidity fee receiver address"
            ],
            "type": "publicKey"
          },
          {
            "name": "protocolLiquidationFee",
            "docs": [
              "Cut of the liquidation bonus that the protocol receives, as a percentage"
            ],
            "type": "u8"
          },
          {
            "name": "protocolTakeRate",
            "docs": [
              "Protocol take rate is the amount borrowed interest protocol recieves, as a percentage"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "ReserveFees",
      "docs": [
        "Additional fee information on a reserve",
        "",
        "These exist separately from interest accrual fees, and are specifically for the program owner",
        "and frontend host. The fees are paid out as a percentage of liquidity token amounts during",
        "repayments and liquidations."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "borrowFeeWad",
            "docs": [
              "Fee assessed on `BorrowObligationLiquidity`, expressed as a Wad.",
              "Must be between 0 and 10^18, such that 10^18 = 1.  A few examples for",
              "clarity:",
              "1% = 10_000_000_000_000_000",
              "0.01% (1 basis point) = 100_000_000_000_000",
              "0.00001% (Aave borrow fee) = 100_000_000_000"
            ],
            "type": "u64"
          },
          {
            "name": "flashLoanFeeWad",
            "docs": [
              "Fee for flash loan, expressed as a Wad.",
              "0.3% (Aave flash loan fee) = 3_000_000_000_000_000"
            ],
            "type": "u64"
          },
          {
            "name": "hostFeePercentage",
            "docs": [
              "Amount of fee going to host account, if provided in liquidate and repay"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "LastUpdate",
      "docs": [
        "Last update state"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "slot",
            "docs": [
              "Last slot when updated"
            ],
            "type": "u64"
          },
          {
            "name": "stale",
            "docs": [
              "True when marked stale, false when slot updated"
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "StrategyLiquidity",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mintPubkey",
            "docs": [
              "liquidity mint address"
            ],
            "type": "publicKey"
          },
          {
            "name": "mintDecimals",
            "docs": [
              "liquidity mint decimals"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "StrategyCollateral",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mintPubkey",
            "docs": [
              "collateral mint address"
            ],
            "type": "publicKey"
          },
          {
            "name": "mintDecimals",
            "docs": [
              "collateral decimals"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "StrategyConfig",
      "type": {
        "kind": "struct",
        "fields": []
      }
    },
    {
      "name": "StrategyInstruction",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "discriminator",
            "docs": [
              "discriminators for strategy instructions"
            ],
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "LendingInstruction",
      "docs": [
        "Instructions supported by the lending program."
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "InitLendingMarket",
            "fields": [
              {
                "name": "owner",
                "docs": [
                  "Owner authority which can add new reserves"
                ],
                "type": "publicKey"
              },
              {
                "name": "quote_currency",
                "docs": [
                  "Currency market prices are quoted in",
                  "e.g. \"USD\" null padded (`*b\"USD\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\"`) or SPL token mint pubkey"
                ],
                "type": {
                  "array": [
                    "u8",
                    32
                  ]
                }
              }
            ]
          },
          {
            "name": "SetLendingMarketOwner",
            "fields": [
              {
                "name": "new_owner",
                "docs": [
                  "The new owner"
                ],
                "type": "publicKey"
              }
            ]
          },
          {
            "name": "InitReserve",
            "fields": [
              {
                "name": "liquidity_amount",
                "docs": [
                  "Initial amount of liquidity to deposit into the new reserve"
                ],
                "type": "u64"
              },
              {
                "name": "config",
                "docs": [
                  "Reserve configuration values"
                ],
                "type": {
                  "defined": "ReserveConfig"
                }
              }
            ]
          },
          {
            "name": "RefreshReserve"
          },
          {
            "name": "DepositReserveLiquidity",
            "fields": [
              {
                "name": "liquidity_amount",
                "docs": [
                  "Amount of liquidity to deposit in exchange for collateral tokens"
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "RedeemReserveCollateral",
            "fields": [
              {
                "name": "collateral_amount",
                "docs": [
                  "Amount of collateral tokens to redeem in exchange for liquidity"
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "InitObligation"
          },
          {
            "name": "RefreshObligation"
          },
          {
            "name": "DepositObligationCollateral",
            "fields": [
              {
                "name": "collateral_amount",
                "docs": [
                  "Amount of collateral tokens to deposit"
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "WithdrawObligationCollateral",
            "fields": [
              {
                "name": "collateral_amount",
                "docs": [
                  "Amount of collateral tokens to withdraw - u64::MAX for up to 100% of deposited amount"
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "BorrowObligationLiquidity",
            "fields": [
              {
                "name": "liquidity_amount",
                "docs": [
                  "Amount of liquidity to borrow - u64::MAX for 100% of borrowing power"
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "RepayObligationLiquidity",
            "fields": [
              {
                "name": "liquidity_amount",
                "docs": [
                  "Amount of liquidity to repay - u64::MAX for 100% of borrowed amount"
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "LiquidateObligation",
            "fields": [
              {
                "name": "liquidity_amount",
                "docs": [
                  "Amount of liquidity to repay - u64::MAX for up to 100% of borrowed amount"
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "FlashLoan",
            "fields": [
              {
                "name": "amount",
                "docs": [
                  "The amount that is to be borrowed - u64::MAX for up to 100% of available liquidity"
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "DepositReserveLiquidityAndObligationCollateral",
            "fields": [
              {
                "name": "liquidity_amount",
                "docs": [
                  "Amount of liquidity to deposit in exchange"
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "WithdrawObligationCollateralAndRedeemReserveCollateral",
            "fields": [
              {
                "name": "collateral_amount",
                "docs": [
                  "liquidity_amount is the amount of collateral tokens to withdraw"
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "UpdateReserveConfig",
            "fields": [
              {
                "name": "config",
                "docs": [
                  "Reserve config to update to"
                ],
                "type": {
                  "defined": "ReserveConfig"
                }
              }
            ]
          },
          {
            "name": "LiquidateObligationAndRedeemReserveCollateral",
            "fields": [
              {
                "name": "liquidity_amount",
                "docs": [
                  "Amount of liquidity to repay - u64::MAX for up to 100% of borrowed amount"
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "RedeemFees"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "UnknownError",
      "msg": "unknown"
    },
    {
      "code": 6001,
      "name": "InvalidCluster",
      "msg": "connected to invalid cluster"
    },
    {
      "code": 6002,
      "name": "InvalidInitAccount",
      "msg": "invalid initialization account"
    },
    {
      "code": 6003,
      "name": "MathOverflow",
      "msg": "math overflow"
    },
    {
      "code": 6004,
      "name": "MathUnderflow",
      "msg": "math underflow"
    },
    {
      "code": 6005,
      "name": "MintPaused",
      "msg": "mint is paused so cannot execute"
    },
    {
      "code": 6006,
      "name": "InvalidSolendReserveData",
      "msg": "issue unpacking solend reserve account"
    },
    {
      "code": 6007,
      "name": "SolendInteractionError",
      "msg": "failed to construct solend instruction"
    },
    {
      "code": 6008,
      "name": "InsufficientLiquidity",
      "msg": "insufficient liquidity balance"
    },
    {
      "code": 6009,
      "name": "InsufficientCollateral",
      "msg": "insufficient collateral balance"
    }
  ]
};
