export default class testMap{

    constructor(numberOfItems){
        this.mapData = new Map();
        this.fillMapWithData(numberOfItems);
        const objKeys = this.generateRandomKeys(numberOfItems);
        this.runTest(objKeys);
    }

    fillMapWithData(numberOfItems){
        for(let i  = 0; i < numberOfItems; i++){
            this.mapData.set(`test_${i}`, 'test map');
        }
    }

    generateRandomKeys(numberOfItems){
        const objKeys = [];
        for(let i = 0; i < numberOfItems; i++){
            objKeys.push('test_' + Math.floor(100000 + Math.random() * 900000));
        }
        return objKeys;
    }

    runTest(objKeys){
        const t1 = performance.now();
        objKeys.forEach(key => {
            this.localeString(key);
        });
        const t2 = performance.now();
        console.log('map: ', t2 - t1);
    }

    localeString(key){
        return this.mapData.get(key) || key;
    }

}