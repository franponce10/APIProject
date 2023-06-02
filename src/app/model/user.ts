export class User {
    constructor(
        public id: number,
        public first_name: string,
        public last_name: string,
        public email: string,
        public job: string,
        public avatar: string,
        public password: string,
        public createdAt: number,
        public updateAt: number 
        ){
    }
}
