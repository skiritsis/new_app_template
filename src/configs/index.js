import {configDev} from 'configs/config.dev';
import {prodConfig} from 'configs/config.prod';

let config = {};
if(ENVIRONMENT === 'development'){
    config = configDev;
}
else if(ENVIRONMENT === 'production'){
    config = prodConfig;
}

export {config};