export interface Animal {
    id : number;
    name : string;
    sprites : {
        front_default : string
    };
}
export interface AnimalList {
   abilities? : {
    name : string;
    ability :string;
   }
}