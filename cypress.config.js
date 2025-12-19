module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'electron' && browser.isHeadless) {
          launchOptions.args.push('--ignore-certificate-errors');
        }
        return launchOptions;
      });
    },
  },
};