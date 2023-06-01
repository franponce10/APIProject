export class User {
    constructor(
        public id: number,
        public name: string,
        public lastName: string,
        public email: string,
        public job: string,
        public avatar: string,
        public password: string,
        public createdAt: number,
        public updateAt: number 
        ){
    }
}
