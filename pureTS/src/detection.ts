function detectType(val: number | string){
    if (val === 'string') {
        return val.toLocaleLowerCase()
    }

    return val 
}

function provideId(id:string | null){
    if (!id) {
        console.log('Please provide id')
        return
    }
    id.toLocaleLowerCase()
}

function printStr(str: string | string[] | null){
    if(str){
        if (typeof str === 'object') {
            for (const s of str) {
                console.log(s)
            }
        }else if(typeof str === 'string'){
            console.log(str)
        }
    }
}

interface User{
    name: string,
    email: string
}

interface Admin{
    names: string,
    email: string,
    isAdmin: boolean
}

function isAdminAcc(account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
} 

function logT(val: Date | string){
    if(val instanceof Date){
        console.log(val.toUTCString())
    }else{
        console.log(val.toUpperCase())
    }
}

type Fish = {swim: () => void}
type Bird = {fly: () => void}

function isFish(val: Fish | Bird): val is Fish{
   return (val as Fish).swim !== undefined
}


function getFood(val: Fish | Bird){
    if (isFish(val)) {
        val
        return "fish food"
    }else{
        val
        return "bird food"
    }
}

interface Circle{
    kind: "circle"
    radius: number
}

interface Square{
    kind: "square"
    side: number
}

interface Rectangle{
    kind: "rectangle"
    length: number,
    width: number
}

type Shape = Circle | Square

function getTrueShape(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2
    }
    return shape.side * shape.side
}

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square" :
            return shape.side * shape.side
        
        default:
            const _defaultforshape: never = shape
            return _defaultforshape  

    }
}