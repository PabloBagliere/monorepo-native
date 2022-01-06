export default {
  name: 'app-histrix-core-skeleton',
  slug: 'app-histrix-core-skeleton',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  hooks: {},
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  android: {
    package: 'com.mundoit.histrix',
    versionCode: 1,
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
};
