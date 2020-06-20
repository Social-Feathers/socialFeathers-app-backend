const handleEventList = (req, res, database) => {
	res.json(database.eventList)
}

module.exports ={
	handleEventList: handleEventList
}