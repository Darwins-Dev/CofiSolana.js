"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COFI_TIMER_RENT_EXEMPT = exports.COFI_STAKE_RENT_EXEMPT = exports.COFI_ACCOUNT_RENT_EXEMPT = exports.WAD = void 0;
const anchor_1 = require("@project-serum/anchor");
exports.WAD = new anchor_1.BN('1000000000000000000');
exports.COFI_ACCOUNT_RENT_EXEMPT = new anchor_1.BN("5178200");
exports.COFI_STAKE_RENT_EXEMPT = new anchor_1.BN("5080800");
exports.COFI_TIMER_RENT_EXEMPT = new anchor_1.BN("5310480");
