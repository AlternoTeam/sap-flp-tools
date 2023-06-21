/// <reference types="./node_modules/@sapui5/ts-types-esm" />
import Container from 'sap/ushell/Container';
export default class ShellUtils {
    static container: Container;
    static toggleShellHeader(display: boolean): void;
    static changeShellTitle(title: string): void;
}
