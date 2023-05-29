interface User {
    readonly dbId: number
    email: string,
    userId: number,
    username: string,
    googleId?: string,
    startTrial (): string
    // startTrial: () => string
    getCoupon(couponName: string, value:number): number
}

interface User{
    githubToken: string
}

interface Admin extends User{
    role: "admin"|"ta"|"learner"
}

const hts: Admin = {
    dbId: 3444,
    email: 'ht@gmail.com',
    userId: 3433,
    githubToken: "gitgit",
    username: 'gts233',
    role: "admin",
    startTrial: () =>{
        return "trial started"
    },
    getCoupon:(couponName: 'gtser23', off: 10) =>{
        return 20
    },
}


// const htts: User = {
//     dbId: 3444,
//     email: 'ht@gmail.com',
//     userId: 3433,
//     githubToken: "gitgit",
//     username: 'gts233',
//     startTrial: () =>{
//         return "trial started"
//     },
//     getCoupon:(couponName: 'gtser23', off: 10) =>{
//         return 20
//     },
// }
// hts.email = "gts@mail.go"
