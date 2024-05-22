// <Objects Assignmrnt..
var employee = {
    name: "mutaiba",
    department: "governor House",
    role: "Engineer",
    skill: ["editing"],
};
console.log(employee);
var employee1 = {
    name: "jaweria",
    department: "governer House",
    role: "Engineer",
    skill: [" Expert in web designing"],
    contact: {
        phone: 123455,
        email: "jaweriasidique@gmail.com"
    }
};
console.log(employee1);
var ourCars = {
    enging: {
        horsePower: 2000,
    },
    getPowerHorse: function () {
        console.log("this car speed is ".concat(ourCars.enging.horsePower, " power"));
    },
};
ourCars.getPowerHorse();
var Tshirt = {
    name: "fabricFlair",
    price: 4999,
    color: "lilac",
    inventory: {
        stock: 10,
        changeColor: function (newColor) {
            Tshirt.color = newColor;
            if (Tshirt.color === "blushpink") {
                var iPercent10 = Tshirt.price / 100 * 10;
                Tshirt.price += iPercent10;
            }
            else if (Tshirt.color === "aqua") {
                var dPercent5 = Tshirt.price / 100 * 5;
                Tshirt.price - +dPercent5;
            }
            else {
                return null;
            }
        }
    }
};
console.log(Tshirt);
Tshirt.inventory.changeColor("blushpink");
console.log(Tshirt);
// < Nested Objects >
// type studentInfo = {
//     name: string,
//     GR: number,
//     class: string,
//     isPass: boolean
//    }
//  type Student1 = {
//     Info : {
//         name: string,
//         age: number,
//         email: string,
//         contact: number,
//         dob: number,
//         adress: string,
//     }
//   Student: studentInfo
//  } 
// const Student1 = {
//     Info : {
//         name: "mutaiba",
//     age: 17,
//     email: "mutaibachohan8@getMaxListeners.com",
//     contact: 31346,
//     dob: 14-8-2007,
//     adress: "sadar";
//     }
// }
// // console.log(`my student name is ${} `)
