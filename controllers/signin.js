const handleSignIn = (req,res, database, bcrypt)=> {
	const {email, password} = req.body;
	let found = false;
	database.users.forEach(user => {
		if (user.email === email){
			found = true;
			bcrypt.compare(password, user.password, function(err, result) {
				if (result === true) {
					return res.json(user)
				} 
			});	
		} 
	})
	if (!found){
		return res.status(400).json('wrong credentials, error logging in!');
	}
}

module.exports = {
	handleSignIn: handleSignIn
};