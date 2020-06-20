const handlePost = (req, res, database)=>{
	const {location, causeTitle, causeDescription} = req.body;
	let locationFound = false;
	database.causeBasedOnlocation.forEach(cause=>{
		if (location === cause.location){
			database.causeBasedOnlocation.push({
				id:"l1c3",
				causeTitle: causeTitle,
				causeDescription: causeDescription
			})
			locationFound = true;
			return res.json(`cause added to location: ${location}`)
		}
	})

	if(!locationFound){
		database.causeBasedOnlocation.push({
			location: location,
			causes: [
			{
				id: "l2c1",
				causeTitle: causeTitle,
				causeDescription: causeDescription
			}
			]
		})
		return res.json(`cause added to location: ${location}`)
	}
}

module.exports = {
	handlePost: handlePost
};