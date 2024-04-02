/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export"
}
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