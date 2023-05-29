class User {
    public email: string
    name: string
    private city: string = "druks"
    // the private and public keywords are used to mark items either for them to be accessible or not

    constructor(email: string, name: string){
        this.email = email;
        this.name = name
    }
}

class Admin {
    
    protected _courseCount = 1

    city: string = "druks"
    // the private and public keywords are used to mark items either for them to be accessible or not
    // this is another method of writing classes
    constructor( 
            public email: string, 
            private name: string,
            private userId: string
        )
    {}

    private deleteToken(){ // this is for making a private method
        console.log("delete token")
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount (): number{
        return this._courseCount
    }

    set courseCount(courseNum) {
        if(courseNum <= 1){
            throw new Error("Course count should not be less than 1")
        }
        this._courseCount = courseNum
    }


}

class subAdmin extends Admin{
    isFam :  boolean = true

    changeCourseCount(){
        this._courseCount = 4
    }
}

const htsh = new User( "htd@mail.com", "hrh")

