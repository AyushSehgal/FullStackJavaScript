//import './config'; //lets you find a file called config at the same level as the current file (server.js) ../ would go up the hierarchy/directory
import config, { nodeEnv, logStars } from './config';

console.log(config, nodeEnv);