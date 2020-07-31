import {LitElement, html} from 'https://unpkg.com/lit-element@2.2.1/lit-element.js?module';	

/** context-sensitive search form allowing you to search across multiple 'search_options' */	
export default class BULibHeader extends LitElement {	
  createRenderRoot(){ return this; }	
  render(){	
    return html`	
      <div class="header-wrapper">
        <nav>
          <a class="sr-only" href="#content">Skip to Main Content</a>
          <div class="primary-navbar">  
            <div class="primary-nav-left">  
              <a title="BU Libraries Homepage" href="https://www.bu.edu/library"> 
                <img id="bu-logo" src="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/icons/bulib-logo.png"> 
              </a>  
            </div>  
            <div class="primary-nav-main menu-items-wrapper"> 
              <ul class="menu-items">
                <li class="menu-item">
                  <a class="inline no-wrap" href="https://www.bu.edu/library/services">Find &amp; Borrow</a>
                  <div class="submenu">
                    <ul id="find-and-borrow" class="submenu-items flexnw">
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span>FIND</span>
                          <li><a href="https://www.bu.edu/library/search">Search</a></li>
                          <li><a href="https://library.bu.edu/az.php">Databases A-Z</a></li>
                          <li><a href="https://www.bu.edu/library/services/reserves/">Course Materials</a></li>
                          <li><a href="https://buprimo.hosted.exlibrisgroup.com/primo-explore/search?vid=journals&lang=en_US">eJournals</a></li>
                          <li><a href="http://bu.on.worldcat.org/">WorldCat Discovery</a></li>
                        </ul>
                      </li>
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span>COLLECTIONS</span>
                          <li><a href="https://open.bu.edu/">OpenBU</a></li>
                          <li><a href="https://open.bu.edu/handle/2144/8520">Theses &amp; Dissertations</a></li>
                          <li><a href="http://archives.bu.edu/">Archives</a></li>
                          <li><a href="http://www.bu.edu/library/mugar-memorial/research/krasker-filmvideo/">Krasker Film / Video</a></li>
                        </ul>
                      </li>
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span>BORROWING</span>
                          <li><a href="https://www.bu.edu/library/services/borrowing/">Borrowing</a></li>
                          <li><a href="https://www.bu.edu/library/services/circulation/">Circulation</a></li>
                          <li><a href="https://www.bu.edu/library/services/ill/">Inter-Library Borrowing</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="menu-item">
                  <a href="https://www.bu.edu/library/research">Research &amp; Learning</a>
                  <div class="submenu">
                    <ul id="research-and-learning" class="submenu-items flexnw">
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span>SUPPORT</span>
                          <li><a href="https://askalibrarian.bu.edu/">Ask a Librarian</a></li>
                          <li><a href="https://www.bu.edu/library/services/reference/appointments/">Make an Appointment</a></li>
                          <li><a href="https://www.bu.edu/library/services/reference/writing-centers/">Writing Center</a></li>
                          <li><a href="https://www.bu.edu/library/services/for-faculty/">For Faculty</a></li>
                          <li><a href="https://www.bu.edu/library/services/alumni/">For Alumni</a></li>
                          <li><a href="https://www.bu.edu/library/services/for-graduate-students/">For Graduate Students</a></li>
                        </ul>
                      </li>
                      <li>
                        <ul class="no-bullet"  tabindex="0">
                          <span>GUIDES</span>
                          <li><a href="https://library.bu.edu/guides/">Research Guides</a></li>
                          <li><a href="https://www.bu.edu/library/research/guides/course-guides/">Course Guides</a></li>
                          <li><a href="https://www.bu.edu/library/help/how-to/">How-To Guides</a></li>
                          <li><a href="https://www-staging.bu.edu/library/help/using-the-libraries-online/">Using the Libraries Online</a></li>
                          <li><a href="https://library.bu.edu/create_bibliographies">Creating Bibliographies</a></li>
                        </ul>
                      </li>
                      <!-- <li>
                        <ul class="no-bullet" tabindex="0">
                          <span>FOR FACULTY</span>
                          <li><a>Scanning &amp; Delivery</a></li>
                          <li><a>Course Reserves</a></li>
                          <li><a>Place Item on Reserve</a></li>
                          <li><a>Remote Teaching &amp; Learning</a></li>
                          <li><a>All Faculty Services</a></li>
                        </ul>
                      </li> -->
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span>SERVICES</span>
                          <li><a href="https://www.bu.edu/library/services/scanning-delivery-services/">Scanning &amp; Delivery</a></li>
                          <li><a href="https://www.bu.edu/library/services/reserves/">Course Reserves</a></li>
                          <li><a href="https://www.bu.edu/disc/">Digital Scholarship</a></li>
                          <li><a href="https://www.bu.edu/data/">Data Services</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>  
                <li class="menu-item">
                  <a href="https://www.bu.edu/library/about">About Us</a>
                  <div class="submenu">
                    <ul id="about-us" class="submenu-items flexnw">
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span>SPACES</span>
                          <li><a href="https://www.bu.edu/library/about/hours/">Library &amp; Service Hours</a></li>
                          <li><a>Visiting the Libraries</a></li>
                          <li><a href="https://www.bu.edu/library/about/study-spaces/">Study Rooms &amp; Spaces</a></li>
                          <li><a href="https://www.bu.edu/library/about/maps-floorplans/">Maps &amp; Floorplans</a></li>
                          <li><a href="https://www.bu.edu/library/services/computers-and-printing/">Computers, Printing, Scanning</a></li>
                        </ul>
                      </li>
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span>INFO</span>
                          <li><a href="https://www.bu.edu/library/about/news/">News</a></li>
                          <li><a href="https://www.bu.edu/library/about/who-we-are/staff-directory/">Staff Directory A-Z</a></li>
                          <li><a href="https://www.bu.edu/library/about">About BU Libraries</a></li>
                          <li><a>Events Calendar</a></li>
                          <li><a href="https://www.bu.edu/library/about/code-of-conduct/">Code of Conduct</a></li>
                        </ul> 
                      </li> 
                    </ul>
                  </div>
                </li>
                <li class="menu-item">
                  <a href="https://www.bu.edu/library/about">Locations</a>
                  <div class="submenu">
                    <ul id="locations" class="submenu-items flexnw"  tabindex="0">
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span><a href="https://www.bu.edu/library/about">ALL LOCATIONS</a></span>
                          <li><a href="https://www.bu.edu/library/african-studies/">African Studies Library</a></li>  
                          <li><a href="https://www.bu.edu/library/astronomy/">Astronomy Library</a></li>    
                          <li><a href="http://archives.bu.edu/">Howard Gotlieb Archival Research Center</a></li>  
                          <li><a href="https://www.bu.edu/library/mugar-memorial/">Mugar Memorial Library</a></li>  
                          <li><a href="https://www.bu.edu/library/music/">Music Library</a></li> 
                          <li><a href="https://www.bu.edu/library/management/">Pardee Management Library</a></li> 
                          <li><a href="https://www.bu.edu/library/pickering-educational/">Pickering Educational Resources Library</a></li>  
                          <li><a href="https://www.bu.edu/library/sel/">Science &amp; Engineering Library</a></li>  
                          <li><a href="https://www.bu.edu/library/stone-science/">Stone Science Library</a></li>  
                        </ul>
                      </li>
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span><a href="https://www.bu.edu/library/about/additional-libraries/">ADDITIONAL LIBRARIES</a></span>
                          <li><a href="https://www.bu.edu/anthrop/about/library/">Anthropology Department Library</a></li>  
                          <li><a href="https://www.bu.edu/cfa/current-students/music-resources/music-curriculum-library/">CFA Music Curriculum Library</a></li>  
                          <li><a href="https://www.bu.edu/geddes/">Geddes Language Center</a></li>  
                          <li><a href="https://www.bu.edu/library/african-studies/">Law Library</a></li>  
                          <li><a href="https://www.bu.edu/library/astronomy/">Medical Library</a></li>
                          <li><a href="https://www.bu.edu/africa/outreach/outreach-library/">Teaching Africa Library</a></li>  
                          <li><a href="https://www.bu.edu/cfa/creative-research/learn/libraries/library/">Visual Arts Resource Library</a></li>  
                          <li><a href="https://www.bu.edu/ah/vrc/" target="_blank" rel="noopener">Visual Resources Center</a></li>  
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li> 
              </ul>
            </div>  
            <div class="primary-nav-right"> 
              <div class="mobile-navigation none" aria-hidden="true"> 
                <div id="menuToggle"> 
                  <!-- invisible toggle with hamburger -->  
                  <input type="checkbox" tabindex="-1">
                  <span></span>
                  <span></span>
                  <span></span>

                  <!-- mobile nav menu -->  
                  <ul id="mobile-menu"> 
                    <li id="subsite-research"><a href="https://www.bu.edu/library/services">Find &amp; Borrow</a></li>  
                    <li id="subsite-services"><a href="https://www.bu.edu/library/research">Research &amp; Learning</a></li>  
                    <li id="subsite-about"><a href="https://www.bu.edu/library/">About Us</a></li>  
                    <li><a href="https://www.bu.edu/library/about">Library Locations</a></li> 
                    <li><hr></li> 
                    <li><a href="https://www.bu.edu/library/account">My Account</a></li>  
                    <li><a href="https://askalibrarian.bu.edu/">Ask a Librarian</a></li> 
                  </ul> 
                </div>  
              </div>  
              <div class="top-right"> 
                <ul class="menu-items">	
                  <li>	
                    <a class="menu-item inline" href="https://askalibrarian.bu.edu/">	
                      <span class="prm">Ask a Librarian</span><i class="material-icons inline">question_answer</i>	
                    </a>	
                  </li>	
                  <li>	
                    <a class="menu-item inline" href="https://www.bu.edu/library/account">	
                      <span class="prm">My Account</span><i class="material-icons inline">person</i>	
                    </a>	
                  </li>	
                </ul>
              </div>  
            </div>  
          </div>
          <script id="mobile-nav-clickout" type="text/javascript">
            let input = document.querySelector("#menuToggle > input");
            window.addEventListener("click", (event) => {
              let clicked = event.target;
              let clicked_within_mobile_menu = clicked.closest("#menuToggle") != null;
              if(input && clicked != input && !clicked_within_mobile_menu || clicked.tagName == "A"){
                input.checked = false; // uncheck the #menuToggle input, closing the mobile nav
              }
            });
          </script>
        </nav>
      </div>
    `	
  }	
}	

window.customElements.define("bulib-header", BULibHeader);
