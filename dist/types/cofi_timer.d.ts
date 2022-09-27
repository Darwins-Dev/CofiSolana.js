export declare type CofiTimer = {
    "version": "0.1.0";
    "name": "cofi_timer";
    "instructions": [
        {
            "name": "initTimerOwnedAccount";
            "docs": [
                "initializes timer and initializes and deposits into timer owned account"
            ];
            "accounts": [
                {
                    "name": "initializer";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "staker";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "beneficiary";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "timerOwnedAccount";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "cofiTimer";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "sourceLiquidityAuthority";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "sourceLiquidityAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "cofiMintCollateralReserve";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "cofiMint";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "cofiStrategy";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "cofiProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "cofiStrategyProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "systemProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "rent";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "clock";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "expiration";
                    "type": "i64";
                },
                {
                    "name": "liquidityAmount";
                    "type": "u64";
                }
            ];
        },
        {
            "name": "collectDeposit";
            "docs": [
                "withdraws the initial deposit from the `timer_owned_account`"
            ];
            "accounts": [
                {
                    "name": "cofiTimer";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "timerOwnedAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "stakerCofiAccount";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "stakerLiquidityAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "cofiMintCollateralReserve";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "cofiMint";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "cofiStrategy";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "feeReceiver";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "cofiProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "cofiStrategyProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "clock";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [];
        },
        {
            "name": "collectInterest";
            "accounts": [
                {
                    "name": "cofiTimer";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "timerOwnedAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "beneficiaryCofiAccount";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "beneficiaryLiquidityAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "cofiMintCollateralReserve";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "cofiMint";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "cofiStrategy";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "feeReceiver";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "cofiProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "cofiStrategyProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "clock";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [];
        }
    ];
    "accounts": [
        {
            "name": "cofiTimer";
            "docs": [
                "holds maturity date, the staker, the cofi-account that will temporarily holds shares, and eventual beneficiary of the generated interest"
            ];
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "stakerAccount";
                        "type": "publicKey";
                    },
                    {
                        "name": "beneficiaryAccount";
                        "type": "publicKey";
                    },
                    {
                        "name": "timerOwnedAccount";
                        "type": "publicKey";
                    },
                    {
                        "name": "timerBump";
                        "type": "u8";
                    },
                    {
                        "name": "expiration";
                        "type": "i64";
                    },
                    {
                        "name": "amount";
                        "type": "u64";
                    },
                    {
                        "name": "depositCollected";
                        "type": "bool";
                    },
                    {
                        "name": "interestCollected";
                        "type": "bool";
                    },
                    {
                        "name": "extraSpace";
                        "type": {
                            "array": [
                                "u8",
                                512
                            ];
                        };
                    }
                ];
            };
        }
    ];
    "events": [
        {
            "name": "CofiTimerEvent";
            "fields": [
                {
                    "name": "timerAccount";
                    "type": "publicKey";
                    "index": false;
                }
            ];
        }
    ];
};
export declare const IDL: CofiTimer;
