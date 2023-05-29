abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){

    }

    abstract createShortVid(): void
    getReelnum(): number{
        return 9
    }
}



class Instagram extends TakePhoto {
    constructor(
        public cameraMode :string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode,filter)
    }

    createShortVid(): void {
        console.log('hello')
    }
}

// const gth = new TakePhoto("test" ,"test")