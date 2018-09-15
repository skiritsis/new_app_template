export default class testObject{

    constructor(numberOfItems){
        this.objectData = {};
        this.fillObjectWithData(numberOfItems);
        const objKeys = this.generateRandomKeys(numberOfItems);
        this.runTest(objKeys);
    }

    fillObjectWithData(numberOfItems){
        for(let i = 0; i < numberOfItems; i++){
            this.objectData[`test_${i}`] = 'test obj';
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
        console.log('obj: ', t2 - t1);
    }

    localeString(key){
        return this.objectData[key] || key;
    }

}