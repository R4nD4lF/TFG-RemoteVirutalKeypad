(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/juanma/Documentos/TecladoVirtual/TFG Angular template/src/main.ts */"zUnb");


/***/ }),

/***/ "0azZ":
/*!*********************************************!*\
  !*** ./src/app/editor/editor.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0b3IuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "3hcL":
/*!******************************************!*\
  !*** ./src/app/inter/inter.component.ts ***!
  \******************************************/
/*! exports provided: InterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterComponent", function() { return InterComponent; });
/* harmony import */ var _raw_loader_inter_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./inter.component.html */ "65UP");
/* harmony import */ var _inter_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inter.component.css */ "fRZP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! interactjs */ "UBTA");
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(interactjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_model_element_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/model/element.model */ "rmJP");
/* harmony import */ var src_model_template_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/model/template.model */ "jmBe");
/* harmony import */ var src_model_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/model/user.model */ "z6cF");
/* harmony import */ var src_services_template_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/template.service */ "t6sr");
/* harmony import */ var src_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/user.service */ "ITiG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! html2canvas */ "wOnQ");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_11__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












//
var auxIndiceEdicion;
var auxElementModel;
var keypadImage;
var InterComponent = /** @class */ (function () {
    function InterComponent(route, router, userService, templateService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.templateService = templateService;
        this.userData = new src_model_user_model__WEBPACK_IMPORTED_MODULE_7__["UserModel"]();
        this.templateData = new src_model_template_model__WEBPACK_IMPORTED_MODULE_6__["TemplateModel"]();
        auxIndiceEdicion;
        keypadImage;
        auxElementModel = new src_model_element_model__WEBPACK_IMPORTED_MODULE_5__["ElementModel"]();
        this.listabuttons = new Array();
        this.listatexts = new Array();
        this.listaelements = new Array();
        this.background = 'https://cdna.artstation.com/p/assets/images/images/012/113/288/large/eric-_j-08213.jpg?1533108263';
    }
    InterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getBase64ImageFromUrl(this.background).then(function (base64) {
            _this.imgData = base64;
        });
        this.response = this.userService.getUser();
        this.templateData.backgroundimage = this.background;
        if (parseInt(this.route.snapshot.paramMap.get("id"))) {
            this.templateService.getTemplate(parseInt(this.route.snapshot.paramMap.get("id")))
                .subscribe(function (resp) {
                console.log(resp);
                _this.templateData.name = resp["name"];
                _this.templateData.backgroundimage = resp["backgroundimage"];
                _this.templateData.creationdate = resp["creationdate"];
                _this.templateData.button = resp["buttons"];
                _this.templateData.text = resp["texts"];
                document.getElementById("Name").value = _this.templateData.name;
                _this.background = _this.templateData.backgroundimage;
                _this.getBase64ImageFromUrl(_this.background).then(function (base64) {
                    _this.imgData = base64;
                });
                _this.listatexts = _this.templateData.text;
                _this.listabuttons = _this.templateData.button;
                _this.listaelements = _this.listabuttons.concat(_this.listatexts);
            }, (function (err) {
                console.log(err);
                _this.errorLoadModal("Error", "Template could not be loaded");
            }));
        }
        interactjs__WEBPACK_IMPORTED_MODULE_4___default()('.dropzone')
            .dropzone({
            // only accept elements matching this CSS selector
            accept: '#yes-drop',
            // Require a 75% element overlap for a drop to be possible
            overlap: 0.75,
            // listen for drop related events:
            ondropactivate: function (event) {
                // add active dropzone feedback
                event.target.classList.add('drop-active');
            },
            ondragenter: function (event) {
                var draggableElement = event.relatedTarget;
                var dropzoneElement = event.target;
                // feedback the possibility of a drop
                dropzoneElement.classList.add('drop-target');
                draggableElement.classList.add('can-drop');
            },
            ondragleave: function (event) {
                // remove the drop feedback style
                event.target.classList.remove('drop-target');
                event.relatedTarget.classList.remove('can-drop');
            },
            ondrop: function (event) {
            },
            ondropdeactivate: function (event) {
                // remove active dropzone feedback
                event.target.classList.remove('drop-active');
                event.target.classList.remove('drop-target');
            }
        });
        interactjs__WEBPACK_IMPORTED_MODULE_4___default()('.drag-drop')
            .resizable({
            // resize from all edges and corners
            edges: { left: true, right: true, bottom: true, top: true },
            listeners: {
                move: function (event) {
                    var target = event.target;
                    var x = (parseFloat(target.getAttribute('data-x')) || 0);
                    var y = (parseFloat(target.getAttribute('data-y')) || 0);
                    // update the element's style
                    target.style.width = event.rect.width + 'px';
                    target.style.height = event.rect.height + 'px';
                    // translate when resizing from top or left edges
                    x += event.deltaRect.left;
                    y += event.deltaRect.top;
                    target.style.transform = 'translate(' + x + 'px,' + y + 'px)';
                    target.setAttribute('data-x', x);
                    target.setAttribute('data-y', y);
                    auxElementModel.width = event.rect.width;
                    auxElementModel.height = event.rect.height;
                    //target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
                }
            },
            modifiers: [
                // keep the edges inside the parent
                // minimum size
                interactjs__WEBPACK_IMPORTED_MODULE_4___default.a.modifiers.restrictSize({
                    min: { width: 100, height: 50 },
                    max: { width: 1024, height: 500 }
                })
            ],
            inertia: true
        })
            .draggable({
            inertia: true,
            modifiers: [
                interactjs__WEBPACK_IMPORTED_MODULE_4___default.a.modifiers.restrictRect({
                    restriction: 'parent',
                    endOnly: true
                })
            ],
            autoScroll: true,
            // dragMoveListener from the dragging demo above
            listeners: { move: dragMoveListener }
        });
        function dragMoveListener(event) {
            var target = event.target;
            // keep the dragged position in the data-x/data-y attributes
            var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
            var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
            // translate the element
            target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
            // update the posiion attributes
            auxElementModel.width = event.rect.width;
            auxElementModel.height = event.rect.height;
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
            auxElementModel.positionX = x;
            auxElementModel.positionY = y;
        }
    };
    InterComponent.prototype.addbutton = function () {
        var element = new src_model_element_model__WEBPACK_IMPORTED_MODULE_5__["ElementModel"]();
        element.content = "Button";
        this.listabuttons.push(element);
        this.listaelements.push(element);
    };
    InterComponent.prototype.addtext = function () {
        var element = new src_model_element_model__WEBPACK_IMPORTED_MODULE_5__["ElementModel"]();
        element.content = "Text";
        this.listatexts.push(element);
        this.listaelements.push(element);
    };
    InterComponent.prototype.gettipo = function (indice) {
        return this.listaelements[indice].content;
    };
    InterComponent.prototype.editbackground = function () {
        return __awaiter(this, void 0, void 0, function () {
            var text;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                            input: 'text',
                            inputLabel: 'URL image',
                            inputPlaceholder: 'Enter the URL',
                            showCancelButton: true
                        })];
                    case 1:
                        text = (_a.sent()).value;
                        if (this.imageExists(text) && text != "") {
                            this.fondocambiado(text);
                            this.templateData.backgroundimage = text;
                            this.background = text;
                            this.getBase64ImageFromUrl(this.background).then(function (base64) {
                                _this.imgData = base64;
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    InterComponent.prototype.errorLoadModal = function (msg1, msg2) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire(msg1, msg2, 'error');
    };
    InterComponent.prototype.fondocambiado = function (imagen) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: 'Congrats!',
            text: 'The backgroind is changed.',
            imageUrl: imagen,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        });
    };
    InterComponent.prototype.imageExists = function (image_url) {
        var http = new XMLHttpRequest();
        http.open('HEAD', image_url, false);
        http.send();
        return http.status != 404;
    };
    InterComponent.prototype.deleteElement = function () {
        var _this = this;
        var aux;
        aux = this.listaelements[auxIndiceEdicion];
        this.listabuttons.forEach(function (element, index) {
            if (element == aux)
                _this.listabuttons.splice(index, 1);
        });
        this.listatexts.forEach(function (element, index) {
            if (element == aux)
                _this.listatexts.splice(index, 1);
        });
        this.listaelements.splice(auxIndiceEdicion, 1);
    };
    InterComponent.prototype.editElement = function (item, indice, event) {
        auxIndiceEdicion = indice;
        auxElementModel = item;
        item.positionX = event.target.getAttribute("data-x");
        item.positionY = event.target.getAttribute("data-y");
        document.getElementById("CommandKey").value = item.commandKey;
        document.getElementById("Content").value = item.content;
    };
    InterComponent.prototype.onKeyPress = function (event) {
        var value = event.target.value;
        if (value != "" || value != null) {
            auxElementModel.content = value;
        }
    };
    InterComponent.prototype.onKeyPressCommand = function (event) {
        var aux_value = event.target.value;
        if (aux_value != "" || aux_value != null) {
            auxElementModel.commandKey = aux_value;
        }
    };
    InterComponent.prototype.deleteTemplateModal = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.isConfirmed) {
                _this.deleteKeypad();
                sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
    };
    InterComponent.prototype.deleteKeypad = function () {
        var _this = this;
        if (parseInt(this.route.snapshot.paramMap.get("id"))) {
            this.templateService.deleteTemplate(parseInt(this.route.snapshot.paramMap.get("id")))
                .subscribe(function (resp) {
                console.log(resp);
                _this.router.navigateByUrl('/keypads');
            }, (function (err) {
                console.log(err);
                _this.errorLoadModal("Error", "Teplate could not be deleted");
            }));
        }
        else {
            this.router.navigateByUrl('/keypads');
        }
    };
    InterComponent.prototype.saveTemplateModal = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: "Don't save",
        }).then(function (result) {
            if (result.isConfirmed) {
                _this.checkCreate();
                sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire('Saved!', '', 'success');
            }
            else if (result.isDenied) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire('Changes are not saved', '', 'info');
            }
        });
    };
    InterComponent.prototype.checkCreate = function () {
        if (parseInt(this.route.snapshot.paramMap.get("id"))) {
            this.updateKeypad();
        }
        else {
            this.createKeypad();
        }
    };
    InterComponent.prototype.updateKeypad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.capturar()];
                    case 1:
                        _a.sent();
                        this.templatename = document.getElementById("Name").value;
                        this.templateData = { name: this.templatename, backgroundimage: this.background, token: null, image: keypadImage, creationdate: this.templateData.creationdate, button: this.listabuttons, text: this.listatexts };
                        this.templateService.updateTemplate(this.templateData, parseInt(this.route.snapshot.paramMap.get("id")))
                            .subscribe(function (resp) {
                            console.log(resp);
                            _this.router.navigateByUrl('/keypads');
                        }, (function (err) {
                            console.log(err);
                            _this.errorLoadModal("Error", "Teplate could not be updated");
                        }));
                        return [2 /*return*/];
                }
            });
        });
    };
    InterComponent.prototype.createKeypad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.capturar()];
                    case 1:
                        _a.sent();
                        this.fechacreacion = new Date().getFullYear() + '-' + ("0" + (new Date().getMonth() + 1)).slice(-2) + '-' + ("0" + new Date().getDate()).slice(-2);
                        if (document.getElementById("Name").value == "") {
                            this.templatename = "Default Keypad";
                        }
                        else {
                            this.templatename = document.getElementById("Name").value;
                        }
                        this.templateData = { name: this.templatename, backgroundimage: this.background, token: null, image: keypadImage, creationdate: this.fechacreacion, button: this.listabuttons, text: this.listatexts };
                        this.templateService.newTemplate(this.templateData)
                            .subscribe(function (resp) {
                            console.log(resp);
                            _this.router.navigateByUrl('/keypads');
                        }, (function (err) {
                            console.log(err);
                            _this.errorLoadModal("Error", "Teplate could not be created");
                        }));
                        return [2 /*return*/];
                }
            });
        });
    };
    InterComponent.prototype.getBase64ImageFromUrl = function (imageUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var res, blob;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(imageUrl)];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.blob()];
                    case 2:
                        blob = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var reader = new FileReader();
                                reader.addEventListener("load", function () {
                                    resolve(reader.result);
                                }, false);
                                reader.onerror = function () {
                                    return reject(_this);
                                };
                                reader.readAsDataURL(blob);
                            })];
                }
            });
        });
    };
    ;
    InterComponent.prototype.capturar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var htmlimagelement;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, document.getElementById("imageid")];
                    case 1:
                        htmlimagelement = _a.sent();
                        return [4 /*yield*/, html2canvas__WEBPACK_IMPORTED_MODULE_11___default()(document.getElementById("drop-zone"), { scrollY: -window.scrollY + 12 }).then(function (canvas) {
                                return __awaiter(this, void 0, void 0, function () {
                                    var _a;
                                    return __generator(this, function (_b) {
                                        switch (_b.label) {
                                            case 0:
                                                _a = htmlimagelement;
                                                return [4 /*yield*/, canvas.toDataURL("image/jpeg")];
                                            case 1:
                                                _a.value = _b.sent();
                                                return [4 /*yield*/, canvas.toDataURL("image/jpeg")];
                                            case 2:
                                                keypadImage = _b.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InterComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
        { type: src_services_template_service__WEBPACK_IMPORTED_MODULE_8__["TemplateService"] }
    ]; };
    InterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-inter',
            template: _raw_loader_inter_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_inter_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            src_services_template_service__WEBPACK_IMPORTED_MODULE_8__["TemplateService"]])
    ], InterComponent);
    return InterComponent;
}());



/***/ }),

/***/ "65UP":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inter/inter.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"section bg-secondary\" >\n\n  <div class=\"col-lg-6\"></div>\n  <div class=\"col-lg-6 right\">\n  <a class=\"btn btn-outline-info mt-4\" (click)=\"addbutton()\">\n    <span class=\"btn-inner--icon \"><i class=\"ni ni-button-play \"></i></span>\n    <span class=\"btn-inner--text \"> Add button</span>\n  </a>\n  <a class=\"btn btn-outline-info mt-4\" (click)=\"addtext()\">\n    <span class=\"btn-inner--icon \"><i class=\"fa fa-text-width\"></i></span>\n    <span class=\"btn-inner--text \"> Add text</span>\n  </a>\n  <a class=\"btn btn-outline-info mt-4\" (click)=\"editbackground()\">\n  <span class=\"btn-inner--icon \"><i class=\"ni ni-image \"></i></span>\n  <span class=\"btn-inner--text \"> Edit background</span>\n  </a>\n  <div class=\"form-group up\" [ngClass]=\"{'focused':focus1===true}\">\n      <div class=\"input-group input-group-alternative mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\"><i class=\"fa fa-edit\"></i></span>\n        </div>\n        <input class=\"form-control\" \n              placeholder=\"Introduce a name for your template\" \n              type=\"name\" \n              id=\"Name\"\n              (focus)=\"focus=true\" \n              (blur)=\"focus=false\"\n              name=\"name\" \n              required>\n      </div>\n    </div>\n</div>\n<div class=\"row\">\n  <div class='elements' *ngIf=\"listaelements.lenght !== 0\" text='text-left'>\n    Command Key\n    <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n      <div class=\"input-group input-group-alternative mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\"><i class=\"fa fa-edit\"></i></span>\n        </div>\n        <input class=\"form-control\" \n              placeholder=\"CommandKey\" \n              type=\"text\" \n              id=\"CommandKey\"\n              (keyup)=\"onKeyPressCommand($event)\"\n              (focus)=\"focus=true\" \n              (blur)=\"focus=false\"\n              name=\"command\" \n              required>\n      </div>\n    </div>\n    Content\n    <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n      <div class=\"input-group input-group-alternative mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\"><i class=\"fa fa-edit\"></i></span>\n        </div>\n        <input class=\"form-control\" \n              placeholder=\"Content\" \n              type=\"text\" \n              id=\"Content\"\n              (keyup)=\"onKeyPress($event)\"\n              (focus)=\"focus=true\" \n              (blur)=\"focus=false\"\n              name=\"content\" \n              required>\n        <input class=\"form-control\" \n              type=\"hidden\" \n              id=\"imageid\"\n              name=\"imageid\" \n              required>\n      </div>\n    </div>\n    <a class=\"btn btn-danger btn-icon mb-3 mb-sm-0 flex-parent jc-center\" (click)=\"deleteElement()\">\n      <span class=\"btn-inner--icon neutral\"><i class=\"ni ni-fat-delete text-neutral\"></i></span>\n      <span class=\"btn-inner--text text-neutral\">Delete</span>\n  </a>\n  </div>\n<div  style=\"background-image: url('{{imgData}}');background-repeat: no-repeat;background-size: 1490px 720px;\"  class=\"dropzone\" id=\"drop-zone\" >\n  <div  id=\"yes-drop\" *ngFor=\"let item of listaelements;let indice=index\" (mousedown)=\"editElement(item,indice,$event)\"  [ngStyle]=\"{'transform': 'translate('+item.positionX+'px, '+item.positionY+'px)', 'width': +item.width+'px' , 'height': +item.height+'px', 'font-size': +item.height/10+item.width/20+'px' , 'text-align': 'center'}\" class=\"drag-drop\"  >{{gettipo(indice)}} </div>\n  \n</div>\n</div>\n<div class=\"pl-md-5\">\n  <div class=\"text-center\">\n    <a class=\"btn btn-outline-danger btn-icon mb-3 mb-sm-0\" (click)=\"deleteTemplateModal()\">\n      <span class=\"btn-inner--icon\"><i class=\"ni ni-fat-delete\"></i></span>\n      <span class=\"btn-inner--text\">Delete Template</span>\n    </a>\n    <a class=\"btn btn-success btn-icon mb-3 mb-sm-0\" (click)=\"saveTemplateModal()\">\n      <span class=\"btn-inner--icon neutral\"><i class=\"fa fa-save neutral text-neutral\"></i></span>\n      <span class=\"btn-inner--text text-neutral\">Save Template</span>\n    </a>\n  </div>\n</div>\n</section>");

/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.scss */ "bdh1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.model = {
            left: true,
            middle: false,
            right: false
        };
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.ctorParameters = function () { return []; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    socketapiURL: "http://161.22.45.138:8081/websockets",
    apiURL: "http://localhost:8080",
    mockUserForTesting: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B3D5":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tokens/tokens.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n    <div class=\"position-relative\">\n      <!-- shape Hero -->\n      <section class=\"section section-lg section-shaped pb-250 bg-gradient-orange\">\n        <div class=\"shape shape-style-4 shape-primary\">\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n        </div>\n        <div class=\"container py-lg-md \">\n            <h1 *ngIf=\"!tokengenerated\" class=\"display-3  text-dark\">Press the button to share your keypad: {{keypadName}}.\n            </h1>\n            <h1 *ngIf=\"tokengenerated\" class=\"display-3  text-dark\">You can use the keypad \"{{keypadName}}\" now!\n            </h1>\n            <div class=\"row\">\n                    <a class=\"btn btn-success btn-icon up\" *ngIf=\"!tokengenerated\"(click)=\"generateToken()\">\n                        <span class=\"btn-inner--icon neutral\"><i class=\"fa fa-qrcode neutral text-neutral\"></i></span>\n                        <span class=\"btn-inner--text text-neutral\">Generate Token</span>\n                    </a>\n                    <a class=\"btn btn-danger btn-icon up right\" *ngIf=\"tokengenerated\" (click)=\"deleteToken()\">\n                        <span class=\"btn-inner--icon neutral \"><i class=\"ni ni-fat-delete neutral text-neutral \"></i></span>\n                        <span class=\"btn-inner--text text-neutral\">Delete Token</span>\n                    </a>\n                    \n                <div class=\"form-group col up\" [ngClass]=\"{'focused':focus1===true}\">\n                    <div class=\"input-group input-group-alternative mb-3\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"fa fa-qrcode\"></i></span>\n                        </div>\n                        <input class=\"form-control\" \n                                placeholder=\"Token\" \n                                type=\"text\" \n                                id=\"Tokenurl\"\n                                (focus)=\"focus=true\" \n                                (blur)=\"focus=false\"\n                                readonly>\n                    </div>\n                </div>\n                <div class=\"col right\">\n                    <img class=\"right\" *ngIf=\"tokengenerated\" [src]=\"qrcodeimage\" style=\"width: 270px; height: 270px;\">\n                </div>\n                <a class=\"btn btn-success btn-icon up right\" *ngIf=\"tokengenerated\" (click)=\"try()\">\n                    <span class=\"btn-inner--icon neutral \"><i class=\"ni ni-fat-delete neutral text-neutral \"></i></span>\n                    <span class=\"btn-inner--text text-neutral\">Try</span>\n                </a>\n            </div>\n        </div>\n        <div class=\"separator separator-bottom separator-skew\">\n            <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n                <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n            </svg>\n        </div>\n      </section>\n      <section>\n        <div class=\"pl-md-5\">\n            <div class=\"text-center\">\n                <div class=\"row justify-content-around\">\n                  <div class=\"col-7 text-left\">\n                    <a href=\"javascript:void(0)\" [routerLink]=\"['/keypads']\" routerLinkActive=\"router-link-active\"  class=\"text-dark\">\n                      <span class=\"btn-inner--icon\"><i class=\"fa fa-step-backward mr-2\"></i></span>\n                      <u>Your templates</u>\n                    </a>\n                  </div>\n                </div>\n            </div>   \n        </div>\n    </section>\n    </div>\n</main>\n");

/***/ }),

/***/ "BGiY":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n    <section class=\"section section-shaped section-lg\">\n        <div class=\"shape shape-style-5 bg-gradient-orange\">\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n        </div>\n        <div class=\"container pt-lg-md\">\n          <div class=\"row justify-content-center\">\n            <div class=\"col-lg-8\">\n              <div class=\"card bg-gradient-secondary shadow\">\n                <div class=\"card-body p-lg-5\">\n                  <h4 class=\"mb-1\">Contact with us</h4>\n                  <p class=\"mt-0\">Your opinion is very important to us, you can contact us by sending a message or calling on the phone. </p>\n                  \n                  <div class=\"form-group mt-5\" [ngClass]=\"{'focused':focus===true}\">\n                    <div class=\"input-group input-group-alternative\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"ni ni-user-run\"></i></span>\n                      </div>\n                      <input class=\"form-control\" placeholder=\"Your name\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                    </div>\n                  </div>\n                  <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                    <div class=\"input-group input-group-alternative\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                      </div>\n                      <input class=\"form-control\" placeholder=\"Email address\" type=\"email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                    </div>\n                  </div>\n                  <div class=\"form-group mb-4\">\n                    <textarea class=\"form-control form-control-alternative\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>\n                  </div>\n                  <div>\n                    <button type=\"button\" class=\"btn btn-success btn-round btn-block btn-lg\">Send Message</button>\n                  </div>\n                  <ul class=\"list-unstyled mt-5\">\n                    <li class=\"py-2\">\n                      <div class=\"d-flex align-items-center\">\n                        <div>\n                          <div class=\"badge badge-circle badge-info mr-3\">\n                            <i class=\"ni ni-headphones\"></i>\n                          </div>\n                        </div>\n                        <div>\n                          <h6 class=\"mb-0\">Tel: +34 999 88 77 66</h6>\n                        </div>\n                      </div>\n                    </li>\n                    <li class=\"py-2\">\n                      <div class=\"d-flex align-items-center\">\n                        <div>\n                          <div class=\"badge badge-circle badge-info mr-3\">\n                            <i class=\"ni ni-world\"></i>\n                          </div>\n                        </div>\n                        <div>\n                          <h6 class=\"mb-0\">Calle Rueda, 69 - 13247 Salamanca - España</h6>\n                        </div>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n</main>");

/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "zRkE");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.scss */ "cruu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/user.service */ "ITiG");
/* harmony import */ var src_services_template_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/template.service */ "t6sr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(templateService, location, router, userService) {
        this.templateService = templateService;
        this.location = location;
        this.router = router;
        this.userService = userService;
        this.isCollapsed = true;
        this.yScrollStack = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
    };
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isLogged = function () {
        var result;
        result = String(this.userService.userIsAuthenticated()).trim();
        return result;
    };
    NavbarComponent.prototype.doLogout = function () {
        this.userService.isFakeUserLogged = false;
        this.router.navigateByUrl('/home');
        if (this.userService.rememberMe == true) {
            this.userService.logoutremembering();
        }
        else {
            this.userService.logout();
        }
    };
    NavbarComponent.prototype.createNewTemplate = function () {
        this.templateService.templateId = null;
        this.router.navigateByUrl('/editor');
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: src_services_template_service__WEBPACK_IMPORTED_MODULE_6__["TemplateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_services_template_service__WEBPACK_IMPORTED_MODULE_6__["TemplateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "FexU":
/*!**********************************************!*\
  !*** ./src/app/keypads/keypads.component.ts ***!
  \**********************************************/
/*! exports provided: KeypadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeypadsComponent", function() { return KeypadsComponent; });
/* harmony import */ var _raw_loader_keypads_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./keypads.component.html */ "YgeM");
/* harmony import */ var _keypads_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keypads.component.css */ "n9On");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_services_template_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/template.service */ "t6sr");
/* harmony import */ var src_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/user.service */ "ITiG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var KeypadsComponent = /** @class */ (function () {
    function KeypadsComponent(userService, templateService, router) {
        this.userService = userService;
        this.templateService = templateService;
        this.router = router;
        this.lista = new Array();
    }
    KeypadsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser()
            .subscribe(function (resp) {
            console.log(resp);
            _this.username = resp['userName'];
            _this.lista = resp['templateModelList'];
        }, (function (err) {
            console.log(err);
            alert('Error, user could not be loaded');
        }));
    };
    KeypadsComponent.prototype.editKeypad = function (item) {
        var _this = this;
        this.templateId = item["templateId"];
        this.templateService.getTemplate(this.templateId)
            .subscribe(function (resp) {
            console.log(resp);
            _this.router.navigateByUrl(_this.templateId + '/editor');
        }, (function (err) {
            console.log(err);
            alert('Error, template could not be loaded for edition');
        }));
    };
    KeypadsComponent.prototype.createNewTemplate = function () {
        this.router.navigateByUrl('/editor');
    };
    KeypadsComponent.prototype.editToken = function (item) {
        var _this = this;
        this.templateId = item["templateId"];
        this.templateService.getTemplate(this.templateId)
            .subscribe(function (resp) {
            console.log(resp);
            _this.router.navigateByUrl(_this.templateId + '/token');
        }, (function (err) {
            console.log(err);
            alert('Error, template could not be loaded for edition');
        }));
    };
    KeypadsComponent.ctorParameters = function () { return [
        { type: src_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: src_services_template_service__WEBPACK_IMPORTED_MODULE_4__["TemplateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    KeypadsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-keypads',
            template: _raw_loader_keypads_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_keypads_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            src_services_template_service__WEBPACK_IMPORTED_MODULE_4__["TemplateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], KeypadsComponent);
    return KeypadsComponent;
}());



/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div class=\"section pb-0 bg-gradient-orange\">\n    <!-- Hero for FREE version -->\n    <section class=\"section section-lg section-hero section-shaped\">\n      <!-- Background circles -->\n      <div class=\"shape shape-style-1 shape-primary\">\n        <span class=\"span-150\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-75\"></span>\n        <span class=\"span-100\"></span>\n        <span class=\"span-75\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-100\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-100\"></span>\n      </div>\n      <div class=\"container shape-container d-flex align-items-center py-lg\">\n        <div class=\"col px-0\">\n          <div class=\"row align-items-center justify-content-center\">\n            <div class=\"col-lg-6 text-center\">\n              <img src=\"./assets/img/brand/byw/logo_large.png\" style=\"width: 400px;\" class=\"img-fluid\">\n              <p class=\"lead text-dark\">A great application to create your own keypads with a custom design.</p>\n              <div class=\"text-center\">\n                <a [routerLink]=\"['/landing']\"  class=\"btn btn-white btn-icon mb-3 mb-sm-0\">\n                  <span class=\"btn-inner--icon\"><i class=\"ni ni-button-play\"></i></span>\n                  <span class=\"btn-inner--text\">Learn more</span>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- SVG separator -->\n      <div class=\"separator separator-bottom separator-skew zindex-100\">\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n        </svg>\n      </div>\n    </section>\n  </div>\n</main>\n");

/***/ }),

/***/ "HCQv":
/*!********************************************!*\
  !*** ./src/app/tokens/tokens.component.ts ***!
  \********************************************/
/*! exports provided: TokensComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokensComponent", function() { return TokensComponent; });
/* harmony import */ var _raw_loader_tokens_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./tokens.component.html */ "B3D5");
/* harmony import */ var _tokens_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokens.component.css */ "gdmD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_model_template_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/model/template.model */ "jmBe");
/* harmony import */ var src_services_template_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/template.service */ "t6sr");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qrcode */ "0FX9");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qrcode__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var TokensComponent = /** @class */ (function () {
    function TokensComponent(route, templateService, router) {
        this.route = route;
        this.templateService = templateService;
        this.router = router;
        this.templateData = new src_model_template_model__WEBPACK_IMPORTED_MODULE_4__["TemplateModel"]();
        this.tokengenerated = false;
    }
    TokensComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.templateService.getTemplate(parseInt(this.route.snapshot.paramMap.get("id")))
            .subscribe(function (resp) {
            console.log(resp);
            _this.templateData.name = resp["name"];
            _this.templateData.backgroundimage = resp["backgroundimage"];
            _this.templateData.image = resp["image"];
            _this.templateData.token = resp["token"];
            _this.templateData.creationdate = resp["creationdate"];
            _this.templateData.button = resp["buttons"];
            _this.templateData.text = resp["texts"];
            _this.keypadName = resp["name"];
        }, (function (err) {
            console.log(err);
            _this.errorLoadModal("Error", "Template could not be loaded");
        }));
        this.templateService.getToken(parseInt(this.route.snapshot.paramMap.get("id")))
            .subscribe(function (resp) {
            _this.templateData.token = resp["token"];
            if (_this.templateData.token != null) {
                document.getElementById("Tokenurl").value = _this.templateData.token;
                _this.tokengenerated = true;
                _this.qrcodeimage = _this.generateQR(_this.templateData.token);
            }
        }, (function (err) {
            console.log(err);
            _this.errorLoadModal("Error", "Token could not be loaded");
        }));
    };
    TokensComponent.prototype.generateToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.templateService.createToken(parseInt(this.route.snapshot.paramMap.get("id")))
                            .subscribe(function (resp) {
                            _this.tokengenerated = true;
                            console.log(resp);
                        }, (function (err) {
                            console.log(err);
                            _this.errorLoadModal("Error", "Template could not be loaded");
                        }));
                        return [4 /*yield*/, this.delay(300)];
                    case 1:
                        _a.sent();
                        this.templateService.getToken(parseInt(this.route.snapshot.paramMap.get("id")))
                            .subscribe(function (resp) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                console.log(resp);
                                this.templateData.token = resp["token"];
                                document.getElementById("Tokenurl").value = this.templateData.token;
                                this.qrcodeimage = this.generateQR("localhost:4200/controller/" + this.templateData.token);
                                return [2 /*return*/];
                            });
                        }); }, (function (err) {
                            console.log(err);
                            _this.errorLoadModal("Error", "Token could not be loaded");
                        }));
                        return [2 /*return*/];
                }
            });
        });
    };
    TokensComponent.prototype.deleteToken = function () {
        var _this = this;
        this.templateService.deleteToken(parseInt(this.route.snapshot.paramMap.get("id")))
            .subscribe(function (resp) {
            document.getElementById("Tokenurl").value = "Token";
            _this.tokengenerated = false;
            console.log(resp);
        }, (function (err) {
            console.log(err);
            _this.errorLoadModal("Error", "Template could not be loaded");
        }));
    };
    TokensComponent.prototype.errorLoadModal = function (msg1, msg2) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire(msg1, msg2, 'error');
    };
    TokensComponent.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    TokensComponent.prototype.generateQR = function (token) {
        var result;
        qrcode__WEBPACK_IMPORTED_MODULE_7__["toDataURL"](token, function (err, url) {
            result = url;
        });
        return result;
    };
    TokensComponent.prototype.try = function () {
        this.router.navigateByUrl('controller/' + document.getElementById("Tokenurl").value);
    };
    TokensComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_services_template_service__WEBPACK_IMPORTED_MODULE_5__["TemplateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    TokensComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-tokens',
            template: _raw_loader_tokens_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_tokens_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_services_template_service__WEBPACK_IMPORTED_MODULE_5__["TemplateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TokensComponent);
    return TokensComponent;
}());



/***/ }),

/***/ "ITiG":
/*!**************************************!*\
  !*** ./src/services/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL;
        //Just for mocking
        this.isFakeUserLogged = false;
        this.readToken();
        this.readOtherData();
    }
    UserService.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        localStorage.removeItem('username');
        localStorage.removeItem('id');
        localStorage.removeItem('profileImage');
    };
    UserService.prototype.logoutremembering = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        localStorage.removeItem('id');
        localStorage.removeItem('profileImage');
    };
    UserService.prototype.login = function (userData) {
        var _this = this;
        var authData = {
            login: userData.username,
            password: userData.password
        };
        return this.http.post(this.url + "/login", authData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            _this.saveToken(resp['jwt']);
            _this.saveOtherData(resp);
            return resp;
        }));
    };
    UserService.prototype.newUser = function (userData) {
        var authDataStrapi = {
            lastname: userData.lastname,
            username: userData.username,
            name: userData.myname,
            password: userData.password,
            email: userData.email,
            confirmed: false,
            blocked: true
        };
        return this.http.post(this.url + "/singup", authDataStrapi).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            return resp;
        }));
    };
    UserService.prototype.saveToken = function (idtoken) {
        this.userToken = idtoken;
        localStorage.setItem('token', idtoken);
        var today = new Date();
        today.setSeconds(3600);
        localStorage.setItem('expiration', today.getTime().toString());
    };
    UserService.prototype.saveOtherData = function (resp) {
        this.userName = resp['login'];
        localStorage.setItem('username', this.userName);
        this.userId = resp['id'];
        localStorage.setItem('id', this.userId); /*
        if (resp['user'].profilePicture != null){
          this.profileImage = resp['user'].profilePicture.formats.thumbnail.url;
          localStorage.setItem('profileImage', this.profileImage);
        }
        else{
          this.profileImage = undefined;
        }
        this.createdAt = resp['user'].created_at;*/
    };
    UserService.prototype.readToken = function () {
        if (localStorage.getItem('token')) {
            this.userToken = localStorage.getItem('token');
        }
        else {
            this.userToken = '';
        }
        return this.userToken;
    };
    UserService.prototype.readOtherData = function () {
        if (localStorage.getItem('username')) {
            this.userName = localStorage.getItem('username');
        }
        else {
            this.userName = '';
        }
        if (localStorage.getItem('id')) {
            this.userId = localStorage.getItem('id');
        }
        else {
            this.userId = '';
        }
        if (localStorage.getItem('profileImage')) {
            this.profileImage = localStorage.getItem('profileImage');
        }
        else {
            this.profileImage = '';
        }
        if (localStorage.getItem('created_at')) {
            this.createdAt = new Date(localStorage.getItem('created_at'));
        }
        else {
            this.createdAt = null;
        }
    };
    UserService.prototype.userIsAuthenticated = function () {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mockUserForTesting)
            return this.isFakeUserLogged;
        if (this.userToken.length < 2) {
            return false;
        }
        var expiration = new Date();
        expiration.setTime(Number(localStorage.getItem('expiration')));
        if (expiration > new Date() && localStorage.getItem('token')) {
            return true;
        }
        else {
            return false;
        }
    };
    UserService.prototype.getTokenHeader = function () {
        var headerDict = {
            Authorization: 'Bearer ' + this.userToken,
        };
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"](headerDict);
    };
    UserService.prototype.deleteUser = function () {
        this.readOtherData();
        return this.http.delete(this.url + "/users/" + this.userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            return resp;
        }));
    };
    UserService.prototype.updateUser = function (userData) {
        this.readOtherData();
        var authDataStrapi = {
            id: this.userId,
            lastname: userData.lastname,
            username: userData.username,
            name: userData.myname,
            password: userData.password,
            email: userData.email,
            confirmed: false,
            blocked: true
        };
        return this.http.put(this.url + "/users/" + this.userId, authDataStrapi).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            return resp;
        }));
    };
    UserService.prototype.getUser = function () {
        this.readOtherData();
        return this.http.get(this.url + "/users/" + this.userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            return resp;
        }));
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "JhD/":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./landing.component.html */ "QnVx");
/* harmony import */ var _landing_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.component.scss */ "KjGC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_services_template_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/template.service */ "t6sr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LandingComponent = /** @class */ (function () {
    function LandingComponent(templateService, router) {
        this.templateService = templateService;
        this.router = router;
    }
    LandingComponent.prototype.ngOnInit = function () { };
    LandingComponent.prototype.createNewTemplate = function () {
        this.templateService.templateId = null;
        this.router.navigateByUrl('/editor');
    };
    LandingComponent.ctorParameters = function () { return [
        { type: src_services_template_service__WEBPACK_IMPORTED_MODULE_4__["TemplateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-landing',
            template: _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_landing_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_services_template_service__WEBPACK_IMPORTED_MODULE_4__["TemplateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "Kf5D":
/*!*************************************************!*\
  !*** ./src/app/userform/userform.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyZm9ybS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "KjGC":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "LM36":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/team/team.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n    <section class=\"section section-lg section-hero section-shaped\">\n      <div class=\"shape shape-style-4 shape-dark\">\n        <span class=\"span-150\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-75\"></span>\n        <span class=\"span-100\"></span>\n        <span class=\"span-75\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-100\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-100\"></span>\n      </div>\n        <div class=\"container\">\n          <div class=\"row justify-content-center text-center mb-lg\">\n            <div class=\"col-lg-8\">\n              <h2 class=\"display-3 text-white\">The Team</h2>\n              <p class=\"lead text-white\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\n              <div class=\"px-4\">\n                <img src=\"./assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\n                <div class=\"pt-4 text-center\">\n                  <h5 class=\"title\">\n                    <span class=\"d-block text-white\">Juanma Palacios</span>\n                    <small class=\"h6 text-muted\">Student</small>\n                  </h5>\n                  <div class=\"mt-3\">\n                    <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\n                      <i class=\"fa fa-twitter\"></i>\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\n                      <i class=\"fa fa-facebook\"></i>\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\n                      <i class=\"fa fa-dribbble\"></i>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\n              <div class=\"px-4\">\n                <img src=\"./assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\n                <div class=\"pt-4 text-center\">\n                  <h5 class=\"title\">\n                    <span class=\"d-block text-white\">Sebastián Mota</span>\n                    <small class=\"h6 text-muted\">Developer</small>\n                  </h5>\n                  <div class=\"mt-3\">\n                    <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\n                      <i class=\"fa fa-twitter\"></i>\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\n                      <i class=\"fa fa-facebook\"></i>\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\n                      <i class=\"fa fa-dribbble\"></i>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\n              <div class=\"px-4\">\n                <img src=\"./assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\n                <div class=\"pt-4 text-center\">\n                  <h5 class=\"title\">\n                    <span class=\"d-block text-white\">Jesús Ferrón</span>\n                    <small class=\"h6 text-muted\">Developer</small>\n                  </h5>\n                  <div class=\"mt-3\">\n                    <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\n                      <i class=\"fa fa-twitter\"></i>\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\n                      <i class=\"fa fa-facebook\"></i>\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\n                      <i class=\"fa fa-dribbble\"></i>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\n              <div class=\"px-4\">\n                <img src=\"./assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\n                <div class=\"pt-4 text-center\">\n                  <h5 class=\"title\">\n                    <span class=\"d-block text-white\">Ana Rubio</span>\n                    <small class=\"h6 text-muted\">TFG Director</small>\n                  </h5>\n                  <div class=\"mt-3\">\n                    <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\n                      <i class=\"fa fa-twitter\"></i>\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\n                      <i class=\"fa fa-facebook\"></i>\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\n                      <i class=\"fa fa-dribbble\"></i>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n</main>");

/***/ }),

/***/ "M5r1":
/*!**********************************!*\
  !*** ./src/guards/auth.guard.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/user.service */ "ITiG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.userIsAuthenticated()) {
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
            return false;
        }
    };
    AuthGuard.ctorParameters = function () { return [
        { type: src_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "PT6J":
/*!************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.ts ***!
  \************************************************/
/*! exports provided: TutorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialComponent", function() { return TutorialComponent; });
/* harmony import */ var _raw_loader_tutorial_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./tutorial.component.html */ "c2Ls");
/* harmony import */ var _tutorial_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tutorial.component.css */ "ukNU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TutorialComponent = /** @class */ (function () {
    function TutorialComponent() {
    }
    TutorialComponent.prototype.ngOnInit = function () {
    };
    TutorialComponent.ctorParameters = function () { return []; };
    TutorialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-tutorial',
            template: _raw_loader_tutorial_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_tutorial_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TutorialComponent);
    return TutorialComponent;
}());



/***/ }),

/***/ "Q3/S":
/*!*****************************************************!*\
  !*** ./src/app/controller/controller.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".drag-drop {\n    display: inline-block;\n    min-width: 50px;\n    padding: 2em 0.5em;\n    margin: 1rem 0 0 1rem;\n   \n    color: #fff;\n    \n    border: solid 2px #fff;\n  \n    touch-action: none;\n  }\n\n  .dropzone {\n    height: 720px;\n    background-color: #bfe4ff;\n    border: dashed 4px;\n    border-radius: 4px;\n    margin: 10px auto 30px;\n    margin-left: 10px;\n    padding: 10px;\n    width: 1490px;\n  }\n\n  .keycenter{\n      margin-top: 5%;\n      margin-left: 10%;\n      margin-right: 20%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHFCQUFxQjs7SUFFckIsV0FBVzs7SUFFWCxzQkFBc0I7O0lBRXRCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixhQUFhO0VBQ2Y7O0VBQ0E7TUFDSSxjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLGlCQUFpQjtFQUNyQiIsImZpbGUiOiJjb250cm9sbGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJhZy1kcm9wIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWluLXdpZHRoOiA1MHB4O1xuICAgIHBhZGRpbmc6IDJlbSAwLjVlbTtcbiAgICBtYXJnaW46IDFyZW0gMCAwIDFyZW07XG4gICBcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjZmZmO1xuICBcbiAgICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gIH1cblxuICAuZHJvcHpvbmUge1xuICAgIGhlaWdodDogNzIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JmZTRmZjtcbiAgICBib3JkZXI6IGRhc2hlZCA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogMTBweCBhdXRvIDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogMTQ5MHB4O1xuICB9XG4gIC5rZXljZW50ZXJ7XG4gICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcbiAgfSJdfQ== */");

/***/ }),

/***/ "QnVx":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div class=\"position-relative\">\n    <!-- shape Hero -->\n    <section class=\"section section-lg section-shaped pb-250 bg-gradient-orange\">\n      <div class=\"shape shape-style-4 shape-primary\">\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n      </div>\n      <div class=\"container py-lg-md d-flex\">\n        <div class=\"col px-0\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <h1 class=\"display-3  text-dark\">Control your devices\n                <span>with your own mobile phone</span>\n              </h1>\n              <p class=\"lead  text-dark\">Create and manage your keypad templates, scan the QR code and take the control of your system. You can change the text and images and you're good to go.</p>\n              <div class=\"btn-wrapper\">\n                <a [routerLink]=\"['/register']\" routerLinkActive=\"router-link-active\" class=\"btn btn-success btn-icon mb-3 mb-sm-0\">\n                  <span class=\"btn-inner--icon\"><i class=\"fa fa-user-plus\"></i></span>\n                  <span class=\"btn-inner--text\">Create Account</span>\n                </a>\n                <a class=\"btn btn-white btn-icon mb-3 mb-sm-0\">\n                  <span class=\"btn-inner--icon\"><i class=\"ni ni-button-play\"></i></span>\n                  <span (click)=\"createNewTemplate()\" class=\"btn-inner--text\">Create Template</span>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- SVG separator -->\n      <div class=\"separator separator-bottom separator-skew\">\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n        </svg>\n      </div>\n    </section>\n    <!-- 1st Hero Variation -->\n  </div>\n  <section class=\"section section-lg pt-lg-0 mt--200\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-12\">\n          <div class=\"row row-grid\">\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div class=\"icon icon-shape icon-shape-success rounded-circle mb-4\">\n                    <i class=\"ni ni-controller\"></i>\n                  </div>\n                  <h6 class=\"text-success text-uppercase\">Virtual Keypad</h6>\n                  <p class=\"description mt-3\">You dont need a physical controller anymore, take control of any device with your phone.</p>\n                  <div>\n                    <span class=\"badge badge-pill badge-success\">Mobile</span>\n                    <span class=\"badge badge-pill badge-success\">interconection</span>\n                    <span class=\"badge badge-pill badge-success\">Remote</span>\n                  </div>\n                  <a [routerLink]=\"['/tutorial']\" class=\"btn btn-outline-info mt-4\">Learn more</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div class=\"icon icon-shape icon-shape-success rounded-circle mb-4\">\n                    <i class=\"ni ni-fat-add\"></i>\n                  </div>\n                  <h6 class=\"text-success text-uppercase\">Build your template</h6>\n                  <p class=\"description mt-3\">Think about your custom desing and implement it easily with our interactive editor.</p>\n                  <div>\n                    <span class=\"badge badge-pill badge-success\">vision</span>\n                    <span class=\"badge badge-pill badge-success\">imagine</span>\n                    <span class=\"badge badge-pill badge-success\">create</span>\n                  </div>\n                  <a href=\"javascript:void(0)\" (click)=\"createNewTemplate()\" class=\"btn btn-outline-info mt-4\">Create Template</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div class=\"icon icon-shape icon-shape-success rounded-circle mb-4\">\n                    <i class=\"ni ni-cloud-upload-96\"></i>\n                  </div>\n                  <h6 class=\"text-success text-uppercase\">Share your work</h6>\n                  <p class=\"description mt-3\">If you think you have done a great design, share it with other people and get rewards!</p>\n                  <div>\n                    <span class=\"badge badge-pill badge-success\">upload</span>\n                    <span class=\"badge badge-pill badge-success\">contribute</span>\n                    <span class=\"badge badge-pill badge-success\">community</span>\n                  </div>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-outline-info mt-4\">Learn more</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg\">\n    <div class=\"container\">\n      <div class=\"row row-grid align-items-center\">\n        <div class=\"col-md-6 order-md-2\">\n          <img src=\"./assets/img/theme/rafal-jedrzejek-qpsP1IVnSgY-unsplash.jpg\" class=\"img-fluid\">\n        </div>\n        <div class=\"col-md-6 order-md-1\">\n          <div class=\"pr-md-5\">\n            <div class=\"icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5\">\n              <i class=\"ni ni-settings-gear-65\"></i>\n            </div>\n            <h3>Awesome features</h3>\n            <p>The kit comes with two pre-built keypads to help you get started faster. You can change the text and buttons and you're good to go.</p>\n            <ul class=\"list-unstyled mt-5\">\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div>\n                    <div class=\"badge badge-circle badge-success mr-3\">\n                      <i class=\"ni ni-settings-gear-65\"></i>\n                    </div>\n                  </div>\n                  <div>\n                    <h6 class=\"mb-0\">Carefully crafted components</h6>\n                  </div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div>\n                    <div class=\"badge badge-circle badge-success mr-3\">\n                      <i class=\"ni ni-controller\"></i>\n                    </div>\n                  </div>\n                  <div>\n                    <h6 class=\"mb-0\">Amazing keypads examples</h6>\n                  </div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div>\n                    <div class=\"badge badge-circle badge-success mr-3\">\n                      <i class=\"ni ni-satisfied\"></i>\n                    </div>\n                  </div>\n                  <div>\n                    <h6 class=\"mb-0\">Friendly support team</h6>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section bg-secondary\">\n    <div class=\"container\">\n      <div class=\"row row-grid align-items-center\">\n        <div class=\"col-md-6\">\n          <div class=\"card bg-gradient-orange shadow border-0\">\n            <img src=\"./assets/img/theme/hello-i-m-nik-T46vOtEMfA4-unsplash.jpg\" class=\"card-img-top\">\n            <blockquote class=\"card-blockquote\">\n              <svg preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 583 95\" class=\"svg-bg\">\n                <polygon points=\"0,52 583,95 0,95\" class=\"fill-warning\" />\n                <polygon points=\"0,42 583,95 683,0 0,95\" opacity=\".2\" class=\"fill-warning\" />\n              </svg>\n              <h4 class=\"display-3 font-weight-bold text-dark\">Design System</h4>\n              <p class=\"lead text-italic text-dark\">AQUÍ HABLARÉ DEL EDITOR CUANDO ESTÉ HECHO.</p>\n            </blockquote>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"pl-md-5\">\n            <div class=\"icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5\">\n              <i class=\"ni ni-settings\"></i>\n            </div>\n            <h3>keypad Editor</h3>\n            <p class=\"lead\">AQUÍ HABLARÉ DEL EDITOR CUANDO ESTÉ HECHO</p>\n            <p>de los botones</p>\n            <p>del texto</p>\n            <a href=\"javascript:void(0)\" class=\"font-weight-bold text-warning mt-5\">Vinculo para ir al editor</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section bg-secondary\">\n    <div class=\"container\">\n      <div class=\"card bg-gradient-warning shadow-lg border-0\">\n        <div class=\"p-5\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-lg-8\">\n              <h3 class=\"text-dark\">We have made an easy quickstart tutorial for you.</h3>\n              <p class=\"lead text-dark mt-3\">Go ahead and create your first template step by step.</p>\n            </div>\n            <div class=\"col-lg-3 ml-lg-auto\">\n              <a [routerLink]=\"['/tutorial']\" class=\"btn btn-lg btn-block btn-white\">Start tutorial</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg\">\n    <div class=\"container\">\n      <div class=\"row row-grid justify-content-center\">\n        <div class=\"col-lg-8 text-center\">\n          <h2 class=\"display-3\">Do you like this\n            <great class=\"text-warning\">Design System?</great>\n            <h3 class=\"text-dark\"> Help us to improve this website by leaving us your opinion!</h3>\n          </h2>\n          <p class=\"lead\"></p>\n          <div class=\"btn-wrapper\">\n            <a [routerLink]=\"['/contact']\" routerLinkActive=\"router-link-active\" class=\"btn btn-success mb-3 mb-sm-0\">Send a message</a>\n          </div>\n          <div class=\"text-center\">\n            <h4 class=\"display-4 mb-5 mt-5\">This project was able to work thanks to:</h4>\n            <div class=\"row justify-content-center\">\n              <div class=\"col-lg-2 col-4\">\n                <a href=\"https://getbootstrap.com/\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Bootstrap 4 - Most popular front-end component library\">\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\" class=\"img-fluid\">\n                </a>\n              </div>\n              <div class=\"col-lg-2 col-4\">\n                <a href=\"https://angular.io/\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Angular - One framework. Mobile &amp; desktop\">\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\" class=\"img-fluid\">\n                </a>\n              </div>\n              <div class=\"col-lg-2 col-4\">\n                <a href=\"https://spring.io/projects/spring-boot\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Spring Boot - Open source Java-based framework\">\n                  <img src=\"https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png\" class=\"img-fluid\">\n                </a>\n              </div>\n              <div class=\"col-lg-2 col-4\">\n                <a href=\"https://gradle.org/\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Gradle - Groovy project builder\">\n                  <img src=\"https://gradle.org/images/gradle-knowledge-graph-logo.png?20170228\" class=\"img-fluid\">\n                </a>\n              </div>\n              <div class=\"col-lg-2 col-4\">\n                <a href=\"https://rfrancodigital.com/es/home/\" target=\"_blank\" placement=\"top\" ngbTooltip=\"R.Franco Digital - Global solutions for gambling sector\">\n                  <img src=\"https://media-exp1.licdn.com/dms/image/C560BAQFA5dQdJ3TcUw/company-logo_200_200/0/1519908693405?e=2159024400&v=beta&t=j5q7rl2Vt5oyW5N_MggSZAblU95kcOH8f3llIwB89jE\" class=\"img-fluid\">\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;
var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
        this.title = "CodeSandbox";
    }
    AppComponent.prototype.hasScrolled = function () {
        var st = window.pageYOffset;
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        var navbar = document.getElementsByTagName('nav')[0];
        // If they scrolled down and are past the navbar, add class .headroom--unpinned.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            if (navbar.classList.contains('headroom--pinned')) {
                navbar.classList.remove('headroom--pinned');
                navbar.classList.add('headroom--unpinned');
            }
            // $('.navbar.headroom--pinned').removeClass('headroom--pinned').addClass('headroom--unpinned');
        }
        else {
            // Scroll Up
            //  $(window).height()
            if (st + window.innerHeight < document.body.scrollHeight) {
                // $('.navbar.headroom--unpinned').removeClass('headroom--unpinned').addClass('headroom--pinned');
                if (navbar.classList.contains('headroom--unpinned')) {
                    navbar.classList.remove('headroom--unpinned');
                    navbar.classList.add('headroom--pinned');
                }
            }
        }
        lastScrollTop = st;
    };
    ;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.renderer.listen('window', 'scroll', function (event) {
                var number = window.scrollY;
                if (number > 150 || window.pageYOffset > 150) {
                    // add logic
                    navbar.classList.add('headroom--not-top');
                }
                else {
                    // remove logic
                    navbar.classList.remove('headroom--not-top');
                }
            });
        });
        this.hasScrolled();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
    ]; };
    AppComponent.propDecorators = {
        hasScrolled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['window:scroll', ['$event'],] }]
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VvbZ":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-home/user-home.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"profile-page\">\n    <section class=\"section-profile-cover section-shaped my-0\">\n      <!-- Circles background -->\n      <div class=\"shape shape-style-4 bg-gradient-warning\">\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n      </div>\n      <!-- SVG separator -->\n      <div class=\"separator separator-bottom separator-skew\">\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n        </svg>\n      </div>\n    </section>\n    <section class=\"section\">\n        <div class=\"container\">\n          <div class=\"card card-profile shadow mt--300\">\n            <div class=\"px-4\">\n              <div class=\"row justify-content-center\">\n                <div class=\"col-lg-3 order-lg-2\">\n                  <div class=\"card-profile-image\">\n                    <a href=\"javascript:void(0)\">\n                      <img src=\"./assets/img/theme/userimage.png\" class=\"rounded-circle\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"col-lg-4 order-lg-3 text-lg-right align-self-lg-center\">\n                  <div class=\"card-profile-actions py-4 mt-lg-0\">\n                    <a href=\"javascript:void(0)\" [routerLink]=\"['/updateform']\" routerLinkActive=\"router-link-active\" class=\"btn btn-sm btn-success btn-icon mr-4\">\n                      <span class=\"btn-inner--icon\">\n                        <i class=\"fa fa-edit mr-2\"></i>\n                      </span>\n                      <span class=\"nav-link-inner--text\">Edit</span>\n                    </a>\n                    <button type=\"button\"  class=\"btn btn-sm btn-default btn-icon float-right\" (click)=\"deleteUserModal()\">\n                      <span class=\"btn-inner--icon\">\n                        <i class=\"fa fa-user-times mr-2\"></i>\n                      </span>\n                      <span class=\"nav-link-inner--text\">Delete Account</span>\n                    </button>\n                  </div>\n                </div>\n                <div class=\"col-lg-4 order-lg-1\">\n                  <div class=\"card-profile-stats d-flex justify-content-center\">\n                    <div>\n                      <span class=\"heading\">{{username}}</span>\n                      <span class=\"description\">{{number_templates}} keypads</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"text-center mt-5\">\n                <h3>{{name}}\n                  <span class=\"font-weight-light\">{{lastname}}</span>\n                </h3>\n                <div class=\"h6 font-weight-300\"><i class=\"ni location_pin mr-2\"></i>{{email}}</div>\n                <div class=\"h6 mt-4\"><i class=\"ni business_briefcase-24 mr-2\"></i>{{username}}</div>\n                <div><i class=\"ni education_hat mr-2\"></i>University of Computer Science</div>\n              </div>\n              <div class=\"mt-5 py-5 border-top text-center\">\n                <div class=\"row justify-content-center\">\n                  <div class=\"col-lg-9\">\n                    <p>{{textoDescripcion}}</p>\n                    <a href=\"javascript:void(0)\" [routerLink]=\"['/keypads']\" routerLinkActive=\"router-link-active\" class=\"btn btn-lg btn-warning btn-icon mr-4\">\n                      <span class=\"btn-inner--icon\">\n                        <i class=\"fa fa-gamepad mr-3\"></i>\n                      </span>\n                      <span class=\"nav-link-inner--text\">Your templates</span>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n</main>");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "YgeM":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/keypads/keypads.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div class=\"position-relative\">\n    <!-- shape Hero -->\n    <section class=\"section section-lg section-shaped pb-250 bg-gradient-orange\">\n      <div class=\"shape shape-style-4 shape-primary\">\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n      </div>\n          <div class=\"container py-lg-md d-flex\">\n            <div class=\"col px-0\">\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <h1 class=\"display-3  text-dark\">Hi,{{username}}\n                    <span>Want to create a new keypad?</span>\n                  </h1>\n                    <a class=\"btn btn-white btn-icon mb-3 mb-sm-0\" (click)=\"createNewTemplate()\">\n                      <span class=\"btn-inner--icon\"><i class=\"ni ni-button-play\"></i></span>\n                      <span class=\"btn-inner--text\">Create new Template</span>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"separator separator-bottom separator-skew\">\n              <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n                <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n              </svg>\n            </div>\n    </section>\n    <section class=\"section bg-secondary\">\n        <div class=\"container\">\n            <h1 class=\"display-3  text-dark\">Your keypads</h1>\n          <div class=\"row justify-content-center pt-100\">\n            <div class=\"col-lg-14\">\n              <div class=\"row row-grid\">\n                <div *ngFor=\"let item of lista;let indice=index\" class=\"col-lg-6\">\n                  <div  class=\"card card-lift--hover shadow border-0\">\n                    <div  class=\"card-body py-4\">\n                      <h6 class=\"text-success text-uppercase\">{{item.name}}</h6>\n                      <img [src] = \"item.image\" (click)=\"editKeypad(item)\" class=\"img-fluid floating\" onmouseover=\"\" [ngStyle]=\"{'background-repeat' : 'no-repeat' , 'background-size' : 'cover' , 'cursor' : 'pointer'}\">\n                      <a href=\"javascript:void(0)\" (click)=\"editToken(item)\" routerLinkActive=\"router-link-active\" class=\"btn btn-sm btn-success btn-icon mr-4\">\n                        <span class=\"btn-inner--icon\">\n                          <i class=\"fa fa-edit mr-2\"></i>\n                        </span>\n                        <span class=\"nav-link-inner--text\">Token configuration</span>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n    </div>\n</main>");

/***/ }),

/***/ "Yq+j":
/*!**************************************************!*\
  !*** ./src/app/user-home/user-home.component.ts ***!
  \**************************************************/
/*! exports provided: UserHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomeComponent", function() { return UserHomeComponent; });
/* harmony import */ var _raw_loader_user_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./user-home.component.html */ "VvbZ");
/* harmony import */ var _user_home_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-home.component.css */ "l58g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/user.service */ "ITiG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserHomeComponent = /** @class */ (function () {
    function UserHomeComponent(uService, router) {
        this.uService = uService;
        this.router = router;
    }
    UserHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uService.getUser()
            .subscribe(function (resp) {
            console.log(resp);
            _this.username = resp['userName'];
            _this.name = resp['name'];
            _this.email = resp['email'];
            _this.lastname = resp['lastname'];
            _this.lista = resp['templateModelList'];
            _this.number_templates = _this.lista.length;
        }, (function (err) {
            console.log(err);
            alert('Error, user could not be loaded');
        }));
    };
    UserHomeComponent.prototype.deleteUser = function () {
        var _this = this;
        this.uService.deleteUser()
            .subscribe(function (resp) {
            console.log(resp);
            _this.uService.logout();
            _this.router.navigateByUrl('/home');
        }, (function (err) {
            console.log(err);
            alert('Error, user could not be deleted');
        }));
    };
    UserHomeComponent.prototype.deleteUserModal = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.isConfirmed) {
                _this.deleteUser();
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
    };
    UserHomeComponent.ctorParameters = function () { return [
        { type: src_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    UserHomeComponent.propDecorators = {
        email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        lastname: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        username: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        number_templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    UserHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-user-home',
            template: _raw_loader_user_home_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_user_home_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserHomeComponent);
    return UserHomeComponent;
}());



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.module */ "ct+p");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-home/user-home.component */ "Yq+j");
/* harmony import */ var src_services_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/services/user.service */ "ITiG");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./team/team.component */ "mGeP");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tutorial/tutorial.component */ "PT6J");
/* harmony import */ var _keypads_keypads_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./keypads/keypads.component */ "FexU");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./editor/editor.component */ "xD4D");
/* harmony import */ var _userform_userform_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./userform/userform.component */ "ul2+");
/* harmony import */ var src_services_template_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/services/template.service */ "t6sr");
/* harmony import */ var _inter_inter_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./inter/inter.component */ "3hcL");
/* harmony import */ var _tokens_tokens_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tokens/tokens.component */ "HCQv");
/* harmony import */ var _controller_controller_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./controller/controller.component */ "ms06");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_14__["UserHomeComponent"],
                _team_team_component__WEBPACK_IMPORTED_MODULE_16__["TeamComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"],
                _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_18__["TutorialComponent"],
                _keypads_keypads_component__WEBPACK_IMPORTED_MODULE_19__["KeypadsComponent"],
                _editor_editor_component__WEBPACK_IMPORTED_MODULE_20__["EditorComponent"],
                _userform_userform_component__WEBPACK_IMPORTED_MODULE_21__["UserformComponent"],
                _inter_inter_component__WEBPACK_IMPORTED_MODULE_23__["InterComponent"],
                _tokens_tokens_component__WEBPACK_IMPORTED_MODULE_24__["TokensComponent"],
                _controller_controller_component__WEBPACK_IMPORTED_MODULE_25__["ControllerComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"]
            ],
            providers: [src_services_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"], src_services_template_service__WEBPACK_IMPORTED_MODULE_22__["TemplateService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "bdh1":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-home/user-home.component */ "Yq+j");
/* harmony import */ var src_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/guards/auth.guard */ "M5r1");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./team/team.component */ "mGeP");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tutorial/tutorial.component */ "PT6J");
/* harmony import */ var _keypads_keypads_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./keypads/keypads.component */ "FexU");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./editor/editor.component */ "xD4D");
/* harmony import */ var _userform_userform_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./userform/userform.component */ "ul2+");
/* harmony import */ var _tokens_tokens_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tokens/tokens.component */ "HCQv");
/* harmony import */ var _controller_controller_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./controller/controller.component */ "ms06");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'register', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'team', component: _team_team_component__WEBPACK_IMPORTED_MODULE_10__["TeamComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"] },
    { path: 'tutorial', component: _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_12__["TutorialComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'userhome', component: _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_8__["UserHomeComponent"], canActivate: [src_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'keypads', component: _keypads_keypads_component__WEBPACK_IMPORTED_MODULE_13__["KeypadsComponent"], canActivate: [src_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'updateform', component: _userform_userform_component__WEBPACK_IMPORTED_MODULE_15__["UserformComponent"], canActivate: [src_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: ':id/editor', component: _editor_editor_component__WEBPACK_IMPORTED_MODULE_14__["EditorComponent"], canActivate: [src_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: ':id/token', component: _tokens_tokens_component__WEBPACK_IMPORTED_MODULE_16__["TokensComponent"], canActivate: [src_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'editor', component: _editor_editor_component__WEBPACK_IMPORTED_MODULE_14__["EditorComponent"], canActivate: [src_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'controller/:token', component: _controller_controller_component__WEBPACK_IMPORTED_MODULE_17__["ControllerComponent"], canActivate: [src_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./contact.component.html */ "BGiY");
/* harmony import */ var _contact_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.component.css */ "e+VI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.ctorParameters = function () { return []; };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-contact',
            template: _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_contact_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "c2Ls":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tutorial/tutorial.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div class=\"position-relative\">\n    <!-- shape Hero -->\n    <section class=\"section section-lg section-shaped pb-250 bg-gradient-orange\">\n      <div class=\"shape shape-style-4 shape-primary\">\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n      </div>\n        <div class=\"container\">\n          <div class=\"row row-grid align-items-center\">\n            <div class=\"col-md-6 order-lg-2 ml-lg-auto\">\n              <div class=\"position-relative pl-md-5\">\n                <img src=\"./assets/img/ill/ill-2.svg\" class=\"img-center img-fluid\">\n              </div>\n            </div>\n            <div class=\"col-lg-6 order-lg-1\">\n              <div class=\"d-flex px-3\">\n                <div>\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"pl-4\">\n                  <h4 class=\"display-3 text-white\">Aquí irá un breve tutorial cuando esté hecho el editor</h4>\n                  <p class=\"text-white\">The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\n                </div>\n              </div>\n              <div class=\"card shadow shadow-lg--hover mt-5\">\n                <div class=\"card-body\">\n                  <div class=\"d-flex px-3\">\n                    <div>\n                      <div class=\"icon icon-shape bg-gradient-success rounded-circle text-white\">\n                        <i class=\"ni ni-satisfied\"></i>\n                      </div>\n                    </div>\n                    <div class=\"pl-4\">\n                      <h5 class=\"title text-success\">Awesome Support</h5>\n                      <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\n                      <a href=\"javascript:void(0)\" class=\"text-success\">Learn more</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card shadow shadow-lg--hover mt-5\">\n                <div class=\"card-body\">\n                  <div class=\"d-flex px-3\">\n                    <div>\n                      <div class=\"icon icon-shape bg-gradient-warning rounded-circle text-white\">\n                        <i class=\"ni ni-active-40\"></i>\n                      </div>\n                    </div>\n                    <div class=\"pl-4\">\n                      <h5 class=\"title text-warning\">Modular Components</h5>\n                      <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\n                      <a href=\"javascript:void(0)\" class=\"text-warning\">Learn more</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- SVG separator -->\n        <div class=\"separator separator-bottom separator-skew zindex-100\">\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n          </svg>\n        </div>\n      </section>\n      <!-- 1st Hero Variation -->\n    </div>\n  </main>");

/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "cruu":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "9vUh");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            exports: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "e+VI":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "f2YT":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "fRZP":
/*!*******************************************!*\
  !*** ./src/app/inter/inter.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.dropzone {\n  height: 720px;\n  background-color: #bfe4ff;\n  border: dashed 4px;\n  border-radius: 4px;\n  margin: 10px auto 30px;\n  margin-left: 10px;\n  padding: 10px;\n  width: 1490px;\n  transition: background-color 0.3s;\n}\n.flex-parent {\n  display: flex;\n}\n.jc-center {\n  justify-content: center;\n}\n.left{\n  width: 10%;\n}\n.drag-drop.switch-bg {\n  background-color: #f40;\n}\n.up{\n  margin-top: 10px;\n}\n.right{\n  margin-left: 30px;\n  margin-right: 20px;\n  margin-bottom: 10px;\n  width: 80% ;\n}\n.elements {\n  height: 720px;\n  background-color: #dce6e6;\n  border: dashed 4px;\n  border-radius: 4px;\n  margin: 10px auto 10px;\n  margin-left: 50px;\n  margin-right: 20px;\n  padding: 10px;\n  width: 10%;\n  transition: background-color 0.3s;\n}\n.drop-active {\n  border-color: #aaa;\n}\n.drop-target {\n  background-color: #29e;\n  border-color: #fff;\n  border-style: solid;\n}\n.element{\n  min-width: 50px;\n  padding: 2em 0.5em;\n  margin: 1rem 0 0 1rem;\n\n  color: #fff;\n  background-color: #29e;\n  border: solid 2px #fff;\n\n  touch-action: none;\n  transform: translate(0px, 0px);\n\n  transition: background-color 0.3s;\n}\n.drag-drop {\n  display: inline-block;\n  min-width: 50px;\n  padding: 2em 0.5em;\n  margin: 1rem 0 0 1rem;\n \n  color: #fff;\n  \n  border: solid 2px #fff;\n\n  touch-action: none;\n  transform: translate(0px, 0px);\n\n  transition: background-color 0.3s;\n}\n.drag-drop.switch-bg {\n  background-color: #f40;\n}\n.drag-drop.can-drop {\n  color: white;\n}\n.resize-drag {\n  width: 120px;\n  border-radius: 8px;\n  padding: 20px;\n  margin: 1rem;\n  background-color: #29e;\n  color: white;\n  font-size: 20px;\n  font-family: sans-serif;\n\n  touch-action: none;\n\n  /* This makes things *much* easier */\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGFBQWE7RUFDYixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGlDQUFpQztBQUNuQztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixxQkFBcUI7O0VBRXJCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsc0JBQXNCOztFQUV0QixrQkFBa0I7RUFDbEIsOEJBQThCOztFQUU5QixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHFCQUFxQjs7RUFFckIsV0FBVzs7RUFFWCxzQkFBc0I7O0VBRXRCLGtCQUFrQjtFQUNsQiw4QkFBOEI7O0VBRTlCLGlDQUFpQztBQUNuQztBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZix1QkFBdUI7O0VBRXZCLGtCQUFrQjs7RUFFbEIsb0NBQW9DO0VBQ3BDLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJpbnRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZHJvcHpvbmUge1xuICBoZWlnaHQ6IDcyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZlNGZmO1xuICBib3JkZXI6IGRhc2hlZCA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxNDkwcHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbn1cbi5mbGV4LXBhcmVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5qYy1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sZWZ0e1xuICB3aWR0aDogMTAlO1xufVxuLmRyYWctZHJvcC5zd2l0Y2gtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQwO1xufVxuLnVwe1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnJpZ2h0e1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB3aWR0aDogODAlIDtcbn1cbi5lbGVtZW50cyB7XG4gIGhlaWdodDogNzIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2U2ZTY7XG4gIGJvcmRlcjogZGFzaGVkIDRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW46IDEwcHggYXV0byAxMHB4O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG59XG4uZHJvcC1hY3RpdmUge1xuICBib3JkZXItY29sb3I6ICNhYWE7XG59XG5cbi5kcm9wLXRhcmdldCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOWU7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cbi5lbGVtZW50e1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIHBhZGRpbmc6IDJlbSAwLjVlbTtcbiAgbWFyZ2luOiAxcmVtIDAgMCAxcmVtO1xuXG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjllO1xuICBib3JkZXI6IHNvbGlkIDJweCAjZmZmO1xuXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbn1cbi5kcmFnLWRyb3Age1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgcGFkZGluZzogMmVtIDAuNWVtO1xuICBtYXJnaW46IDFyZW0gMCAwIDFyZW07XG4gXG4gIGNvbG9yOiAjZmZmO1xuICBcbiAgYm9yZGVyOiBzb2xpZCAycHggI2ZmZjtcblxuICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcblxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG59XG4uZHJhZy1kcm9wLnN3aXRjaC1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDA7XG59XG5cbi5kcmFnLWRyb3AuY2FuLWRyb3Age1xuICBjb2xvcjogd2hpdGU7XG59XG4ucmVzaXplLWRyYWcge1xuICB3aWR0aDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjllO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG5cbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuXG4gIC8qIFRoaXMgbWFrZXMgdGhpbmdzICptdWNoKiBlYXNpZXIgKi9cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn0iXX0= */");

/***/ }),

/***/ "gdmD":
/*!*********************************************!*\
  !*** ./src/app/tokens/tokens.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".up{\n    margin-top: 30px;\n    margin-bottom: auto;\n}\n.right{\n    margin-left: 30px ;\n    margin-right: 30px ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRva2Vucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJ0b2tlbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG4ucmlnaHR7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHggO1xuICAgIG1hcmdpbi1yaWdodDogMzBweCA7XG59Il19 */");

/***/ }),

/***/ "in5m":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <section class=\"section section-shaped section-lg\">\n    <div class=\"shape shape-style-2 bg-gradient-warning\">\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n    <div class=\"container pt-lg-md\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-5\">\n          <div class=\"card bg-secondary shadow border-0\">\n            <div class=\"card-body px-lg-5 py-lg-5\">\n              <div class=\"text-center text-muted mb-4\">\n                Sign in with credentials\n              </div>\n              <form role=\"form\"\n                (ngSubmit)=\"login(f)\"\n                #f = ngForm >\n                <div class=\"form-group mb-3\" [ngClass]=\"{'focused':focus===true}\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                    </div>\n                    <input class=\"form-control\" \n                           placeholder=\"Username\" \n                           type=\"username\" \n                           (focus)=\"focus=true\" \n                           (blur)=\"focus=false\"\n                           name=\"username\" \n                           [(ngModel)]=\"userData.username\"\n                           required\n                           username>\n                  </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                    </div>\n                    <input class=\"form-control\" \n                           placeholder=\"Password\" \n                           type=\"password\" \n                           (focus)=\"focus1=true\" \n                           (blur)=\"focus1=false\"\n                           name=\"password\"\n                           [(ngModel)]=\"userData.password\"\n                           required \n                           minlength=\"6\">\n                  </div>\n                </div>\n                <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                  <input class=\"custom-control-input\" \n                         id=\" customCheckLogin\" \n                         name=\"customCheckLogin\"\n                         type=\"checkbox\" \n                         [(ngModel)]=\"rememberMe\">\n                  <label class=\"custom-control-label\" for=\" customCheckLogin\">\n                    <span>Remember me</span>\n                  </label>\n                </div>\n                <div class=\"text-center\">\n                  <button type=\"button\" class=\"btn btn-success my-4\" type=\"submit\" routerLinkActive=\"router-link-active\" >Sign in</button>\n                </div>\n              </form>\n            </div>\n          </div>\n          <div class=\"row mt-3\">\n            <div class=\"col-12 text-right\">\n              <a href=\"javascript:void(0)\" [routerLink]=\"['/register']\" routerLinkActive=\"router-link-active\"  class=\"text-white\">\n                <u>Create new account</u>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n");

/***/ }),

/***/ "jGP6":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\" [ngClass]=\"{'has-cards': getPath()!=='/user-profile' && getPath()!=='/register' && getPath()!=='/login'}\">\n  <div class=\"container\">\n    <div class=\"row align-items-center justify-content-md-between\">\n      <div class=\"col-md-6\">\n        <div class=\"copyright\">\n          &copy; {{test | date: 'yyyy'}}\n          <a href=\"https://www.creative-tim.com?ref=adsa-footer\" target=\"_blank\">Virtual Keypad</a>.\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <ul class=\"nav nav-footer justify-content-end\">\n          <li class=\"nav-item\">\n            <a href=\"https://rfrancodigital.com/es/home/\" class=\"nav-link\" target=\"_blank\">R.Franco Digital</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"https://github.com/JuanManuelPalaciosNavas\" class=\"nav-link\" target=\"_blank\">GitHub</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"https://www.linkedin.com/in/juan-manuel-palacios-navas-b21487194/\" class=\"nav-link\" target=\"_blank\">LinkedIn</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "jGP6");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ "f2YT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.getPath = function () {
        return this.router.url;
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "jmBe":
/*!*************************************!*\
  !*** ./src/model/template.model.ts ***!
  \*************************************/
/*! exports provided: TemplateModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateModel", function() { return TemplateModel; });
var TemplateModel = /** @class */ (function () {
    function TemplateModel() {
    }
    return TemplateModel;
}());



/***/ }),

/***/ "l58g":
/*!***************************************************!*\
  !*** ./src/app/user-home/user-home.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWhvbWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "mGeP":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _raw_loader_team_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./team.component.html */ "LM36");
/* harmony import */ var _team_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./team.component.css */ "sn2i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent.ctorParameters = function () { return []; };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-team',
            template: _raw_loader_team_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_team_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "ms06":
/*!****************************************************!*\
  !*** ./src/app/controller/controller.component.ts ***!
  \****************************************************/
/*! exports provided: ControllerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerComponent", function() { return ControllerComponent; });
/* harmony import */ var _raw_loader_controller_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./controller.component.html */ "xTEP");
/* harmony import */ var _controller_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller.component.css */ "Q3/S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_model_template_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/model/template.model */ "jmBe");
/* harmony import */ var src_services_template_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/template.service */ "t6sr");
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! interactjs */ "UBTA");
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(interactjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! stompjs */ "dNE1");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sockjs-client */ "zH15");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var stompClient = null;
var ControllerComponent = /** @class */ (function () {
    function ControllerComponent(route, templateService) {
        this.route = route;
        this.templateService = templateService;
        this.templateData = new src_model_template_model__WEBPACK_IMPORTED_MODULE_4__["TemplateModel"]();
        this.listaelements = new Array();
    }
    ControllerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.token = this.route.snapshot.paramMap.get("token");
        this.templateService.getAllTemplates(this.token)
            .subscribe(function (resp) {
            _this.templateData.name = resp[0]["name"];
            _this.templateData.backgroundimage = resp[0]["backgroundimage"];
            _this.templateData.image = resp[0]["image"];
            _this.templateData.token = resp[0]["token"];
            _this.templateData.creationdate = resp[0]["creationdate"];
            _this.templateData.button = resp[0]["buttons"];
            _this.templateData.text = resp[0]["texts"];
            _this.listaelements = _this.templateData.button.concat(_this.templateData.text);
        }, (function (err) {
            console.log(err);
            _this.errorLoadModal("Error", "Template could not be loaded");
        }));
        interactjs__WEBPACK_IMPORTED_MODULE_6___default()('.dropzone').unset();
        interactjs__WEBPACK_IMPORTED_MODULE_6___default()('.drag-drop').unset();
        connect();
        function connect() {
            var socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_9__('http://161.22.45.138:8081/notifications');
            stompClient = stompjs__WEBPACK_IMPORTED_MODULE_8__["over"](socket);
            var header = {
                AccessControlAllowOrigin: "*"
            };
            stompClient.connect(header, function (frame) {
                console.log('Connected: ' + frame);
            });
        }
    };
    ControllerComponent.prototype.errorLoadModal = function (msg1, msg2) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire(msg1, msg2, 'error');
    };
    ControllerComponent.prototype.gettipo = function (indice) {
        return this.listaelements[indice].content;
    };
    ControllerComponent.prototype.buttonclicked = function (item, event) {
        sendMessage(this.token, item.commandKey);
    };
    ControllerComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_services_template_service__WEBPACK_IMPORTED_MODULE_5__["TemplateService"] }
    ]; };
    ControllerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-controller',
            template: _raw_loader_controller_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_controller_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_services_template_service__WEBPACK_IMPORTED_MODULE_5__["TemplateService"]])
    ], ControllerComponent);
    return ControllerComponent;
}());

function sendMessage(token, command) {
    console.log("sending message");
    stompClient.send("/queue/" + token, {}, command);
}


/***/ }),

/***/ "n7sk":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "n9On":
/*!***********************************************!*\
  !*** ./src/app/keypads/keypads.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrZXlwYWRzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "r/S+":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userform/userform.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n    <section class=\"section section-shaped section-lg\">\n      <div class=\"shape shape-style-1 bg-gradient-warning\">\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n      </div>\n      <div class=\"container pt-lg-md\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-lg-5\">\n            <div class=\"card bg-secondary shadow border-0\">\n              <div class=\"card-body px-lg-5 py-lg-5\">\n                <div class=\"text-center text-muted mb-4\">\n                  <small>Edit your profile</small>\n                </div>\n                <form role=\"form\" \n                  (ngSubmit)=\"doUpdate(f)\"\n                  #f = ngForm >\n                  <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                    <div class=\"input-group input-group-alternative mb-3\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                      </div>\n                      <input class=\"form-control\" \n                            placeholder=\"Name\" \n                            type=\"name\" \n                            id=\"Name\"\n                            (focus)=\"focus=true\" \n                            (blur)=\"focus=false\"\n                            name=\"myname\" \n                            [(ngModel)]=\"userData.myname\"\n                            required>\n                    </div>\n                  </div>\n                  <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                    <div class=\"input-group input-group-alternative mb-3\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                      </div>\n                      <input class=\"form-control\" \n                            placeholder=\"Lastname\" \n                            type=\"lastname\" \n                            id=\"Lastname\"\n                            (focus)=\"focus=true\" \n                            (blur)=\"focus=false\"\n                            name=\"lastname\" \n                            [(ngModel)]=\"userData.lastname\"\n                            required\n                            lastname>\n                    </div>\n                  </div>\n                  <div class=\"form-group\" [ngClass]=\"{'focused':focus===true}\">\n                    <div class=\"input-group input-group-alternative mb-3\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"fa fa-users\"></i></span>\n                      </div>\n                      <input class=\"form-control\" \n                              placeholder=\"Username\" \n                              id=\"Username\"\n                              name=\"Username\"\n                              type=\"text\" \n                              (focus)=\"focus=true\" \n                              (blur)=\"focus=false\"\n                              [(ngModel)]=\"userData.username\"\n                              required>\n                    </div>\n                  </div>\n                  <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                    <div class=\"input-group input-group-alternative mb-3\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                      </div>\n                      <input class=\"form-control\" \n                            placeholder=\"Email\" \n                            type=\"email\" \n                            id=\"Email\"\n                            (focus)=\"focus=true\" \n                            (blur)=\"focus=false\"\n                            name=\"email\" \n                            [(ngModel)]=\"userData.email\"\n                            required\n                            email>\n                    </div>\n                  </div>\n                  <div class=\"form-group\" [ngClass]=\"{'focused':focus2===true}\">\n                    <div class=\"input-group input-group-alternative\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                      </div>\n                      <input class=\"form-control\" \n                             placeholder=\"Password\" \n                             id=\"Password\"\n                             name=\"Password\"\n                             type=\"password\" \n                             (focus)=\"focus1=true\" \n                             (blur)=\"focus1=false\"\n                             [(ngModel)]=\"userData.password\"\n                             required \n                             minlength=\"6\">\n                    </div>\n                  </div>\n                  <div class=\"text-center\">\n                    <button type=\"button\" class=\"btn btn-success mt-4\" type=\"submit\">Update</button>\n                  </div>\n                  <div class=\"text-center\">\n                    <button type=\"button\" class=\"btn btn-danger mt-4\" [routerLink]=\"['/userhome']\" routerLinkActive=\"router-link-active\" >Cancel</button>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </main>\n  \n\n\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">WARNING!</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p>Are you sure you want to save the canges?.</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\">Save changes</button>\n        </div>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./signup.component.html */ "zwQV");
/* harmony import */ var _signup_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.component.scss */ "tZ3g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_model_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/model/user.model */ "z6cF");
/* harmony import */ var src_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/user.service */ "ITiG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var SignupComponent = /** @class */ (function () {
    function SignupComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.test = new Date();
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.userData = new src_model_user_model__WEBPACK_IMPORTED_MODULE_4__["UserModel"]();
    };
    SignupComponent.prototype.register = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(form);
                        if (form.invalid) {
                            this.errorCratedModal("Have you completed the form?", "Fill all the fields");
                            return [2 /*return*/];
                        }
                        this.userService.newUser(this.userData)
                            .subscribe(function (resp) {
                            _this.userCratedModal();
                            console.log(resp);
                        }, (function (err) {
                            console.log(err);
                            _this.errorCratedModal("Error", "Shomething went wrong creating the user");
                        }));
                        return [4 /*yield*/, this.delay(1500)];
                    case 1:
                        _a.sent();
                        this.userService.login(this.userData)
                            .subscribe(function (resp) {
                            console.log(resp);
                            _this.router.navigateByUrl('/userhome');
                        }, (function (err) {
                            console.log(err);
                            _this.errorCratedModal("Error", "Something went wrong loggin the user");
                        }));
                        return [2 /*return*/];
                }
            });
        });
    };
    SignupComponent.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    SignupComponent.prototype.userCratedModal = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Welcome!', 'Account created!', 'success');
    };
    SignupComponent.prototype.errorCratedModal = function (msg1, msg2) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire(msg1, msg2, 'question');
    };
    SignupComponent.ctorParameters = function () { return [
        { type: src_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-signup',
            template: _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_signup_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "rmJP":
/*!************************************!*\
  !*** ./src/model/element.model.ts ***!
  \************************************/
/*! exports provided: ElementModel, ConditionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementModel", function() { return ElementModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionModel", function() { return ConditionModel; });
var ElementModel = /** @class */ (function () {
    function ElementModel() {
    }
    return ElementModel;
}());

var ConditionModel = /** @class */ (function () {
    function ConditionModel() {
    }
    return ConditionModel;
}());



/***/ }),

/***/ "sn2i":
/*!*****************************************!*\
  !*** ./src/app/team/team.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "t6sr":
/*!******************************************!*\
  !*** ./src/services/template.service.ts ***!
  \******************************************/
/*! exports provided: TemplateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateService", function() { return TemplateService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TemplateService = /** @class */ (function () {
    function TemplateService(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL;
        this.userId = localStorage.getItem("id");
    }
    TemplateService.prototype.newTemplate = function (templateData) {
        var authDataStrapi = {
            name: templateData.name,
            creationdate: templateData.creationdate,
            backgroundimage: templateData.backgroundimage,
            image: templateData.image,
            buttons: templateData.button,
            texts: templateData.text,
            confirmed: false,
            blocked: true
        };
        return this.http.post(this.url + "/users/" + this.userId + "/templates", authDataStrapi).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            return resp;
        }));
    };
    TemplateService.prototype.deleteTemplate = function (Id) {
        return this.http.delete(this.url + "/users/" + this.userId + "/templates/" + Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            return resp;
        }));
    };
    TemplateService.prototype.getTemplate = function (id) {
        this.templateId = id;
        return this.http.get(this.url + "/users/" + this.userId + "/templates/" + this.templateId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            return resp;
        }));
    };
    TemplateService.prototype.getAllTemplates = function (token) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('token', token);
        return this.http.get(this.url + "/users/" + this.userId + "/templates", { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            return resp;
        }));
    };
    TemplateService.prototype.updateTemplate = function (templateData, templateId) {
        var authDataStrapi = {
            name: templateData.name,
            creationdate: templateData.creationdate,
            image: templateData.image,
            backgroundimage: templateData.backgroundimage,
            buttons: templateData.button,
            texts: templateData.text,
            confirmed: false,
            blocked: true
        };
        return this.http.put(this.url + "/users/" + this.userId + "/templates/" + templateId, authDataStrapi).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            return resp;
        }));
    };
    TemplateService.prototype.createToken = function (templateId) {
        return this.http.post(this.url + "/users/" + this.userId + "/templates/" + templateId + "/token", {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            return resp;
        }));
    };
    TemplateService.prototype.getToken = function (templateId) {
        return this.http.get(this.url + "/users/" + this.userId + "/templates/" + templateId + "/token").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            return resp;
        }));
    };
    TemplateService.prototype.deleteToken = function (templateId) {
        return this.http.delete(this.url + "/users/" + this.userId + "/templates/" + templateId + "/token").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            return resp;
        }));
    };
    TemplateService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    TemplateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], TemplateService);
    return TemplateService;
}());



/***/ }),

/***/ "tHYK":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editor/editor.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n    <section class=\"section section-shaped section-lg\">\n        <div class=\"shape shape-style-2 bg-gradient-warning\">\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n        </div>\n          <div class=\"container py-lg-md d-flex\">\n            <h1 class=\"display-3  text-dark\">{{username}}'s keypad\n            </h1>\n          </div>\n          <div class=\"separator separator-bottom separator-skew \">\n            <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n              <polygon class=\"fill-white \" points=\"2560 0 2560 100 0 100\"></polygon>\n            </svg>\n          </div>\n    </section>\n    \n          <app-inter></app-inter>      \n    <section>\n        <div class=\"pl-md-5\">\n            <div class=\"text-center\">\n                <div class=\"row justify-content-around\">\n                  <div class=\"col-7 text-left\">\n                    <a href=\"javascript:void(0)\" [routerLink]=\"['/keypads']\" routerLinkActive=\"router-link-active\"  class=\"text-dark\">\n                      <span class=\"btn-inner--icon\"><i class=\"fa fa-step-backward mr-2\"></i></span>\n                      <u>Your templates</u>\n                    </a>\n                  </div>\n                </div>\n            </div>   \n        </div>\n    </section>\n</main>");

/***/ }),

/***/ "tZ3g":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ukNU":
/*!*************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0dXRvcmlhbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "ul2+":
/*!************************************************!*\
  !*** ./src/app/userform/userform.component.ts ***!
  \************************************************/
/*! exports provided: UserformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserformComponent", function() { return UserformComponent; });
/* harmony import */ var _raw_loader_userform_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./userform.component.html */ "r/S+");
/* harmony import */ var _userform_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userform.component.css */ "Kf5D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_model_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/model/user.model */ "z6cF");
/* harmony import */ var src_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/user.service */ "ITiG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserformComponent = /** @class */ (function () {
    function UserformComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.test = new Date();
    }
    UserformComponent.prototype.ngOnInit = function () {
        this.userData = new src_model_user_model__WEBPACK_IMPORTED_MODULE_4__["UserModel"]();
    };
    UserformComponent.prototype.doUpdate = function (form) {
        console.log(form);
        if (form.invalid) {
            this.errorUpdatedModal("Have you completed the form?", "Fill all the fields");
            return;
        }
        this.saveUserModel();
    };
    UserformComponent.prototype.saveUserModel = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: "Don't save",
        }).then(function (result) {
            if (result.isConfirmed) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Saved!', '', 'success');
                _this.userService.updateUser(_this.userData)
                    .subscribe(function (resp) {
                    console.log(resp);
                    localStorage.setItem('username', _this.userData.username);
                    _this.router.navigateByUrl('/userhome');
                }, (function (err) {
                    console.log(err);
                    _this.errorUpdatedModal("ERROR", "User could not be updated");
                }));
            }
            else if (result.isDenied) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Changes are not saved', '', 'info');
            }
        });
    };
    UserformComponent.prototype.errorUpdatedModal = function (msg1, msg2) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire(msg1, msg2, 'question');
    };
    UserformComponent.ctorParameters = function () { return [
        { type: src_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    UserformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-userform',
            template: _raw_loader_userform_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_userform_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserformComponent);
    return UserformComponent;
}());



/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login.component.html */ "in5m");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.css */ "n7sk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_model_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/model/user.model */ "z6cF");
/* harmony import */ var src_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/user.service */ "ITiG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.userData = new src_model_user_model__WEBPACK_IMPORTED_MODULE_5__["UserModel"]();
        if (localStorage.getItem('username')) {
            this.userData.username = localStorage.getItem('username');
            this.rememberMe = true;
        }
        else {
            this.rememberMe = false;
        }
    };
    LoginComponent.prototype.doTemporaryLoginWithoutUser = function () {
        var _this = this;
        this.userService.login(this.userData).subscribe(function (resp) {
            console.log(resp);
            _this.router.navigateByUrl('/userhome');
        }, (function (err) {
            console.log(err);
            alert('error');
            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].mockUserForTesting) {
                _this.userService.isFakeUserLogged = true;
                _this.router.navigateByUrl('/userhome');
            }
        }));
    };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        console.log(form);
        if (form.invalid) {
            this.errorCratedModal("Have you introduced your credentials?", "Fill all the fields");
            return;
        }
        //FOR TESTING
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].mockUserForTesting)
            this.doTemporaryLoginWithoutUser();
        this.userService.login(this.userData)
            .subscribe(function (resp) {
            console.log(resp);
            if (_this.rememberMe) {
                _this.userService.rememberMe = true;
                localStorage.setItem('username', _this.userData.username);
            }
            else {
                _this.userService.rememberMe = false;
            }
            _this.router.navigateByUrl('/userhome');
        }, (function (err) {
            console.log(err);
            _this.errorCratedModal("Error!", "Email or password incorrect");
        }));
    };
    LoginComponent.prototype.errorCratedModal = function (msg1, msg2) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire(msg1, msg2, 'question');
    };
    LoginComponent.ctorParameters = function () { return [
        { type: src_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "xD4D":
/*!********************************************!*\
  !*** ./src/app/editor/editor.component.ts ***!
  \********************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _raw_loader_editor_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./editor.component.html */ "tHYK");
/* harmony import */ var _editor_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.component.css */ "0azZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_model_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/model/user.model */ "z6cF");
/* harmony import */ var src_services_template_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/template.service */ "t6sr");
/* harmony import */ var src_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/user.service */ "ITiG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditorComponent = /** @class */ (function () {
    function EditorComponent(userService, templateService, route) {
        this.userService = userService;
        this.templateService = templateService;
        this.route = route;
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userData = new src_model_user_model__WEBPACK_IMPORTED_MODULE_4__["UserModel"]();
        this.response = this.userService.getUser();
        if (localStorage.getItem('username')) {
            this.username = localStorage.getItem('username');
        }
        this.userData.template = this.response.templateModelList;
        if (parseInt(this.route.snapshot.paramMap.get("id"))) {
            this.templateService.getTemplate(parseInt(this.route.snapshot.paramMap.get("id")))
                .subscribe(function (resp) {
                console.log(resp);
                document.getElementById("Name").value = resp['name'];
            }, (function (err) {
                console.log(err);
                _this.errorLoadModal("Error", "Template could not be loaded");
            }));
        }
    };
    EditorComponent.prototype.errorLoadModal = function (msg1, msg2) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire(msg1, msg2, 'error');
    };
    EditorComponent.ctorParameters = function () { return [
        { type: src_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: src_services_template_service__WEBPACK_IMPORTED_MODULE_5__["TemplateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    EditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-editor',
            template: _raw_loader_editor_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_editor_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            src_services_template_service__WEBPACK_IMPORTED_MODULE_5__["TemplateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "xTEP":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/controller/controller.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n    <div class=\"position-relative\">\n      <!-- shape Hero -->\n      <section class=\"section section-lg section-shaped pb-250 bg-gradient-orange\">\n        <div class=\"shape shape-style-4 shape-primary\">\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n        </div>\n        <div class=\"keycenter\">\n            <div  style=\"background-image: url('{{templateData.backgroundimage}}');background-repeat: no-repeat;background-size: 1490px 720px;\"  class=\"dropzone\" id=\"drop-zone\" >\n                <div  id=\"yes-drop\" *ngFor=\"let item of listaelements;let indice=index\" (mousedown)=\"buttonclicked(item,$event)\"  [ngStyle]=\"{'transform': 'translate('+item.positionX+'px, '+item.positionY+'px)', 'width': +item.width+'px' , 'height': +item.height+'px', 'font-size': +item.height/10+item.width/20+'px' , 'text-align': 'center','cursor' : 'pointer'}\" class=\"drag-drop\"  >{{gettipo(indice)}} </div>\n            </div> \n        </div>\n        <div class=\"separator separator-bottom separator-skew\">\n            <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n                <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n            </svg>\n        </div>\n      </section>\n      <section>\n        <div class=\"pl-md-5\">\n            <div class=\"text-center\">\n                <div class=\"row justify-content-around\">\n                  <div class=\"col-7 text-left\">\n                    <a href=\"javascript:void(0)\" [routerLink]=\"['/keypads']\" routerLinkActive=\"router-link-active\"  class=\"text-dark\">\n                      <span class=\"btn-inner--icon\"><i class=\"fa fa-step-backward mr-2\"></i></span>\n                      <u>Your templates</u>\n                    </a>\n                  </div>\n                </div>\n            </div>   \n        </div>\n    </section>\n    </div>\n</main>\n\n\n\n");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "z6cF":
/*!*********************************!*\
  !*** ./src/model/user.model.ts ***!
  \*********************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    return UserModel;
}());



/***/ }),

/***/ "zRkE":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav id=\"navbar-main\" class=\"navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom headroom--top headroom--pinned\">\n  <div class=\"container\">\n    <a class=\"navbar-brand mr-lg-5\" [routerLink]=\"['/home']\">\n      <img src=\"./assets/img/brand/byw/logo_large.png\" width = \"120px\" height=\"90px\">\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\"\n          [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"navbar-collapse collapse\" id=\"navbar_global\" [ngbCollapse]=\"isCollapsed\">\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\">\n            <a [routerLink]=\"['/home']\">\n              <img src=\"./assets/img/brand/orange/logo_large.png\">\n            </a>\n          </div>\n          <div class=\"col-6 collapse-close\">\n            <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed = !isCollapsed\"\n                  [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\n              <span></span>\n              <span></span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav navbar-nav-hover align-items-lg-center\">\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link no-caret\" data-toggle=\"dropdown\" role=\"button\">\n            <i class=\"ni ni-collection d-lg-none\"></i>\n            <span class=\"nav-link-inner--text text-dark\">Home</span>\n          </a>\n          <div class=\"dropdown-menu\">\n            <a [routerLink]=\"['/landing']\" class=\"dropdown-item\">What is RecreaPad?</a>\n            <a [routerLink]=\"['/tutorial']\" class=\"dropdown-item\">Quickstart tutorial</a>\n          </div>\n        </li>\n        <li class=\"nav-item dropdown\" *ngIf=\"isLogged() === 'true'\">\n          <a class=\"nav-link no-caret\" data-toggle=\"dropdown\" role=\"button\">\n            <i class=\"ni ni-collection d-lg-none\"></i>\n            <span class=\"nav-link-inner--text text-dark\">Templates</span>\n          </a>\n          <div class=\"dropdown-menu\">\n            <a [routerLink]=\"['/keypads']\" class=\"dropdown-item\">Your templates</a>\n            <a href=\"javascript:void(0)\" (click)=\"createNewTemplate()\" class=\"dropdown-item\">Create a Template</a>\n            <a [routerLink]=\"['/keypads']\" class=\"dropdown-item\">Examples</a>\n          </div>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link no-caret\" data-toggle=\"dropdown\" role=\"button\">\n            <i class=\"ni ni-collection d-lg-none\"></i>\n            <span class=\"nav-link-inner--text text-dark\">Support</span>\n          </a>\n          <div class=\"dropdown-menu\">\n            <a [routerLink]=\"['/rete']\" class=\"dropdown-item\">Help</a>\n            <a [routerLink]=\"['/contact']\" class=\"dropdown-item\">Contact Us</a>\n            <a href=\"javascript:void(0)\"  class=\"dropdown-item text-dark\" data-toggle=\"modal\" data-target=\"#exampleModalLong\">Terms and Conditions</a>\n          </div>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\n        <li class=\"nav-item d-none d-lg-block ml-lg-4\"\n          *ngIf=\"isLogged() === 'false'\">\n          <a href=\"javascript:void(0)\" [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\" class=\"btn btn-neutral btn-icon\">\n            <span class=\"btn-inner--icon\">\n              <i class=\"fa fa-user mr-2\"></i>\n            </span>\n            <span class=\"nav-link-inner--text\">Login</span>\n          </a>\n        </li>\n        <li class=\"nav-item d-none d-lg-block ml-lg-4\"\n          *ngIf=\"isLogged() === 'false'\">\n          <a href=\"javascript:void(0)\" [routerLink]=\"['/register']\" routerLinkActive=\"router-link-active\" class=\"btn btn-success btn-icon mb-3 mb-sm-0\">\n            <span class=\"btn-inner--icon\">\n              <i class=\"fa fa-user-plus mr-2\"></i>\n            </span>\n            <span class=\"nav-link-inner--text\">Sign Up</span>\n          </a>\n        </li>\n        <li class=\"nav-item d-none d-lg-block ml-lg-4\"\n          *ngIf=\"isLogged() === 'true'\">\n          <a href=\"javascript:void(0)\" [routerLink]=\"['/userhome']\" routerLinkActive=\"router-link-active\" class=\"btn btn-outline-neutral btn-icon\">\n            <span class=\"btn-inner--icon\">\n              <i class=\"fa fa-user mr-2\"></i>\n            </span>\n            <span class=\"nav-link-inner--text\">Profile</span>\n          </a>\n        </li>\n        <li class=\"nav-item d-none d-lg-block ml-lg-4\"\n          *ngIf=\"isLogged() === 'true'\">\n          <a href=\"javascript:void(0)\" (click)=\"doLogout()\" class=\"btn btn-neutral btn-icon\">\n            <span class=\"btn-inner--icon\">\n              <i class=\"fa fa-sign-out mr-2\"></i>\n            </span>\n            <span class=\"nav-link-inner--text\">Log Out</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"modal fade\" id=\"exampleModalLong\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-scrollable\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Terms and Conditions</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>¿Aceptas vender tu alma al diablo, comprar un apartamento en una isla inexistente y adoptar 5 niños huerfanos?.</p>\n        <p>El siguiente texto es de relleno:</p>\n        <p>\"De pronto, como si un remolino hubiera echado raíces en el centro del pueblo, llegó la compañía bananera perseguida por la hojarasca. Era una hojarasca revuelta, alborotada, formada por los desperdicios humanos y materiales de los otros pueblos; rastrojos de una guerra civil que cada vez parecía más remota e inverosímil. La hojarasca era implacable. Todo lo contaminaba de su revuelto olor multitudinario, olor de secreción a flor de piel y de recóndita muerte. En menos de un año arrojó sobre el pueblo los escombros de numerosas catástrofes anteriores a ella misma, esparció en las calles su confusa carga de desperdicios. Y esos desperdicios, precipitadamente, al compás atolondrado e imprevisto de la tormenta, se iban seleccionando, individualizándose, hasta convertir lo que fue un callejón con un río en un extremo un corral para los muertos en el otro, en un pueblo diferente y complicado, hecho con los desperdicios de los otros pueblos. Allí vinieron, confundidos con la hojarasca humana, arrastrados por su impetuosa fuerza, los desperdicios de los almacenes, de los hospitales, de los salones de diversión, de las plantas eléctricas; desperdicios de mujeres solas y de hombres que amarraban la mula en un horcón del hotel, trayendo como un único equipaje un baúl de madera o un atadillo de ropa, y a los pocos meses tenían casa propia, dos concubinas y el título militar que les quedaron debiendo por haber llegado tarde a la guerra”.</p>\n        <p>\"El coronel abrió el tarro del café y comprobó que no había más de una cucharadita. Retiró la olla del fogón, vertió la mitad del agua en el piso de tierra, y con un cuchillo raspó el interior del tarro sobre la olla hasta cuando se desprendieron las últimas raspaduras del polvo de café revueltas con óxido de lata”.</p>\n        <p>\"Durante el fin de semana los gallinazos se metieron por los balcones de la casa  presidencial, destrozaron a picotazos las mallas de alambre de las ventanas y removieron con sus alas el tiempo estancado en el interior, y en la madrugada del lunes la ciudad despertó de su letargo de siglos con una tibia y tierna brisa de muerto grande y de podrida grandeza. Sólo entonces nos atrevimos a entrar sin embestir los carcomidos muros de piedra fortificada, como querían los más resueltos, ni desquiciar con yuntas de bueyes la entrada principal, como otros proponían, pues bastó con que alguien los empujara para que cedieran en sus goznes los portones blindados que en los tiempos heroicos de la casa habían resistido a las lombardas de William Dampier. Fue como penetrar en el ámbito de otra época, porque el aire era más tenue en los pozos de escombros de la vasta guarida del poder, y el silencio era más antiguo, y las cosas eran arduamente visibles en la luz decrépita”.</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\">Accept Terms and Conditions</button>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*!

=========================================================
* Argon Design System Angular - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-angular
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zwQV":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <section class=\"section section-shaped section-lg\">\n    <div class=\"shape shape-style-2 bg-gradient-warning\">\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n    <div class=\"container pt-lg-md\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-5\">\n          <div class=\"card bg-secondary shadow border-0\">\n            <div class=\"card-body px-lg-5 py-lg-5\">\n              <div class=\"text-center text-muted mb-4\">\n                <h2>Sign Up</h2>\n                Introduce your credentials\n              </div>\n              <form role=\"form\" \n                (ngSubmit)=\"register(f)\"\n                #f = ngForm >\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                  <div class=\"input-group input-group-alternative mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                    </div>\n                    <input class=\"form-control\" \n                          placeholder=\"Name\" \n                          type=\"name\" \n                          id=\"Name\"\n                          (focus)=\"focus=true\" \n                          (blur)=\"focus=false\"\n                          name=\"myname\" \n                          [(ngModel)]=\"userData.myname\"\n                          required>\n                  </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                  <div class=\"input-group input-group-alternative mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                    </div>\n                    <input class=\"form-control\" \n                          placeholder=\"Lastname\" \n                          type=\"lastname\" \n                          id=\"Lastname\"\n                          (focus)=\"focus=true\" \n                          (blur)=\"focus=false\"\n                          name=\"lastname\" \n                          [(ngModel)]=\"userData.lastname\"\n                          required\n                          lastname>\n                  </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus===true}\">\n                  <div class=\"input-group input-group-alternative mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"fa fa-users\"></i></span>\n                    </div>\n                    <input class=\"form-control\" \n                            placeholder=\"Username\" \n                            id=\"Username\"\n                            name=\"Username\"\n                            type=\"text\" \n                            (focus)=\"focus=true\" \n                            (blur)=\"focus=false\"\n                            [(ngModel)]=\"userData.username\"\n                            required>\n                  </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                  <div class=\"input-group input-group-alternative mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                    </div>\n                    <input class=\"form-control\" \n                          placeholder=\"Email\" \n                          type=\"email\" \n                          id=\"Email\"\n                          (focus)=\"focus=true\" \n                          (blur)=\"focus=false\"\n                          name=\"email\" \n                          [(ngModel)]=\"userData.email\"\n                          required\n                          email>\n                  </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus2===true}\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                    </div>\n                    <input class=\"form-control\" \n                           placeholder=\"Password\" \n                           id=\"Password\"\n                           name=\"Password\"\n                           type=\"password\" \n                           (focus)=\"focus1=true\" \n                           (blur)=\"focus1=false\"\n                           [(ngModel)]=\"userData.password\"\n                           required \n                           minlength=\"6\">\n                  </div>\n                </div>\n                <div class=\"text-center\">\n                  <button type=\"button\" class=\"btn btn-success mt-4\" type=\"submit\">Create Account</button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map