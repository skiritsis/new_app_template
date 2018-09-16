import {configDev} from 'configs/config.dev';
import {prodConfig} from 'configs/config.prod';

// export a different config depending on the environment set by webpack during compile time
let config = {};
if(ENVIRONMENT === 'development'){
    config = configDev;
}
else if(ENVIRONMENT === 'production'){
    config = prodConfig;
}

export {config};