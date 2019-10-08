import http from 'http';
import debug from 'debug';
import app from './app';
import envVar from '../../environment';

const {port} = envVar;
const logger = debug('log');

const server = http.createServer(app());
server.listen(port, () => logger(`${port} is running`));
