export class MenuItem {
    Id: number;
    _Description: string;
    Checked: boolean = false;

    constructor(desciption: string) {
        this._Description = desciption;
    }
}