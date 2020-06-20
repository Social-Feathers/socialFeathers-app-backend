const handleFix = (req, res, database) => {
	const {location, id} = req.body;
	let locationFound, idFound = false;
	database.causeBasedOnlocation.forEach(causeLocation => {
		if(location === causeLocation.location){
			locationFound = true;
			causeLocation.causes.forEach(cause => {
				if(cause.id === id){
					idFound = true;
					status:"volunteers working!"
					return res.json("Status updated!")
				}
			})
		}
	})
	if (!locationFound || !idFound){
		return res.status(400).json("cause or location not found!")
	}
}

module.exports = {
	handleFix: handleFix
}