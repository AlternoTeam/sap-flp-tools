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
const sapUtils_1 = require("./sapUtils");
class UshellServices {
    static crossAppNavigate(sSemObject, sAction, oParams, sAppend) {
        if ((0, sapUtils_1.isSapEnv)()) {
            // @ts-ignore
            sap.ushell.Container.getServiceAsync('CrossApplicationNavigation').then(
            // @ts-ignore
            function (oService) {
                const hash = (oService &&
                    oService.hrefForExternal({
                        target: {
                            semanticObject: sSemObject,
                            action: sAction,
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
                                shellHash: sAppend ? hash + '&' + sAppend : hash,
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
    }
    // min version for use 1.55
    static tsCrossAppVersion(sSemObject, sAction, oParams, sAppend) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((0, sapUtils_1.isSapEnv)()) {
                const crossAppNav = (yield UshellServices.container.getServiceAsync('CrossApplicationNavigation'));
                const hash = (crossAppNav && crossAppNav.hrefForExternal({
                    target: { semanticObject: sSemObject, action: sAction },
                    params: oParams,
                }, {}, false)) || '';
                const oIntent = {
                    target: {
                        semanticObject: sSemObject,
                        action: sAction,
                    },
                };
                const aResponses = (yield crossAppNav.isNavigationSupported([oIntent]));
                if (aResponses && aResponses[0] && aResponses[0].supported) {
                    crossAppNav.toExternal({
                        target: {
                            shellHash: sAppend ? hash + '&' + sAppend : hash,
                        },
                    });
                }
                else {
                    console.error('Intent #' + sSemObject + '-' + sAction + ' is not supported');
                }
            }
        });
    }
    static getUserInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            if ((0, sapUtils_1.isSapEnv)()) {
                const userInfoService = (yield UshellServices.container.getServiceAsync('UserInfo'));
                const userInfo = userInfoService.getUser();
                return {
                    id: userInfo.getId(),
                    firstName: userInfo.getFirstName(),
                    lastName: userInfo.getLastName(),
                    email: userInfo.getEmail(),
                    fullName: userInfo.getFullName(),
                };
            }
        });
    }
}
// @ts-ignore
UshellServices.container = (0, sapUtils_1.isSapEnv)() ? sap.ushell.Container : {};
exports.default = UshellServices;
