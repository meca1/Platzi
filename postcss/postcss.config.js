// module.exports = {
//   plugins: [
//     // require('autoprefixer')({
//     //   grid: true
//     // }),
//     require('postcss-cssnext')({
//       features: {
//         autoprefixer: {
//           grid: true,
//         }
//       }
//     })
//   ]
// }

module.exports = {
	plugins: [
		require('postcss-preset-env')({
			autoprefixer: {
				grid: true,
			}
		})
	]
}