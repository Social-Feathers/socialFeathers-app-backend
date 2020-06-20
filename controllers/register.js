const handleRegister = (req, res, database, bcrypt)=> {
	const {email, password, name} = req.body;
	const saltRounds = 10;
	let userNotInDb = false;
	database.users.forEach(user => {
		if (user.email === email){
			userNotInDb = true;
		}
	})
	if (userNotInDb){
		return res.status(400).json("user already exsits!")
	} else if((name.length || email.length || password.length)===0){
		return res.status(400).json('invalid inputs')
	}
	else{
	bcrypt.hash(password, saltRounds, function(err, hash) {
		database.users.push({
		id: '124',
		email: email,
		password: hash,
		name: name,
		joined: new Date()
	})
	return res.json(database.users[database.users.length-1]);
 
	});
	}
}

module.exports = {
	handleRegister: handleRegister
};