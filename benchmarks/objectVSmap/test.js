import TestObject from '../../benchmarks/objectVSmap/object';
import TestMap from '../../benchmarks/objectVSmap/map';

export default class Test{

    constructor(numberOfItems = 1000000){
        new TestObject(numberOfItems);
        new TestMap(numberOfItems);
    }
}