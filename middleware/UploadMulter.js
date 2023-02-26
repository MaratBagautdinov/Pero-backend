// import SDK from 'easy-yandex-s3'
// const s3 = new SDK.default({
// 	auth:{
// 		accessKeyId: "YCAJELfpnjHhYYsZZ-PUu4WgS",
// 		secretAccessKey: "YCPrdH_sPke0Ig_l3SQnqHbnR-l2hkdS9nmzAEZs"
// 	},
// 	Bucket: "pero-social-network",
// 	debug: false
// })
//
// export default async (req, res, next) => {
// 	let buffer = req.files[0].buffer
// 	await s3.Upload({ buffer }, '/logos/')
// 		.then(data=> {
// 			req.name = data.Location
// 			next()
// 		})
// 		.catch(err=>console.log(`Error: ${err}`))
// }
