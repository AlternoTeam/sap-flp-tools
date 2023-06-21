/// <reference types="./node_modules/@sapui5/ts-types-esm" />
import Container from 'sap/ushell/Container';
export default class UshellServices {
    static container: Container;
    static crossAppNavigate(sSemObject: string, sAction: string, oParams: object, sAppend?: string): void;
    static tsCrossAppVersion(sSemObject: string, sAction: string, oParams: object, sAppend?: string): Promise<void> /**
     * @SINCE 1.31.0
     *
     * Register the work protection dirty callback function. In the work protect mechanism, each platform can
     * register their own method in order to check if data was changed during the session, and notify the container
     * about the change. Multiple registerings of the same function are allowed.
     *
     * Use `Function.prototype.bind()` to determine the callback's `this` or some of its arguments.
     */;
    static getUserInfo(): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        fullName: string;
    } | undefined>;
}
