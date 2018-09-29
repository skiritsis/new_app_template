// @flow
import {configDev} from 'configs/config.dev';
import {prodConfig} from 'configs/config.prod';

// export a different config depending on the environment set by webpack during compile time
let config = {};
if(__ENVIRONMENT__ === 'development'){
    config = configDev;
}
else if(__ENVIRONMENT__ === 'production'){
    config = prodConfig;
}

export {config};