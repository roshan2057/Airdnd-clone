import React, { useState } from 'react';
import './investing.css'
import UsData from './Tables/us';
import FranceData from './Tables/France';
import UkData from './Tables/Uk';
import GlossaryData from './Tables/Glossary';
import CanadaData from './Tables/Canada';
import AustraliaData from './Tables/Australia';

const Investing = () => {
  const [selectedTab, setSelectedTab] = useState("U.S"); // Set the default tab to "U.S."

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  }
  return (
    <>
      <div id="__next">
        <div Style="background-repeat:no-repeat;background-position:bottom left;background-color:#fff;background-size:auto">

          <main Style="margin:0 auto;padding-top:89px;padding-bottom:0px;padding-right:1rem;padding-left:1rem">
            <section class="styles__Section-sc-1qnnxet-0 jyRlbT">
              <div class="styles__Container-sc-1qnnxet-1 gelGjh">
                <div class="styles__Content-sc-1qnnxet-2 deBqXw">
                  <h2>The Best Places to Invest in Vacation Rentals</h2>
                  <p>Investing in short-term rentals <em>can</em> be extremely lucrative—as long as you’re in
                    the right location. Here you’ll find rankings, resources, tools, and reports to help
                    pinpoint your next STR opportunity.</p>
                  <p></p>
                  <p>Welcome to your new home base for short-term rental investment research.</p>
                </div>
                <div class="styles__Image-sc-1qnnxet-3 lfOcKh">
                  <div class="wrapper"><img
                    alt='' src="https://airdna-next.cdn.prismic.io/airdna-next/8c8fe5d3-e415-4a20-9004-496b6c9f2938_EnterpriseIcon.svg" />
                  </div>
                </div>
              </div>
            </section>
            <section class="styles__Section-wc167f-0 leLDgK">
              <div class="styles__Container-wc167f-1 hLMfyZ"><span class="Eyebrow__StyledEyebrow-d4yf5r-0 inWTDb">
                <h5>RANKINGS</h5>
              </span><span class="HeaderMed__StyledHeader-sc-6f9fmt-0 dcZdCx">
                  <h3>The Best Cities for Airbnb Investment</h3>
                </span><span class="Copy__StyledCopy-sc-1ulwzkm-0 bbNpxh">
                  <p><em>Select your country to get started</em></p>
                </span></div>
            </section>

            <section class="styles__Section-sc-132rwps-0 yDSZP">
              <div class="styles__Container-sc-132rwps-1 cHrCAZ">
                <div class="styles__SelectSearchStyles-sc-1ag43g7-0 bybgzK">
                  <div class="select-search">
                    <div class="select-search__value"><input tabindex="0" readonly=""
                      placeholder="Select Location" autocomplete="on" value=""
                      class="select-search__input" /></div>
                  </div>
                </div>
                <div class="react-tabs" data-tabs="true">
                  <ul class="react-tabs__tab-list" role="tablist">
                  <li
            class={`react-tabs__tab ${selectedTab === "U.S." ? "react-tabs__tab--selected" : ""}`}
            role="tab"
            aria-selected={selectedTab === "U.S"}
            aria-controls="react-tabs-1"
            tabindex="0"
            onClick={() => handleTabClick("U.S")}
          >
            <span>U.S.</span>
          </li>
          <li
            class={`react-tabs__tab ${selectedTab === "United Kingdom" ? "react-tabs__tab--selected" : ""}`}
            role="tab"
            aria-selected={selectedTab === "United Kingdom"}
            aria-controls="react-tabs-3"
            onClick={() => handleTabClick("United Kingdom")}
          >
            <span>United Kingdom</span>
          </li>
          <li
            class={`react-tabs__tab ${selectedTab === "France" ? "react-tabs__tab--selected" : ""}`}
            role="tab"
            aria-selected={selectedTab === "France"}
            aria-controls="react-tabs-5"
            onClick={() => handleTabClick("France")}
          >
            <span>France</span>
          </li>
      
          
                   
          <li
            class={`react-tabs__tab ${selectedTab === "Canada" ? "react-tabs__tab--selected" : ""}`}
            role="tab"
            aria-selected={selectedTab === "Canada"}
            aria-controls="react-tabs-7"
            onClick={() => handleTabClick("Canada")}
          >
            <span>Canada</span>
          </li>
          <li
            class={`react-tabs__tab ${selectedTab === "Australia" ? "react-tabs__tab--selected" : ""}`}
            role="tab"
            aria-selected={selectedTab === "Australia"}
            aria-controls="react-tabs-9"
            onClick={() => handleTabClick("Australia")}
          >
            <span>Australia</span>
          </li>
          <li
            class={`react-tabs__tab ${selectedTab === "Glossary" ? "react-tabs__tab--selected" : ""}`}
            role="tab"
            aria-selected={selectedTab === "Glossary"}
            aria-controls="react-tabs-11"
            onClick={() => handleTabClick("Glossary")}
          >
            <span>Glossary</span>
          </li>
                  </ul>
                </div>

                {/* Render the corresponding component based on the selected tab */}
                {selectedTab === "U.S" && <UsData />}
                {/* Render other components based on the selected tab */}
                {selectedTab === "United Kingdom" && <UkData />}
                {selectedTab === "France" && <FranceData />}
                {selectedTab === "Canada" && <CanadaData />}
      {selectedTab === "Australia" && <AustraliaData />}
      {selectedTab === "Glossary" && <GlossaryData />}

              </div>
            </section>
            <div class="styles__Container-sc-132rwps-1 cHrCAZ">
              <div class="styles__SelectSearchStyles-sc-1ag43g7-0 bybgzK">
                <div class="select-search">
                  <div class="select-search__value"><input tabindex="0" readonly=""
                    placeholder="Select Location" autoComplete="on" value=""
                    class="select-search__input" /></div>
                </div>
              </div>
              <div class="react-tabs" data-tabs="true">
                <ul class="react-tabs__tab-list" role="tablist"></ul>
              </div>
            </div>
            <section class="styles__Section-cv4lk0-0 dgLEhm">
              <div class="styles__Container-cv4lk0-1 ceHZqU">
                <div class="styles__Content-cv4lk0-2 DjFem"><span
                  class="Eyebrow__StyledEyebrow-d4yf5r-0 inWTDb">
                  <h5>Rentalizer Revenue Calculator</h5>
                </span><span class="HeaderMed__StyledHeader-sc-6f9fmt-0 dcZdCx">
                    <h3>See what any address could earn as a short-term rental. </h3>
                  </span><span class="Copy__StyledCopy-sc-1ulwzkm-0 bbNpxh">
                    <p>Finding the best places to buy a vacation home is one thing, but what about the best
                      <em>properties? </em>Use Rentalizer, AirDNA&#x27;s Airbnb calculator, to see the
                      projected revenue of any address in the world.
                    </p>
                    <p>No more guesswork or friend-of-a-friend advice. Welcome to a new way to find the best
                      vacation rentals. </p>
                  </span></div>
                <div height="600" class="styles__Content-cv4lk0-2 hFAyOP">

                  {/*design a calculator */}
                  <div class="styles__Wrapper-y2d6bu-0 ixBYmk">
                    <form><span class="CalculatorHeader__StyledHeader-sc-9oj21a-0 jsbiUx">
                      <h1>Free Rental Property Calculator</h1>
                    </span>




                      <div class="styles__GooglePlacesWrapper-y2d6bu-7 VPgKS">

                        <div class=" css-d13mdd-container">
                          <span aria-live="polite" aria-atomic="false" aria-relevant="additions text"
                            class="css-7pg0cj-a11yText"></span>


                          <div class=" css-yk16xz-control">

                            <div class=" css-1hwfws3">

                              <input type="text" class='css-1v5d9q6-placeholder'
                                placeholder="Enter street address" />
                              <div class="css-lewi22">
                                <div class="" Style="display:inline-block"><input type="text"
                                  autoCapitalize="none" autoComplete="off"
                                  autoCorrect="off" id="react-select-92-input"
                                  spellcheck="false" tabindex="0" value=""
                                  aria-autocomplete="list"
                                  Style="box-sizing:content-box;width:1px;label:input;background:0;border:0;font-size:inherit;opacity:1;outline:0;padding:0;color:inherit" />
                                  <div
                                    Style="position:absolute;top:0;left:0;visibility:hidden;height:0;overflow:scroll;white-space:pre">
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class=" css-1wy0on6">
                              <style data-emotion="css 1okebmr-indicatorSeparator">

                              </style><span class=" css-1okebmr-indicatorSeparator"></span>
                              <style data-emotion="css tpaeio-indicatorContainer">

                              </style>
                              <div class=" css-tpaeio-indicatorContainer" aria-hidden="true">
                                <style data-emotion="css 8mmkcg">

                                </style><svg height="20" width="20" viewBox="0 0 20 20"
                                  aria-hidden="true" focusable="false" class="css-8mmkcg">
                                  <path
                                    d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
                                  </path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="styles__ErrorContainer-y2d6bu-8 bIFmJI"></div>
                      </div>




                      <div class="styles__InputRowWrapper-y2d6bu-2 gQUncm">
                        <div class="styles__Icon-y2d6bu-3 hUvjQP"><svg
                          xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 48 48"
                          fill="white">
                          <title>Bedrooms</title>
                          <g id="ic_bedrooms" stroke="none" stroke-width="1" fill="none"
                            fill-rule="evenodd">
                            <g id="Group-32" transform="translate(1.996043, 2.000000)"
                              fill="#FFFFFF" fill-rule="nonzero">
                              <path
                                d="M0.00362065817,17.1064409 C-0.0474964514,16.504343 0.447110491,15.8653172 1.20444952,16.0203047 L1.20444952,16.0203047 L43.2044495,24.6154981 C43.7259805,24.722228 44.01049,25.1686385 44.004318,25.6150395 L44.0039574,41 C44.0039574,42.5976809 42.7550374,43.9036609 41.1802301,43.9949073 L41.0039574,44 L3.00395736,44 C1.40627648,44 0.10029648,42.75108 0.00905005256,41.1762728 L0.00395735914,41 Z M2.003,18.601 L2.00395736,41 C2.00395736,41.5128358 2.38999755,41.9355072 2.88733623,41.9932723 L3.00395736,42 L41.0039574,42 C41.5167932,42 41.9394645,41.6139598 41.9972296,41.1166211 L42.0039574,41 L42.003,27.31 L32.1850597,32.8701907 C31.9339687,33.0123622 31.6356721,33.0382198 31.3665429,32.9454497 L31.2532103,32.8984215 L2.003,18.601 Z M8.51295736,19.557 L31.6569574,30.869 L40.1899574,26.039 L8.51295736,19.557 Z M41.0039574,0 C42.6016382,0 43.9076182,1.24891996 43.9988647,2.82372721 L44.0039574,3 L44.0039574,21 C44.0039574,21.5522847 43.5562421,22 43.0039574,22 C42.4911215,22 42.0684502,21.6139598 42.0106851,21.1166211 L42.0039574,21 L42.0039574,3 C42.0039574,2.48716416 41.6179172,2.06449284 41.1205785,2.00672773 L41.0039574,2 L3.00395736,2 C2.49112152,2 2.0684502,2.38604019 2.01068509,2.88337887 L2.00395736,3 L2.00395736,12.2036978 C2.00395736,12.7559826 1.55624211,13.2036978 1.00395736,13.2036978 C0.49112152,13.2036978 0.0684501985,12.8176576 0.0106850905,12.320319 L0.00395735914,12.2036978 L0.00395735914,3 C0.00395735914,1.40231912 1.25287732,0.0963391206 2.82768457,0.00509269341 L3.00395736,0 L41.0039574,0 Z M19.0039574,4 C20.1085269,4 21.0039574,4.8954305 21.0039574,6 L21.0039574,6 L21.0039574,11 C21.0039574,12.1045695 20.1085269,13 19.0039574,13 L19.0039574,13 L7.00395736,13 C5.89938786,13 5.00395736,12.1045695 5.00395736,11 L5.00395736,11 L5.00395736,6 C5.00395736,4.8954305 5.89938786,4 7.00395736,4 L7.00395736,4 Z M37.0039574,4 C38.1085269,4 39.0039574,4.8954305 39.0039574,6 L39.0039574,6 L39.0039574,11 C39.0039574,12.1045695 38.1085269,13 37.0039574,13 L37.0039574,13 L25.0039574,13 C23.8993879,13 23.0039574,12.1045695 23.0039574,11 L23.0039574,11 L23.0039574,6 C23.0039574,4.8954305 23.8993879,4 25.0039574,4 L25.0039574,4 Z M19.0039574,6 L7.00395736,6 L7.00395736,11 L19.0039574,11 L19.0039574,6 Z M37.0039574,6 L25.0039574,6 L25.0039574,11 L37.0039574,11 L37.0039574,6 Z"
                                id="Combined-Shape"></path>
                            </g>
                          </g>
                        </svg></div>
                        <div class="styles__Label-y2d6bu-4 eKFdPN">Bedrooms</div>
                        <div id="bedrooms" class="styles__Value-y2d6bu-5 duRbyx">2</div>
                        <div class="styles__ArrowsWrapper-y2d6bu-9 hTjDDL">
                          <div class="styles__ArrowWrapper-y2d6bu-10 bVtdac"><svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z">
                            </path>
                          </svg></div>
                          <div class="styles__ArrowWrapper-y2d6bu-10 bVtdac"><svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z">
                            </path>
                          </svg></div>
                        </div>
                      </div>
                      <hr Style="color:lightgrey;background-color:lightgrey;height:1px;width:90%" />
                      <div class="styles__InputRowWrapper-y2d6bu-2 gQUncm">
                        <div class="styles__Icon-y2d6bu-3 hUvjQP"><svg
                          xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 48 48"
                          fill="white">
                          <title>Bathrooms</title>
                          <g id="ic_bathrooms" stroke="none" stroke-width="1" fill="none"
                            fill-rule="evenodd">
                            <g id="Group-31" transform="translate(3.000000, 3.000000)"
                              fill="#FFFFFF" fill-rule="nonzero">
                              <path
                                d="M40,26 C40.1073887,26 40.2108238,26.0169275 40.3077825,26.0482598 L42,26.05 C42.5522847,26.05 43,26.4977153 43,27.05 C43,27.5628358 42.6139598,27.9855072 42.1166211,28.0432723 L42,28.05 L40.9766246,28.0497969 C40.7616663,32.8191199 39.0695263,36.6555407 36.1227484,38.880668 L37.8320503,41.4452998 C38.1384028,41.9048285 38.0142289,42.5256978 37.5547002,42.8320503 C37.127995,43.1165204 36.5621746,43.0297714 36.2382373,42.648003 L36.1679497,42.5547002 L34.4123078,39.9209579 C33.0307053,40.5824804 31.4474623,40.956253 29.677632,40.9963887 L29.3575772,41 L12.6422923,41 C10.4143523,41 8.47337447,40.4800608 6.84829715,39.5283748 L6.83205029,39.5547002 L4.83205029,42.5547002 C4.52569784,43.0142289 3.90482849,43.1384028 3.4452998,42.8320503 C3.01859459,42.5475802 2.88104736,41.9919194 3.10885776,41.5460663 L3.16794971,41.4452998 L5.16794971,38.4452998 L5.23670134,38.3540982 C2.68532189,36.0757186 1.22209496,32.4615891 1.02334475,28.0490751 L0,28.05 C-0.55228475,28.05 -1,27.6022847 -1,27.05 C-1,26.5371642 -0.61395981,26.1144928 -0.116621125,26.0567277 L0,26.05 L1.69221749,26.0482598 C1.78917623,26.0169275 1.8926113,26 2,26 C2.1073887,26 2.21082377,26.0169275 2.30778251,26.0482598 L39.6922175,26.0482598 C39.7891762,26.0169275 39.8926113,26 40,26 Z M38.9748677,28.0497221 L3.02513318,28.0496913 C3.3437868,34.5985067 6.68045184,38.8538419 12.3469123,38.9963082 L12.6422923,39 L29.3575772,39 C35.2036249,39 38.6507268,34.7117078 38.9748677,28.0497221 Z M9.5,-1 C12.7307921,-1 15.4527427,1.21797532 15.9269071,4.12663305 L15.774218,4.17208706 C17.7338688,3.51851093 19.9264242,4.779842 20.8520318,6.87397839 C21.2831061,6.85010446 21.6959011,7.1115018 21.846474,7.54000252 C22.0164905,8.02383616 21.7924068,8.55058524 21.3423444,8.76996244 L21.2345489,8.8149722 L12.3315223,11.9434474 C11.8104707,12.1265421 11.2396473,11.8525739 11.0565526,11.3315223 C10.920667,10.9448185 11.0365325,10.5307003 11.318313,10.2680106 L11.357116,10.3692346 C10.4946674,8.19851477 11.232216,5.81989201 13.1618304,5.04934019 L13.3462117,4.98186753 L13.9902202,4.7671789 C13.8365517,2.69145428 11.8909435,1 9.5,1 C7.08269897,1 5.11861897,2.73274273 5.00517594,4.83946065 L5,5.03197289 L5,23 C5,23.5522847 4.55228475,24 4,24 C3.48716416,24 3.06449284,23.6139598 3.00672773,23.1166211 L3,23 L3,5.03197289 C3,1.69335473 5.94243016,-1 9.5,-1 Z M16.5334826,6.03422894 L16.4069865,6.0693493 L13.9789802,6.87912977 C13.1390634,7.15925597 12.7390285,8.30798258 13.1763049,9.52632764 L18.9367141,7.50255566 C18.3932336,6.44985582 17.3576247,5.84965901 16.5334826,6.03422894 Z"
                                id="Combined-Shape"></path>
                            </g>
                          </g>
                        </svg></div>
                        <div class="styles__Label-y2d6bu-4 eKFdPN">Bathrooms</div>
                        <div id="bathrooms" class="styles__Value-y2d6bu-5 duRbyx">2</div>
                        <div class="styles__ArrowsWrapper-y2d6bu-9 hTjDDL">
                          <div class="styles__ArrowWrapper-y2d6bu-10 bVtdac"><svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z">
                            </path>
                          </svg></div>
                          <div class="styles__ArrowWrapper-y2d6bu-10 bVtdac"><svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z">
                            </path>
                          </svg></div>
                        </div>
                      </div>
                      <hr Style="color:lightgrey;background-color:lightgrey;height:1px;width:90%" />
                      <div class="styles__InputRowWrapper-y2d6bu-2 gQUncm">
                        <div class="styles__Icon-y2d6bu-3 hUvjQP"><svg
                          xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 48 48"
                          fill="white">
                          <title>Guests</title>
                          <g id="ic_guests" stroke="none" stroke-width="1" fill="none"
                            fill-rule="evenodd">
                            <g id="Group-30" transform="translate(2.249700, 2.250000)">
                              <g id="Group" transform="translate(21.750300, 1.750000)"></g>
                              <path
                                d="M22.5988697,13.6664702 C23.8730188,10.1352466 39.2978913,10.1377632 40.7974819,13.518404 C40.8467766,13.5778024 40.8872723,13.6464453 40.9163737,13.7219301 L40.9465465,13.8193658 L41.958,18.094 L42.2546596,19.2813816 L42.2726352,19.3817858 C42.2742499,19.3964745 42.2754221,19.4111351 42.276161,19.4257523 L43.353641,23.9833196 C43.8153237,25.2057402 43.1354273,26.6836147 41.9590765,27.2169209 C40.6135196,27.8269379 39.2512551,27.0466087 38.4462934,25.1029909 L38.3622062,24.8903051 L37.7553003,23.066 L37.8403299,32.2640569 L37.9424717,40.8162591 C37.9616976,42.6216765 36.3537654,43.7210584 34.4055228,43.7210584 C33.272716,43.7210584 32.2525008,43.3496361 31.5979466,42.6838446 C30.9850574,43.3379238 30.0336173,43.7074246 28.9762421,43.7074246 C27.145742,43.7074246 25.640258,42.5993246 25.6593604,40.8205195 L25.6593604,40.8205195 L25.6593171,32.1200679 L25.7449347,22.988 L25.1368956,24.8029008 L25.049639,25.0214141 C24.373117,26.6361991 23.3067564,27.4384918 22.1885097,27.2981766 C21.2702467,27.3450117 20.4291248,26.7931772 19.753946,25.8754354 L19.753946,25.8754354 L17.512097,22.83 L19.854157,32.5209347 L19.8716774,32.6239823 C19.9091112,33.0004579 19.6565408,33.3542375 19.2749807,33.4320306 L19.2749807,33.4320306 L17.520097,33.789 L17.6977406,40.5832092 L17.6947002,40.7709734 C17.6194107,42.4385858 16.2623232,43.4994521 14.6123751,43.5 C13.688697,43.5003065 12.8570281,43.1687213 12.2862792,42.5834583 C11.7131413,43.1692876 10.8734409,43.5003034 9.94152138,43.5 C8.28624063,43.4994607 6.92115413,42.4523762 6.84553201,40.7974276 L6.84248676,40.6110653 L7.02030029,33.917 L5.25521209,33.5647644 C4.87121787,33.4879541 4.61704216,33.131783 4.65606232,32.7534548 L4.67409625,32.6499183 L7.03030029,23.085 L4.7622257,26.108659 C3.95568214,27.1842474 2.91664552,27.7484065 1.79450314,27.4181951 L1.62557716,27.3619078 C0.381750658,26.899695 -0.277686374,25.5532909 0.111496339,24.314183 L0.165639321,24.1599251 L0.228473354,24.0344677 L5.60230029,15.423 L5.63949181,15.3415033 C7.24730096,12.1382701 17.9383226,12.2375744 19.2221122,15.5416662 L19.23,15.566 L21.321,18.976 L22.5534837,13.8179829 Z M39.3982495,14.0414143 C38.5759715,11.9819665 24.5395568,11.9651132 24.0122464,14.167284 L24.0122464,14.167284 L22.428,20.782 L24.027,23.391 L25.8269416,18.0214874 L25.8674128,17.9215508 C26.2001564,17.2302932 27.2956489,17.449731 27.2880584,18.2667132 L27.2880584,18.2667132 L27.1592848,32.1270357 L27.1593171,40.8285732 L27.1641223,40.9572915 C27.2298244,41.715088 27.9526037,42.2074483 28.9762074,42.2074246 C30.0590679,42.2073995 30.8150585,41.6549997 30.8144649,40.8291123 L30.8144649,40.8291123 L30.8053439,28.5885129 L30.8121147,28.4867373 C30.8615043,28.1206248 31.1750892,27.8382372 31.5547848,27.8379542 C31.9689983,27.8376456 32.3050348,28.1731817 32.3053435,28.5873952 L32.3053435,28.5873952 L32.3152973,40.6070412 C32.3266254,40.6445408 32.335096,40.6832797 32.3404563,40.7230043 L32.3472301,40.8247797 C32.3466452,41.6462628 33.1929524,42.2210323 34.4055551,42.2210584 C35.5553459,42.2210832 36.3667863,41.7055704 36.4376,40.9538219 L36.4425677,40.8332023 L36.3404152,32.2799233 L36.2116415,18.3026576 C36.2041053,17.4846633 37.3016613,17.2663028 37.6330875,17.959131 L37.6733576,18.0592847 L39.7756139,24.3889391 C40.2818723,25.7298891 40.8470795,26.0741011 41.3397186,25.85076 C41.7839028,25.6493862 42.0786868,25.0632026 41.9577198,24.5407961 L41.9223029,24.4215771 L40.555,18.665 L39.4276122,14.1426583 Z M7.02148192,15.9303252 L6.89982977,16.1789197 L1.54730029,24.752 L1.52948791,24.8100717 C1.41942314,25.2405256 1.63130764,25.7008439 2.04175901,25.9092856 L2.14843727,25.9559856 C2.54741376,26.1044812 2.99408762,25.9026634 3.44855496,25.3531623 L3.56231106,25.2085452 L8.03873909,19.2434247 C8.50851806,18.6174148 9.47704741,19.0411804 9.38498873,19.7755219 L9.36683824,19.8730061 L6.31830029,32.247 L7.93452614,32.5709927 C8.25667398,32.6354319 8.49495925,32.900192 8.53230568,33.2185141 L8.53715172,33.326404 L8.34216227,40.6403973 C8.33182836,41.4690726 8.99365089,41.999691 9.94200992,41.9999999 C10.7557467,42.0002649 11.3629106,41.6097149 11.5248104,40.9605697 C11.5078792,40.8339442 11.500097,40.704215 11.500097,40.5709033 L11.500097,40.5709033 L11.500097,33.8382779 L11.5069436,33.7365073 C11.556606,33.3704318 11.8704012,33.0882779 12.250097,33.0882779 C12.552822,33.0882779 12.8136567,33.2676319 12.9321366,33.5258757 C12.999162,33.6210371 13.0443739,33.7327852 13.0607757,33.853687 L13.0676223,33.9554576 L13.0676223,40.5995561 C13.0676223,40.7216591 13.0609523,40.8407044 13.047969,40.956534 C13.2137908,41.6110882 13.8135586,42.0002649 14.6118771,41.9999999 C15.5502563,41.9996884 16.2084504,41.4618174 16.1980529,40.6119874 L16.1980529,40.6119874 L16.0041917,33.2001992 L16.0090528,33.0926527 C16.0463012,32.775319 16.2832493,32.5111315 16.6041065,32.4457146 L16.6041065,32.4457146 L18.214097,32.117 L15.178688,19.5625986 L15.160933,19.46481 C15.0720349,18.7284543 16.0464879,18.3099154 16.511654,18.9417146 L16.511654,18.9417146 L20.149,23.882 L20.828,21.041 L17.7830874,16.0753441 L17.7357308,15.9850032 C17.7168572,15.9421839 17.7023003,15.8982974 17.6919272,15.8538978 C16.3448477,14.0347497 8.09900768,14.0377805 7.02148192,15.9303252 Z M21.934,22.845 L21.5770678,24.3371541 L21.5419482,24.4544877 C21.4220251,24.9686401 21.7147785,25.5456806 22.157828,25.7448594 C22.1845473,25.7568714 22.2114729,25.7672403 22.2385842,25.7758999 L22.2558411,25.7728524 L22.2558411,25.7728524 L22.3541655,25.7432421 L22.4602541,25.6957936 C22.868666,25.4835319 23.082146,25.0097315 22.9703568,24.5650786 L22.9703568,24.5650786 L22.953097,24.507 L21.934,22.845 Z M12.7779361,2 C15.3861712,2 17.5003003,4.12012926 17.5003003,6.7340077 C17.5003003,8.45674524 16.5736415,10.0178337 15.1161988,10.8474136 C14.3960906,11.2722527 13.5748817,11.5 12.7226645,11.5 C10.1143129,11.5 8.00030029,9.37963395 8.00030029,6.76587206 C8.00030029,5.0432548 8.92625052,3.48260203 10.3827151,2.65371612 C11.1029311,2.22807984 11.9245897,2 12.7779361,2 Z M12.7779361,3.5 C12.1951082,3.5 11.6366731,3.65501302 11.1353003,3.95120059 C10.1325385,4.52195954 9.50030029,5.58757221 9.50030029,6.76587206 C9.50030029,8.55221281 10.9437493,10 12.7226645,10 C13.3046717,10 13.8630337,9.84514848 14.3640588,9.54966534 C15.3674345,8.97847023 16.0003003,7.9123178 16.0003003,6.7340077 C16.0003003,4.94760622 14.556791,3.5 12.7779361,3.5 Z M31.7776376,0 C34.3862282,0 36.5003003,2.1200529 36.5003003,4.73406758 C36.5003003,6.45681617 35.5736216,8.01830119 34.1165123,8.8471173 C33.396506,9.2723236 32.5755059,9.5 31.7226033,9.5 C29.1140224,9.5 27.0003003,7.38007717 27.0003003,4.76593242 C27.0003003,3.0435163 27.9261766,1.48267852 29.3824768,0.653536501 C30.1022696,0.228016423 30.9244564,0 31.7776376,0 Z M31.7776376,1.5 C31.1948823,1.5 30.6360153,1.65499014 30.135269,1.95090119 C29.1325669,2.52186653 28.5003003,3.58773844 28.5003003,4.76593242 C28.5003003,6.55263206 29.9434347,8 31.7226033,8 C32.3051968,8 32.8631155,7.84528028 33.3642787,7.5494284 C34.367463,6.97873051 35.0003003,5.91237811 35.0003003,4.73406758 C35.0003003,2.94753291 33.5568509,1.5 31.7776376,1.5 Z"
                                id="Combined-Shape" fill="#FFFFFF" fill-rule="nonzero">
                              </path>
                            </g>
                          </g>
                        </svg></div>
                        <div class="styles__Label-y2d6bu-4 eKFdPN">Accommodates</div>
                        <div id="accomodates" class="styles__Value-y2d6bu-5 duRbyx">2</div>
                        <div class="styles__ArrowsWrapper-y2d6bu-9 hTjDDL">
                          <div class="styles__ArrowWrapper-y2d6bu-10 bVtdac"><svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z">
                            </path>
                          </svg></div>
                          <div class="styles__ArrowWrapper-y2d6bu-10 bVtdac"><svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z">
                            </path>
                          </svg></div>
                        </div>
                      </div>
                      <div class="styles__ButtonWrapper-y2d6bu-11 yyNqm"><a href='/'
                        class="styles__SubmitButton-y2d6bu-12 iYFWPV"><span>Analyze Your
                          Property</span></a></div>
                    </form>
                  </div>



                </div>
              </div>
            </section>
            <section class="styles__Section-sc-6gnjlt-0 lmbDiQ"></section>
            <section class="styles__Section-kmkcah-0 kEQCIH">
              <div class="styles__Container-kmkcah-1 eiFfns"><span class="Eyebrow__StyledEyebrow-d4yf5r-0 inWTDb">
                <h5>Full Report</h5>
              </span><span class="HeaderMed__StyledHeader-sc-6f9fmt-0 dcZdCx">
                  <h3>Full Report on the Best Places to Invest</h3>
                </span><span class="Copy__StyledCopy-sc-1ulwzkm-0 bbNpxh">
                  <p>Not seeing your market above? Get access to AirDNA’s full Best Places to Invest report.
                    The BPTI report provides users a full list of the top investment markets anywhere in the
                    world. Powered by AirDNA data, this report condenses hours of research into one
                    downloadable file and includes over 20 sortable metrics including # of listings,
                    occupancy rate, seasonality, rental demand, and more.</p>
                </span></div>
            </section>
            <section class="styles__Section-sc-1o8ou5d-0 CXrjA"></section>
            <section class="styles__Section-sc-6gnjlt-0 fCddX"></section>
            <section class="styles__Section-sc-1o8ou5d-0 CXrjA"></section>
            <section class="styles__Section-sc-1c2o8x9-0 ATFkT">
              <div class="styles__Container-sc-1c2o8x9-1 gVnGiO">
                <p class=" block-img"><img
                  alt='' src="https://airdna-next.cdn.prismic.io/airdna-next/e20e142f-2201-4192-9d0d-6d740ab13215_Icon-Large-Best-Places-to-Invest-02.svg"
                /></p>
              </div>
            </section>
            <section class="styles__Section-sc-1qnnxet-0 djtvBT">
              <div class="styles__Container-sc-1qnnxet-1 gelGjh">
                <div class="styles__Content-sc-1qnnxet-2 gviwxc">
                  <h2><strong>Explore AirDNA.</strong> The #1 platform for finding the world’s best vacation
                    rental markets.</h2>
                  <div class="styles__CTALinkWrapper-sc-1qnnxet-4 gCQsKI"><a
                    href="https://www.airdna.co/vacation-rental-data/app/"
                    class="CTALink__CTAButton-u2ktjo-0 cCQDvR"><span>Get short-term rental
                      data</span><svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                        viewBox="0 0 20 20" fill="currentColor" width="20px" height="20px">
                      <title>Right Arrow</title>
                      <path
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z">
                      </path>
                    </svg></a></div>
                </div>
                <div class="styles__Image-sc-1qnnxet-3 lfOcKh">
                  <div class="wrapper"><img
                    alt='' src="https://images.prismic.io/airdna-next/f6ec1338-9f61-4a78-b544-ab5db20375f5_smartRatesEploded.png?auto=compress,format" />
                  </div>
                </div>
              </div>
            </section>
          </main>

        </div>
      </div >

    </>
  )
}

export default Investing