// "use strict"

// function findAndSaveUser(Users){
//     Users.findOne({})
//         .then((user) => {
//             user.name = 'zero';
//             return user.save();
//         })
//         .then((user) => {
//             return Users.findOne({gender : 'm'});
//         })
//         .then((user) => {
//             // 생략
//         })
//         .catch(err => {
//             console.error(err);
//         });
// }

// async function findAndSaveUser(Users) {
//     try {
//         let user = await Users.findOne({});
//         user.name = 'zero';
//         user = await user.save();
//         user = await Users.findOne({ gender : 'm' });
//     } catch (error) {
//         console.error(error);
//     }
//
// }

const findAndSaveUser = async(Users) => {
    try {
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({ gender : 'm' });
    } catch (error) {
        console.error(error);
    }

}

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');

// const arr = [promise1, promise2];

(async () => {
    for await (promise of [promise1, promise2]){
        console.log(promise);
    }
})();

// async function findAndSaveUser(User) {
//     //생략
// }

// findAndSaveUser().then(() => { /* 생략 */ })
// // 또는
// async function other(){
//     const result = await findAndSaveUser();
// }