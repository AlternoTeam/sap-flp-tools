"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsCrossAppVersion = exports.crossAppNavigate = void 0;
const Container_1 = require("sap/ushell/Container");
class LaunchpadUtils {
    static crossAppNavigate(sSemObject, sAction, oParams, sAppend) {
        if (typeof window !== 'undefined' && window.hasOwnProperty('sap')) {
            // @ts-ignore
            sap.ushell.Container.getServiceAsync('CrossApplicationNavigation').then(
            // @ts-ignore
            function (oService) {
                const hash = (oService &&
                    oService.hrefForExternal({
                        target: {
                            semanticObject: sSemObject,
                            action: sAppend ? sAction + sAppend : sAction,
                        },
                        params: oParams,
                    })) ||
                    '';
                const sintent = '#' + sSemObject + '-' + sAction;
                oService.isIntentSupported([sintent]).done(function (olntentSupported) {
                    // @ts-ignore
                    if (olntentSupported &&
                        // @ts-ignore
                        olntentSupported[sintent] &&
                        // @ts-ignore
                        olntentSupported[sintent].supported === true) {
                        oService.toExternal({
                            target: {
                                shellHash: hash,
                            },
                        });
                    }
                    else {
                        console.error('Intent ' + sintent + ' is not supported');
                    }
                    // @ts-ignore
                }.bind(this));
            }.bind(this));
        }
        else {
            console.log('You must work in fiori launchpad');
        }
    }
    static tsCrossAppVersion(sSemObject, sAction, oParams, sAppend) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof window !== 'undefined' && window.hasOwnProperty('sap')) {
                const continaer = new Container_1.default();
                const crossAppNav = yield continaer.getServiceAsync('CrossApplicationNavigation');
                const hash = crossAppNav && (yield crossAppNav.hrefForExternal({
                    target: { semanticObject: sSemObject, action: sAppend ? sAction + sAppend : sAction },
                    params: oParams,
                }, {}, true)) || '';
                const sintent = {
                    target: {
                        semanticObject: sSemObject,
                        action: sAction
                    },
                    params: { A: "B" }
                };
                const sintentString = '#' + sSemObject + '-' + sAction;
                const aResponses = yield crossAppNav.isNavigationSupported([sintent]);
                if (aResponses && aResponses[0] && aResponses[0].supported) {
                    crossAppNav.toExternal({
                        target: {
                            shellHash: hash,
                        },
                    });
                }
                else {
                    console.error('Intent ' + sintentString + ' is not supported');
                }
            }
            else {
                console.log('You must work in fiori launchpad');
            }
        });
    }
}
exports.default = LaunchpadUtils;
const crossAppNavigate = LaunchpadUtils.crossAppNavigate;
exports.crossAppNavigate = crossAppNavigate;
const tsCrossAppVersion = LaunchpadUtils.tsCrossAppVersion;
exports.tsCrossAppVersion = tsCrossAppVersion;
