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
                    <a href="index.html" data-type="index-link">studyroom documentation</a>
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
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AboutUsPageModule.html" data-type="entity-link" >AboutUsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AboutUsPageModule-771068f1fb8bc976b712ec82860be7cfb58024bebc365632648b9c5b877e3ba32048861d2e4219479d1cc85b5f0caa211247c9fc502073fb41e5ddc92250e174"' : 'data-target="#xs-components-links-module-AboutUsPageModule-771068f1fb8bc976b712ec82860be7cfb58024bebc365632648b9c5b877e3ba32048861d2e4219479d1cc85b5f0caa211247c9fc502073fb41e5ddc92250e174"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AboutUsPageModule-771068f1fb8bc976b712ec82860be7cfb58024bebc365632648b9c5b877e3ba32048861d2e4219479d1cc85b5f0caa211247c9fc502073fb41e5ddc92250e174"' :
                                            'id="xs-components-links-module-AboutUsPageModule-771068f1fb8bc976b712ec82860be7cfb58024bebc365632648b9c5b877e3ba32048861d2e4219479d1cc85b5f0caa211247c9fc502073fb41e5ddc92250e174"' }>
                                            <li class="link">
                                                <a href="components/AboutUsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutUsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AboutUsPageRoutingModule.html" data-type="entity-link" >AboutUsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-cb70ede3f980b1a8be91077e0f59a07d6f79e191e6d724958e303de965562611944652c37c869e03bfe15f3f11be0b19a5f496c9e2deb5a8c2d376bd56c26abb"' : 'data-target="#xs-components-links-module-AppModule-cb70ede3f980b1a8be91077e0f59a07d6f79e191e6d724958e303de965562611944652c37c869e03bfe15f3f11be0b19a5f496c9e2deb5a8c2d376bd56c26abb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-cb70ede3f980b1a8be91077e0f59a07d6f79e191e6d724958e303de965562611944652c37c869e03bfe15f3f11be0b19a5f496c9e2deb5a8c2d376bd56c26abb"' :
                                            'id="xs-components-links-module-AppModule-cb70ede3f980b1a8be91077e0f59a07d6f79e191e6d724958e303de965562611944652c37c869e03bfe15f3f11be0b19a5f496c9e2deb5a8c2d376bd56c26abb"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-cb70ede3f980b1a8be91077e0f59a07d6f79e191e6d724958e303de965562611944652c37c869e03bfe15f3f11be0b19a5f496c9e2deb5a8c2d376bd56c26abb"' : 'data-target="#xs-injectables-links-module-AppModule-cb70ede3f980b1a8be91077e0f59a07d6f79e191e6d724958e303de965562611944652c37c869e03bfe15f3f11be0b19a5f496c9e2deb5a8c2d376bd56c26abb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-cb70ede3f980b1a8be91077e0f59a07d6f79e191e6d724958e303de965562611944652c37c869e03bfe15f3f11be0b19a5f496c9e2deb5a8c2d376bd56c26abb"' :
                                        'id="xs-injectables-links-module-AppModule-cb70ede3f980b1a8be91077e0f59a07d6f79e191e6d724958e303de965562611944652c37c869e03bfe15f3f11be0b19a5f496c9e2deb5a8c2d376bd56c26abb"' }>
                                        <li class="link">
                                            <a href="injectables/ApiserviceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiserviceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-e819e6db301b025214c783bc1ad596d9a129a82d117ad0a10502a5727fde7f81883c6125e1570aa1d6749df75576e6d8d3f943e95b9b0f85e74348dfedde9dbf"' : 'data-target="#xs-components-links-module-HomePageModule-e819e6db301b025214c783bc1ad596d9a129a82d117ad0a10502a5727fde7f81883c6125e1570aa1d6749df75576e6d8d3f943e95b9b0f85e74348dfedde9dbf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-e819e6db301b025214c783bc1ad596d9a129a82d117ad0a10502a5727fde7f81883c6125e1570aa1d6749df75576e6d8d3f943e95b9b0f85e74348dfedde9dbf"' :
                                            'id="xs-components-links-module-HomePageModule-e819e6db301b025214c783bc1ad596d9a129a82d117ad0a10502a5727fde7f81883c6125e1570aa1d6749df75576e6d8d3f943e95b9b0f85e74348dfedde9dbf"' }>
                                            <li class="link">
                                                <a href="components/CreateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReadComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilePageModule.html" data-type="entity-link" >ProfilePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfilePageModule-b95716036bc23629a31e330f0f2d700aa090d3490670c1a4cff01afeaadccb4060266e94e44fffa8de5371525a0cb280945de223c93d30ff8144f820f7a76269"' : 'data-target="#xs-components-links-module-ProfilePageModule-b95716036bc23629a31e330f0f2d700aa090d3490670c1a4cff01afeaadccb4060266e94e44fffa8de5371525a0cb280945de223c93d30ff8144f820f7a76269"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfilePageModule-b95716036bc23629a31e330f0f2d700aa090d3490670c1a4cff01afeaadccb4060266e94e44fffa8de5371525a0cb280945de223c93d30ff8144f820f7a76269"' :
                                            'id="xs-components-links-module-ProfilePageModule-b95716036bc23629a31e330f0f2d700aa090d3490670c1a4cff01afeaadccb4060266e94e44fffa8de5371525a0cb280945de223c93d30ff8144f820f7a76269"' }>
                                            <li class="link">
                                                <a href="components/ProfilePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfilePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilePageRoutingModule.html" data-type="entity-link" >ProfilePageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
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
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});