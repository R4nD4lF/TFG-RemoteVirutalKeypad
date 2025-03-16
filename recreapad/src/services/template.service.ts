import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TemplateModel } from 'src/model/template.model';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  private url = environment.apiURL;
  userId = localStorage.getItem("id");
  templateId:number;
  constructor(private http: HttpClient) { }

  newTemplate(templateData:TemplateModel){
    const authDataStrapi = {
      name: templateData.name,
      creationdate: templateData.creationdate,
      backgroundimage: templateData.backgroundimage,
      image: templateData.image,
      buttons: templateData.button,
      texts : templateData.text,
      confirmed: false,
      blocked: true
    };

    return this.http.post(
      `${this.url}/users/${this.userId}/templates`,
      authDataStrapi
    ).pipe(
      map( resp =>{
        return resp;
      })
  );
 }
 deleteTemplate(Id:number){
  return this.http.delete(
    `${this.url}/users/${this.userId}/templates/${Id}`
  ).pipe(
      map( resp =>{
        return resp;
      })
  );
 }
 getTemplate(id:number){
   this.templateId = id;
  return this.http.get(
    `${this.url}/users/${this.userId}/templates/${this.templateId}`
  ).pipe(
      map( resp =>{
        return resp;
      })
  );
 }
 getAllTemplates(token:string){
   const params = new HttpParams().set('token',token);
 return this.http.get(
   `${this.url}/users/${this.userId}/templates`, {params}
 ).pipe(
     map( resp =>{
       return resp;
     })
 );
}
updateTemplate(templateData:TemplateModel, templateId:number){
  const authDataStrapi = {
    name: templateData.name,
    creationdate: templateData.creationdate,
    image: templateData.image,
    backgroundimage: templateData.backgroundimage,
    buttons: templateData.button,
    texts : templateData.text,
    confirmed: false,
    blocked: true
  };

  return this.http.put(
    `${this.url}/users/${this.userId}/templates/${templateId}`,
    authDataStrapi
  ).pipe(
    map( resp =>{
      return resp;
    })
);
}
  createToken(templateId:number){
    return this.http.post(
      `${this.url}/users/${this.userId}/templates/${templateId}/token`,{}
    ).pipe(
        map( resp =>{
          return resp;
        })
    );
  }
  getToken(templateId:number){
  return this.http.get(
    `${this.url}/users/${this.userId}/templates/${templateId}/token`
  ).pipe(
      map( resp =>{
        return resp;
      })
  );
  }

  deleteToken(templateId:number){
    return this.http.delete(
      `${this.url}/users/${this.userId}/templates/${templateId}/token`
    ).pipe(
        map( resp =>{
          return resp;
        })
    );
  }
}
