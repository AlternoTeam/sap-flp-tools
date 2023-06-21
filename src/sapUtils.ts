const isSapEnv = () => {
  const browserApp = typeof window !== 'undefined';
  const sapUiApp = browserApp && window.hasOwnProperty('sap');
  const inLaunchpad = sapUiApp && !!sap.ushell && !!sap.ui.getCore();

  if (!inLaunchpad) {
    console.log('you are not in sap environment');
  }
  return inLaunchpad;
};

export { isSapEnv };
