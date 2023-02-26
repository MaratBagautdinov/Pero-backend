import asyncHandler from 'express-async-handler'
import User from '../../models/userModel.js'

export default asyncHandler(async (req, res) => {
	const user = await User.findById(req.userID)
	console.log(`Logo data: ${req.Location}`)
	user.images.logo = req.Location
	user.save()
	res.json({ logo: user.images })
})
