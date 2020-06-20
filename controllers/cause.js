const handleCause = (req, res, database) => {
	const {id} = req.params;
	causeFound = false;
	database.causeBasedOnlocation.forEach(location => {
		location.causes.forEach(cause => {
			if(cause.id === id){
			causeFound = true;
			return res.json(cause)
		}
		})
	})
	if (!causeFound) {
		return res.status(400).json('cause not found!')
	}
}


module.exports = {
	handleCause: handleCause
}