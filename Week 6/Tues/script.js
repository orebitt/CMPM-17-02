const express = require('express');
const request = require("request");

const app = express();

// const API_KEY = ""

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log("welcome to the root!");
  
  /*
  var url = ""
  
	request(url, (error, response, body)=>{
		
		// Printing the error if occurred
		if(error) console.log(error)
	   
		// Printing status code
		console.log(response.statusCode);
		 
		// Printing body
		console.log(body);
	});
  */
  
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});