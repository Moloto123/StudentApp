(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Moloto\Desktop\Angular\StudentApp\src\main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_firebase_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/firebase-services.service */ "vFeh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function (a2) { return ["/", "students", a2]; };
function HomeComponent_ul_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " View-Student");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r7.payload.doc.data().name, " ", item_r7.payload.doc.data().surname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, item_r7.payload.doc.id));
} }
class HomeComponent {
    constructor(_data) {
        this._data = _data;
    }
    RegisterStudent(StudentInfo) {
        this._data.Register(StudentInfo.value);
    }
    ngOnInit() {
        this._data.viewAllStudents().snapshotChanges().subscribe(action => {
            console.log(action);
            this.students = action;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firebase_services_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseServicesService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 49, vars: 2, consts: [[1, "inner", 2, "background-image", "url('././assets/bd.jpg')"], [1, "overlay"], [1, "form-container"], ["routerLink", "/login", "id", "goback", 1, "basic-btn"], ["id", "title", 1, "text-center", 2, "color", "white"], ["id", "description", 1, "description", "text-center", 2, "color", "yellow"], ["id", "register-form", 3, "ngSubmit"], ["StudentInfo", "ngForm"], [1, "form-group"], ["for", "name", 2, "color", "#06D85F"], ["type", "text", "placeholder", "Enter your name..", "name", "name", "ngModel", "", "required", "", 1, "txt"], ["name", "ngModel"], ["type", "text", "placeholder", "Enter your Surname..", "name", "surname", "ngModel", "", "required", "", 1, "txt"], ["surname", "ngModel"], ["type", "text", "placeholder", "Enter your Address here..", "name", "address", "ngModel", "", "rows", "3", 1, "input-textarea"], ["address", "ngModel"], ["type", "text", "placeholder", "Enter your Cell Number..", "name", "cell", "ngModel", "", "required", "", 1, "txt"], ["cell", "ngModel"], ["type", "text", "placeholder", "Enter your Course Name..", "name", "course", "ngModel", "", "required", "", 1, "txt"], ["course", "ngModel"], [1, "basic-btn", 3, "disabled"], [1, "second"], ["id", "description", 1, "description", "text", 2, "color", "yellow"], [4, "ngFor", "ngForOf"], [2, "color", "white"], ["type", "button", 1, "basic-bt", 2, "color", "yellow", 3, "routerLink"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "You are Currently on Home-Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Students Registration Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Thank you for taking the time to improve the platform ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return ctx.RegisterStudent(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Student Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Student Surame:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Student Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "textarea", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Student Cell Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Student Course Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Submit And Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " List of Registered Students ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, HomeComponent_ul_47_Template, 8, 5, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.students);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".form-container[_ngcontent-%COMP%]{\r\n\r\n    float: left;\r\n    width:70%;\r\n    height: 99;\r\n    padding-left: 2px;\r\n    border: 5px white solid;\r\n \r\n}\r\n.second[_ngcontent-%COMP%]{\r\n\r\n    float: left;\r\n    width: 28%;\r\n    padding-left: 10px;\r\n    border: 2px white solid;\r\n    \r\n    margin: 3.125rem auto 0 auto;\r\n    \r\n}\r\nh1[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n \r\n}\r\np[_ngcontent-%COMP%] {\r\n  font-size: 1.125rem;\r\n}\r\nh1[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  \r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 1.125rem;\r\n  font-family: Lucida Bright;\r\n  -webkit-text-decoration-color: yellow;\r\n          text-decoration-color: yellow;\r\n  width: 40%;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 1.135rem;\r\n  font-family: Lucida Bright;\r\n  -webkit-text-decoration-color: yellow;\r\n          text-decoration-color: yellow;\r\n  width: 50%;\r\n}\r\n.description[_ngcontent-%COMP%] {\r\n  font-style: italic;\r\n  font-weight: 200;\r\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);\r\n}\r\n.text-center[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n  background: var(--color-darkblue-alpha);\r\n  padding: 2.5rem 0.625rem;\r\n  border-radius: 0.25rem;\r\n}\r\n@media (min-width: 480px) {\r\n  form[_ngcontent-%COMP%] {\r\n    padding: 2.5rem;\r\n  }\r\n}\r\n.form-group[_ngcontent-%COMP%] {\r\n \r\n  padding: 0.25rem;\r\n}\r\n.form-control[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  height: 2.375rem;\r\n  padding: 0.375rem 0.75rem;\r\n  background: none;\r\n  color: red;\r\n  border: 1px white solid;\r\n\r\n}\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n  border-color: #80bdff;\r\n  outline: 0;\r\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n}\r\n.input-textarea[_ngcontent-%COMP%] {\r\n  min-height: 136px;\r\n  width: 100%;\r\n  padding: 0.625rem;\r\n  resize: vertical;\r\n  background: none;\r\n  color: red;\r\n  border: 1px white solid;\r\n}\r\n.inner[_ngcontent-%COMP%]{\r\n        background-size:cover;\r\n        background-position: center;\r\n        background-attachment:fixed;\r\n        width: 100%;\r\n       }\r\n.overlay[_ngcontent-%COMP%] {\r\n        background: linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0,0.5));\r\n          background-position: right;\r\n          background-repeat: no-repeat;\r\n          border: 2px #06D85F solid;\r\n        }\r\n.basic-btn[_ngcontent-%COMP%] {\r\n        font-size: 1em;\r\n        padding: 10px;\r\n        color: red;\r\n        border: 2px solid #06D85F;\r\n        border-radius: 20px/50px;\r\n        text-decoration: none;\r\n        cursor: pointer;\r\n        transition: all 0.3s ease-out;\r\n        background: none;\r\n      }\r\n.basic-btn[_ngcontent-%COMP%]:hover {\r\n        background: #06D85F;\r\n      }\r\n.basic-bt[_ngcontent-%COMP%]{\r\n        font-size: 1em;\r\n        padding: 10px;\r\n        color: red;\r\n        border: 2px solid #06D85F;\r\n        border-radius: 20px/50px;\r\n        text-decoration: none;\r\n        cursor: pointer;\r\n        transition: all 0.3s ease-out;\r\n      }\r\n.basic-bt[_ngcontent-%COMP%]:hover {\r\n        background: #06D85F;\r\n      }\r\ninput[_ngcontent-%COMP%] {\r\n        background: none;\r\n        color: red;\r\n        border: 1px white solid;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLHVCQUF1Qjs7QUFFM0I7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQix1QkFBdUI7O0lBRXZCLDRCQUE0Qjs7QUFFaEM7QUFHQTtFQUNFLGdCQUFnQjs7QUFFbEI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBOztFQUVFLGFBQWE7O0FBRWY7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixxQ0FBNkI7VUFBN0IsNkJBQTZCO0VBQzdCLFVBQVU7QUFDWjtBQUdBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLHFDQUE2QjtVQUE3Qiw2QkFBNkI7RUFDN0IsVUFBVTtBQUNaO0FBS0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDJDQUEyQztBQUM3QztBQUlBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUEsU0FBUztBQUVUO0VBQ0UsdUNBQXVDO0VBQ3ZDLHdCQUF3QjtFQUN4QixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGO0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVix1QkFBdUI7O0FBRXpCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGdEQUFnRDtBQUNsRDtBQUlBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCO0FBS0k7UUFDSSxxQkFBcUI7UUFDckIsMkJBQTJCO1FBQzNCLDJCQUEyQjtRQUMzQixXQUFXO09BQ1o7QUFFQTtRQUNDLDhEQUE4RDtVQUM1RCwwQkFBMEI7VUFDMUIsNEJBQTRCO1VBQzVCLHlCQUF5QjtRQUMzQjtBQUVGO1FBQ0UsY0FBYztRQUNkLGFBQWE7UUFDYixVQUFVO1FBQ1YseUJBQXlCO1FBQ3pCLHdCQUF3QjtRQUN4QixxQkFBcUI7UUFDckIsZUFBZTtRQUNmLDZCQUE2QjtRQUM3QixnQkFBZ0I7TUFDbEI7QUFDQTtRQUNFLG1CQUFtQjtNQUNyQjtBQUVBO1FBQ0UsY0FBYztRQUNkLGFBQWE7UUFDYixVQUFVO1FBQ1YseUJBQXlCO1FBQ3pCLHdCQUF3QjtRQUN4QixxQkFBcUI7UUFDckIsZUFBZTtRQUNmLDZCQUE2QjtNQUMvQjtBQUNBO1FBQ0UsbUJBQW1CO01BQ3JCO0FBR0E7UUFDRSxnQkFBZ0I7UUFDaEIsVUFBVTtRQUNWLHVCQUF1QjtJQUMzQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGFpbmVye1xyXG5cclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6NzAlO1xyXG4gICAgaGVpZ2h0OiA5OTtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgYm9yZGVyOiA1cHggd2hpdGUgc29saWQ7XHJcbiBcclxufVxyXG4uc2Vjb25ke1xyXG5cclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDI4JTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGJvcmRlcjogMnB4IHdoaXRlIHNvbGlkO1xyXG4gICAgXHJcbiAgICBtYXJnaW46IDMuMTI1cmVtIGF1dG8gMCBhdXRvO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5oMSB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuIFxyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG59XHJcblxyXG5oMSxcclxucCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBMdWNpZGEgQnJpZ2h0O1xyXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogeWVsbG93O1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcblxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS4xMzVyZW07XHJcbiAgZm9udC1mYW1pbHk6IEx1Y2lkYSBCcmlnaHQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB5ZWxsb3c7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG5cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiBmb3JtICovXHJcblxyXG5mb3JtIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1kYXJrYmx1ZS1hbHBoYSk7XHJcbiAgcGFkZGluZzogMi41cmVtIDAuNjI1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xyXG4gIGZvcm0ge1xyXG4gICAgcGFkZGluZzogMi41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gXHJcbiAgcGFkZGluZzogMC4yNXJlbTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyLjM3NXJlbTtcclxuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgY29sb3I6IHJlZDtcclxuICBib3JkZXI6IDFweCB3aGl0ZSBzb2xpZDtcclxuXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogIzgwYmRmZjtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTtcclxufVxyXG5cclxuXHJcblxyXG4uaW5wdXQtdGV4dGFyZWEge1xyXG4gIG1pbi1oZWlnaHQ6IDEzNnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAuNjI1cmVtO1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBjb2xvcjogcmVkO1xyXG4gIGJvcmRlcjogMXB4IHdoaXRlIHNvbGlkO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4gICAgLmlubmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OmZpeGVkO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgfVxyXG5cclxuICAgICAgIC5vdmVybGF5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwgMC41KSwgcmdiYSgwLDAsMCwwLjUpKTtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgIGJvcmRlcjogMnB4ICMwNkQ4NUYgc29saWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgLmJhc2ljLWJ0biB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwNkQ4NUY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweC81MHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAuYmFzaWMtYnRuOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDZEODVGO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuYmFzaWMtYnR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwNkQ4NUY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweC81MHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICAgIH1cclxuICAgICAgLmJhc2ljLWJ0OmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDZEODVGO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgXHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggd2hpdGUgc29saWQ7XHJcbiAgICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _services_firebase_services_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseServicesService"] }]; }, null); })();


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
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDFJRlKTB7ha7tL0Yx3jeBWZ2eKgl2FHng",
        authDomain: "my-first-83424.firebaseapp.com",
        databaseURL: "https://my-first-83424.firebaseio.com",
        projectId: "my-first-83424",
        storageBucket: "my-first-83424.appspot.com",
        messagingSenderId: "944400751170",
        appId: "1:944400751170:web:3ca01775d6ce7d4c5c6bdb",
        measurementId: "G-ST4WMP5D3E"
    },
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'StudentApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../environments/environment */ "AytR");
/* harmony import */ var _services_firebase_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/firebase-services.service */ "vFeh");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_studentdetails_studentdetails_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/studentdetails/studentdetails.component */ "kE3X");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_firebase_services_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseServicesService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            //AngularFireModule.initializeApp(environment.firebase),
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].firebase),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _pages_studentdetails_studentdetails_component__WEBPACK_IMPORTED_MODULE_7__["StudentdetailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        //AngularFireModule.initializeApp(environment.firebase),
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _pages_studentdetails_studentdetails_component__WEBPACK_IMPORTED_MODULE_7__["StudentdetailsComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    //AngularFireModule.initializeApp(environment.firebase),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].firebase),
                ],
                providers: [_services_firebase_services_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseServicesService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kE3X":
/*!******************************************************************!*\
  !*** ./src/app/pages/studentdetails/studentdetails.component.ts ***!
  \******************************************************************/
/*! exports provided: StudentdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentdetailsComponent", function() { return StudentdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_firebase_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/firebase-services.service */ "vFeh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function StudentdetailsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Click to Navigate Home-Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Student's Full Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function StudentdetailsComponent_div_2_Template_form_ngSubmit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.UpdateStudent(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentdetailsComponent_div_2_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.student.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentdetailsComponent_div_2_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.student.surname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "textarea", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentdetailsComponent_div_2_Template_textarea_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.student.address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentdetailsComponent_div_2_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.student.cell = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentdetailsComponent_div_2_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.student.course = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentdetailsComponent_div_2_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Remove Student");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Submit Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.student.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.student.surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.student.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.student.cell);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.student.course);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r1.valid);
} }
class StudentdetailsComponent {
    constructor(_data, _route) {
        this._data = _data;
        this._route = _route;
    }
    ngOnInit() {
        this.Ref = this._route.snapshot.paramMap.get('ref');
        this._data.viewStudents(this.Ref).subscribe(action => {
            this.student = action;
            console.log(this.student);
        });
    }
    UpdateStudent(StudentInfo) {
        this._data.updates(StudentInfo.value, this.Ref).then(function (Ref) {
            alert("Student updated");
        });
    }
    delete() {
        this._data.Delete(this.Ref);
    }
}
StudentdetailsComponent.ɵfac = function StudentdetailsComponent_Factory(t) { return new (t || StudentdetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firebase_services_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
StudentdetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentdetailsComponent, selectors: [["app-studentdetails"]], decls: 3, vars: 1, consts: [[1, "inner", 2, "background-image", "url('././assets/bd.jpg')"], [1, "overlay"], ["class", "form-container", 4, "ngIf"], [1, "form-container"], ["routerLink", "/", "id", "goback", 1, "basic-btn"], [1, "container"], [2, "color", "white"], [3, "ngSubmit"], ["StudentInfo", "ngForm"], [1, "form-group"], ["type", "text", "placeholder", "Student Name..", "name", "name", "ngModel", "", "required", "", 1, "txt", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["type", "text", "placeholder", "Student Surname..", "name", "surname", "ngModel", "", "required", "", 1, "txt", 3, "ngModel", "ngModelChange"], ["surname", "ngModel"], ["type", "text", "placeholder", "Enter your Address here..", "name", "address", "ngModel", "", "rows", "4", 1, "txt", 3, "ngModel", "ngModelChange"], ["address", "ngModel"], ["type", "text", "placeholder", "Student Cell Number..", "name", "cell", "ngModel", "", "required", "", 1, "txt", 3, "ngModel", "ngModelChange"], ["cell", "ngModel"], ["type", "text", "placeholder", "Student Course..", "name", "course", "ngModel", "", "required", "", 1, "txt", 3, "ngModel", "ngModelChange"], ["course", "ngModel"], [1, "basic", 3, "click"], ["type", "submit", 1, "basic-btn", 3, "disabled"]], template: function StudentdetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StudentdetailsComponent_div_2_Template, 38, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.student);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"]], styles: [".basic-btn[_ngcontent-%COMP%] {\r\n    font-size: 1em;\r\n    padding: 10px;\r\n    color: red;\r\n    border: 2px solid #06D85F;\r\n    border-radius: 20px/50px;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease-out;\r\n    padding-left: 10px;\r\n    background: none;\r\n  }\r\n  .basic-btn[_ngcontent-%COMP%]:hover {\r\n    background: #06D85F;\r\n  }\r\n  .basic[_ngcontent-%COMP%] {\r\n    font-size: 1em;\r\n    padding: 10px;\r\n    color: white;\r\n    border: 2px solid #06D85F;\r\n    border-radius: 20px/50px;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease-out;\r\n    background-color: red;\r\n    background: none;\r\n  }\r\n  .basic[_ngcontent-%COMP%]:hover {\r\n    background: #06D85F;\r\n  }\r\n  p[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-bottom: 0.5rem;\r\n  }\r\n  h1[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 1.125rem;\r\n    margin-bottom: 0.5rem;\r\n    width: 70%;\r\n  }\r\n  h1[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n    line-height: 1.2;\r\n  }\r\n  .container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 3.125rem auto 0 auto;\r\n    padding-left: 10px;\r\n    border: 3px white solid;\r\n  }\r\n  @media (min-width: 576px) {\r\n    .container[_ngcontent-%COMP%] {\r\n      max-width: 540px;\r\n    }\r\n  }\r\n  @media (min-width: 768px) {\r\n    .container[_ngcontent-%COMP%] {\r\n      max-width: 720px;\r\n    }\r\n  }\r\n  .input-textarea[_ngcontent-%COMP%] {\r\n    min-height: 200px;\r\n  width: 100%;\r\n  resize: vertical;\r\n  background: none;\r\n  color: red;\r\n  border: 1px white solid;\r\n  padding: 0.25rem;\r\n \r\n  }\r\n  .inner[_ngcontent-%COMP%]{\r\n    background-size:cover;\r\n    background-position: center;\r\n    background-attachment:fixed;\r\n    width: 100%;\r\n    \r\n  }\r\n  .overlay[_ngcontent-%COMP%] {\r\n    background: linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0,0.5));\r\n      background-position: right;\r\n      background-repeat: no-repeat;\r\n      border: 2px #06D85F solid;\r\n    }\r\n  .basic-btn[_ngcontent-%COMP%] {\r\n    font-size: 1em;\r\n    padding: 10px;\r\n    padding-left: 10px;\r\n    color: red;\r\n    border: 2px solid #06D85F;\r\n    border-radius: 20px/50px;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease-out;\r\n  }\r\n  .basic-btn[_ngcontent-%COMP%]:hover {\r\n    background: #06D85F;\r\n  }\r\n  input[_ngcontent-%COMP%] {\r\n    background: none;\r\n    color: yellow;\r\n    border: 1px white solid;\r\n    font-family: Lucida Bright;\r\n}\r\n  .form-group[_ngcontent-%COMP%] {\r\n  background: none;\r\n    color: yellow;\r\n  padding: 0.25rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3R1ZGVudGRldGFpbHMvc3R1ZGVudGRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0NBQ0M7SUFDRyxjQUFjO0lBQ2QsYUFBYTtJQUNiLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUdBO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFFQTtJQUNFLGFBQWE7SUFDYixxQkFBcUI7RUFDdkI7RUFDQTs7SUFFRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0VBRUE7SUFDRSxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQix1QkFBdUI7RUFDekI7RUFFQTtJQUNFO01BQ0UsZ0JBQWdCO0lBQ2xCO0VBQ0Y7RUFFQTtJQUNFO01BQ0UsZ0JBQWdCO0lBQ2xCO0VBQ0Y7RUFHQTtJQUNFLGlCQUFpQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjs7RUFFaEI7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLFdBQVc7O0VBRWI7RUFFQTtJQUNFLDhEQUE4RDtNQUM1RCwwQkFBMEI7TUFDMUIsNEJBQTRCO01BQzVCLHlCQUF5QjtJQUMzQjtFQUdGO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZiw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsMEJBQTBCO0FBQzlCO0VBSUE7RUFDRSxnQkFBZ0I7SUFDZCxhQUFhO0VBQ2YsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3R1ZGVudGRldGFpbHMvc3R1ZGVudGRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gLmJhc2ljLWJ0biB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzA2RDg1RjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHgvNTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICB9XHJcbiAgLmJhc2ljLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDZEODVGO1xyXG4gIH1cclxuXHJcblxyXG4gIC5iYXNpYyB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDZEODVGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweC81MHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxuICAuYmFzaWM6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzA2RDg1RjtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICB9XHJcbiAgaDEsXHJcbiAgaW5wdXR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gIH1cclxuICBoMSB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDMuMTI1cmVtIGF1dG8gMCBhdXRvO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgYm9yZGVyOiAzcHggd2hpdGUgc29saWQ7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIG1heC13aWR0aDogNTQwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIG1heC13aWR0aDogNzIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5cclxuICAuaW5wdXQtdGV4dGFyZWEge1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgYm9yZGVyOiAxcHggd2hpdGUgc29saWQ7XHJcbiAgcGFkZGluZzogMC4yNXJlbTtcclxuIFxyXG4gIH1cclxuXHJcbiAgLmlubmVye1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OmZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5vdmVybGF5IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLCAwLjUpLCByZ2JhKDAsMCwwLDAuNSkpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYm9yZGVyOiAycHggIzA2RDg1RiBzb2xpZDtcclxuICAgIH1cclxuXHJcblxyXG4gIC5iYXNpYy1idG4ge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwNkQ4NUY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4LzUwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICB9XHJcbiAgLmJhc2ljLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDZEODVGO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgICBib3JkZXI6IDFweCB3aGl0ZSBzb2xpZDtcclxuICAgIGZvbnQtZmFtaWx5OiBMdWNpZGEgQnJpZ2h0O1xyXG59XHJcblxyXG5cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgY29sb3I6IHllbGxvdztcclxuICBwYWRkaW5nOiAwLjI1cmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentdetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-studentdetails',
                templateUrl: './studentdetails.component.html',
                styleUrls: ['./studentdetails.component.css']
            }]
    }], function () { return [{ type: _services_firebase_services_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseServicesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "vFeh":
/*!*******************************************************!*\
  !*** ./src/app/services/firebase-services.service.ts ***!
  \*******************************************************/
/*! exports provided: FirebaseServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseServicesService", function() { return FirebaseServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");



class FirebaseServicesService {
    constructor(_fire) {
        this._fire = _fire;
    }
    //Register new student
    Register(info) {
        return this._fire.collection("Students").add(info).then(results => {
            alert("New Student has Recently been Registered");
        }).catch(err => {
            console.log("error", err);
        });
    }
    viewAllStudents() {
        return this._fire.collection("Students");
    }
    updates(info, ref) {
        return this._fire.collection("Students").doc(ref).update(info);
    }
    viewStudents(ref) {
        return this._fire.collection("Students").doc(ref).valueChanges();
    }
    Delete(ref) {
        return this._fire.collection("Students").doc(ref).delete().then(result => {
            alert("Student Deleted Successfully!");
        });
    }
}
FirebaseServicesService.ɵfac = function FirebaseServicesService_Factory(t) { return new (t || FirebaseServicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
FirebaseServicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FirebaseServicesService, factory: FirebaseServicesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirebaseServicesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _pages_studentdetails_studentdetails_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/studentdetails/studentdetails.component */ "kE3X");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'students/:ref', component: _pages_studentdetails_studentdetails_component__WEBPACK_IMPORTED_MODULE_0__["StudentdetailsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map