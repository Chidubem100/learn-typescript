
// variables
//string
let greetings: string = "hello big 10";
console.log(greetings);

// number
let userId: number = 334545.4;
userId.toString();

// boolean
let isLoggedIn: boolean = false;
isLoggedIn = true;

//any keyword
'any shouldnt be used'
let hero: string;

function name() {
    return 'hello'
}

hero = name();

// union type of data is used when you are not sure of the type of data that will be used. so its like a combination of different types of data
let score : number | string | boolean= 32

score = false
score = 40;
score = '343'

//2nd method
type User = {
    _id: string,
    name: string
}

type Admin = {
    _id: string,
    userName: string
}

let heclis : User | Admin = {_id: 'Us3444', name:'eilr'}

heclis = {userName: 'elire3', _id: 'Ad2332'}

function getDbId(id: number | string){
    console.log(`num ${id}`)
}
getDbId(8)
getDbId('98')

// to strict check the data types in a union
function getDBId(id: string | number){
    if(typeof id === 'string'){
        console.log(id)
    }
}

//
const data: number[] = [1,2,3]
const dataa : string[] = ['3','4','4']

const data4 : (string | number | boolean)[] = ['2','3',7,false]

// const seatAll = 'alllo' | 'fddd' | 'ddd'



export {}