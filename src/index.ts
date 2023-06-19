import Container from "sap/ushell/Container";
import CrossApplicationNavigation from "sap/ushell/services/CrossApplicationNavigation";

interface supportedResult {
  supported: boolean
}
export default class LaunchpadUtils {
  public static crossAppNavigate(sSemObject: string, sAction: string, oParams: object, sAppend?: string) {
    if (typeof window !== 'undefined' && window.hasOwnProperty('sap')) {
      // @ts-ignore
      sap.ushell.Container.getServiceAsync('CrossApplicationNavigation').then(
        // @ts-ignore
        function (oService) {
          const hash =
            (oService &&
              oService.hrefForExternal({
                target: {
                  semanticObject: sSemObject,
                  action: sAppend ? sAction + sAppend : sAction,
                },
                params: oParams,
              })) ||
            '';
          const sintent = '#' + sSemObject + '=' + sAction;

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
                    shellHash: hash,
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
    } else {
      console.log('You must work in fiori launchpad');
    }
  }
  public static async tsCrossAppVersion(sSemObject: string, sAction: string, oParams: object, sAppend?: string) {
    if (typeof window !== 'undefined' && window.hasOwnProperty('sap')) {

      const continaer = new Container();
      const crossAppNav = await continaer.getServiceAsync('CrossApplicationNavigation') as CrossApplicationNavigation;

      const hash = crossAppNav && await crossAppNav.hrefForExternalAsync({
        target: { semanticObject: sSemObject, action: sAppend ? sAction + sAppend : sAction },
        params: oParams,
      }) || '';

      const sintent = {
        target: {
          semanticObject: sSemObject,
          action: sAction
        },
        params: { A: "B" }
      };
      const sintentString = '#' + sSemObject + '=' + sAction;


      const aResponses = await <supportedResult[]>crossAppNav.isNavigationSupported([sintent])
      if (
        aResponses && aResponses[0] && aResponses[0].supported) {
        crossAppNav.toExternal({
          target: {
            shellHash: hash,
          },
        });
      } else {
        console.error('Intent ' + sintentString + ' is not supported');
      }
    }
    else {
      console.log('You must work in fiori launchpad');
    }
  }
}

const crossAppNavigate = LaunchpadUtils.crossAppNavigate;
const tsCrossAppVersion = LaunchpadUtils.tsCrossAppVersion;
export { crossAppNavigate, tsCrossAppVersion };
