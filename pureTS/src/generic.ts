const score: Array<number> = []
const names: Array<string> = []


function identityOne(val:boolean | number): boolean|number{
    return val
}


function identityTwo(val:any): any{
    return val
}

function identityThree<Type>(val: Type): Type{
    return val
}

identityThree(true)


function identityFour<T>(val:T):T{
    return val 
}

interface Bootle{
    brand: string,
    type: number
}

identityFour<Bootle>({brand:'ddd',type:4})

function getSearchProduct<T>(val: T[]):T{
    // do some db operations
    const myIdex = 3
    return val[myIdex]
}

const getMoreSearchProds = <T>(val: T[]): T =>{
    // Do some db complex operations
    const dbIndex = 43
    return val[dbIndex]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function prods<T, U extends Database>(val:T, arg:U):object{
    return {
        arg,
        val
    }
}

// prods(3,{})
// prods(3,)

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(prod: T){
        this.cart.push(prod)
    }
}