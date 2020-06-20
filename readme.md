# Documentation:

# How to run this repository?:
* clone this repository
* cd into the repository folder
* run  `npm install` or `npm i`
* and then  `npm start`

# API:

### List of End points:
1. /signin
2. /register
3. /post
4. /fix
5. /eventlist
6. /event/:id
7. /causelist
8. /cause/:id
9. /removecause/:id

## How to Use API:
* 1. Signin: 
      * method: **POST** 
      * **request BODY** : email and password
      * response: **User details** JSON

* 2. Register: 
      * method: **POST** 
      * **request BODY** : email, password and name
      * response: **User details** JSON

* 3. post: 
      * method: **PUT** 
      * **request BODY** : location, causeTitle, causeDescription
      * response: **Success/ fail status** JSON

* 4. fix: 
      * method: **POST** 
      * **request BODY** : location, cause id
      * response: **Success/ fail status** JSON

* 5. eventlist: 
      * method: **GET** 
      * response: **Total list of events** in JSON

* 6. event/:id: 
      * method: **GET** 
      * response: **Selected event details** in JSON

* 7. causelist: 
      * method: **POST** 
      * **request BODY** : location
      * response: **Total list of causes based on location** in JSON

* 8. cause/:id: 
      * method: **GET** 
      * response: **Selected course details** in JSON

* 9. removecause/:id: 
      * method: **PUT** 
      * **request BODY** : cause Id
      * response: **Success/ fail status** JSON



### What's left:
- [ ] Database

