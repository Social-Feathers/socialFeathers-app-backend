const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const signin = require('./controllers/signin');
const register = require('./controllers/register');
const post = require('./controllers/post');
const fix = require('./controllers/fix');
const eventlist = require('./controllers/eventlist');
const event = require('./controllers/event');
const causelist = require('./controllers/causelist');
const cause = require('./controllers/cause');
const removecause = require('./controllers/removecause');

const app = express();

app.use(express.json());
app.use(cors());


const saltRounds = 10;

//using a const variable as database for now
//don't do this! This is temporary just until we setup a database

const database = {
	users: [
	{
		id:123,
		email: "janedoe@gmail.com",
		password: "$2b$10$WElTPUkv4Y48atOLDK9EEOOW.PxxvS2N2AZ05M/wmaj8uiNyM/8mG",
		name: "jane doe",
		fixedCauses: 1,
		joined: new Date(),
	}],
	causeBasedOnlocation: [
	{
		location:"123, 124",
		causes: [
		{
			id: "l1c1",
			causeTitle: "food hunger problem",
			causeDescription: "hunger problem problem problem",
			status: "unfixed" 
		},
		{
			id: "l1c2",
			causeTitle: "no access to water etc",
			causeDescription: "water problem problem problem",
			status: "volunteers working!"
		}
		]
	}],

	eventList: [
	{
		eventid: "e1",
		eventDescription: "solving event event event"
	},
	{
		eventid: "e2",
		eventDescription: "solving event2 event2 event2"
	}
	],

	solvedCauses: []
}

app.get('/', (req,res)=> {
	res.json(database.users)
})

app.post('/signin', (req,res) => {signin.handleSignIn(req, res, database, bcrypt)})

app.post('/register', (req,res)=>{register.handleRegister(req, res, database, bcrypt)})

app.put('/post', (req, res) => {post.handlePost(req,res, database)})

app.post('/fix', (req, res)=> {fix.handleFix(req,res, database)})

app.get('/eventlist', (req, res)=> {eventlist.handleEventList(req,res,database)})

app.get('/event/:id', (req,res)=>{event.handleEvent(req,res, database)})

app.post('/causelist', (req, res) => {causelist.handleCauseList(req,res, database)})

app.get('/cause/:id', (req, res) => {cause.handleCause(req, res, database)})

app.put('/removecause/:id', (req,res) => {removecause.handleRemoveCause(req,res, database)})


//using PORT 3000 for now, but in production will be using 
//environment PORT
app.listen(3000, ()=> {
	console.log("App is running on port 3000")
});



/*
/ --> GET = success/fail
/signin --> POST = User --> Done
/register --> POST = user --> Done
/post --> PUT = post --> Done
/fix --> POST = cause+desc --> Done
/eventlist --> GET = events list --> Done
/causelist --> POST = cause based on location --> Done
/event/:eventid --> GET = selected event details --> Done
/cause/:causeid --> GET = selected cause details --> Done
/removecause/:causeid --> PUT = success/fail --> Done
*/