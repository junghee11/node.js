"use strict"

// function findAndSaveUser(Users) {
//     // Users.findOne = function (param, param2) {
//     //
//     // }
//     Users.findOne({}, (err, user) => { //첫번째 콜백
//         if(err) {
//             return console.error(err);
//         }
//         user.name = 'zero';
//         user.save((err) => {  // 두번째 콜백
//             if(err) {
//                 return console.error(err);
//             }
//             Users.findOne({gender : 'm'}, (err,user) => {
//                 //생략
//             });
//         });
//     });
// }

// function findAndSaveUser(Users) {
//     Users.findOne({})
//         .then((user) => {
//             user.name = 'zero';
//             return user.save();
//         })
//         .then((user) => {
//             return Users.findOne({gender : 'm'});
//         })
//         .then((user) => {
//             //생략
//         })
//         .catch(err => {
//            console.error(err);
//         });
// }

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2])
    .then((result) => {
       console.log(result); //
    })
    .catch((error) => {
       console.log(error);
    });