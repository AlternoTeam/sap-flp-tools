"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeShellTitle = exports.toggleShellHeader = exports.getUserDetails = exports.tsCrossAppVersion = exports.crossAppNavigate = void 0;
const shellUtils_1 = require("./shellUtils");
const ushellServices_1 = require("./ushellServices");
// UshellServices
const getUserDetails = ushellServices_1.default.getUserInfo;
exports.getUserDetails = getUserDetails;
const crossAppNavigate = ushellServices_1.default.crossAppNavigate;
exports.crossAppNavigate = crossAppNavigate;
const tsCrossAppVersion = ushellServices_1.default.tsCrossAppVersion;
exports.tsCrossAppVersion = tsCrossAppVersion;
// ShellUtils
const toggleShellHeader = shellUtils_1.default.toggleShellHeader;
exports.toggleShellHeader = toggleShellHeader;
const changeShellTitle = shellUtils_1.default.changeShellTitle;
exports.changeShellTitle = changeShellTitle;
