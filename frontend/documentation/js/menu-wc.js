'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">peakvisor documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AboutComponent.html" data-type="entity-link" >AboutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ButtonComponent.html" data-type="entity-link" >ButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ButtongroupComponent.html" data-type="entity-link" >ButtongroupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CanvasComponent.html" data-type="entity-link" >CanvasComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CardComponent.html" data-type="entity-link" >CardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DeletesectionComponent.html" data-type="entity-link" >DeletesectionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/Error404Page.html" data-type="entity-link" >Error404Page</a>
                            </li>
                            <li class="link">
                                <a href="components/EventspageComponent.html" data-type="entity-link" >EventspageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FooterComponent.html" data-type="entity-link" >FooterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GoogleMapComponent.html" data-type="entity-link" >GoogleMapComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GridsectionComponent.html" data-type="entity-link" >GridsectionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GridsectionComponent-1.html" data-type="entity-link" >GridsectionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GridsectionComponent-2.html" data-type="entity-link" >GridsectionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent.html" data-type="entity-link" >HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeroComponent.html" data-type="entity-link" >HeroComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomePage.html" data-type="entity-link" >HomePage</a>
                            </li>
                            <li class="link">
                                <a href="components/IconButtonComponent.html" data-type="entity-link" >IconButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InformationsectionComponent.html" data-type="entity-link" >InformationsectionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoaderComponent.html" data-type="entity-link" >LoaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginPage.html" data-type="entity-link" >LoginPage</a>
                            </li>
                            <li class="link">
                                <a href="components/MenubuttonComponent.html" data-type="entity-link" >MenubuttonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OnboardingcontentdisplayComponent.html" data-type="entity-link" >OnboardingcontentdisplayComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OnboardingPage.html" data-type="entity-link" >OnboardingPage</a>
                            </li>
                            <li class="link">
                                <a href="components/PageWrapperComponent.html" data-type="entity-link" >PageWrapperComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PasswordchangesectionComponent.html" data-type="entity-link" >PasswordchangesectionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PhotoBackgroundComponent.html" data-type="entity-link" >PhotoBackgroundComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PhotoCardComponent.html" data-type="entity-link" >PhotoCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PhotoCardComponent-1.html" data-type="entity-link" >PhotoCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PhotoCardComponent-2.html" data-type="entity-link" >PhotoCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PhotoDivComponent.html" data-type="entity-link" >PhotoDivComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfilepageComponent.html" data-type="entity-link" >ProfilepageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfilestatsComponent.html" data-type="entity-link" >ProfilestatsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ResetpassworddialogComponent.html" data-type="entity-link" >ResetpassworddialogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SettingsInputComponent.html" data-type="entity-link" >SettingsInputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SettingsPage.html" data-type="entity-link" >SettingsPage</a>
                            </li>
                            <li class="link">
                                <a href="components/SidebarComponent.html" data-type="entity-link" >SidebarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SignupPage.html" data-type="entity-link" >SignupPage</a>
                            </li>
                            <li class="link">
                                <a href="components/StatsboardComponent.html" data-type="entity-link" >StatsboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StatsBoardComponent.html" data-type="entity-link" >StatsBoardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StatsCardComponent.html" data-type="entity-link" >StatsCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SvgComponent.html" data-type="entity-link" >SvgComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TextInputComponent.html" data-type="entity-link" >TextInputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ToastComponent.html" data-type="entity-link" >ToastComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TrailinformationComponent.html" data-type="entity-link" >TrailinformationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TrailsComponent.html" data-type="entity-link" >TrailsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TrailsPage.html" data-type="entity-link" >TrailsPage</a>
                            </li>
                            <li class="link">
                                <a href="components/VideoBackground.html" data-type="entity-link" >VideoBackground</a>
                            </li>
                            <li class="link">
                                <a href="components/VideoComponent.html" data-type="entity-link" >VideoComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GraphicsLoaderService.html" data-type="entity-link" >GraphicsLoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MeetupService.html" data-type="entity-link" >MeetupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StravaAuthService.html" data-type="entity-link" >StravaAuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToastService.html" data-type="entity-link" >ToastService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TripAdvisorService.html" data-type="entity-link" >TripAdvisorService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link" >AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthState.html" data-type="entity-link" >AuthState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ButtonOptions.html" data-type="entity-link" >ButtonOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DisplayState.html" data-type="entity-link" >DisplayState</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});