module.exports = () => {
  if (process.env.ENV === 'production') {
    return {
      /* your production config */
    };
  } else {
    return {
      /* your development config */
      extra: {
        env: 'DEV',
      },
      name: "mobile",
      slug: "mobile",
      version: "1.0.0",
      orientation: "portrait",
      icon: "./assets/icon.png",
      splash: {
        image: "./assets/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff"
      },
      updates: {
        fallbackToCacheTimeout: 0
      },
        assetBundlePatterns: [
          "**/*"
      ],
      ios: {
        supportsTablet: true
      },
      android: {
        adaptiveIcon: {
          foregroundImage: "./assets/adaptive-icon.png",
          backgroundColor: "#FFFFFF"
        }
      },
      web: {
        favicon: "./assets/favicon.png"
      }
    }
  }
}