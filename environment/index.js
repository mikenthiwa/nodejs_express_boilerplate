import dotenv from 'dotenv';

dotenv.config();

export default {
	port: process.env.PORT,
	database: {
		// eslint-disable-next-line no-mixed-spaces-and-tabs
	  dbUsername: process.env.DB_USERNAME,
		dbPassword: process.env.DB_PASSWORD,
		developmentDbName: process.env.DEVELOPMENT_DB_NAME,
		testDbName: process.env.TEST_DB_NAME,
		productionDbName: process.env.PRODUCTION_DB_NAME
	}
};
