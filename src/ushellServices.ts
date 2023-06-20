import CrossApplicationNavigation from 'sap/ushell/services/CrossApplicationNavigation';
import Container from 'sap/ushell/Container';
import UserInfo from 'sap/ushell/services/UserInfo';

interface SupportedResult {
    supported: boolean;
}

export default class UshellServices {

    // @ts-ignore
    public static container: Container = UshellServices.isSapEnv() ? sap.ushell.Container : {};

    public static crossAppNavigate(sSemObject: string, sAction: string, oParams: object, sAppend?: string) {
        if (UshellServices.isSapEnv()) {
            // @ts-ignore
            sap.ushell.Container.getServiceAsync('CrossApplicationNavigation').then(
                // @ts-ignore
                function (oService) {
                    const hash =
                        (oService &&
                            oService.hrefForExternal({
                                target: {
                                    semanticObject: sSemObject,
                                    action: sAction,
                                },
                                params: oParams,
                            })) ||
                        '';
                    const sintent = '#' + sSemObject + '-' + sAction;

                    oService.isIntentSupported([sintent]).done(
                        function (olntentSupported: object) {
                            // @ts-ignore
                            if (
                                olntentSupported &&
                                // @ts-ignore
                                olntentSupported[sintent] &&
                                // @ts-ignore
                                olntentSupported[sintent].supported === true
                            ) {
                                oService.toExternal({
                                    target: {
                                        shellHash: (sAppend ? hash + '&' + sAppend : hash)
                                    },
                                });
                            } else {
                                console.error('Intent ' + sintent + ' is not supported');
                            }
                            // @ts-ignore
                        }.bind(this),
                    );
                }.bind(this),
            );
        }
    }
    // min version for use 1.55
    public static async tsCrossAppVersion(sSemObject: string, sAction: string, oParams: object, sAppend?: string) {
        if (UshellServices.isSapEnv()) {
            const crossAppNav = (await UshellServices.container.getServiceAsync('CrossApplicationNavigation')) as CrossApplicationNavigation;

            const hash = crossAppNav &&
                crossAppNav.hrefForExternal(
                    {
                        target: { semanticObject: sSemObject, action: sAction },
                        params: oParams,
                    },
                    {},
                    false,// boolean to tru for be async func 
                ) || '';

            const oIntent = {
                target: {
                    semanticObject: sSemObject,
                    action: sAction,
                }
            };

            const aResponses = (await crossAppNav.isNavigationSupported([oIntent])) as SupportedResult[];
            if (aResponses && aResponses[0] && aResponses[0].supported) {
                crossAppNav.toExternal({
                    target: {
                        shellHash: (sAppend ? hash + '&' + sAppend : hash)
                    },
                });
            } else {
                console.error('Intent #' + sSemObject + '-' + sAction + ' is not supported');
            }
        }
    }
    public static async getUserInfo() {
        if (UshellServices.isSapEnv()) {
            const userInfoService = (await UshellServices.container.getServiceAsync('UserInfo')) as any;
            const userInfo = userInfoService.getUser() as UserInfo;
            return {
                id: userInfo.getId(),
                firstName: userInfo.getFirstName(),
                lastName: userInfo.getLastName(),
                email: userInfo.getEmail(),
                fullName: userInfo.getFullName()
            }
        }
    }
    public static isSapEnv() {
        const sapApp = typeof window !== 'undefined' && window.hasOwnProperty('sap');
        const inLaunchpad = sapApp && !!sap.ushell;
        if (!sapApp || !inLaunchpad) {
            console.log("you are not in sap environment")
        }
        return sapApp && inLaunchpad
    }

}