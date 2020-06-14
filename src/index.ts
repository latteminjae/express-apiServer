import bodyParser from 'body-parser';
import express from 'express';
import { mysqlConfig } from './config';

const app = express();

app.use(bodyParser());

app.get('/', (req, res) => {
	console.log('요청이 들어옴');
	console.log(mysqlConfig);
	res.send('응답');
});

app.get('/test', (req, res) => {
	console.log('test');
	res.send('test');
});

app.listen(3005, () => {
	console.log('앱이 실행됩니다.');
	process.send('ready');
});
