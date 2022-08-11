"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDL = void 0;
exports.IDL = {
    "version": "0.1.0",
    "name": "cofi",
    "instructions": [
        {
            "name": "initCofiMint",
            "docs": [
                "initialize cofi mint"
            ],
            "accounts": [
                {
                    "name": "initializer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "feeReceiver",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "feeReceiverAccount",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "cofiMint",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "liquidityMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "liquidityReserve",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "collateralMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "collateralReserve",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "strategy",
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
                    "name": "withdrawFeeRate",
                    "type": "u32"
                }
            ]
        },
        {
            "name": "initCofiAcc",
            "docs": [
                "initialize cofi account"
            ],
            "accounts": [
                {
                    "name": "initializer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "owner",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "account",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "mint",
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
            "args": []
        },
        {
            "name": "initCofiTimedAcc",
            "accounts": [
                {
                    "name": "initializer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "owner",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "account",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "mint",
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
                    "name": "expiration",
                    "type": "i64"
                }
            ]
        },
        {
            "name": "initCofiStake",
            "docs": [
                "initialize cofi stake"
            ],
            "accounts": [
                {
                    "name": "initializer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "staker",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "recipient",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "cofiStake",
                    "isMut": true,
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
            "args": []
        },
        {
            "name": "deposit",
            "docs": [
                "main logic"
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
                    "name": "destinationCofiAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "cofiMint",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "cofiMintCollateralReserve",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "cofiStrategy",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "cofiStrategyProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clock",
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
                    "name": "cofiAccountAuthority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "sourceCofiAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "destinationLiquidityAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "cofiMint",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "cofiMintCollateralReserve",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "feeReceiverAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "cofiStrategy",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "cofiStrategyProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clock",
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
            "name": "stake",
            "accounts": [
                {
                    "name": "stakerAccountAuthority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "stakerCofiAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "beneficiaryCofiAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "cofiStakePair",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "cofiMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "cofiStrategy",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "cofiStrategyProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clock",
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
            "name": "unstake",
            "accounts": [
                {
                    "name": "stakerAccountAuthority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "stakerCofiAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "beneficiaryCofiAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "cofiStakePair",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "cofiMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "cofiStrategy",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "cofiStrategyProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clock",
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
            "name": "pauseOrUnpause",
            "docs": [
                "authority only interactions"
            ],
            "accounts": [
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "cofiMint",
                    "isMut": true,
                    "isSigner": false
                }
            ],
            "args": []
        },
        {
            "name": "updateWithdrawFee",
            "accounts": [
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "cofiMint",
                    "isMut": true,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "withdrawFeeRate",
                    "type": "u32"
                }
            ]
        },
        {
            "name": "setFeeReceiver",
            "accounts": [
                {
                    "name": "initializer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "mintAuthority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "feeReceiver",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "feeReceiverAccount",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "cofiMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        }
    ],
    "accounts": [
        {
            "name": "cofiAccount",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "shareAmount",
                        "docs": [
                            "total shares allocated to user"
                        ],
                        "type": "u64"
                    },
                    {
                        "name": "stakeAmount",
                        "docs": [
                            "total liquidity staked into user (excluding the user themselves)"
                        ],
                        "type": "u64"
                    },
                    {
                        "name": "depositAmount",
                        "docs": [
                            "total liquidity deposited by user"
                        ],
                        "type": "u64"
                    },
                    {
                        "name": "mint",
                        "type": "publicKey"
                    },
                    {
                        "name": "owner",
                        "type": "publicKey"
                    },
                    {
                        "name": "expiration",
                        "type": "i64"
                    },
                    {
                        "name": "extraSpace",
                        "type": {
                            "array": [
                                "u8",
                                512
                            ]
                        }
                    }
                ]
            }
        },
        {
            "name": "cofiMint",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "version",
                        "docs": [
                            "cofi mint version"
                        ],
                        "type": "u8"
                    },
                    {
                        "name": "bump",
                        "docs": [
                            "pda bump"
                        ],
                        "type": "u8"
                    },
                    {
                        "name": "withdrawFeeRate",
                        "docs": [
                            "withdraw fee ppm"
                        ],
                        "type": "u32"
                    },
                    {
                        "name": "isActive",
                        "docs": [
                            "all instructions paused"
                        ],
                        "type": "bool"
                    },
                    {
                        "name": "totalShares",
                        "docs": [
                            "total shares minted"
                        ],
                        "type": "u64"
                    },
                    {
                        "name": "liquidityReserve",
                        "docs": [
                            "liquidity account"
                        ],
                        "type": {
                            "defined": "SplReserve"
                        }
                    },
                    {
                        "name": "collateralReserve",
                        "docs": [
                            "collateral account"
                        ],
                        "type": {
                            "defined": "SplReserve"
                        }
                    },
                    {
                        "name": "authority",
                        "docs": [
                            "mint authority"
                        ],
                        "type": "publicKey"
                    },
                    {
                        "name": "activeStrategy",
                        "docs": [
                            "strategy used for interest generation. pubkey for strategy account."
                        ],
                        "type": "publicKey"
                    },
                    {
                        "name": "feeReceiver",
                        "docs": [
                            "fee receiver signateur"
                        ],
                        "type": "publicKey"
                    },
                    {
                        "name": "feeReceiverAccount",
                        "docs": [
                            "fee receiver cofi account"
                        ],
                        "type": "publicKey"
                    },
                    {
                        "name": "extraSpace",
                        "type": {
                            "array": [
                                "u8",
                                512
                            ]
                        }
                    }
                ]
            }
        },
        {
            "name": "cofiStake",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "bump",
                        "type": "u8"
                    },
                    {
                        "name": "amount",
                        "type": "u64"
                    },
                    {
                        "name": "staker",
                        "type": "publicKey"
                    },
                    {
                        "name": "recipient",
                        "type": "publicKey"
                    },
                    {
                        "name": "extraSpace",
                        "type": {
                            "array": [
                                "u8",
                                512
                            ]
                        }
                    }
                ]
            }
        }
    ],
    "types": [
        {
            "name": "SplReserve",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "mint",
                        "type": "publicKey"
                    },
                    {
                        "name": "account",
                        "type": "publicKey"
                    },
                    {
                        "name": "amount",
                        "type": "u64"
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
            "name": "InvalidWithdrawFee",
            "msg": "invalid withdraw fee rate"
        },
        {
            "code": 6004,
            "name": "MathOverflow",
            "msg": "math overflow"
        },
        {
            "code": 6005,
            "name": "MathUnderflow",
            "msg": "math underflow"
        },
        {
            "code": 6006,
            "name": "InsufficientShares",
            "msg": "not enough shares of collateral allocated to account"
        },
        {
            "code": 6007,
            "name": "InsufficientDeposits",
            "msg": "not enough deposited liquidity in account"
        },
        {
            "code": 6008,
            "name": "InsuffiientStakes",
            "msg": "not enough liquidity staked into account"
        },
        {
            "code": 6009,
            "name": "ExceedsWithdrawable",
            "msg": "exceeds withdrawable liquidity amount"
        },
        {
            "code": 6010,
            "name": "MintPaused",
            "msg": "mint is paused so cannot execute"
        },
        {
            "code": 6011,
            "name": "LockedTimedStake",
            "msg": "locked time stake"
        }
    ]
};
