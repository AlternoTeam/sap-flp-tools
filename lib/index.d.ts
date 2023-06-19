export default class LaunchpadUtils {
    static crossAppNavigate(sSemObject: string, sAction: string, oParams: object, sAppend?: string): void;
    static tsCrossAppVersion(sSemObject: string, sAction: string, oParams: object, sAppend?: string): Promise<void>;
}
declare const crossAppNavigate: typeof LaunchpadUtils.crossAppNavigate;
declare const tsCrossAppVersion: typeof LaunchpadUtils.tsCrossAppVersion;
export { crossAppNavigate, tsCrossAppVersion };
