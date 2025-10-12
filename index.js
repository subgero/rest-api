// index.js     
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 5000;

import userRouters from './routers/userRouters.js';
import newsRouters from './routers/newsrouters.js';

const app = express();

app.use('/users', userRouters);
app.use('/news', newsRouters);

app.get('/', (req, res) => {
    res.send('API is running....');
});

app.listen(port, (error) => {
	if(!error)
		console.log("Server is Successfully Running, and App is listening on port " + port)
	else
		console.log("Error occurred, server can't start", error);
	}
);