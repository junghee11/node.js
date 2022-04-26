"use strict"

// const condition = true;
let condition = true;
const promise = new Promise((resolve, reject) => {
    if(condition){
        resolve('성공');
    } else {
        reject('실패');
    }
});
// condition = false;
// const promise2 = new Promise((resolve, reject) => {
//    if(condition){
//        resolve('성공');
//    } else {
//        reject('실패');
//    }
// });

// 다른 코드가 들어갈 수 있음
promise
    .then((massage) => {
        console.log(massage);  //성공(resolve)한 경우 실행
    })
    .catch((error) => {  // 실패(reject)한 경우 실행
        console.error(error);
    })
    .finally(() => { // 끝나고 무조건 실행
        console.log('무조건');
    })

condition = false;
console.log(condition);

promise
    .then((massage) => {
        return new Promise((resolve, reject) => {
            resolve(massage);
            // console.log(massage);
        });
    })
    .then((massage2) => {
        return new Promise((resolve, reject) => {
           resolve(massage2);
           // console.log(massage2);
        });
    })
    .then((massage3) => {
        console.log(massage3);
    })
    .catch((error) => {
        console.error(error);
    });
