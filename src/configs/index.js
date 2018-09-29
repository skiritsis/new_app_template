// @flow
import {configDev} from 'configs/config.dev';
import {prodConfig} from 'configs/config.prod';

type configT = {
    +componentLazyLoadDelay: number
};

let config: configT;
// export a different config depending on the environment set by webpack during compile time
if(__ENVIRONMENT__ === 'production'){
    config = prodConfig;
}
else{
    config = configDev;
}

export {config};