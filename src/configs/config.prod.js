import {configDev} from 'configs/config.dev';

// merge production configs to dev
const prodConfig = Object.assign({}, configDev, {

});

export {prodConfig};