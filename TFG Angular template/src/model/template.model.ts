import { ElementModel } from "./element.model";

export class TemplateModel{
    name: string;
    backgroundimage:string;
    image:string;
    token:string;
    creationdate : string;
    button: Array<ElementModel>;
    text: Array<ElementModel>;
}