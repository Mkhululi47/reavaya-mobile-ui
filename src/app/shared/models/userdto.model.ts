export class UserDto {
    constructor(public username: string,
                public id_number: string,
                public first_name: string,
                public last_name: string,
                public cell_number: string,
        public email_address: string,
        public password: string,
                public is_active: boolean) { }
}
