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
                    "isSigner": false
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
                    "name": "feeReceiver",
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
                    "name": "initialShares",
                    "type": "u64"
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
                    "name": "authority",
                    "isMut": false,
                    "isSigner": false
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
            "name": "initAssociatedCofiAcc",
            "docs": [
                "initialize associated cofi account"
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
                    "isSigner": false
                },
                {
                    "name": "account",
                    "isMut": true,
                    "isSigner": false
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
                    "name": "beneficiary",
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
                "liquidity onboarding"
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
            "docs": [
                "liquidity offboarding"
            ],
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
                    "name": "feeReceiver",
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
            "docs": [
                "stake instruction",
                "Simply put, transferring shares from staker to beneficiary."
            ],
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
                    "name": "feeReceiver",
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
            "docs": [
                "unstake instruction",
                "Simply put, transferring shares from beneficiary to staker."
            ],
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
            "name": "mergeAccounts",
            "docs": [
                "merge accounts instruction"
            ],
            "accounts": [
                {
                    "name": "sourceAccountAuthority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "sourceCofiAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "destinationCofiAccount",
                    "isMut": true,
                    "isSigner": false
                }
            ],
            "args": []
        },
        {
            "name": "transferStakerAuthority",
            "docs": [
                "transfer stake amount instruction"
            ],
            "accounts": [
                {
                    "name": "sourceAccountAuthority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "sourceCofiAccount",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "sourceStakePair",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "destinationStakePair",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "beneficiaryCofiAccount",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "cofiMint",
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
            "name": "stakeLockSwitch",
            "docs": [
                "lock/unlock [state::CofiStake]"
            ],
            "accounts": [
                {
                    "name": "stakerAccountAuthority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "stakerCofiAccount",
                    "isMut": false,
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
                }
            ],
            "args": []
        },
        {
            "name": "cofiAccountLockSwitch",
            "docs": [
                "lock/unlock [state::CofiAccount]"
            ],
            "accounts": [
                {
                    "name": "cofiAccountAuthority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "cofiAccount",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "cofiMint",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        },
        {
            "name": "pauseOrUnpause",
            "docs": [
                "pause/unpause [state::CofiMint]"
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
            "docs": [
                "change withdraw fee"
            ],
            "accounts": [
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "feeReceiver",
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
            "name": "transferMintAuthority",
            "docs": [
                "change cofi mint authority"
            ],
            "accounts": [
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "newAuthority",
                    "isMut": false,
                    "isSigner": false
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
            "name": "transferFeeReceiverAuthority",
            "docs": [
                "change cofi fee receiver authority"
            ],
            "accounts": [
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "newAuthority",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "cofiFeeReceiver",
                    "isMut": true,
                    "isSigner": false
                }
            ],
            "args": []
        },
        {
            "name": "collectFee",
            "docs": [
                "collect from fee receiver"
            ],
            "accounts": [
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "feeReceiver",
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
            "name": "closeCofiMint",
            "docs": [
                "close cofi mint"
            ],
            "accounts": [
                {
                    "name": "authority",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "cofiMint",
                    "isMut": true,
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
                            "shares of total collateral allocated this account."
                        ],
                        "type": "u64"
                    },
                    {
                        "name": "stakeAmount",
                        "docs": [
                            "total liquidity staked into account."
                        ],
                        "type": "u64"
                    },
                    {
                        "name": "depositAmount",
                        "docs": [
                            "total liquidity deposited by authority."
                        ],
                        "type": "u64"
                    },
                    {
                        "name": "mint",
                        "docs": [
                            "[state::CofiMint] this account was initialized with."
                        ],
                        "type": "publicKey"
                    },
                    {
                        "name": "authority",
                        "docs": [
                            "signer or \"owner\" of this account. Any change to state requires authority signature."
                        ],
                        "type": "publicKey"
                    },
                    {
                        "name": "isLocked",
                        "docs": [
                            "cannot interact with a locked account"
                        ],
                        "type": "bool"
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
            "name": "cofiFeeReceiver",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "shareAmount",
                        "docs": [
                            "share_amount allocated to fee receiver"
                        ],
                        "type": "u64"
                    },
                    {
                        "name": "rate",
                        "docs": [
                            "fee rate on interest generated"
                        ],
                        "type": "u32"
                    },
                    {
                        "name": "authority",
                        "docs": [
                            "authority of fee receiver"
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
            "name": "cofiMint",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "totalShares",
                        "docs": [
                            "total shares minted."
                        ],
                        "type": "u64"
                    },
                    {
                        "name": "authority",
                        "docs": [
                            "mint authority. any change to state requires authority signature."
                        ],
                        "type": "publicKey"
                    },
                    {
                        "name": "liquidityReserve",
                        "docs": [
                            "liquidity reserve. holds liquidity owned by this `CofiMint`"
                        ],
                        "type": {
                            "defined": "SplReserve"
                        }
                    },
                    {
                        "name": "collateralReserve",
                        "docs": [
                            "collateral reserve. holds collateral owned by this `CofiMint`."
                        ],
                        "type": {
                            "defined": "SplReserve"
                        }
                    },
                    {
                        "name": "activeStrategy",
                        "docs": [
                            "strategy used for interest generation. pubkey for strategy account."
                        ],
                        "type": "publicKey"
                    },
                    {
                        "name": "bump",
                        "docs": [
                            "`CofiMint` account pubkey pda bump"
                        ],
                        "type": "u8"
                    },
                    {
                        "name": "initializer",
                        "docs": [
                            "initializer address"
                        ],
                        "type": "publicKey"
                    },
                    {
                        "name": "isActive",
                        "docs": [
                            "withdraw fee ppm"
                        ],
                        "type": "bool"
                    },
                    {
                        "name": "minSlotsElapsedForRateUpdate",
                        "docs": [
                            "minimum slots elapsed to update exchange rate on strategy"
                        ],
                        "type": "u64"
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
                        "name": "amount",
                        "docs": [
                            "liquidity staked by staker to beneficiary"
                        ],
                        "type": "u64"
                    },
                    {
                        "name": "staker",
                        "docs": [
                            "staker cofi account"
                        ],
                        "type": "publicKey"
                    },
                    {
                        "name": "beneficiary",
                        "docs": [
                            "beneficiary cofi account"
                        ],
                        "type": "publicKey"
                    },
                    {
                        "name": "isLocked",
                        "docs": [
                            "Excluding [stake_lock_switch()], any instruciton involving this `CofiStake` requires `is_locked == false`"
                        ],
                        "type": "bool"
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
            "docs": [
                "Spl token reserve"
            ],
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "mint",
                        "docs": [
                            "spl token mint"
                        ],
                        "type": "publicKey"
                    },
                    {
                        "name": "account",
                        "docs": [
                            "spl token account"
                        ],
                        "type": "publicKey"
                    },
                    {
                        "name": "amount",
                        "docs": [
                            "amount of spl token held by [self.acccount]. avoid involving [self.account]"
                        ],
                        "type": "u64"
                    }
                ]
            }
        }
    ],
    "events": [
        {
            "name": "InitCofiAccountEvent",
            "fields": [
                {
                    "name": "authority",
                    "type": "publicKey",
                    "index": false
                },
                {
                    "name": "publicKey",
                    "type": "publicKey",
                    "index": false
                }
            ]
        },
        {
            "name": "InitStakeAccountEvent",
            "fields": [
                {
                    "name": "publicKey",
                    "type": "publicKey",
                    "index": false
                }
            ]
        },
        {
            "name": "DepositEvent",
            "fields": [
                {
                    "name": "amount",
                    "type": "u64",
                    "index": false
                },
                {
                    "name": "destinationAccount",
                    "type": "publicKey",
                    "index": false
                }
            ]
        },
        {
            "name": "StakeEvent",
            "fields": [
                {
                    "name": "amount",
                    "type": "u64",
                    "index": false
                },
                {
                    "name": "stakePair",
                    "type": "publicKey",
                    "index": false
                }
            ]
        },
        {
            "name": "TransferStakerAuthEvent",
            "fields": [
                {
                    "name": "sourceStakePair",
                    "type": "publicKey",
                    "index": false
                },
                {
                    "name": "destinationStakePair",
                    "type": "publicKey",
                    "index": false
                }
            ]
        },
        {
            "name": "UnstakeEvent",
            "fields": [
                {
                    "name": "amount",
                    "type": "u64",
                    "index": false
                },
                {
                    "name": "stakePair",
                    "type": "publicKey",
                    "index": false
                }
            ]
        },
        {
            "name": "WithdrawEvent",
            "fields": [
                {
                    "name": "amount",
                    "type": "u64",
                    "index": false
                },
                {
                    "name": "sourceAccount",
                    "type": "publicKey",
                    "index": false
                }
            ]
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
            "name": "MathOverflow",
            "msg": "math overflow"
        },
        {
            "code": 6002,
            "name": "MathUnderflow",
            "msg": "math underflow"
        },
        {
            "code": 6003,
            "name": "InsufficientShares",
            "msg": "not enough shares of collateral allocated to account"
        },
        {
            "code": 6004,
            "name": "InsufficientDeposits",
            "msg": "not enough deposited liquidity in account"
        },
        {
            "code": 6005,
            "name": "InsuffiientStakes",
            "msg": "not enough liquidity staked into account"
        },
        {
            "code": 6006,
            "name": "ExceedsWithdrawable",
            "msg": "exceeds withdrawable liquidity amount"
        },
        {
            "code": 6007,
            "name": "MintPaused",
            "msg": "mint is paused so cannot execute"
        },
        {
            "code": 6008,
            "name": "AccountFrozen",
            "msg": "interacting with frozen account"
        },
        {
            "code": 6009,
            "name": "LockedStake",
            "msg": "interacting with locked stake account"
        },
        {
            "code": 6010,
            "name": "InvalidCofiMint",
            "msg": "incorrect mint account"
        },
        {
            "code": 6011,
            "name": "InvalidCofiStrategy",
            "msg": "invalid strategy"
        },
        {
            "code": 6012,
            "name": "InvalidAccountAuthority",
            "msg": "incorrect account authority"
        },
        {
            "code": 6013,
            "name": "InvalidStakerAccount",
            "msg": "incorrect staker of cofi stake account"
        },
        {
            "code": 6014,
            "name": "InvalidBeneficiaryAccount",
            "msg": "incorrect beneficiary of cofi stake account"
        }
    ]
};
