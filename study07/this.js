
// 노드에서 this 가 지칭하는바
// 다른 부분은 브라우저의 javascript와 동일하지만 함수 선언문 내부의 this는 global 객체를 가리킴

console.log(this);
console.log(this === module.exports);
console.log(this === exports);

function whatIsThis() {
    console.log('function', this === exports, this === global);
}

whatIsThis();