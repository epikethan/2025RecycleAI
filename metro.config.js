// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname); // Get the default Expo Metro configuration

// Modify the 'assetExts' array within the resolver
// We use a spread operator (...) to include all existing assetExts
// and then add 'tflite' to them.
config.resolver.assetExts = [
  ...config.resolver.assetExts, // Include all default asset extensions
  'tflite', // Add your custom extension
];

module.exports = config; // Export the modified configuration