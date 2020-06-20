const handleRemoveCause = (req, res, database) => {
	const {id} = req.params;
	causeFound = false;
	database.causeBasedOnlocation.forEach(location => {
		location.causes.forEach(cause => {
			if(cause.id === id){
			causeFound = true;
			database.solvedCauses.push(cause)
			location.causes.pop(cause)
			return res.json("cause removed!")
		}
		})
	})
	if (!causeFound) {
		return res.status(400).json('cause not found!')
	}
}

module.exports = {
	handleRemoveCause: handleRemoveCause
}