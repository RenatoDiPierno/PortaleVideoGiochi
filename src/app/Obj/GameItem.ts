export class GameItem{

    private _Name: string;
    Id: number;
    Description: string;
    Type: string;
    Rating: number;
    Price: number;
    ExitYear: number;

    constructor(name:string, Id: number){
        this._Name=name;
        this.Id=Id;
    }

    get name(){
        return this._Name;
    }
    
}