export type CofiTimer = {
  "version": "0.1.0",
  "name": "cofi_timer",
  "instructions": [
    {
      "name": "initTimedStake",
      "accounts": [
        {
          "name": "initializer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "stakerAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "staker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "recipient",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "timedCofiAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "timedCofiStakePair",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "cofiTimer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "cofiMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cofi",
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
    }
  ],
  "accounts": [
    {
      "name": "cofiTimer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "stakerAccount",
            "type": "publicKey"
          },
          {
            "name": "recipientAccount",
            "type": "publicKey"
          },
          {
            "name": "timerCofiAccount",
            "type": "publicKey"
          },
          {
            "name": "timerBump",
            "type": "u8"
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
    }
  ]
};

export const IDL: CofiTimer = {
  "version": "0.1.0",
  "name": "cofi_timer",
  "instructions": [
    {
      "name": "initTimedStake",
      "accounts": [
        {
          "name": "initializer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "stakerAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "staker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "recipient",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "timedCofiAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "timedCofiStakePair",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "cofiTimer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "cofiMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cofi",
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
    }
  ],
  "accounts": [
    {
      "name": "cofiTimer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "stakerAccount",
            "type": "publicKey"
          },
          {
            "name": "recipientAccount",
            "type": "publicKey"
          },
          {
            "name": "timerCofiAccount",
            "type": "publicKey"
          },
          {
            "name": "timerBump",
            "type": "u8"
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
    }
  ]
};
