export class ElementModel{
    commandKey:string;
    content:string;
    payload:string;
    positionX:number;
    positionY:number;
    width:number;
    height:number;
    condition: ConditionModel;
}

export class ConditionModel{
    commandKeyReceived:string;
    action:boolean;
}