export class User {
    public _id: string;
    public email: string;
    public name: string;
    public password: string;
    public status: string;

    constructor(_id = null, email = null, name = null, password = null, status = null){
        this._id = _id;
        this.email = email;
        this.name = name;
        this.password = password;
        this.status = status;

    };
}