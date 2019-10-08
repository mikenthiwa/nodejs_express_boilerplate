import envVar from '../../environment';
const { database: { developmentDbName, dbName , dbPassword, testDbName, productionDbName } } = envVar;

const defaultConfig = {
	use_env_variable: 'DEVELOPMENT_DATABASE_URL',
	username: developmentDbName,
	password: dbPassword,
	database: dbName,
	host: '127.0.0.1',
	dialect: 'postgres',
	operatorsAliases: false
};

module.exports = {
	'development': {
		...defaultConfig,
	},
	'test': {
		...defaultConfig,
		use_env_variable: 'TEST_DATABASE_URL',
		database: testDbName
	},
	'production': {
		...defaultConfig,
		use_env_variable: 'PRODUCTION_DATABASE_URL',
		database: productionDbName,
	}
};
