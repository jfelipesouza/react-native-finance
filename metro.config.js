const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const customConfig = {};

// Mescla as configurações e aplica a configuração do Reanimated
module.exports = wrapWithReanimatedMetroConfig(
  mergeConfig(defaultConfig, customConfig),
);
