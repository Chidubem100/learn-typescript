const count : string[] = []
// const geko : number[] = []
const geko: Array<number> = []

count.push("hekko")
geko.push(3)

// second method of definig an arrary, here the array is expecting all the parameters from the type aliases defined
type User = {
    name: string,
    status: boolean
}

const allUser: User[] = []

allUser.push({name: 'enahke', status:false});

// having an array inside an array
const mlModel: number[][] = [
    [244,233,222],
    []
]

export {}