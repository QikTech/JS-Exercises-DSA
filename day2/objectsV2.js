// OBJECTS SINGLETON

const appUser = new Object()

appUser.id = "123abc"
appUser.name = "prasad"
appUser.isLoggedIn = false
// console.log(appUser);

const regularUser = {
    email: "regularEmail@gmail.com",
    fullName: {
        userFullName: {
            firstName:"prasad",
            lastName: "sawant"
        }
    }
}
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName);

// // OPTIONAL CHAINING
// console.log(regularUser.fullName.location?.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

//MERGING 2 OBJECTS
// const obj3 = Object.assign(obj1, obj2)

// const obj3 = Object.assign({TARGET}, SOURCE)
// MERGE METHOD 1
const obj3 = Object.assign({}, obj1, obj2)
// console.log("Object3", obj3);

// MERGE METHOD 2 - SPREAD OPERATPR
const obj10= {...obj1, ...obj2, ...obj4}
// console.log("Object10", obj10);

// HANDELING VALUES FROM DATABASE
const freshUser = [
    {
        id: 1,
        age: 66 
    },
    {
        id: 1,
        age: 66 
    },
    {
        id: 1,
        age: 66 
    }
]
freshUser[1].age
// console.log(appUser);

console.log(Object.keys(appUser));
console.log(Object.values(appUser));
console.log(Object.entries(appUser));

console.log(appUser.hasOwnProperty('isLoggedIn'));
