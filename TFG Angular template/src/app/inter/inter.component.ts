import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import interact from 'interactjs';
import { ElementModel } from 'src/model/element.model';
import { TemplateModel } from 'src/model/template.model';
import { UserModel } from 'src/model/user.model';
import { TemplateService } from 'src/services/template.service';
import { UserService } from 'src/services/user.service';
import Swal from 'sweetalert2';
import html2canvas from 'html2canvas';
//
  var auxIndiceEdicion:number;
  var auxElementModel:ElementModel;
  var keypadImage;

@Component({
  selector: 'app-inter',
  templateUrl: './inter.component.html',
  styleUrls: ['./inter.component.css']
})
export class InterComponent implements OnInit {
  userData:UserModel;
  templateData:TemplateModel;
  templatename:string;
  fechacreacion; 
  response;
  imgData;
  background:string;
  listaelements:Array<ElementModel>;
  listabuttons:Array<ElementModel>;
  listatexts:Array<ElementModel>;
  constructor(private route: ActivatedRoute,
    private router:Router,
    private userService:UserService,
    private templateService:TemplateService,) { 
      this.userData = new UserModel();
      this.templateData = new TemplateModel();
      auxIndiceEdicion;
      keypadImage;
      auxElementModel = new ElementModel();
      this.listabuttons = new Array<ElementModel>();
      this.listatexts = new Array<ElementModel>();
      this.listaelements = new Array<ElementModel>();
      this.background = 'https://cdna.artstation.com/p/assets/images/images/012/113/288/large/eric-_j-08213.jpg?1533108263';
    
    }

  ngOnInit(): void {
    this.getBase64ImageFromUrl(this.background).then(base64 => {
      this.imgData = base64;
    });
    this.response = this.userService.getUser();
    this.templateData.backgroundimage = this.background;
    if(parseInt(this.route.snapshot.paramMap.get("id"))){
      this.templateService.getTemplate(parseInt(this.route.snapshot.paramMap.get("id")))
      .subscribe(resp => {
        console.log(resp);
        this.templateData.name = resp["name"];
        this.templateData.backgroundimage = resp["backgroundimage"];
        this.templateData.creationdate = resp["creationdate"];
        this.templateData.button = resp["buttons"];
        this.templateData.text = resp["texts"];
        (<HTMLInputElement>document.getElementById("Name")).value = this.templateData.name;
        this.background = this.templateData.backgroundimage;
        this.getBase64ImageFromUrl(this.background).then(base64 => {
          this.imgData = base64;
        });
        this.listatexts = this.templateData.text;
        this.listabuttons = this.templateData.button;
        this.listaelements = this.listabuttons.concat(this.listatexts);

      },(err => {
        console.log(err);
        this.errorLoadModal("Error","Template could not be loaded"); 
      }));
      
    }
    
    interact('.dropzone')
    .dropzone({
      // only accept elements matching this CSS selector
      accept: '#yes-drop',
      // Require a 75% element overlap for a drop to be possible
      overlap: 0.75,
      // listen for drop related events:
      
      ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active')
      },
      ondragenter: function (event) {
        var draggableElement = event.relatedTarget
        var dropzoneElement = event.target
    
        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target')
        draggableElement.classList.add('can-drop')
      },
      ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
      },
      ondrop: function (event) {
      },
      ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active')
        event.target.classList.remove('drop-target')
      }
    })
    interact('.drag-drop')
    .resizable({
      // resize from all edges and corners
      edges: { left: true, right: true, bottom: true, top: true },
      
      listeners: {
        move (event) {
          var target = event.target
          var x = (parseFloat(target.getAttribute('data-x')) || 0)
          var y = (parseFloat(target.getAttribute('data-y')) || 0)
          
          // update the element's style
          target.style.width = event.rect.width + 'px'
          target.style.height = event.rect.height + 'px'
  
          // translate when resizing from top or left edges
          x += event.deltaRect.left
          y += event.deltaRect.top
  
          target.style.transform = 'translate(' + x + 'px,' + y + 'px)'
          
          target.setAttribute('data-x', x)
          target.setAttribute('data-y', y)
          auxElementModel.width=event.rect.width;
          auxElementModel.height=event.rect.height;
          //target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
        }
      },
      modifiers: [
        // keep the edges inside the parent
        
  
        // minimum size
        interact.modifiers.restrictSize({
          min: { width: 100, height: 50 },
          max: { width: 1024, height: 500}
        })
      ],
  
      inertia: true
    })
      .draggable({
        inertia: true,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true
          })
        ],
        autoScroll: true,
        // dragMoveListener from the dragging demo above
        listeners: { move: dragMoveListener}
      })
      
      function dragMoveListener (event) {
        var target = event.target
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
        var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
      
        // translate the element
        target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
      
        // update the posiion attributes
        auxElementModel.width=event.rect.width;
        auxElementModel.height=event.rect.height;
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
        auxElementModel.positionX= x;
        auxElementModel.positionY= y;
      }
  }
  addbutton(){
    var element = new ElementModel();
    element.content="Button";
    this.listabuttons.push(element);
    this.listaelements.push(element);
  }
  addtext(){
    
    var element = new ElementModel();
    element.content="Text"; 
    this.listatexts.push(element);
    this.listaelements.push(element);
  }
  gettipo(indice){
    return this.listaelements[indice].content;
  }
  async editbackground(){
    const { value: text } = await Swal.fire({
      input: 'text',
      inputLabel: 'URL image',
      inputPlaceholder: 'Enter the URL',
      showCancelButton: true
    })
    if(this.imageExists(text) && text!=""){
      this.fondocambiado(text);
      this.templateData.backgroundimage = text;
      this.background = text;
      this.getBase64ImageFromUrl(this.background).then(base64 => {
        this.imgData = base64;
      });
    }
  }
  errorLoadModal(msg1:string,msg2:string){
    Swal.fire(
      msg1,
      msg2,
      'error'
    )
  }
  fondocambiado(imagen:string){
    Swal.fire({
      title: 'Congrats!',
      text: 'The backgroind is changed.',
      imageUrl: imagen,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }
  imageExists(image_url):boolean{

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status != 404;

}
  deleteElement(){
    var aux:ElementModel;
    aux = this.listaelements[auxIndiceEdicion];
    this.listabuttons.forEach((element,index)=>{
      if(element==aux) this.listabuttons.splice(index,1);
    });
    this.listatexts.forEach((element,index)=>{
      if(element==aux) this.listatexts.splice(index,1);
    });
    this.listaelements.splice(auxIndiceEdicion,1);
    
  } 

  editElement(item:ElementModel,indice:number,event){
    auxIndiceEdicion = indice;
    auxElementModel = item;
    item.positionX= event.target.getAttribute("data-x");
    item.positionY= event.target.getAttribute("data-y");
    (<HTMLInputElement>document.getElementById("CommandKey")).value = item.commandKey;
    (<HTMLInputElement>document.getElementById("Content")).value = item.content;
  } 
  onKeyPress(event){
    const value = event.target.value;
    if(value != "" || value != null){
      auxElementModel.content = value;
    }
  }
  onKeyPressCommand(event){
    const aux_value = event.target.value;
    if(aux_value != "" || aux_value != null){
      auxElementModel.commandKey = aux_value;
    }
  }
  deleteTemplateModal(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteKeypad();
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  deleteKeypad(){
    if(parseInt(this.route.snapshot.paramMap.get("id"))){
      this.templateService.deleteTemplate(parseInt(this.route.snapshot.paramMap.get("id")))
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl('/keypads');
      },(err => {
        console.log(err);
        this.errorLoadModal("Error","Teplate could not be deleted");
      }));
    }else{
      this.router.navigateByUrl('/keypads');
    }
  }
  saveTemplateModal(){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Save`,
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.checkCreate();
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
  checkCreate(){
    if(parseInt(this.route.snapshot.paramMap.get("id"))){
      this.updateKeypad();
    }else{
      this.createKeypad();
    }
  }
  async updateKeypad(){
    await this.capturar();
    this.templatename = (<HTMLInputElement>document.getElementById("Name")).value;
    this.templateData = {name: this.templatename, backgroundimage: this.background , token: null , image: keypadImage , creationdate: this.templateData.creationdate, button:this.listabuttons,text:this.listatexts};
    this.templateService.updateTemplate(this.templateData,parseInt(this.route.snapshot.paramMap.get("id")))
    .subscribe(resp => {
      console.log(resp);
      
      this.router.navigateByUrl('/keypads');
    },(err => {
      console.log(err);
      this.errorLoadModal("Error","Teplate could not be updated"); 
    }));
  }
  async createKeypad(){
    await this.capturar();
    this.fechacreacion = new Date().getFullYear()+'-'+("0" + (new Date().getMonth() + 1)).slice(-2)+'-'+("0" + new Date().getDate()).slice(-2);
    if((<HTMLInputElement>document.getElementById("Name")).value == ""){
      this.templatename = "Default Keypad"
    }else{
      this.templatename = (<HTMLInputElement>document.getElementById("Name")).value;
    }
    this.templateData = {name: this.templatename, backgroundimage: this.background, token: null, image: keypadImage, creationdate: this.fechacreacion, button:this.listabuttons,text:this.listatexts};
    this.templateService.newTemplate(this.templateData)
    .subscribe(resp => {
      console.log(resp);
      
      this.router.navigateByUrl('/keypads');
    },(err => {
      console.log(err);
      this.errorLoadModal("Error","Teplate could not be created"); 
    }));
  }
    async getBase64ImageFromUrl(imageUrl) {
    var res = await fetch(imageUrl);
    var blob = await res.blob();
    return new Promise((resolve, reject) => {
      var reader  = new FileReader();
      reader.addEventListener("load", function () {
          resolve(reader.result);
      }, false);
      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    })
  };

  async capturar(){
    var htmlimagelement = await (<HTMLInputElement>document.getElementById("imageid"));
    await html2canvas((<HTMLInputElement>document.getElementById("drop-zone")),{scrollY: -window.scrollY +12}).then(async function (canvas) {
      htmlimagelement.value = await canvas.toDataURL("image/jpeg");
      keypadImage = await canvas.toDataURL("image/jpeg");
    });
  }

}
