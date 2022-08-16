export type CofiStrategy = {
  "version": "0.1.0",
  "name": "cofi_strategy",
  "instructions": [
    {
      "name": "initialize",
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
          "isMut": true,
          "isSigner": false,
          "docs": [
            "liquidity mint and supply accounts"
          ]
        },
        {
          "name": "collateralMint",
          "isMut": true,
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
          "name": "liquidityReserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "strategyProgram",
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
        }
      ]
    },
    {
      "name": "airdrop",
      "accounts": [
        {
          "name": "strategy",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liquidityMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liquidityReserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destinationLiquidityAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "deposit",
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
            "type": "u8"
          },
          {
            "name": "version",
            "type": "u8"
          },
          {
            "name": "isActive",
            "type": "bool"
          },
          {
            "name": "lastUpdate",
            "type": {
              "defined": "LastUpdate"
            }
          },
          {
            "name": "liquidity",
            "type": {
              "defined": "StrategyLiquidity"
            }
          },
          {
            "name": "collateral",
            "type": {
              "defined": "StrategyCollateral"
            }
          },
          {
            "name": "strategyProgramId",
            "type": "publicKey"
          },
          {
            "name": "depositInstruction",
            "docs": [
              "deposit instruction info"
            ],
            "type": {
              "defined": "StrategyInstruction"
            }
          },
          {
            "name": "mintToInstruction",
            "docs": [
              "mint_to instruciton info"
            ],
            "type": {
              "defined": "StrategyInstruction"
            }
          },
          {
            "name": "withdrawInstruction",
            "docs": [
              "withdraw instruction info"
            ],
            "type": {
              "defined": "StrategyInstruction"
            }
          },
          {
            "name": "redeemInstruction",
            "docs": [
              "redeem instruction info"
            ],
            "type": {
              "defined": "StrategyInstruction"
            }
          },
          {
            "name": "exchangeRate",
            "docs": [
              "configurables",
              "liquidity to collateral exchange rate"
            ],
            "type": "u128"
          }
        ]
      }
    }
  ],
  "types": [
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
          "isMut": true,
          "isSigner": false,
          "docs": [
            "liquidity mint and supply accounts"
          ]
        },
        {
          "name": "collateralMint",
          "isMut": true,
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
          "name": "liquidityReserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "strategyProgram",
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
        }
      ]
    },
    {
      "name": "airdrop",
      "accounts": [
        {
          "name": "strategy",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liquidityMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liquidityReserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destinationLiquidityAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "deposit",
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
            "type": "u8"
          },
          {
            "name": "version",
            "type": "u8"
          },
          {
            "name": "isActive",
            "type": "bool"
          },
          {
            "name": "lastUpdate",
            "type": {
              "defined": "LastUpdate"
            }
          },
          {
            "name": "liquidity",
            "type": {
              "defined": "StrategyLiquidity"
            }
          },
          {
            "name": "collateral",
            "type": {
              "defined": "StrategyCollateral"
            }
          },
          {
            "name": "strategyProgramId",
            "type": "publicKey"
          },
          {
            "name": "depositInstruction",
            "docs": [
              "deposit instruction info"
            ],
            "type": {
              "defined": "StrategyInstruction"
            }
          },
          {
            "name": "mintToInstruction",
            "docs": [
              "mint_to instruciton info"
            ],
            "type": {
              "defined": "StrategyInstruction"
            }
          },
          {
            "name": "withdrawInstruction",
            "docs": [
              "withdraw instruction info"
            ],
            "type": {
              "defined": "StrategyInstruction"
            }
          },
          {
            "name": "redeemInstruction",
            "docs": [
              "redeem instruction info"
            ],
            "type": {
              "defined": "StrategyInstruction"
            }
          },
          {
            "name": "exchangeRate",
            "docs": [
              "configurables",
              "liquidity to collateral exchange rate"
            ],
            "type": "u128"
          }
        ]
      }
    }
  ],
  "types": [
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
