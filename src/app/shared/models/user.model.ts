export class User {
    constructor(public username: string,
                public idNumber: string,
                public firstName: string,
                public lastName: string,
                public cellNumber: string,
        public emailAddress: string,
                public isActive: boolean,
                public token: string) { }
}
