import {
  TransferState,
  makeStateKey
} from "./chunk-CQ2GFKE7.js";
import {
  CommonModule,
  NgClass,
  NgStyle,
  isPlatformBrowser
} from "./chunk-M6U7XAXO.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Observable,
  Output,
  PLATFORM_ID,
  Self,
  Subject,
  ViewChild,
  animationFrameScheduler,
  defer,
  filter,
  from,
  map,
  observeOn,
  of,
  setClassMetadata,
  shareReplay,
  switchMap,
  takeUntil,
  tap,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵstyleProp,
  ɵɵviewQuery
} from "./chunk-MECWBRNS.js";
import "./chunk-LHRTKJE6.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WKYGNSYM.js";

// node_modules/ngx-lottie/fesm2020/ngx-lottie.mjs
var _c0 = ["container"];
var LOTTIE_OPTIONS = new InjectionToken("LottieOptions");
function convertPlayerOrLoaderToObservable(player, useWebWorker) {
  const playerOrLoader = player();
  const player$ = playerOrLoader instanceof Promise ? from(playerOrLoader).pipe(map((module) => module.default || module)) : of(playerOrLoader);
  return player$.pipe(tap((player2) => player2.useWebWorker(useWebWorker)), shareReplay({
    bufferSize: 1,
    refCount: true
  }));
}
var AnimationLoader = class {
  constructor(ngZone, options) {
    this.ngZone = ngZone;
    this.options = options;
    this.player$ = convertPlayerOrLoaderToObservable(this.options.player, this.options.useWebWorker).pipe(observeOn(animationFrameScheduler));
  }
  loadAnimation(options) {
    return this.player$.pipe(map((player) => this.createAnimationItem(player, options)));
  }
  resolveOptions(options, container) {
    return Object.assign({
      container,
      renderer: "svg",
      loop: true,
      autoplay: true
    }, options);
  }
  createAnimationItem(player, options) {
    return this.ngZone.runOutsideAngular(() => player.loadAnimation(options));
  }
};
AnimationLoader.ɵfac = function AnimationLoader_Factory(t) {
  return new (t || AnimationLoader)(ɵɵinject(NgZone), ɵɵinject(LOTTIE_OPTIONS));
};
AnimationLoader.ɵprov = ɵɵdefineInjectable({
  token: AnimationLoader,
  factory: AnimationLoader.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [LOTTIE_OPTIONS]
      }]
    }];
  }, null);
})();
var BaseDirective = class {
  constructor(ngZone, platformId, animationLoader) {
    this.ngZone = ngZone;
    this.platformId = platformId;
    this.animationLoader = animationLoader;
    this.options = null;
    this.containerClass = null;
    this.styles = null;
    this.animationCreated = this.getAnimationItem();
    this.complete = this.awaitAnimationItemAndStartListening("complete");
    this.loopComplete = this.awaitAnimationItemAndStartListening("loopComplete");
    this.enterFrame = this.awaitAnimationItemAndStartListening("enterFrame");
    this.segmentStart = this.awaitAnimationItemAndStartListening("segmentStart");
    this.configReady = this.awaitAnimationItemAndStartListening("config_ready");
    this.dataReady = this.awaitAnimationItemAndStartListening("data_ready");
    this.domLoaded = this.awaitAnimationItemAndStartListening("DOMLoaded");
    this.destroy = this.awaitAnimationItemAndStartListening("destroy");
    this.error = this.awaitAnimationItemAndStartListening("error");
    this.destroy$ = new Subject();
    this.loadAnimation$ = new Subject();
    this.animationItem$ = new BehaviorSubject(null);
    this.setupLoadAnimationListener();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroyAnimation();
  }
  loadAnimation(changes, container) {
    this.ngZone.runOutsideAngular(() => this.loadAnimation$.next([changes, container]));
  }
  getAnimationItem() {
    return defer(() => this.animationItem$).pipe(filter((animationItem) => animationItem !== null));
  }
  awaitAnimationItemAndStartListening(name) {
    return this.getAnimationItem().pipe(switchMap((animationItem) => (
      // `fromEvent` will try to call `removeEventListener` when `unsubscribe()` is invoked.
      // The problem is that `ngOnDestroy()` is called before Angular unsubscribes from
      // `@Output()` properties, thus `animationItem` will be `null` already, also `lottie-web`
      // removes event listeners when calling `destroy()`.
      new Observable((observer) => {
        this.ngZone.runOutsideAngular(() => {
          animationItem.addEventListener(name, (event) => {
            this.ngZone.runOutsideAngular(() => {
              observer.next(event);
            });
          });
        });
      })
    )));
  }
  setupLoadAnimationListener() {
    const loadAnimation$ = this.loadAnimation$.pipe(filter(([changes]) => isPlatformBrowser(this.platformId) && changes.options !== void 0));
    loadAnimation$.pipe(switchMap(([changes, container]) => {
      this.destroyAnimation();
      return this.animationLoader.loadAnimation(this.animationLoader.resolveOptions(changes.options.currentValue, container));
    }), takeUntil(this.destroy$)).subscribe((animationItem) => {
      this.ngZone.run(() => this.animationItem$.next(animationItem));
    });
  }
  destroyAnimation() {
    const animationItem = this.animationItem$.getValue();
    if (animationItem === null) {
      return;
    }
    animationItem.destroy();
    this.animationItem$.next(null);
  }
};
BaseDirective.ɵfac = function BaseDirective_Factory(t) {
  return new (t || BaseDirective)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(AnimationLoader));
};
BaseDirective.ɵdir = ɵɵdefineDirective({
  type: BaseDirective,
  selectors: [["", "lottie", ""]],
  inputs: {
    options: "options",
    containerClass: "containerClass",
    styles: "styles"
  },
  outputs: {
    animationCreated: "animationCreated",
    complete: "complete",
    loopComplete: "loopComplete",
    enterFrame: "enterFrame",
    segmentStart: "segmentStart",
    configReady: "configReady",
    dataReady: "dataReady",
    domLoaded: "domLoaded",
    destroy: "destroy",
    error: "error"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseDirective, [{
    type: Directive,
    args: [{
      selector: "[lottie]"
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: AnimationLoader
    }];
  }, {
    options: [{
      type: Input
    }],
    containerClass: [{
      type: Input
    }],
    styles: [{
      type: Input
    }],
    animationCreated: [{
      type: Output
    }],
    complete: [{
      type: Output
    }],
    loopComplete: [{
      type: Output
    }],
    enterFrame: [{
      type: Output
    }],
    segmentStart: [{
      type: Output
    }],
    configReady: [{
      type: Output
    }],
    dataReady: [{
      type: Output
    }],
    domLoaded: [{
      type: Output
    }],
    destroy: [{
      type: Output
    }],
    error: [{
      type: Output
    }]
  });
})();
var LottieDirective = class extends BaseDirective {
  constructor(ngZone, platformId, host, animationLoader) {
    super(ngZone, platformId, animationLoader);
    this.host = host;
  }
  ngOnChanges(changes) {
    super.loadAnimation(changes, this.host.nativeElement);
  }
};
LottieDirective.ɵfac = function LottieDirective_Factory(t) {
  return new (t || LottieDirective)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef, 2), ɵɵdirectiveInject(AnimationLoader));
};
LottieDirective.ɵdir = ɵɵdefineDirective({
  type: LottieDirective,
  selectors: [["", "lottie", ""]],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LottieDirective, [{
    type: Directive,
    args: [{
      selector: "[lottie]",
      standalone: true
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Self
      }]
    }, {
      type: AnimationLoader
    }];
  }, null);
})();
var LottieComponent = class extends BaseDirective {
  constructor(ngZone, platformId, animationLoader) {
    super(ngZone, platformId, animationLoader);
    this.width = null;
    this.height = null;
    this.container = null;
  }
  ngOnChanges(changes) {
    super.loadAnimation(changes, this.container.nativeElement);
  }
};
LottieComponent.ɵfac = function LottieComponent_Factory(t) {
  return new (t || LottieComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(AnimationLoader));
};
LottieComponent.ɵcmp = ɵɵdefineComponent({
  type: LottieComponent,
  selectors: [["ng-lottie"]],
  viewQuery: function LottieComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
    }
  },
  inputs: {
    width: "width",
    height: "height"
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 6,
  consts: [[3, "ngStyle", "ngClass"], ["container", ""]],
  template: function LottieComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", 0, 1);
    }
    if (rf & 2) {
      ɵɵstyleProp("width", ctx.width || "100%")("height", ctx.height || "100%");
      ɵɵproperty("ngStyle", ctx.styles)("ngClass", ctx.containerClass);
    }
  },
  dependencies: [CommonModule, NgClass, NgStyle],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LottieComponent, [{
    type: Component,
    args: [{
      selector: "ng-lottie",
      template: `
    <div
      #container
      [style.width]="width || '100%'"
      [style.height]="height || '100%'"
      [ngStyle]="styles"
      [ngClass]="containerClass"
    ></div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [CommonModule]
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: AnimationLoader
    }];
  }, {
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    container: [{
      type: ViewChild,
      args: ["container", {
        static: true
      }]
    }]
  });
})();
var LottieModule = class _LottieModule {
  static forRoot(options) {
    return {
      ngModule: _LottieModule,
      providers: [{
        provide: LOTTIE_OPTIONS,
        useValue: options
      }]
    };
  }
};
LottieModule.ɵfac = function LottieModule_Factory(t) {
  return new (t || LottieModule)();
};
LottieModule.ɵmod = ɵɵdefineNgModule({
  type: LottieModule,
  imports: [LottieDirective, LottieComponent],
  exports: [LottieDirective, LottieComponent]
});
LottieModule.ɵinj = ɵɵdefineInjector({
  imports: [LottieComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LottieModule, [{
    type: NgModule,
    args: [{
      imports: [LottieDirective, LottieComponent],
      exports: [LottieDirective, LottieComponent]
    }]
  }], null, null);
})();
var CacheableAnimationLoader = class extends AnimationLoader {
  constructor() {
    super(...arguments);
    this.cache = /* @__PURE__ */ new Map();
  }
  ngOnDestroy() {
    this.cache.clear();
  }
  loadAnimation(options) {
    return this.player$.pipe(map((player) => {
      const animationItem = this.createAnimationItem(player, this.transformOptions(options));
      this.awaitConfigAndCache(options, animationItem);
      return animationItem;
    }));
  }
  awaitConfigAndCache(options, animationItem) {
    if (this.isAnimationConfigWithPath(options)) {
      if (this.cache.has(options.path)) {
        return;
      }
      animationItem.addEventListener("config_ready", () => {
        this.cache.set(options.path, JSON.stringify(animationItem["animationData"]));
      });
    }
  }
  transformOptions(options) {
    if (this.isAnimationConfigWithPath(options) && this.cache.has(options.path)) {
      return __spreadProps(__spreadValues({}, options), {
        path: void 0,
        // Caretaker note: `lottie-web` cannot re-use the `animationData` object between animations, and we
        // have to retrieve a new object each time an animation is created.
        // https://github.com/airbnb/lottie-web#html
        // See comments for the `animationData` property.
        animationData: JSON.parse(this.cache.get(options.path))
      });
    } else {
      return options;
    }
  }
  isAnimationConfigWithPath(options) {
    return typeof options.path === "string";
  }
};
CacheableAnimationLoader.ɵfac = /* @__PURE__ */ (() => {
  let ɵCacheableAnimationLoader_BaseFactory;
  return function CacheableAnimationLoader_Factory(t) {
    return (ɵCacheableAnimationLoader_BaseFactory || (ɵCacheableAnimationLoader_BaseFactory = ɵɵgetInheritedFactory(CacheableAnimationLoader)))(t || CacheableAnimationLoader);
  };
})();
CacheableAnimationLoader.ɵprov = ɵɵdefineInjectable({
  token: CacheableAnimationLoader,
  factory: CacheableAnimationLoader.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CacheableAnimationLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var LottieCacheModule = class _LottieCacheModule {
  static forRoot() {
    return {
      ngModule: _LottieCacheModule,
      providers: [{
        provide: AnimationLoader,
        useExisting: CacheableAnimationLoader
      }]
    };
  }
};
LottieCacheModule.ɵfac = function LottieCacheModule_Factory(t) {
  return new (t || LottieCacheModule)();
};
LottieCacheModule.ɵmod = ɵɵdefineNgModule({
  type: LottieCacheModule
});
LottieCacheModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LottieCacheModule, [{
    type: NgModule
  }], null, null);
})();
function provideCacheableAnimationLoader() {
  return [{
    provide: AnimationLoader,
    useExisting: CacheableAnimationLoader
  }];
}
function provideLottieOptions(options) {
  return [{
    provide: LOTTIE_OPTIONS,
    useValue: options
  }];
}
function transformAnimationFilenameToKey(animation) {
  const [animationName] = animation.split(".json");
  return `animation-${animationName}`;
}
var LottieTransferState = class {
  constructor(transferState) {
    this.transferState = transferState;
  }
  get(animation) {
    const animationKey = transformAnimationFilenameToKey(animation);
    const stateKey = makeStateKey(animationKey);
    return this.transferState.get(stateKey, null);
  }
};
LottieTransferState.ɵfac = function LottieTransferState_Factory(t) {
  return new (t || LottieTransferState)(ɵɵinject(TransferState));
};
LottieTransferState.ɵprov = ɵɵdefineInjectable({
  token: LottieTransferState,
  factory: LottieTransferState.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LottieTransferState, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: TransferState
    }];
  }, null);
})();
export {
  AnimationLoader,
  BaseDirective,
  LottieCacheModule,
  LottieComponent,
  LottieDirective,
  LottieModule,
  LottieTransferState,
  provideCacheableAnimationLoader,
  provideLottieOptions,
  transformAnimationFilenameToKey,
  CacheableAnimationLoader as ɵCacheableAnimationLoader,
  LOTTIE_OPTIONS as ɵLOTTIE_OPTIONS
};
//# sourceMappingURL=ngx-lottie.js.map
