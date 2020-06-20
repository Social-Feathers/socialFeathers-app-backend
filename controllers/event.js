const handleEvent = (req, res, database) => {
	const {id} = req.params;
	eventIdFound = false;
	database.eventList.forEach(event => {
		if (event.eventid === id) {
			eventIdFound = true;
			return res.json(event.eventDescription)
		}
	})
	if (!eventIdFound){
		return res.status(400).json("Event not found!")
	}
}


module.exports = {
	handleEvent: handleEvent
}