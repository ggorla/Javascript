'use strict';
/*
let hasDriversLicence = false;
const passTest = true;

function calculateAage1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const age1 = calculateAage1(1991);
const calculateAage2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calculateAage2(1991);


const calAage2 = function (birthYear) {
    return 2037 = birthYear;
}

const calculateAage3 = birthyear => 2037 - birthyear;

const age3 = calculateAage3(1991);


const retirement = birthyear => {
    const age4 = 2037 - birthyear;
    const retireage = 65 - age4;
    return `years to retire left ${retireage}`;
}
console.log(retirement(1991));


const yearsuntillretire = (birthYear, firtname) => {
    const age4 = 2037 - birthyear;
    const retireage = 65 - age4;
    if (retireage > 0) {

    }
    return `${firstname}years to retire left ${retireage}`;
}


const calavg = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

function winningteam(teamAscore1, teamAscore2, teamAscore3, teamBscore1, teamBscore2, teamBscore3) {
    const teamAavg = calavg(teamAscore1, teamAscore2, teamAscore3);
    const teamBavg = calavg(teamBscore1, teamBscore2, teamBscore3);

    if (teamAavg > teamBavg * 2)
        return `Team A wins with ${teamAavg}`;
    else if (teamBavg > teamAavg * 2)
        return `Team B wins with ${teamBavg}`;
    else
        return `no one is winner team A avg:${teamAavg} and team B avg is ${teamBavg} `;
}

const message = winningteam(20, 30, 40, 200, 300, 400);
console.log(message);





const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 984, 2008, 2020);
console.log(friends[0]);




friends.push('jay');

console.log(friends)
console.log(friends.indexOf('Steven'));
console.log(friends.includes('Steven'));


function calculateTip(amount) {
    //return tip => (amount >= 50 && amount <= 200) ? amount * 0.15 : amount * 0.20;
    //if (amount >= 50 && amount <= 200)
    //  return amount * 0.15;
    //else
    //  return amount * 0.20;
    const tip = tip => { return 20 };


}
const calculatedtip = amount => (amount >= 50 && amount <= 200) ? amount * 0.15 : amount * 0.20;

let total = [125, 555, 44];
if (total.length > 0) {
    const tip = total.pop();
    console.log(tip)
    console.log(calculatedtip(tip) + tip);
}

const Gautham = {
    firstName: 'Gautham',
    lastName: 'Gorla',
    birthyear: 1986,
    job: "engineer",
    friends: ["mike", "pet", "sam"],
    hasDriversLicence: true,

    calage: function () {
        console.log(this)
        return 2022 - this.birthyear;
    },
    getsummery: function () { return `${this.firstName} is a ${this.calage()}` }
};

console.log(Gautham.getsummery());
//const bestfriend = prompt("enter best friend of Gautham")

//console.log(`Gautham has ${Gautham.friends.length} and best friend is ${bestfriend}`);
*/
const John = {
    firstName: 'John',
    lastName: 'Smith',
    weight: 78,
    height: 1.69,
    calBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
}
const Marks = {
    firstName: 'Mark',
    lastName: 'Miller',
    weight: 92,
    height: 1.95,
    calBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
}
John.calBMI();
Marks.calBMI();
//not working
const checkbmi = () => `johns BMI ${John.bmi} and marks bmi ${Marks.bmi}`;
//(John, Marks) => (John.bmi > Marks.bmi) ? (`John has higer BMI ${John.bmi}`) : (`mark has higher BMI ${Marks.bmi}`);

console.log(checkbmi);