# sap-flp-tools

This repo is developed & maintained by <a href="https://alterno.io/blog" target="_blank">alterno.io</a> team to make integration of SAP Fiori Launchpad seamless for React / Vue / other frameworks.
In order to include Fiori Launchpad methods install the repo:

**npm i sap-flp-tools**

Once installed, use seamlessly, for exmaple cross app navigation:
import { crossAppNavigate } from 'sap-flp-tools'

In your app, just call the API method:
crossAppNavigate('SemanticObejct', 'intent', {params}, 'SpecificRoute');

Methods included in current version:
* crossAppNavigate - to navigate from embedded non-SAP app to other apps
* getUserDetails - returns an object containing current user information
* changeShellTitle - change title in the shell header of the Fiori Launchpad
* toggleShellHeader - hide and show shell header menu & tools
* loadPersonalization - get personalization container with saved data
* savePersonalization - save personalization container with saved data

If you are looking for best SAPUI5 / SAP team to support your project - don't hesitate to <a href="mailto:hello@alterno.io"  target="_blank">contact us ASAP</a>.

NPM Repo location:
https://www.npmjs.com/package/sap-flp-tools
