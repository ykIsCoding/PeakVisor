import {
  TimesIcon
} from "./chunk-NB7WNB45.js";
import {
  BaseIcon,
  DomHandler
} from "./chunk-CEWT6CBI.js";
import {
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule,
  UniqueComponentId,
  zindexutils
} from "./chunk-NLNYMUKG.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-WTC6WMFB.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-M6U7XAXO.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-MECWBRNS.js";
import "./chunk-LHRTKJE6.js";
import "./chunk-WKYGNSYM.js";

// node_modules/primeng/fesm2022/primeng-icons-eye.mjs
var EyeIcon = class _EyeIcon extends BaseIcon {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵEyeIcon_BaseFactory;
    return function EyeIcon_Factory(t) {
      return (ɵEyeIcon_BaseFactory || (ɵEyeIcon_BaseFactory = ɵɵgetInheritedFactory(_EyeIcon)))(t || _EyeIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _EyeIcon,
    selectors: [["EyeIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z", "fill", "currentColor"]],
    template: function EyeIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EyeIcon, [{
    type: Component,
    args: [{
      selector: "EyeIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-refresh.mjs
var RefreshIcon = class _RefreshIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + UniqueComponentId() + ")";
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵRefreshIcon_BaseFactory;
    return function RefreshIcon_Factory(t) {
      return (ɵRefreshIcon_BaseFactory || (ɵRefreshIcon_BaseFactory = ɵɵgetInheritedFactory(_RefreshIcon)))(t || _RefreshIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _RefreshIcon,
    selectors: [["RefreshIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.77051 5.96336C6.84324 5.99355 6.92127 6.00891 7.00002 6.00854C7.07877 6.00891 7.1568 5.99355 7.22953 5.96336C7.30226 5.93317 7.36823 5.88876 7.42357 5.83273L9.82101 3.43529C9.93325 3.32291 9.99629 3.17058 9.99629 3.01175C9.99629 2.85292 9.93325 2.70058 9.82101 2.5882L7.42357 0.190763C7.3687 0.131876 7.30253 0.0846451 7.22901 0.0518865C7.15549 0.019128 7.07612 0.00151319 6.99564 9.32772e-05C6.91517 -0.00132663 6.83523 0.0134773 6.7606 0.0436218C6.68597 0.0737664 6.61817 0.118634 6.56126 0.175548C6.50435 0.232462 6.45948 0.300257 6.42933 0.374888C6.39919 0.449519 6.38439 0.529456 6.38581 0.609933C6.38722 0.690409 6.40484 0.769775 6.4376 0.843296C6.47036 0.916817 6.51759 0.982986 6.57647 1.03786L7.95103 2.41241H6.99998C5.46337 2.41241 3.98969 3.02283 2.90314 4.10938C1.81659 5.19593 1.20618 6.66961 1.20618 8.20622C1.20618 9.74283 1.81659 11.2165 2.90314 12.3031C3.98969 13.3896 5.46337 14 6.99998 14C8.53595 13.9979 10.0084 13.3868 11.0945 12.3007C12.1806 11.2146 12.7917 9.74218 12.7938 8.20622C12.7938 8.04726 12.7306 7.89481 12.6182 7.78241C12.5058 7.67001 12.3534 7.60686 12.1944 7.60686C12.0355 7.60686 11.883 7.67001 11.7706 7.78241C11.6582 7.89481 11.5951 8.04726 11.5951 8.20622C11.5951 9.11504 11.3256 10.0035 10.8207 10.7591C10.3157 11.5148 9.59809 12.1037 8.75845 12.4515C7.9188 12.7993 6.99489 12.8903 6.10353 12.713C5.21217 12.5357 4.3934 12.0981 3.75077 11.4554C3.10813 10.8128 2.67049 9.99404 2.49319 9.10268C2.31589 8.21132 2.40688 7.2874 2.75468 6.44776C3.10247 5.60811 3.69143 4.89046 4.44709 4.38554C5.20275 3.88063 6.09116 3.61113 6.99998 3.61113H7.95098L6.57647 4.98564C6.46423 5.09802 6.40119 5.25035 6.40119 5.40918C6.40119 5.56801 6.46423 5.72035 6.57647 5.83273C6.63181 5.88876 6.69778 5.93317 6.77051 5.96336Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function RefreshIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0)(1, "g");
        ɵɵelement(2, "path", 1);
        ɵɵelementEnd();
        ɵɵelementStart(3, "defs")(4, "clipPath", 2);
        ɵɵelement(5, "rect", 3);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        ɵɵadvance();
        ɵɵattribute("clip-path", ctx.pathId);
        ɵɵadvance(3);
        ɵɵproperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RefreshIcon, [{
    type: Component,
    args: [{
      selector: "RefreshIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.77051 5.96336C6.84324 5.99355 6.92127 6.00891 7.00002 6.00854C7.07877 6.00891 7.1568 5.99355 7.22953 5.96336C7.30226 5.93317 7.36823 5.88876 7.42357 5.83273L9.82101 3.43529C9.93325 3.32291 9.99629 3.17058 9.99629 3.01175C9.99629 2.85292 9.93325 2.70058 9.82101 2.5882L7.42357 0.190763C7.3687 0.131876 7.30253 0.0846451 7.22901 0.0518865C7.15549 0.019128 7.07612 0.00151319 6.99564 9.32772e-05C6.91517 -0.00132663 6.83523 0.0134773 6.7606 0.0436218C6.68597 0.0737664 6.61817 0.118634 6.56126 0.175548C6.50435 0.232462 6.45948 0.300257 6.42933 0.374888C6.39919 0.449519 6.38439 0.529456 6.38581 0.609933C6.38722 0.690409 6.40484 0.769775 6.4376 0.843296C6.47036 0.916817 6.51759 0.982986 6.57647 1.03786L7.95103 2.41241H6.99998C5.46337 2.41241 3.98969 3.02283 2.90314 4.10938C1.81659 5.19593 1.20618 6.66961 1.20618 8.20622C1.20618 9.74283 1.81659 11.2165 2.90314 12.3031C3.98969 13.3896 5.46337 14 6.99998 14C8.53595 13.9979 10.0084 13.3868 11.0945 12.3007C12.1806 11.2146 12.7917 9.74218 12.7938 8.20622C12.7938 8.04726 12.7306 7.89481 12.6182 7.78241C12.5058 7.67001 12.3534 7.60686 12.1944 7.60686C12.0355 7.60686 11.883 7.67001 11.7706 7.78241C11.6582 7.89481 11.5951 8.04726 11.5951 8.20622C11.5951 9.11504 11.3256 10.0035 10.8207 10.7591C10.3157 11.5148 9.59809 12.1037 8.75845 12.4515C7.9188 12.7993 6.99489 12.8903 6.10353 12.713C5.21217 12.5357 4.3934 12.0981 3.75077 11.4554C3.10813 10.8128 2.67049 9.99404 2.49319 9.10268C2.31589 8.21132 2.40688 7.2874 2.75468 6.44776C3.10247 5.60811 3.69143 4.89046 4.44709 4.38554C5.20275 3.88063 6.09116 3.61113 6.99998 3.61113H7.95098L6.57647 4.98564C6.46423 5.09802 6.40119 5.25035 6.40119 5.40918C6.40119 5.56801 6.46423 5.72035 6.57647 5.83273C6.63181 5.88876 6.69778 5.93317 6.77051 5.96336Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-searchminus.mjs
var SearchMinusIcon = class _SearchMinusIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + UniqueComponentId() + ")";
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSearchMinusIcon_BaseFactory;
    return function SearchMinusIcon_Factory(t) {
      return (ɵSearchMinusIcon_BaseFactory || (ɵSearchMinusIcon_BaseFactory = ɵɵgetInheritedFactory(_SearchMinusIcon)))(t || _SearchMinusIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _SearchMinusIcon,
    selectors: [["SearchMinusIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.0208 12.0411C4.83005 12.0411 3.66604 11.688 2.67596 11.0265C1.68589 10.3649 0.914216 9.42464 0.458534 8.32452C0.00285271 7.22441 -0.116374 6.01388 0.11593 4.84601C0.348235 3.67813 0.921637 2.60537 1.76363 1.76338C2.60562 0.921393 3.67838 0.34799 4.84625 0.115686C6.01412 -0.116618 7.22466 0.00260857 8.32477 0.45829C9.42488 0.913972 10.3652 1.68564 11.0267 2.67572C11.6883 3.66579 12.0414 4.8298 12.0414 6.02056C12.0395 7.41563 11.5542 8.76029 10.6783 9.8305L13.8244 12.9765C13.9367 13.089 13.9997 13.2414 13.9997 13.4003C13.9997 13.5592 13.9367 13.7116 13.8244 13.8241C13.769 13.8801 13.703 13.9245 13.6302 13.9548C13.5575 13.985 13.4794 14.0003 13.4006 14C13.3218 14.0003 13.2437 13.985 13.171 13.9548C13.0982 13.9245 13.0322 13.8801 12.9768 13.8241L9.83082 10.678C8.76059 11.5539 7.4159 12.0393 6.0208 12.0411ZM6.0208 1.20731C5.07199 1.20731 4.14449 1.48867 3.35559 2.0158C2.56669 2.54292 1.95181 3.29215 1.58872 4.16874C1.22562 5.04532 1.13062 6.00989 1.31572 6.94046C1.50083 7.87104 1.95772 8.72583 2.62863 9.39674C3.29954 10.0676 4.15433 10.5245 5.0849 10.7096C6.01548 10.8947 6.98005 10.7997 7.85663 10.4367C8.73322 10.0736 9.48244 9.45868 10.0096 8.66978C10.5367 7.88088 10.8181 6.95337 10.8181 6.00457C10.8181 4.73226 10.3126 3.51206 9.41297 2.6124C8.51331 1.71274 7.29311 1.20731 6.0208 1.20731ZM4.00591 6.60422H8.00362C8.16266 6.60422 8.31518 6.54104 8.42764 6.42859C8.5401 6.31613 8.60328 6.1636 8.60328 6.00456C8.60328 5.84553 8.5401 5.693 8.42764 5.58054C8.31518 5.46809 8.16266 5.40491 8.00362 5.40491H4.00591C3.84687 5.40491 3.69434 5.46809 3.58189 5.58054C3.46943 5.693 3.40625 5.84553 3.40625 6.00456C3.40625 6.1636 3.46943 6.31613 3.58189 6.42859C3.69434 6.54104 3.84687 6.60422 4.00591 6.60422Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function SearchMinusIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0)(1, "g");
        ɵɵelement(2, "path", 1);
        ɵɵelementEnd();
        ɵɵelementStart(3, "defs")(4, "clipPath", 2);
        ɵɵelement(5, "rect", 3);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        ɵɵadvance();
        ɵɵattribute("clip-path", ctx.pathId);
        ɵɵadvance(3);
        ɵɵproperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchMinusIcon, [{
    type: Component,
    args: [{
      selector: "SearchMinusIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.0208 12.0411C4.83005 12.0411 3.66604 11.688 2.67596 11.0265C1.68589 10.3649 0.914216 9.42464 0.458534 8.32452C0.00285271 7.22441 -0.116374 6.01388 0.11593 4.84601C0.348235 3.67813 0.921637 2.60537 1.76363 1.76338C2.60562 0.921393 3.67838 0.34799 4.84625 0.115686C6.01412 -0.116618 7.22466 0.00260857 8.32477 0.45829C9.42488 0.913972 10.3652 1.68564 11.0267 2.67572C11.6883 3.66579 12.0414 4.8298 12.0414 6.02056C12.0395 7.41563 11.5542 8.76029 10.6783 9.8305L13.8244 12.9765C13.9367 13.089 13.9997 13.2414 13.9997 13.4003C13.9997 13.5592 13.9367 13.7116 13.8244 13.8241C13.769 13.8801 13.703 13.9245 13.6302 13.9548C13.5575 13.985 13.4794 14.0003 13.4006 14C13.3218 14.0003 13.2437 13.985 13.171 13.9548C13.0982 13.9245 13.0322 13.8801 12.9768 13.8241L9.83082 10.678C8.76059 11.5539 7.4159 12.0393 6.0208 12.0411ZM6.0208 1.20731C5.07199 1.20731 4.14449 1.48867 3.35559 2.0158C2.56669 2.54292 1.95181 3.29215 1.58872 4.16874C1.22562 5.04532 1.13062 6.00989 1.31572 6.94046C1.50083 7.87104 1.95772 8.72583 2.62863 9.39674C3.29954 10.0676 4.15433 10.5245 5.0849 10.7096C6.01548 10.8947 6.98005 10.7997 7.85663 10.4367C8.73322 10.0736 9.48244 9.45868 10.0096 8.66978C10.5367 7.88088 10.8181 6.95337 10.8181 6.00457C10.8181 4.73226 10.3126 3.51206 9.41297 2.6124C8.51331 1.71274 7.29311 1.20731 6.0208 1.20731ZM4.00591 6.60422H8.00362C8.16266 6.60422 8.31518 6.54104 8.42764 6.42859C8.5401 6.31613 8.60328 6.1636 8.60328 6.00456C8.60328 5.84553 8.5401 5.693 8.42764 5.58054C8.31518 5.46809 8.16266 5.40491 8.00362 5.40491H4.00591C3.84687 5.40491 3.69434 5.46809 3.58189 5.58054C3.46943 5.693 3.40625 5.84553 3.40625 6.00456C3.40625 6.1636 3.46943 6.31613 3.58189 6.42859C3.69434 6.54104 3.84687 6.60422 4.00591 6.60422Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-searchplus.mjs
var SearchPlusIcon = class _SearchPlusIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + UniqueComponentId() + ")";
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSearchPlusIcon_BaseFactory;
    return function SearchPlusIcon_Factory(t) {
      return (ɵSearchPlusIcon_BaseFactory || (ɵSearchPlusIcon_BaseFactory = ɵɵgetInheritedFactory(_SearchPlusIcon)))(t || _SearchPlusIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _SearchPlusIcon,
    selectors: [["SearchPlusIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M2.67596 11.0265C3.66604 11.688 4.83005 12.0411 6.0208 12.0411C6.81143 12.0411 7.59432 11.8854 8.32477 11.5828C8.86999 11.357 9.37802 11.0526 9.83311 10.6803L12.9768 13.8241C13.0322 13.8801 13.0982 13.9245 13.171 13.9548C13.2437 13.985 13.3218 14.0003 13.4006 14C13.4794 14.0003 13.5575 13.985 13.6302 13.9548C13.703 13.9245 13.769 13.8801 13.8244 13.8241C13.9367 13.7116 13.9997 13.5592 13.9997 13.4003C13.9997 13.2414 13.9367 13.089 13.8244 12.9765L10.6806 9.8328C11.0529 9.37773 11.3572 8.86972 11.5831 8.32452C11.8856 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0267 2.67572C10.3652 1.68564 9.42488 0.913972 8.32477 0.45829C7.22466 0.00260857 6.01412 -0.116618 4.84625 0.115686C3.67838 0.34799 2.60562 0.921393 1.76363 1.76338C0.921637 2.60537 0.348235 3.67813 0.11593 4.84601C-0.116374 6.01388 0.00285271 7.22441 0.458534 8.32452C0.914216 9.42464 1.68589 10.3649 2.67596 11.0265ZM3.35559 2.0158C4.14449 1.48867 5.07199 1.20731 6.0208 1.20731C7.29311 1.20731 8.51331 1.71274 9.41297 2.6124C10.3126 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5367 7.88088 10.0096 8.66978C9.48244 9.45868 8.73322 10.0736 7.85663 10.4367C6.98005 10.7997 6.01548 10.8947 5.0849 10.7096C4.15433 10.5245 3.29954 10.0676 2.62863 9.39674C1.95772 8.72583 1.50083 7.87104 1.31572 6.94046C1.13062 6.00989 1.22562 5.04532 1.58872 4.16874C1.95181 3.29215 2.56669 2.54292 3.35559 2.0158ZM6.00481 8.60309C5.84641 8.60102 5.69509 8.53718 5.58308 8.42517C5.47107 8.31316 5.40722 8.16183 5.40515 8.00344V6.60422H4.00591C3.84687 6.60422 3.69434 6.54104 3.58189 6.42859C3.46943 6.31613 3.40625 6.1636 3.40625 6.00456C3.40625 5.84553 3.46943 5.693 3.58189 5.58054C3.69434 5.46809 3.84687 5.40491 4.00591 5.40491H5.40515V4.00572C5.40515 3.84668 5.46833 3.69416 5.58079 3.5817C5.69324 3.46924 5.84577 3.40607 6.00481 3.40607C6.16385 3.40607 6.31637 3.46924 6.42883 3.5817C6.54129 3.69416 6.60447 3.84668 6.60447 4.00572V5.40491H8.00362C8.16266 5.40491 8.31518 5.46809 8.42764 5.58054C8.5401 5.693 8.60328 5.84553 8.60328 6.00456C8.60328 6.1636 8.5401 6.31613 8.42764 6.42859C8.31518 6.54104 8.16266 6.60422 8.00362 6.60422H6.60447V8.00344C6.60239 8.16183 6.53855 8.31316 6.42654 8.42517C6.31453 8.53718 6.1632 8.60102 6.00481 8.60309Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function SearchPlusIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0)(1, "g");
        ɵɵelement(2, "path", 1);
        ɵɵelementEnd();
        ɵɵelementStart(3, "defs")(4, "clipPath", 2);
        ɵɵelement(5, "rect", 3);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        ɵɵadvance();
        ɵɵattribute("clip-path", ctx.pathId);
        ɵɵadvance(3);
        ɵɵproperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchPlusIcon, [{
    type: Component,
    args: [{
      selector: "SearchPlusIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.67596 11.0265C3.66604 11.688 4.83005 12.0411 6.0208 12.0411C6.81143 12.0411 7.59432 11.8854 8.32477 11.5828C8.86999 11.357 9.37802 11.0526 9.83311 10.6803L12.9768 13.8241C13.0322 13.8801 13.0982 13.9245 13.171 13.9548C13.2437 13.985 13.3218 14.0003 13.4006 14C13.4794 14.0003 13.5575 13.985 13.6302 13.9548C13.703 13.9245 13.769 13.8801 13.8244 13.8241C13.9367 13.7116 13.9997 13.5592 13.9997 13.4003C13.9997 13.2414 13.9367 13.089 13.8244 12.9765L10.6806 9.8328C11.0529 9.37773 11.3572 8.86972 11.5831 8.32452C11.8856 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0267 2.67572C10.3652 1.68564 9.42488 0.913972 8.32477 0.45829C7.22466 0.00260857 6.01412 -0.116618 4.84625 0.115686C3.67838 0.34799 2.60562 0.921393 1.76363 1.76338C0.921637 2.60537 0.348235 3.67813 0.11593 4.84601C-0.116374 6.01388 0.00285271 7.22441 0.458534 8.32452C0.914216 9.42464 1.68589 10.3649 2.67596 11.0265ZM3.35559 2.0158C4.14449 1.48867 5.07199 1.20731 6.0208 1.20731C7.29311 1.20731 8.51331 1.71274 9.41297 2.6124C10.3126 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5367 7.88088 10.0096 8.66978C9.48244 9.45868 8.73322 10.0736 7.85663 10.4367C6.98005 10.7997 6.01548 10.8947 5.0849 10.7096C4.15433 10.5245 3.29954 10.0676 2.62863 9.39674C1.95772 8.72583 1.50083 7.87104 1.31572 6.94046C1.13062 6.00989 1.22562 5.04532 1.58872 4.16874C1.95181 3.29215 2.56669 2.54292 3.35559 2.0158ZM6.00481 8.60309C5.84641 8.60102 5.69509 8.53718 5.58308 8.42517C5.47107 8.31316 5.40722 8.16183 5.40515 8.00344V6.60422H4.00591C3.84687 6.60422 3.69434 6.54104 3.58189 6.42859C3.46943 6.31613 3.40625 6.1636 3.40625 6.00456C3.40625 5.84553 3.46943 5.693 3.58189 5.58054C3.69434 5.46809 3.84687 5.40491 4.00591 5.40491H5.40515V4.00572C5.40515 3.84668 5.46833 3.69416 5.58079 3.5817C5.69324 3.46924 5.84577 3.40607 6.00481 3.40607C6.16385 3.40607 6.31637 3.46924 6.42883 3.5817C6.54129 3.69416 6.60447 3.84668 6.60447 4.00572V5.40491H8.00362C8.16266 5.40491 8.31518 5.46809 8.42764 5.58054C8.5401 5.693 8.60328 5.84553 8.60328 6.00456C8.60328 6.1636 8.5401 6.31613 8.42764 6.42859C8.31518 6.54104 8.16266 6.60422 8.00362 6.60422H6.60447V8.00344C6.60239 8.16183 6.53855 8.31316 6.42654 8.42517C6.31453 8.53718 6.1632 8.60102 6.00481 8.60309Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-undo.mjs
var UndoIcon = class _UndoIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + UniqueComponentId() + ")";
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵUndoIcon_BaseFactory;
    return function UndoIcon_Factory(t) {
      return (ɵUndoIcon_BaseFactory || (ɵUndoIcon_BaseFactory = ɵɵgetInheritedFactory(_UndoIcon)))(t || _UndoIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _UndoIcon,
    selectors: [["UndoIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.77042 5.96336C6.84315 5.99355 6.92118 6.00891 6.99993 6.00854C7.07868 6.00891 7.15671 5.99355 7.22944 5.96336C7.30217 5.93317 7.36814 5.88876 7.42348 5.83273C7.53572 5.72035 7.59876 5.56801 7.59876 5.40918C7.59876 5.25035 7.53572 5.09802 7.42348 4.98564L6.04897 3.61113H6.99998C7.9088 3.61113 8.79722 3.88063 9.55288 4.38554C10.3085 4.89046 10.8975 5.60811 11.2453 6.44776C11.5931 7.2874 11.6841 8.21132 11.5068 9.10268C11.3295 9.99404 10.8918 10.8128 10.2492 11.4554C9.60657 12.0981 8.7878 12.5357 7.89644 12.713C7.00508 12.8903 6.08116 12.7993 5.24152 12.4515C4.40188 12.1037 3.68422 11.5148 3.17931 10.7591C2.67439 10.0035 2.4049 9.11504 2.4049 8.20622C2.4049 8.04726 2.34175 7.89481 2.22935 7.78241C2.11695 7.67001 1.9645 7.60686 1.80554 7.60686C1.64658 7.60686 1.49413 7.67001 1.38172 7.78241C1.26932 7.89481 1.20618 8.04726 1.20618 8.20622C1.20829 9.74218 1.81939 11.2146 2.90548 12.3007C3.99157 13.3868 5.46402 13.9979 6.99998 14C8.5366 14 10.0103 13.3896 11.0968 12.3031C12.1834 11.2165 12.7938 9.74283 12.7938 8.20622C12.7938 6.66961 12.1834 5.19593 11.0968 4.10938C10.0103 3.02283 8.5366 2.41241 6.99998 2.41241H6.04892L7.42348 1.03786C7.48236 0.982986 7.5296 0.916817 7.56235 0.843296C7.59511 0.769775 7.61273 0.690409 7.61415 0.609933C7.61557 0.529456 7.60076 0.449519 7.57062 0.374888C7.54047 0.300257 7.49561 0.232462 7.43869 0.175548C7.38178 0.118634 7.31398 0.0737664 7.23935 0.0436218C7.16472 0.0134773 7.08478 -0.00132663 7.00431 9.32772e-05C6.92383 0.00151319 6.84447 0.019128 6.77095 0.0518865C6.69742 0.0846451 6.63126 0.131876 6.57638 0.190763L4.17895 2.5882C4.06671 2.70058 4.00366 2.85292 4.00366 3.01175C4.00366 3.17058 4.06671 3.32291 4.17895 3.43529L6.57638 5.83273C6.63172 5.88876 6.69769 5.93317 6.77042 5.96336Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function UndoIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0)(1, "g");
        ɵɵelement(2, "path", 1);
        ɵɵelementEnd();
        ɵɵelementStart(3, "defs")(4, "clipPath", 2);
        ɵɵelement(5, "rect", 3);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        ɵɵadvance();
        ɵɵattribute("clip-path", ctx.pathId);
        ɵɵadvance(3);
        ɵɵproperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UndoIcon, [{
    type: Component,
    args: [{
      selector: "UndoIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.77042 5.96336C6.84315 5.99355 6.92118 6.00891 6.99993 6.00854C7.07868 6.00891 7.15671 5.99355 7.22944 5.96336C7.30217 5.93317 7.36814 5.88876 7.42348 5.83273C7.53572 5.72035 7.59876 5.56801 7.59876 5.40918C7.59876 5.25035 7.53572 5.09802 7.42348 4.98564L6.04897 3.61113H6.99998C7.9088 3.61113 8.79722 3.88063 9.55288 4.38554C10.3085 4.89046 10.8975 5.60811 11.2453 6.44776C11.5931 7.2874 11.6841 8.21132 11.5068 9.10268C11.3295 9.99404 10.8918 10.8128 10.2492 11.4554C9.60657 12.0981 8.7878 12.5357 7.89644 12.713C7.00508 12.8903 6.08116 12.7993 5.24152 12.4515C4.40188 12.1037 3.68422 11.5148 3.17931 10.7591C2.67439 10.0035 2.4049 9.11504 2.4049 8.20622C2.4049 8.04726 2.34175 7.89481 2.22935 7.78241C2.11695 7.67001 1.9645 7.60686 1.80554 7.60686C1.64658 7.60686 1.49413 7.67001 1.38172 7.78241C1.26932 7.89481 1.20618 8.04726 1.20618 8.20622C1.20829 9.74218 1.81939 11.2146 2.90548 12.3007C3.99157 13.3868 5.46402 13.9979 6.99998 14C8.5366 14 10.0103 13.3896 11.0968 12.3031C12.1834 11.2165 12.7938 9.74283 12.7938 8.20622C12.7938 6.66961 12.1834 5.19593 11.0968 4.10938C10.0103 3.02283 8.5366 2.41241 6.99998 2.41241H6.04892L7.42348 1.03786C7.48236 0.982986 7.5296 0.916817 7.56235 0.843296C7.59511 0.769775 7.61273 0.690409 7.61415 0.609933C7.61557 0.529456 7.60076 0.449519 7.57062 0.374888C7.54047 0.300257 7.49561 0.232462 7.43869 0.175548C7.38178 0.118634 7.31398 0.0737664 7.23935 0.0436218C7.16472 0.0134773 7.08478 -0.00132663 7.00431 9.32772e-05C6.92383 0.00151319 6.84447 0.019128 6.77095 0.0518865C6.69742 0.0846451 6.63126 0.131876 6.57638 0.190763L4.17895 2.5882C4.06671 2.70058 4.00366 2.85292 4.00366 3.01175C4.00366 3.17058 4.06671 3.32291 4.17895 3.43529L6.57638 5.83273C6.63172 5.88876 6.69769 5.93317 6.77042 5.96336Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-focustrap.mjs
var FocusTrap = class _FocusTrap {
  el;
  /**
   * When set as true, focus wouldn't be managed.
   * @group Props
   */
  pFocusTrapDisabled = false;
  constructor(el) {
    this.el = el;
  }
  onkeydown(e) {
    if (this.pFocusTrapDisabled !== true) {
      e.preventDefault();
      const focusableElement = DomHandler.getNextFocusableElement(this.el.nativeElement, e.shiftKey);
      if (focusableElement) {
        focusableElement.focus();
        focusableElement.select?.();
      }
    }
  }
  static ɵfac = function FocusTrap_Factory(t) {
    return new (t || _FocusTrap)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _FocusTrap,
    selectors: [["", "pFocusTrap", ""]],
    hostAttrs: [1, "p-element"],
    hostBindings: function FocusTrap_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown.tab", function FocusTrap_keydown_tab_HostBindingHandler($event) {
          return ctx.onkeydown($event);
        })("keydown.shift.tab", function FocusTrap_keydown_shift_tab_HostBindingHandler($event) {
          return ctx.onkeydown($event);
        });
      }
    },
    inputs: {
      pFocusTrapDisabled: "pFocusTrapDisabled"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrap, [{
    type: Directive,
    args: [{
      selector: "[pFocusTrap]",
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: ElementRef
  }], {
    pFocusTrapDisabled: [{
      type: Input
    }],
    onkeydown: [{
      type: HostListener,
      args: ["keydown.tab", ["$event"]]
    }, {
      type: HostListener,
      args: ["keydown.shift.tab", ["$event"]]
    }]
  });
})();
var FocusTrapModule = class _FocusTrapModule {
  static ɵfac = function FocusTrapModule_Factory(t) {
    return new (t || _FocusTrapModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _FocusTrapModule,
    declarations: [FocusTrap],
    imports: [CommonModule],
    exports: [FocusTrap]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [FocusTrap],
      declarations: [FocusTrap]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-image.mjs
var _c0 = ["mask"];
var _c1 = ["previewButton"];
var _c2 = ["closeButton"];
function Image_button_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Image_button_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Image_button_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.indicatorTemplate);
  }
}
function Image_button_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "EyeIcon", 9);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-image-preview-icon");
  }
}
var _c3 = (a0, a1) => ({
  height: a0,
  width: a1
});
function Image_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 4, 5);
    ɵɵlistener("click", function Image_button_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.onImageClick());
    });
    ɵɵtemplate(2, Image_button_2_ng_container_2_Template, 2, 1, "ng-container", 6)(3, Image_button_2_ng_template_3_Template, 1, 1, "ng-template", null, 7, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _r5 = ɵɵreference(4);
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction2(4, _c3, ctx_r0.height + "px", ctx_r0.width + "px"));
    ɵɵattribute("aria-label", ctx_r0.zoomImageAriaLabel);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.indicatorTemplate)("ngIfElse", _r5);
  }
}
function Image_div_3_RefreshIcon_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "RefreshIcon");
  }
}
function Image_div_3_5_ng_template_0_Template(rf, ctx) {
}
function Image_div_3_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Image_div_3_5_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Image_div_3_UndoIcon_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "UndoIcon");
  }
}
function Image_div_3_8_ng_template_0_Template(rf, ctx) {
}
function Image_div_3_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Image_div_3_8_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Image_div_3_SearchMinusIcon_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SearchMinusIcon");
  }
}
function Image_div_3_11_ng_template_0_Template(rf, ctx) {
}
function Image_div_3_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Image_div_3_11_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Image_div_3_SearchPlusIcon_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SearchPlusIcon");
  }
}
function Image_div_3_14_ng_template_0_Template(rf, ctx) {
}
function Image_div_3_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Image_div_3_14_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Image_div_3_TimesIcon_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "TimesIcon");
  }
}
function Image_div_3_18_ng_template_0_Template(rf, ctx) {
}
function Image_div_3_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Image_div_3_18_ng_template_0_Template, 0, 0, "ng-template");
  }
}
var _c4 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c5 = (a1) => ({
  value: "visible",
  params: a1
});
function Image_div_3_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵlistener("@animation.start", function Image_div_3_div_19_Template_div_animation_animation_start_0_listener($event) {
      ɵɵrestoreView(_r28);
      const ctx_r27 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r27.onAnimationStart($event));
    })("@animation.done", function Image_div_3_div_19_Template_div_animation_animation_done_0_listener($event) {
      ɵɵrestoreView(_r28);
      const ctx_r29 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r29.onAnimationEnd($event));
    });
    ɵɵelementStart(1, "img", 17);
    ɵɵlistener("click", function Image_div_3_div_19_Template_img_click_1_listener() {
      ɵɵrestoreView(_r28);
      const ctx_r30 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r30.onPreviewImageClick());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r21 = ɵɵnextContext(2);
    ɵɵproperty("@animation", ɵɵpureFunction1(8, _c5, ɵɵpureFunction2(5, _c4, ctx_r21.showTransitionOptions, ctx_r21.hideTransitionOptions)));
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r21.imagePreviewStyle());
    ɵɵattribute("src", ctx_r21.previewImageSrc ? ctx_r21.previewImageSrc : ctx_r21.src, ɵɵsanitizeUrl)("srcset", ctx_r21.previewImageSrcSet)("sizes", ctx_r21.previewImageSizes);
  }
}
function Image_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10, 11);
    ɵɵlistener("click", function Image_div_3_Template_div_click_0_listener() {
      ɵɵrestoreView(_r32);
      const ctx_r31 = ɵɵnextContext();
      return ɵɵresetView(ctx_r31.onMaskClick());
    })("keydown", function Image_div_3_Template_div_keydown_0_listener($event) {
      ɵɵrestoreView(_r32);
      const ctx_r33 = ɵɵnextContext();
      return ɵɵresetView(ctx_r33.onMaskKeydown($event));
    });
    ɵɵelementStart(2, "div", 12);
    ɵɵlistener("click", function Image_div_3_Template_div_click_2_listener($event) {
      ɵɵrestoreView(_r32);
      const ctx_r34 = ɵɵnextContext();
      return ɵɵresetView(ctx_r34.handleToolbarClick($event));
    });
    ɵɵelementStart(3, "button", 13);
    ɵɵlistener("click", function Image_div_3_Template_button_click_3_listener() {
      ɵɵrestoreView(_r32);
      const ctx_r35 = ɵɵnextContext();
      return ɵɵresetView(ctx_r35.rotateRight());
    });
    ɵɵtemplate(4, Image_div_3_RefreshIcon_4_Template, 1, 0, "RefreshIcon", 14)(5, Image_div_3_5_Template, 1, 0, null, 8);
    ɵɵelementEnd();
    ɵɵelementStart(6, "button", 13);
    ɵɵlistener("click", function Image_div_3_Template_button_click_6_listener() {
      ɵɵrestoreView(_r32);
      const ctx_r36 = ɵɵnextContext();
      return ɵɵresetView(ctx_r36.rotateLeft());
    });
    ɵɵtemplate(7, Image_div_3_UndoIcon_7_Template, 1, 0, "UndoIcon", 14)(8, Image_div_3_8_Template, 1, 0, null, 8);
    ɵɵelementEnd();
    ɵɵelementStart(9, "button", 15);
    ɵɵlistener("click", function Image_div_3_Template_button_click_9_listener() {
      ɵɵrestoreView(_r32);
      const ctx_r37 = ɵɵnextContext();
      return ɵɵresetView(ctx_r37.zoomOut());
    });
    ɵɵtemplate(10, Image_div_3_SearchMinusIcon_10_Template, 1, 0, "SearchMinusIcon", 14)(11, Image_div_3_11_Template, 1, 0, null, 8);
    ɵɵelementEnd();
    ɵɵelementStart(12, "button", 15);
    ɵɵlistener("click", function Image_div_3_Template_button_click_12_listener() {
      ɵɵrestoreView(_r32);
      const ctx_r38 = ɵɵnextContext();
      return ɵɵresetView(ctx_r38.zoomIn());
    });
    ɵɵtemplate(13, Image_div_3_SearchPlusIcon_13_Template, 1, 0, "SearchPlusIcon", 14)(14, Image_div_3_14_Template, 1, 0, null, 8);
    ɵɵelementEnd();
    ɵɵelementStart(15, "button", 13, 16);
    ɵɵlistener("click", function Image_div_3_Template_button_click_15_listener() {
      ɵɵrestoreView(_r32);
      const ctx_r39 = ɵɵnextContext();
      return ɵɵresetView(ctx_r39.closePreview());
    });
    ɵɵtemplate(17, Image_div_3_TimesIcon_17_Template, 1, 0, "TimesIcon", 14)(18, Image_div_3_18_Template, 1, 0, null, 8);
    ɵɵelementEnd()();
    ɵɵtemplate(19, Image_div_3_div_19_Template, 2, 10, "div", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("aria-modal", ctx_r1.maskVisible);
    ɵɵadvance(3);
    ɵɵattribute("aria-label", ctx_r1.rightAriaLabel());
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.rotateRightIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.rotateRightIconTemplate);
    ɵɵadvance();
    ɵɵattribute("aria-label", ctx_r1.leftAriaLabel());
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.rotateLeftIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.rotateLeftIconTemplate);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.isZoomOutDisabled);
    ɵɵattribute("aria-label", ctx_r1.zoomOutAriaLabel());
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.zoomOutIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.zoomOutIconTemplate);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.isZoomInDisabled);
    ɵɵattribute("aria-label", ctx_r1.zoomInAriaLabel());
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.zoomInIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.zoomInIconTemplate);
    ɵɵadvance();
    ɵɵattribute("aria-label", ctx_r1.closeAriaLabel());
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.closeIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.closeIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.previewVisible);
  }
}
var Image = class _Image {
  document;
  config;
  cd;
  el;
  /**
   * Style class of the image element.
   * @group Props
   */
  imageClass;
  /**
   * Inline style of the image element.
   * @group Props
   */
  imageStyle;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * The source path for the main image.
   * @group Props
   */
  src;
  /**
   * The srcset definition for the main image.
   * @group Props
   */
  srcSet;
  /**
   * The sizes definition for the main image.
   * @group Props
   */
  sizes;
  /**
   * The source path for the preview image.
   * @group Props
   */
  previewImageSrc;
  /**
   * The srcset definition for the preview image.
   * @group Props
   */
  previewImageSrcSet;
  /**
   * The sizes definition for the preview image.
   * @group Props
   */
  previewImageSizes;
  /**
   * Attribute of the preview image element.
   * @group Props
   */
  alt;
  /**
   * Attribute of the image element.
   * @group Props
   */
  width;
  /**
   * Attribute of the image element.
   * @group Props
   */
  height;
  /**
   * Attribute of the image element.
   * @group Props
   */
  loading;
  /**
   * Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Controls the preview functionality.
   * @group Props
   */
  preview = false;
  /**
   * Transition options of the show animation
   * @group Props
   */
  showTransitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation
   * @group Props
   */
  hideTransitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Triggered when the preview overlay is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Triggered when the preview overlay is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * This event is triggered if an error occurs while loading an image file.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onImageError = new EventEmitter();
  mask;
  previewButton;
  closeButton;
  templates;
  indicatorTemplate;
  rotateRightIconTemplate;
  rotateLeftIconTemplate;
  zoomOutIconTemplate;
  zoomInIconTemplate;
  closeIconTemplate;
  maskVisible = false;
  previewVisible = false;
  rotate = 0;
  scale = 1;
  previewClick = false;
  container;
  wrapper;
  get isZoomOutDisabled() {
    return this.scale - this.zoomSettings.step <= this.zoomSettings.min;
  }
  get isZoomInDisabled() {
    return this.scale + this.zoomSettings.step >= this.zoomSettings.max;
  }
  zoomSettings = {
    default: 1,
    step: 0.1,
    max: 1.5,
    min: 0.5
  };
  constructor(document, config, cd, el) {
    this.document = document;
    this.config = config;
    this.cd = cd;
    this.el = el;
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "indicator":
          this.indicatorTemplate = item.template;
          break;
        case "rotaterighticon":
          this.rotateRightIconTemplate = item.template;
          break;
        case "rotatelefticon":
          this.rotateLeftIconTemplate = item.template;
          break;
        case "zoomouticon":
          this.zoomOutIconTemplate = item.template;
          break;
        case "zoominicon":
          this.zoomInIconTemplate = item.template;
          break;
        case "closeicon":
          this.closeIconTemplate = item.template;
          break;
        default:
          this.indicatorTemplate = item.template;
          break;
      }
    });
  }
  onImageClick() {
    if (this.preview) {
      this.maskVisible = true;
      this.previewVisible = true;
      DomHandler.blockBodyScroll();
    }
  }
  onMaskClick() {
    if (!this.previewClick) {
      this.closePreview();
    }
    this.previewClick = false;
  }
  onMaskKeydown(event) {
    switch (event.code) {
      case "Escape":
        this.onMaskClick();
        setTimeout(() => {
          DomHandler.focus(this.previewButton.nativeElement);
        }, 25);
        event.preventDefault();
        break;
      default:
        break;
    }
  }
  onPreviewImageClick() {
    this.previewClick = true;
  }
  rotateRight() {
    this.rotate += 90;
    this.previewClick = true;
  }
  rotateLeft() {
    this.rotate -= 90;
    this.previewClick = true;
  }
  zoomIn() {
    this.scale = this.scale + this.zoomSettings.step;
    this.previewClick = true;
  }
  zoomOut() {
    this.scale = this.scale - this.zoomSettings.step;
    this.previewClick = true;
  }
  onAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.container = event.element;
        this.wrapper = this.container?.parentElement;
        this.appendContainer();
        this.moveOnTop();
        setTimeout(() => {
          DomHandler.focus(this.closeButton.nativeElement);
        }, 25);
        break;
      case "void":
        DomHandler.addClass(this.wrapper, "p-component-overlay-leave");
        break;
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        zindexutils.clear(this.wrapper);
        this.maskVisible = false;
        this.container = null;
        this.wrapper = null;
        this.cd.markForCheck();
        this.onHide.emit({});
        break;
      case "visible":
        this.onShow.emit({});
        break;
    }
  }
  moveOnTop() {
    zindexutils.set("modal", this.wrapper, this.config.zIndex.modal);
  }
  appendContainer() {
    if (this.appendTo) {
      if (this.appendTo === "body")
        this.document.body.appendChild(this.wrapper);
      else
        DomHandler.appendChild(this.wrapper, this.appendTo);
    }
  }
  imagePreviewStyle() {
    return {
      transform: "rotate(" + this.rotate + "deg) scale(" + this.scale + ")"
    };
  }
  get zoomImageAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.zoomImage : void 0;
  }
  containerClass() {
    return {
      "p-image p-component": true,
      "p-image-preview-container": this.preview
    };
  }
  handleToolbarClick(event) {
    event.stopPropagation();
  }
  closePreview() {
    this.previewVisible = false;
    this.rotate = 0;
    this.scale = this.zoomSettings.default;
    DomHandler.unblockBodyScroll();
  }
  imageError(event) {
    this.onImageError.emit(event);
  }
  rightAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.rotateRight : void 0;
  }
  leftAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.rotateLeft : void 0;
  }
  zoomInAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.zoomIn : void 0;
  }
  zoomOutAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.zoomOut : void 0;
  }
  closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
  onKeydownHandler(event) {
    if (this.previewVisible) {
      this.closePreview();
    }
  }
  static ɵfac = function Image_Factory(t) {
    return new (t || _Image)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Image,
    selectors: [["p-image"]],
    contentQueries: function Image_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Image_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
        ɵɵviewQuery(_c1, 5);
        ɵɵviewQuery(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.mask = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.previewButton = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.closeButton = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    hostBindings: function Image_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown.escape", function Image_keydown_escape_HostBindingHandler($event) {
          return ctx.onKeydownHandler($event);
        }, false, ɵɵresolveDocument);
      }
    },
    inputs: {
      imageClass: "imageClass",
      imageStyle: "imageStyle",
      styleClass: "styleClass",
      style: "style",
      src: "src",
      srcSet: "srcSet",
      sizes: "sizes",
      previewImageSrc: "previewImageSrc",
      previewImageSrcSet: "previewImageSrcSet",
      previewImageSizes: "previewImageSizes",
      alt: "alt",
      width: "width",
      height: "height",
      loading: "loading",
      appendTo: "appendTo",
      preview: "preview",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions"
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide",
      onImageError: "onImageError"
    },
    decls: 4,
    vars: 16,
    consts: [[3, "ngClass", "ngStyle"], [3, "ngStyle", "error"], ["type", "button", "class", "p-image-preview-indicator", "style", "border: 'none';", 3, "ngStyle", "click", 4, "ngIf"], ["class", "p-image-mask p-component-overlay p-component-overlay-enter", "role", "dialog", "pFocusTrap", "", 3, "click", "keydown", 4, "ngIf"], ["type", "button", 1, "p-image-preview-indicator", 2, "border", "'none'", 3, "ngStyle", "click"], ["previewButton", ""], [4, "ngIf", "ngIfElse"], ["defaultTemplate", ""], [4, "ngTemplateOutlet"], [3, "styleClass"], ["role", "dialog", "pFocusTrap", "", 1, "p-image-mask", "p-component-overlay", "p-component-overlay-enter", 3, "click", "keydown"], ["mask", ""], [1, "p-image-toolbar", 3, "click"], ["type", "button", 1, "p-image-action", "p-link", 3, "click"], [4, "ngIf"], ["type", "button", 1, "p-image-action", "p-link", 3, "disabled", "click"], ["closeButton", ""], [1, "p-image-preview", 3, "ngStyle", "click"]],
    template: function Image_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "span", 0)(1, "img", 1);
        ɵɵlistener("error", function Image_Template_img_error_1_listener($event) {
          return ctx.imageError($event);
        });
        ɵɵelementEnd();
        ɵɵtemplate(2, Image_button_2_Template, 5, 7, "button", 2)(3, Image_div_3_Template, 20, 19, "div", 3);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.style);
        ɵɵadvance();
        ɵɵclassMap(ctx.imageClass);
        ɵɵproperty("ngStyle", ctx.imageStyle);
        ɵɵattribute("src", ctx.src, ɵɵsanitizeUrl)("srcset", ctx.srcSet)("sizes", ctx.sizes)("alt", ctx.alt)("width", ctx.width)("height", ctx.height)("loading", ctx.loading);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.preview);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.maskVisible);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, RefreshIcon, EyeIcon, UndoIcon, SearchMinusIcon, SearchPlusIcon, TimesIcon, FocusTrap],
    styles: ["@layer primeng{.p-image-mask{display:flex;align-items:center;justify-content:center}.p-image-preview-container{position:relative;display:inline-block;line-height:0}.p-image-preview-indicator{position:absolute;left:0;top:0;width:100%;height:100%;outline:none;border:none;padding:0;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s}.p-image-preview-icon.pi{font-size:1.5rem}.p-image-preview-icon.p-icon{scale:1.5}.p-image-preview-container:hover>.p-image-preview-indicator{opacity:1;cursor:pointer}.p-image-preview-container>img{cursor:pointer}.p-image-toolbar{position:absolute;top:0;right:0;display:flex;z-index:1}.p-image-action.p-link{display:flex;justify-content:center;align-items:center}.p-image-action.p-link[disabled]{opacity:.5}.p-image-preview{transition:transform .15s;max-width:100vw;max-height:100vh}}\n"],
    encapsulation: 2,
    data: {
      animation: [trigger("animation", [transition("void => visible", [style({
        transform: "scale(0.7)",
        opacity: 0
      }), animate("{{showTransitionParams}}")]), transition("visible => void", [animate("{{hideTransitionParams}}", style({
        transform: "scale(0.7)",
        opacity: 0
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Image, [{
    type: Component,
    args: [{
      selector: "p-image",
      template: `
        <span [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style">
            <img [attr.src]="src" [attr.srcset]="srcSet" [attr.sizes]="sizes" [attr.alt]="alt" [attr.width]="width" [attr.height]="height" [attr.loading]="loading" [ngStyle]="imageStyle" [class]="imageClass" (error)="imageError($event)" />
            <button *ngIf="preview" [attr.aria-label]="zoomImageAriaLabel" type="button" class="p-image-preview-indicator" (click)="onImageClick()" #previewButton [ngStyle]="{ height: height + 'px', width: width + 'px' }" style="border: 'none';">
                <ng-container *ngIf="indicatorTemplate; else defaultTemplate">
                    <ng-container *ngTemplateOutlet="indicatorTemplate"></ng-container>
                </ng-container>
                <ng-template #defaultTemplate>
                    <EyeIcon [styleClass]="'p-image-preview-icon'" />
                </ng-template>
            </button>
            <div #mask class="p-image-mask p-component-overlay p-component-overlay-enter" *ngIf="maskVisible" [attr.aria-modal]="maskVisible" role="dialog" (click)="onMaskClick()" (keydown)="onMaskKeydown($event)" pFocusTrap>
                <div class="p-image-toolbar" (click)="handleToolbarClick($event)">
                    <button class="p-image-action p-link" (click)="rotateRight()" type="button" [attr.aria-label]="rightAriaLabel()">
                        <RefreshIcon *ngIf="!rotateRightIconTemplate" />
                        <ng-template *ngTemplateOutlet="rotateRightIconTemplate"></ng-template>
                    </button>
                    <button class="p-image-action p-link" (click)="rotateLeft()" type="button" [attr.aria-label]="leftAriaLabel()">
                        <UndoIcon *ngIf="!rotateLeftIconTemplate" />
                        <ng-template *ngTemplateOutlet="rotateLeftIconTemplate"></ng-template>
                    </button>
                    <button class="p-image-action p-link" (click)="zoomOut()" type="button" [disabled]="isZoomOutDisabled" [attr.aria-label]="zoomOutAriaLabel()">
                        <SearchMinusIcon *ngIf="!zoomOutIconTemplate" />
                        <ng-template *ngTemplateOutlet="zoomOutIconTemplate"></ng-template>
                    </button>
                    <button class="p-image-action p-link" (click)="zoomIn()" type="button" [disabled]="isZoomInDisabled" [attr.aria-label]="zoomInAriaLabel()">
                        <SearchPlusIcon *ngIf="!zoomInIconTemplate" />
                        <ng-template *ngTemplateOutlet="zoomInIconTemplate"></ng-template>
                    </button>
                    <button class="p-image-action p-link" type="button" (click)="closePreview()" [attr.aria-label]="closeAriaLabel()" #closeButton>
                        <TimesIcon *ngIf="!closeIconTemplate" />
                        <ng-template *ngTemplateOutlet="closeIconTemplate"></ng-template>
                    </button>
                </div>
                <div
                    *ngIf="previewVisible"
                    [@animation]="{ value: 'visible', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"
                    (@animation.start)="onAnimationStart($event)"
                    (@animation.done)="onAnimationEnd($event)"
                >
                    <img [attr.src]="previewImageSrc ? previewImageSrc : src" [attr.srcset]="previewImageSrcSet" [attr.sizes]="previewImageSizes" class="p-image-preview" [ngStyle]="imagePreviewStyle()" (click)="onPreviewImageClick()" />
                </div>
            </div>
        </span>
    `,
      animations: [trigger("animation", [transition("void => visible", [style({
        transform: "scale(0.7)",
        opacity: 0
      }), animate("{{showTransitionParams}}")]), transition("visible => void", [animate("{{hideTransitionParams}}", style({
        transform: "scale(0.7)",
        opacity: 0
      }))])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-image-mask{display:flex;align-items:center;justify-content:center}.p-image-preview-container{position:relative;display:inline-block;line-height:0}.p-image-preview-indicator{position:absolute;left:0;top:0;width:100%;height:100%;outline:none;border:none;padding:0;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s}.p-image-preview-icon.pi{font-size:1.5rem}.p-image-preview-icon.p-icon{scale:1.5}.p-image-preview-container:hover>.p-image-preview-indicator{opacity:1;cursor:pointer}.p-image-preview-container>img{cursor:pointer}.p-image-toolbar{position:absolute;top:0;right:0;display:flex;z-index:1}.p-image-action.p-link{display:flex;justify-content:center;align-items:center}.p-image-action.p-link[disabled]{opacity:.5}.p-image-preview{transition:transform .15s;max-width:100vw;max-height:100vh}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: PrimeNGConfig
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }], {
    imageClass: [{
      type: Input
    }],
    imageStyle: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    src: [{
      type: Input
    }],
    srcSet: [{
      type: Input
    }],
    sizes: [{
      type: Input
    }],
    previewImageSrc: [{
      type: Input
    }],
    previewImageSrcSet: [{
      type: Input
    }],
    previewImageSizes: [{
      type: Input
    }],
    alt: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    preview: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onImageError: [{
      type: Output
    }],
    mask: [{
      type: ViewChild,
      args: ["mask"]
    }],
    previewButton: [{
      type: ViewChild,
      args: ["previewButton"]
    }],
    closeButton: [{
      type: ViewChild,
      args: ["closeButton"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    onKeydownHandler: [{
      type: HostListener,
      args: ["document:keydown.escape", ["$event"]]
    }]
  });
})();
var ImageModule = class _ImageModule {
  static ɵfac = function ImageModule_Factory(t) {
    return new (t || _ImageModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ImageModule,
    declarations: [Image],
    imports: [CommonModule, SharedModule, RefreshIcon, EyeIcon, UndoIcon, SearchMinusIcon, SearchPlusIcon, TimesIcon, FocusTrapModule],
    exports: [Image, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, SharedModule, RefreshIcon, EyeIcon, UndoIcon, SearchMinusIcon, SearchPlusIcon, TimesIcon, FocusTrapModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule, RefreshIcon, EyeIcon, UndoIcon, SearchMinusIcon, SearchPlusIcon, TimesIcon, FocusTrapModule],
      exports: [Image, SharedModule],
      declarations: [Image]
    }]
  }], null, null);
})();
export {
  Image,
  ImageModule
};
//# sourceMappingURL=primeng_image.js.map
