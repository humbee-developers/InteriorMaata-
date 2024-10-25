/** @type {import('next').NextConfig} */
const nextConfig = {
  // output:"export",
  output:"export",
  images: {
    domains: ["interiormaataassets.humbeestudio.xyz"],
  },
};
module.exports = nextConfig;

// module.exports = {
//   webpack(config, options) {
//     config.module.rules.push({
//       test: /\.mp3$/,
//       use: {
//         loader: "url-loader",
//       },
//     });
//     return config;
//   },
// };
