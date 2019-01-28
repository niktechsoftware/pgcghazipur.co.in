/* Font */
$(document).ready(function () {
    $('title').text(':: Dr. A.P.J. Abdul Kalam Technical University, Uttar Pradesh, Lucknow ::');
    $('<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" /><meta name="viewport" content="width=device-width, initial-scale=1">').insertAfter("head");
    $('.incfont').click(function () {
        curSize = parseInt($('.inner .container-fluid').css('font-size')) + 2;
        if (curSize <= 16)
            $('.inner .container-fluid').css('font-size', curSize);
    });
    $('.decfont').click(function () {
        curSize = parseInt($('.inner .container-fluid').css('font-size')) - 2;
        if (curSize >= 12)
            $('.inner .container-fluid').css('font-size', curSize);
    });
});

/*if($.cookie("css")) {
$("link").attr("href",$.cookie("css"));
}*/

function top_bar() {
    document.write('<div class="topbar-icon"><span class="glyphicon glyphicon-th-list"></span></div><ul id="top-bar" class="extlnks"><li><a href="index.html">Home</a></li><li><a href="downloads.html">Downloads</a></li><li><a href="kulgeet.html">Kulgeet</a></li><li><a href="tender.html">Tenders</a></li><li><a href="circulars.html">Circulars</a></li><li><a href="media-coverage.html">Media Coverage</a></li><li><a href="press-release.html">Press Release</a></li><li><a href="photo-gallery.html">Photo Gallery</a></li><li><a href="video-gallery.html">Video Gallery</a></li><li><a href="http://www.afrcup.in/" target="_blank">Fee Structure</a></li><li><a href="faq.html">FAQ</a></li><li><a href="http://www.sakshat.ac.in/" target="_blank">ICT Applications</a></li><li><a href="contact-us.html">Contact Us</a></li><li><a href="anti-ragging.html"> Anti Ragging</a></li><li><a style="border:none;" href="innovation.html">Innovation & Incubation</a></li></ul>')
}
function reader() {
    document.write('<!--ul class="reader"><li><a href="screen-reader-access.html" class="screen" alt="Screen Reader" title="Screen Reader">Screen Reader</a></li><li><a href="javascript:void(0)" class="decfont" alt="A-" title="A-">A-</a></li><li><a class="incfont" href="javascript:void(0)" alt="A+" title="A+">A+</a></li><!--li><a href="#" >T</a></li><li><a href="#" class="darkTheme" rel="css/style_orange.css">T</a></li--></ul-->')
}
function top_bar_link() {
    document.write('<ul class="extlnks"><li> <a href="downloads.html"> <i class="fa fa-angle-double-right"></i>Downloads</a> </li><li> <a href="kulgeet.html"> <i class="fa fa-angle-double-right"></i>University Kulgeet</a> </li><li> <a href="tender.html"> <i class="fa fa-angle-double-right"></i>Tenders</a> </li><li> <a href="circulars.html"> <i class="fa fa-angle-double-right"></i>Circulars</a> </li><li> <a href="media-coverage.html"> <i class="fa fa-angle-double-right"></i>Media Coverage</a> </li><li> <a href="press-release.html"> <i class="fa fa-angle-double-right"></i>Press Release</a> </li><li> <a href="photo-gallery.html"> <i class="fa fa-angle-double-right"></i>Photo Gallery</a> </li><li> <a href="video-gallery.html"> <i class="fa fa-angle-double-right"></i>Video Gallery</a> </li><li> <a href="http://www.afrcup.in/" target="_blank"> <i class="fa fa-angle-double-right"></i>Fee Structure</a> </li><li> <a href="faq.html"> <i class="fa fa-angle-double-right"></i>FAQ</a></li><li><a href="http://www.sakshat.ac.in/"><i class="fa fa-angle-double-right"></i>ICT Applications</a></li><li><a href="contact-us.html"><i class="fa fa-angle-double-right"></i>Contact Us </a></li></ul>')
}
function top_menu() {
    document.write('<div class="nav-icon"><span class="glyphicon glyphicon-th-list"></span></div><ul id="nav"><li><a href="javascript:void(0)">About Us</a> <ul><li><a href="history.html">History</a></li><li><a href="vission-mission.html">Vision & Mission</a></li><li><a href="university-act.html">University Act</a></li><li><a href="pdf/regulations_new_11.pdf" target="_blank">Regulations (First, 2010)</a></li><li><a href="noida-campus.html">Noida Campus</a></li><li><a href="university-logo.html">University Logo</a></li> <li><a href="aktudatapolicy.pdf">AKTU Data Privacy Policy</a></li> </ul></li><li><a href="javascript:void(0)">Governance</a> <ul><li><a href="organisation-structure.html">Organization Structure</a></li><li><a href="chancellor.html">Chancellor</a></li><li><a href="javascript:void(0)">Vice Chancellor</a> <ul><li> <a href="vice-chancellor-profile.html">Vice Chancellor&rsquo;s Profile</a></li><li><a href="former-vice-chancellors.html">Former Vice Chancellors</a></li> </ul></li><li><a href="javascript:void(0)">Pro Vice Chancellor</a></li><li><a href="javascript:void(0)">Executive Council</a><ul><li><a href="executive-council.html">Composition</a></li> <li><a href="minute.html">Minute</a></li></ul></li><li><a href="#">Academic Council</a><ul><li><a href="academic-council.html">Composition</a></li> <li><a href="academic-minute.html">Minute</a></li></ul></li><li><a href="#">Finance Committee</a><ul><li><a href="finance-committee.html">Composition</a></li> <li><a href="finance-minute.html">Minute</a></li></ul></li><li><a href="examination-committee.html">Examination Committee</a></li><li><a href="building-works-committee.html">Building & Works Committee</a></li> </ul></li><li><a href="javascript:void(0)">Academics</a> <ul><li><a href="javascript:void(0)">Programmes </a> <ul><li><a href="javascript:void(0)">Bachelors</a> <ul><li><a href="bachelors-ordinance.html">Ordinance</a></li> </ul></li><li><a href="javascript:void(0)">Masters</a> <ul><li><a href="masters-ordinance.html">Ordinance</a></li><li><a href="pdf/GBTU_PhD_Thesis_Preparation_Manual09072011.pdf" target="_blank">Thesis Preparation & Submission</a></li> </ul></li><li><a href="#">Doctoral (Ph.D.)</a> <ul>      <li><a href="pdf/about-us/Ordinance2016-17/Ph.D. Ordinance (23 July, 2016).pdf" target="_blank">Ph.D. Ordinance (23 July, 2016)</a></li>     <li><a href="pdf/about-us/phd_dec_24_11.pdf" target="_blank">Ph.D. Ordinance (Dec 24, 2011)</a></li><li><a href="pdf/about-us/07_Ph_D_Ordinance.pdf " target="_blank">Ph.D. Ordinance (July 14, 2007)</a></li><li><a href="pdf/about-us/GBTU_PhD_Thesis_Preparation_Manual09072011.pdf " target="_blank">Thesis Preparation & Submission</a></li><li><a href="pdf/about-us/expertpanel_050216.pdf" target="_blank">R.D.C. Expert Panel</a></li><li><a href="rdc_schedule.html">R.D.C. Schedule</a></li> </ul></li> </ul></li><li><a href="board-of-studies.html">Board of Studies</a></li><li><a href="syllabus.html">Syllabus</a></li><li><a href="academic-calender.html">Academic Calendar</a></li><li><a href="javascript:void(0)">Publications</a> <ul><!--li><a href="javascript:void(0)">Press & Publicity Cell</a></li--><li><a href="#">University News</a></li> </ul><li><a href="faculty_devlpmnt_program.html">Faculty Development Programs (FDP)</a></li><li><a href="e-learning.html">E-Learning Resources</a></li><li><a href="nptel_local_chapters.html">NPTEL Local Chapters</a></li>  </li><li><a href="nptel_online_certificate.html">NPTEL Online Certification</a></li> <li><a href="http://aktu.ac.in/hvpe/default.aspx" target="_blank">Value Education</a></li></ul></li><li><a href="javascript:void(0)">Admissions</a> <ul><li><a href="javascript:void(0)">Bachelors</a> <ul><li><a href="pdf/admission/2317fzlmv53n.pdf" target="_blank">Short Admission Notice</a></li><li><a href="pdf/nri_260516.pdf" target="_blank">Admission Notice NRI/Kashmiri Migrants Quota Seats</a></li><li><a href="pdf/architecture_160816.pdf" target="_blank">UPSEE 2016 Result</a></li> </ul></li><li><a href="masters.html">Masters</a></li><li><a href="doctoral.html">Doctoral (Ph.D.)</a></li> </ul></li><li><a href="javascript:void(0)">Examinations</a> <ul><li><a href="branch-code.html">Branch Codes</a></li><li><a href="subject-code-paper-id.html">Subject Code & Paper ID</a></li><li><a href="javascript:void(0)">Examination Schedule</a> <ul><li><a href="ex_schedule_ug.html">UG-Regular papers</a></li><li><a href="pg-m-tech-m-pharm.html">PG-M.Tech/M.Pharm</a></li> </ul></li><li><a href="scrutini.html">Scrutiny</a></li><li><a href="re-evaluation.html">Challenge Evaluation</a></li><li><a href="unfair-means.html">Unfair Means</a></li><li><a href="model-question-paper.html">Old Question Paper</a></li><li><a href="http://117.55.241.41/qpportal/index.php" target="_blank">Question Bank Portal</a></li><li><a href="http://117.55.241.41/qpportal/studentpdf.php" target="_blank">Question Paper Pattern For Session 2015 - 16</a></li> </ul></li><li><a href="javascript:void(0)">One View Results</a><ul><li><a href="http://erp.aktu.ac.in/WebPages/OneView/OneView.aspx" target="_blank">One-View display of Student Result Data</a></li><li><a href="#" target="_blank">Download Mobile App for One-View </a></li></ul></li><li><a href="javascript:void(0)">Results</a> <ul><li><a href="javascript:void(0)">Results</a> <ul><li><a href="bachelors-mba-mca.html">Bachelors/MBA/MCA</a></li><li><a href="results_mtech_mpharm.html">M.Tech/M.Pharm</a></li><li><a href="result-phd.html">Ph.D.</a></li> </ul></li><li><a href="merit-list-of-student.html">Merit List of Students</a></li> </ul></li><li><a href="javascript:void(0)">Institutions</a> <ul><li><a href="http://kyc.aktu.ac.in" target="_blank">KYC (Know Your College)</a></li></ul></li><li><a href="javascript:void(0)">University Reports</a> <ul><li><a href="annual-reports.html">Annual Report</a></li><li><a href="financial-report.html">Financial Report</a></li><li><a href="archives.html">Archives</a></li> </ul></li><li><a href="javascript:void(0)">Students</a> <ul><li><a href="pdf/welfare_cell_161015.pdf" target="_blank">Student Welfare Cell</a></li><li><a href="chhatra-kalyan-nidhi.html">Chatra Kalyan Nidhi</a></li><li><a href="anti-ragging.html">Anti-Ragging Cell</a></li> </ul></li><li><a href="javascript:void(0)">RTI</a> <ul><li><a href="public-information-officers.html">Public information Officers & contact no.</a></li><li><a href="pdf/syllabus/application_210715.pdf" target="_blank">Format of Application</a></li><li><a href="mandatory-disclosure.html">Mandatory disclosure</a></li><li><a href="download-act.html">Download act</a></li> </ul></li><li><a href="javascript:void(0)">Collaborations</a> <ul><li><a href="collaborations.html">Collaboration with other Universities/Institutes/Centers in India</a></li><li><a href="international-collaboration.html">International Collaboration </a></li><li><a href="membership-of-academic-consortia.html">Membership of Academic Consortia/networks Professional bodies affiliation </a></li> </ul></li><li><a href="javascript:void(0)">Affiliation</a> <ul><li><a href="pdf/affiliation_080715.pdf" target="_blank">Rules of Affiliation</a></li><li><a href="status-affiliation-institute.html">Status of Affiliation of Institute</a></li></ul></li></ul>')
}
function about_us() {
    document.write('<ul><li > <a href="history.html"> <i class="fa fa-angle-double-right"></i> History </a> </li><li> <a href="vission-mission.html"> <i class="fa fa-angle-double-right"></i> Vision and Mission </a> </li> <li> <a href="university-act.html"> <i class="fa fa-angle-double-right"></i> University Act </a> </li><li> <a href="pdf/regulations_new_11.pdf" target="_blank"> <i class="fa fa-angle-double-right"></i> Regulations (First, 2010)</a> </li> <li> <a href="noida-campus.html"> <i class="fa fa-angle-double-right"></i> Noida Campus </a> </li> <li> <a href="university-logo.html"> <i class="fa fa-angle-double-right"></i> University Logo </a> </li><li> <a href="pdf/AnnualReport/Annual Report.pdf" target="_blank"> <i class="fa fa-angle-double-right"></i> Annual Report 2016 </a> </li>   <li> <a href="aktudatapolicy.pdf" target="_blank"> <i class="fa fa-angle-double-right"></i>AKTU Data privacy policy</a> </li></ul>')
}
function governance() {
    document.write('<ul class="menu-content collapse out" id="menu-content"><li> <a href="organisation-structure.html"> <i class="fa fa-angle-double-right"></i>Organization Structure </a> </li><li> <a href="chancellor.html"> <i class="fa fa-angle-double-right"></i>Chancellor </a> </li><li> <a href="#"> <i class="fa fa-angle-double-right"></i>Vice Chancellor</a><ul class="submenu"><li> <a href="vice-chancellor-profile.html"> <i class="fa fa-angle-double-right"></i>Vice Chancellor&rsquo;s Profile</a></li><li> <a href="former-vice-chancellors.html"> <i class="fa fa-angle-double-right"></i>Former Vice Chancellors</a></li></ul></li><li> <a href="javascript:void(0)"> <i class="fa fa-angle-double-right"></i>Pro Vice Chancellor</a> </li><li><a href="#"> <i class="fa fa-angle-double-right"></i>Executive Council</a><ul class="submenu"><li> <a href="executive-council.html"> <i class="fa fa-angle-double-right"></i>Composition</a></li><li> <a href="minute.html"> <i class="fa fa-angle-double-right"></i>Minute</a></li></ul> </li><li> <a href="#"> <i class="fa fa-angle-double-right"></i>Academic Council</a><ul class="submenu"><li> <a href="academic-council.html"> <i class="fa fa-angle-double-right"></i>Composition</a></li><li> <a href="academic-minute.html"> <i class="fa fa-angle-double-right"></i>Minute</a></li></ul> </li><li> <a href="#"> <i class="fa fa-angle-double-right"></i>Finance Committee</a> <ul class="submenu"><li> <a href="finance-committee.html"> <i class="fa fa-angle-double-right"></i>Composition</a></li><li> <a href="finance-minute.html"> <i class="fa fa-angle-double-right"></i>Minute</a></li></ul></li><li> <a href="examination-committee.html"> <i class="fa fa-angle-double-right"></i>Examination Committee </a> </li><li> <a href="building-works-committee.html"> <i class="fa fa-angle-double-right"></i>Building & Works Committee </a> </li></ul>')
}


function governance_() {
    document.write('<ul class="menu-content collapse out" id="menu-content"><li> <a href="index.html"> <i class="fa fa-angle-double-right"></i>Home</a> </li><li> <a href="faculty_devlpmnt_program.html"> <i class="fa fa-angle-double-right"></i>Faculty Development Programs</a></li><li> <a href="nptel_local_chapters.html"> <i class="fa fa-angle-double-right"></i>NPTEL Local Chapters</a></li><li> <a href="nptel_online_certificate.html"> <i class="fa fa-angle-double-right"></i>NPTEL Online Certification</a></li></ul>')
}

function academics() {
    document.write('<ul><li> <a href="#"> <i class="fa fa-angle-double-right"></i> Programmes </a><ul class="submenu"> <li> <a href="#"> <i class="fa fa-angle-double-right"></i>Bachelors </a> <ul class="submenu"><li> <a href="bachelors-ordinance.html"> <i class="fa fa-angle-double-right"></i>Ordinance</a></li></ul></li><li> <a href="#"> <i class="fa fa-angle-double-right"></i>Masters </a><ul class="submenu"><li> <a href="masters-ordinance.html"> <i class="fa fa-angle-double-right"></i>Ordinance</a></li><li> <a href="pdf/GBTU_PhD_Thesis_Preparation_Manual09072011.pdf" target="_blank"> <i class="fa fa-angle-double-right"></i>Thesis Preparation & Submission</a></li></ul></li><li> <a href="#"> <i class="fa fa-angle-double-right"></i>Doctoral (PH.D) </a><ul class="submenu"><li> <a href="pdf/about-us/phd_dec_24_11.pdf" target="_blank"> <i class="fa fa-angle-double-right"></i>Ph.D. Ordinance (Dec 24, 2011)</a></li><li> <a href="pdf/about-us/07_Ph_D_Ordinance.pdf" target="_blank"> <i class="fa fa-angle-double-right"></i>Ph.D. Ordinance (July 14, 2007)</a></li><li> <a href="pdf/about-us/GBTU_PhD_Thesis_Preparation_Manual09072011.pdf" target="_blank"> <i class="fa fa-angle-double-right"></i>Thesis Preparation & Submission</a></li><li> <a href="pdf/about-us/rdc_9july2014.pdf" target="_blank"> <i class="fa fa-angle-double-right"></i>R.D.C. Expert Panel</a></li></ul></li></ul></li><li> <a href="board-of-studies.html"> <i class="fa fa-angle-double-right"></i> Board Of Studies </a> </li><li> <a href="syllabus.html"> <i class="fa fa-angle-double-right"></i> Syllabus </a> </li><li> <a href="academic-calender.html"> <i class="fa fa-angle-double-right"></i> Academic Calender</a> </li><li><a href="javascript:void(0)">Publications</a> <ul><li><a href="#">University News</a></li> </ul></li></ul>')
}
function admissions() {
    document.write('<ul><li> <a href="#"> <i class="fa fa-angle-double-right"></i>Bachelors</a><ul class="submenu"><li> <a href="pdf/admission/2317fzlmv53n.pdf" target="_blank"> <i class="fa fa-angle-double-right"></i>Short Admission Notice</a></li><li> <a href="http://aktu.ac.in/SEE2015fdghfictv/UptuEntranceResult.aspx" target="_blank"> <i class="fa fa-angle-double-right"></i>UPSEE 2015 Result</a></li></ul></li><li> <a href="masters.html"> <i class="fa fa-angle-double-right"></i>Masters</a> </li><li> <a href="doctoral.html"> <i class="fa fa-angle-double-right"></i>Doctoral(Ph.D.)</a> </li></ul>')
}
function examinations() {
    document.write('<ul><li > <a href="branch-code.html"><i class="fa fa-angle-double-right"></i>Branch Codes</a> </li><li> <a href="subject-code-paper-id.html"> <i class="fa fa-angle-double-right"></i>Subject Code & Paper ID</a> </li><li> <a href="#"> <i class="fa fa-angle-double-right"></i>Examination Schedule</a><ul class="submenu"><li> <a href="ex_schedule_ug.html"> <i class="fa fa-angle-double-right"></i>UG-Regular papers</a> </li><li> <a href="pg-m-tech-m-pharm.html"> <i class="fa fa-angle-double-right"></i>PG-M.Tech/M.Pharm</a> </li></ul></li><li> <a href="scrutini.html"> <i class="fa fa-angle-double-right"></i>Scrutiny</a> </li><li> <a href="re-evaluation.html"> <i class="fa fa-angle-double-right"></i>Challenge Evaluation</a> </li><li> <a href="unfair-means.html"> <i class="fa fa-angle-double-right"></i>Unfair Means</a> </li><li> <a href="model-question-paper.html"> <i class="fa fa-angle-double-right"></i>Model Question Paper</a> </li></ul>')
}
function results() {
    document.write('<ul><li> <a href="#"> <i class="fa fa-angle-double-right"></i> Results</a><ul class="submenu"><li> <a href="bachelors-mba-mca.html"> <i class="fa fa-angle-double-right"></i>Bachelors/MBA/MCA</a></li><li> <a href="results_mtech_mpharm.html"> <i class="fa fa-angle-double-right"></i>M.Tech./M.Pharm.</a></li><li> <a href="result-phd.html"> <i class="fa fa-angle-double-right"></i>PH.D</a></li></ul></li><li> <a href="results-analysis.html"> <i class="fa fa-angle-double-right"></i> Result Analysis</a> </li><li> <a href="merit-list-of-student.html"> <i class="fa fa-angle-double-right"></i> Merit List of Students</a> </li></ul>')
}
function institutions() {
    document.write('<ul><li><a href="http://kyc.aktu.ac.in" target="_blank">KYC (Know Your College)</a></li></ul>')
}
function annual_reports() {
    document.write('<ul><li> <a href="annual-reports.html"> <i class="fa fa-angle-double-right"></i>Annual Reports</a> </li><li> <a href="financial-report.html"> <i class="fa fa-angle-double-right"></i>Financial Reports</a> </li><li> <a href="archives.html"> <i class="fa fa-angle-double-right"></i>Archives</a> </li></ul>')
}
function students() {
    document.write('<ul><li> <a href="pdf/welfare_cell_19nov14.pdf" target="_blank"> <i class="fa fa-angle-double-right"></i>Student Welfare Cell</a> </li><li> <a href="chhatra-kalyan-nidhi.html"> <i class="fa fa-angle-double-right"></i>Chatra Kalyan Nidhi</a> </li><li> <a href="anti-ragging.html"> <i class="fa fa-angle-double-right"></i>Anti-Ragging Cell</a> </li></ul>')
}
function rollNumber() {
    document.write('<ul><li> <a href="/" target="_blank"> <i class="fa fa-angle-double-right"></i>Home</a> </li><li> <a href="/Grievance/Grievance.aspx"> <i class="fa fa-angle-double-right"></i>Grievance</a> </li></ul>')
}
function grievance() {
    document.write('<ul><li> <a href="/" target="_blank"> <i class="fa fa-angle-double-right"></i>Home</a> </li><li> <a href="/Grievance/RollNumberVerification.aspx"> <i class="fa fa-angle-double-right"></i>Student Grievance</a> </li></ul>')
}
function rti() {
    document.write('<ul><li> <a href="public-information-officers.html"> <i class="fa fa-angle-double-right"></i>Public Information Officers & Contact No.</a> </li><li> <a href="pdf/syllabus/application_210715.pdf" target="_blank"> <i class="fa fa-angle-double-right"></i>Format of Application</a> </li><li> <a href="mandatory-disclosure.html"> <i class="fa fa-angle-double-right"></i>Mandatory Disclosure</a> </li><li> <a href="download-act.html"> <i class="fa fa-angle-double-right"></i>Download Act</a> </li></ul>')
}
//function publications() {
//document.write('<ul><!--li> <a href="javascript:void(0)"> <i class="fa fa-angle-double-right"></i>Press & Publicity Cell</a> </li--><li> <a href="#"> <i class="fa fa-angle-double-right"></i>University News</a></li></ul>')
//}
function collaborations() {
    document.write('<ul><li> <a href="collaborations.html"> <i class="fa fa-angle-double-right"></i>Collaboration with other Universities/Institutes/Centers in India</a></li><li> <a href="international-collaboration.html"> <i class="fa fa-angle-double-right"></i>International Collaboration</a></li><li> <a href="membership-of-academic-consortia.html"> <i class="fa fa-angle-double-right"></i>Membership of Academic Consortia/networks Professional bodies affiliation</a></li></ul>')
}
function affiliation() {
    document.write('<ul><li><a href="pdf/affiliation_080715.pdf" target="_blank"><i class="fa fa-angle-double-right"></i>Rules of Affiliation</a></li><li><a href="status-affiliation-institute.html"><i class="fa fa-angle-double-right"></i>Status of Affiliation of Institute</a></li></ul>')
}
function can_we() {
    document.write('<!--div class="row"><div class="col-md-12"><h3 class="can-we-help">Can we help you find what you&prime;re looking for?</h3></div></div><div class="row"><div class="col-md-12"><div class="input-group search-bottom"><input type="text" class="form-control" placeholder="Search for..."><span class="input-group-btn"><button class="btn glyphicon glyphicon-search" type="button"></button></span></div></div></div><div class="row"><div class="col-md-12"><p class="browser"><a href="#">or   browse our sitemap</a></p></div></div-->')
}
function footer() {
    document.write('<div class="row"><div class="col-md-12"><p class="text-center"> <a href="copyright.html">Copyright Statement</a> | <a href="hyperlinking-policy.html">Hyperlinking Policy</a> | <a href="terms-and-conditions.html">Terms & Conditions</a> | <a href="privacy-policy.html">Privacy Policy</a> | <a href="disclaimer.html">Disclaimer</a> </p></div></div>')
}
function footer_bot() {
    document.write('<div class="row extlnks" id="footer"><div class="col-md-9"><p>This is the official Website of Dr. A.P.J. Abdul Kalam Technical University, Uttar Pradesh, Lucknow.</p></div><!--div class="col-md-4"><div class="social-btns"><div class="social-btn-holder"> <a href="#" class="social btn-social btn-block btn-facebook"> <i class="fa fa-facebook"></i> </a> </div><div class=" social-btn-holder"> <a href="#" class="social btn-social btn-block btn-youtube"> <i class="fa fa-youtube"></i> </a> </div><div class="social-btn-holder"> <a href="#" class="social btn-social btn-block btn-twitter"> <i class="fa fa-twitter"></i> </a> </div><div class="social-btn-holder"> <a href="#" class="social btn-social btn-block btn-google"> <i class="fa fa-google"></i> </a> </div></div><p class="contact-with">Connect with Us...</p></div--></div>')
}
/*jQuery(document).ready(function ($) {
$('.jquery-accordion-menu ul').addClass("sub")
$('.jquery-accordion-menu ul li:has(ul)').addClass('expand').find('ul').hide();
$('.jquery-accordion-menu ul li.expand>a').after('<span>+</span>');

$('.jquery-accordion-menu ul').on('click', 'li.collapse a ', function (e) {
$('li.collapse span').text('+').parent().addClass('expand').removeClass('collapse').find('>ul').slideUp();
e.stopImmediatePropagation();
});

$('.jquery-accordion-menu ul').on('click', 'li.expand a', function (e) {
$('li.expand span').text('-').parent().addClass('collapse').removeClass('expand').find('>ul').slideDown();
e.stopImmediatePropagation();
});

$('.jquery-accordion-menu ul').on('click', 'li.collapse li:not(.collapse)', function (e) {
e.stopImmediatePropagation();
});		
});*/

/* Waypoint */
jQuery(function ($) {
    enquire.register("screen and (min-width: 1024px)", {
        match: function () {
            $('header.site-header').waypoint('sticky', {
                stuckClass: 'stuck',
                wrapper: '<div class="sticky-wrapper" />',
                offset: function () {
                    return -($(this).height() * 1);
                }
            });

            $('header.site-header').waypoint(function (direction) {
                if (direction === 'down') {
                    $('body').addClass('header-stuck');
                    $('header.site-header').hide();
                    $('header.site-header').fadeIn(500);
                    $('.u-name').addClass('col-md-4')
                    $('.u-name').removeClass('col-md-7')
                }
                else {
                    $('body').removeClass('header-stuck');
                    $('.u-name').removeClass('col-md-4')
                    $('.u-name').addClass('col-md-7')
                }
            }, {
                offset: function () {
                    return -($(this).height() * 1);
                }
            });

        },
        unmatch: function () {

        }

    });
});


/* Accordion-menu */

jQuery(document).ready(function ($) {
    $('.jquery-accordion-menu ul li:has(ul)').addClass('expand').find('ul').hide();
    $('.jquery-accordion-menu ul li.expand>a').after('<span>+</span>');

    $('.jquery-accordion-menu ul').on('click', 'li.collapse span', function (e) {
        $(this).text('+').parent().addClass('expand').removeClass('collapse').find('>ul').slideUp();
        e.stopImmediatePropagation();
    });

    $('.jquery-accordion-menu ul').on('click', 'li.expand span', function (e) {
        $(this).text('-').parent().addClass('collapse').removeClass('expand').find('>ul').slideDown();
        e.stopImmediatePropagation();
    });

    $('.jquery-accordion-menu ul').on('click', 'li.collapse li:not(.collapse)', function (e) {
        e.stopImmediatePropagation();
    });

    $('.jquery-accordion-menu ul a').each(function () {
        if (location.href === this.href) {
            $(this).addClass('selected');
            $('.jquery-accordion-menu ul a').not(this).addClass('none');
            return false;
        }
    });

});

//writer : Kafeel
/*jQuery( document ).ready(function( $ ) {
var comp = new RegExp(location.host);
$('.extlnks a').each(function(){
if(comp.test($(this).attr('href'))){
$(this).addClass('local');}
else{
$(this).addClass('external');
$(".no-alert a").removeClass('external');
$(".no-alert a").addClass('local');
}});
$('.extlnks a').filter(function() {
return this.hostname && this.hostname !== location.hostname;
}).click(function() {
url = this;
var x = bootbox.confirm("You are about to leave the Official Website of <b>Dr. A.P.J. Abdul Kalam Technical University, Uttar Pradesh, Lucknow</b> and view the content of an external website. <br> <br><b>Dr. A.P.J. Abdul Kalam Technical University, Uttar Pradesh, Lucknow</b> cannot be held responsible for the content of the website you are going to view.", function(okay) {
if(okay)
window.open(url);
});
return false;
});});*/
