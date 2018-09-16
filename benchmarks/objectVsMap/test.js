import TestObject from './/object';
import TestMap from './/map';

export default class Test{

    constructor(numberOfItems = 1000000){
        new TestObject(numberOfItems);
        new TestMap(numberOfItems);
    }
}