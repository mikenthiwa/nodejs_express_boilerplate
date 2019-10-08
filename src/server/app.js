import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';


export default () => {
	const app = express();
	app.use(cors());
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use('*', (req, res) => {
		return (
			res.status(200).json({
				success: 'false',
				message: 'Route does not exist',
			})
		);
	});
	return app;
};
