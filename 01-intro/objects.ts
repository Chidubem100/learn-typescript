''
const User = {
    name: "petitt",
    age: 23,
    isActive: false
}

function createUser({name:string, isActive:fasle}) {
    
}

let newUser = {name: 'hello', isActive:true, email:'h@h.com'}

createUser(newUser);

function createCourse(): {CourseName: string, isPaid: boolean, num: number}{
    return {CourseName: 'backend Nodejs', isPaid:true, num: 3}
}
createCourse();

'type Aliases'
type User = {
    name: string,
    status: boolean,
    username: string
};

function getAUser(user: User){

}

function getBuser(user: User): User{
    return {name: 'lope', status:true, username:'pwene' }
}

getBuser({name: 'lope', status:true, username:'pwene'})
getAUser({name:'hellop', status:false, username:'heop'});

'readonly keyword makes sure that no one changes the value if the datatype'

type Usser = {
    readonly _id: string  //the readonly keyword makes sure that no one makes changes to that type
    Uname: string,
    email: string,
    isPaid: boolean,
    creditCard?: number // the ? makes it optional for the creditcard to be input
}

let myUser: Usser = {
    _id: 'Ord323',
    Uname: 'kelz',
    email: 'kel@mail.com',
    isPaid: false,
    // creditCard: 23444332
}

myUser.Uname = 'kilio';
// myUser._id = '343222';


export {}