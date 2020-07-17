const {getDefaultConfig} = require('metro-config');

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve(
        '@bam.tech/react-native-graphql-transformer',
      ),
    },
    resolver: {
      assetExts: [
        assetExts,
        'txt',
        'xml',
        'png',
        'jpg',
        'pb',
        'tflite',
        'gql',
        'graphql',
      ],
      sourceExts: [
        ...sourceExts,
        'txt',
        'xml',
        'png',
        'jpg',
        'pb',
        'tflite',
        'gql',
        'graphql',
      ],
    },
  };
})();
