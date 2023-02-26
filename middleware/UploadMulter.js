import multer from 'multer'
import fs from 'fs'
import SDK from 'easy-yandex-s3'
const s3 = new SDK({
	auth:{
		accessKeyId: process.env.S3_ID,
		secretAccessKey: process.env.S3_KEY
	},
	Bucket: "pero-social-network",
	debug: false
})

const upload = async()=>{
	await s3.U
}
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		const path = 'tmp'
		!fs.existsSync(path) && fs.mkdirSync(path)
		cb(null, path)
	},
	filename: (req, file, cb) => cb(null, Math.trunc(Date.now() / 10000) + file.originalname)
})
export default multer({ storage })
