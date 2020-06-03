# nodeNotesApp
### Technologies Used 
- Node.js
- Express
- Mongoose
- MongoDB

# Getting Up & Running
1. npm i (install the dependencies)
2. create pass.js exporting the database server string/url provided by MongoDB 
3. npm run dev (run the nodemon script to get server up and running)

# How to Use API: 
Make a Note: [POST Request]
http://localhost:8000/api/noteModel
Put an ID from the database to show the note
Be sure to use body parameter ( title , bodyText)

Read a Note: [GET Request]
http://localhost:8000/note/:id 
Put an ID from the database to show the note

Delete a Note: [DELETE Request]
http://localhost:8000/note/:id 
Put an ID from the database to show the note

Update a Note: [PUT Request]
http://localhost:8000/note/:id 
Put an ID from the database to show the note
Be sure to use body parameter ( title , bodyText) * Both are required

# Associated links for reference 
## https://www.freecodecamp.org/news/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2/

## https://cloud.mongodb.com/

## https://www.postman.com/downloads/