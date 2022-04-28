
// 순환 참조 발생 예시, 이렇게 되지 않게 조심하라고 함

const dep1 = require('./dep1');
const dep2 = require('./dep2');

dep1();
dep2();