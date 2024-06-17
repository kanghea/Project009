module.exports = async function(api) {
  api.cache(true);

  const presets = ['babel-preset-expo'];
  const plugins = [
    // 추가 플러그인이 있다면 여기에 추가
  ];

  return {
    presets,
    plugins,
  };
};