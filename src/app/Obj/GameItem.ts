export class GameItem{

    private _Name: string;
    Id: number;
    Description: string;
    Type: string;
    Rating: number;
    Price: number;
    ExitYear: number;

    get name(){
        return this._Name;
    }

}