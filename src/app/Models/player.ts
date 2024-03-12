export interface NationalPlayerModel {
    number: Number;
    player:string;
}

export interface PlayerModel {
    id: number;
    nom: string;
    age : number;
    number: number;
    position: string;
    photo: string;
    TeamPlayerModels: TeamPlayerModel[]

}

export interface TeamPlayerModel {
    map(arg0: (player: any) => any): any[];
    id:number
    name: string
    logo:string
}