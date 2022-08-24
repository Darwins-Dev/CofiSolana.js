export declare type CofiTimer = {
    "version": "0.1.0";
    "name": "cofi_timer";
    "instructions": [
        {
            "name": "initTimerOwnedAccount";
            "accounts": [
                {
                    "name": "initializer";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "stakerAuthority";
                    "isMut": false;
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
                    "name": "timedCofiAccount";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "cofiTimer";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "cofiMint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "cofiProgram";
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
                }
            ];
            "args": [
                {
                    "name": "expiration";
                    "type": "i64";
                }
            ];
        },
        {
            "name": "stakeAndLock";
            "accounts": [
                {
                    "name": "stakerAccountAuthority";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "cofiTimer";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "stakerCofiAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "timedCofiAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "timedCofiStakePair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "cofiMint";
                    "isMut": true;
                    "isSigner": false;
                    "docs": [
                        "required accounts for staking"
                    ];
                },
                {
                    "name": "cofiStrategy";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "feeReceiverAccount";
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
            "args": [
                {
                    "name": "amount";
                    "type": "u64";
                }
            ];
        },
        {
            "name": "unlockUnstakeMerge";
            "accounts": [
                {
                    "name": "stakerAccountAuthority";
                    "isMut": false;
                    "isSigner": true;
                },
                {
                    "name": "cofiTimer";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "stakerCofiAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "beneficiaryCofiAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "timedCofiAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "timedCofiStakePair";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "cofiMint";
                    "isMut": false;
                    "isSigner": false;
                    "docs": [
                        "required accounts for unstaking"
                    ];
                },
                {
                    "name": "cofiStrategy";
                    "isMut": false;
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
                        "name": "timerCofiAccount";
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
};
export declare const IDL: CofiTimer;
