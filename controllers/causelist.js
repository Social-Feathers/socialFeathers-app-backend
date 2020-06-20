const handleCauseList = (req,res, database) => {
	const {location} = req.body;
	let locationFound = false;
	database.causeBasedOnlocation.forEach(loc => {
		if (loc.location === location) {
			locationFound = true;
			return res.json(loc.causes)
		}
	})

	if (!locationFound){
		return res.status(400).json("location not found or no causes available!")
	}

}

module.exports = {
	handleCauseList: handleCauseList
}