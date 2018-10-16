module.exports = {
  // Not sure this affects it but just included it just in case
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.html$/,
      use: "raw-loader"
    });
    return config;
  }
};
