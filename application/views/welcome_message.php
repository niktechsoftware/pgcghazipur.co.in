<?php $this->load->view('header');?>
 <!-- header -->  
        <style>
#mask {
  position:absolute;
  left:0;
  top:0;
  z-index:9000;
  background-color:#000;
  display:none;
}  
#boxes .window {
  position:absolute;
  left:0;
  top:0;
  width:490px;
  height:800px;
  display:none;
  z-index:9999;
  padding:20px;
  border-radius: 15px;
  text-align: center;
}
#boxes #dialog {
  width:490px; 
  height:auto;
  padding:10px;
  background-color:#ffffff;
  font-family: 'Segoe UI Light', sans-serif;
  font-size: 15pt;
}
.maintext{
	text-align: center;
  font-family: "Segoe UI", sans-serif;
  text-decoration: none;
}
body{
  background: url('bg.jpg');
}
#lorem{
	font-family: "Segoe UI", sans-serif;
	font-size: 12pt;
  text-align: left;
}
#popupfoot{
	font-family: "Segoe UI", sans-serif;
	font-size: 16pt;
  padding: 10px 20px;
}
#popupfoot a{
	text-decoration: none;
}
.agree:hover{
  background-color: #D1D1D1;
}
.popupoption:hover{
	background-color:#D1D1D1;
	color: green;
}
.popupoption2:hover{
	
	color: red;
}
</style> 
    <div class="container-fluid scrol-bg">
       
        <div class="row">
            <div class="col-md-12 sml-lnk">

                <div class="col-md-3 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/index.php/welcome/downloadAdmitCard" target="_blank">UG Improvement exam Admit Card 2017-2018
                    <!--    <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">-->
                    </a>
                  <!--     <a href="http://pgcghazipur.co.in/index.php/welcome/downloadAdmitCard" target="_blank">PG Provisional Admit Card 2017-2018
                        <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>-->


                </div>
                
            <!--  <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                   <a href="http://pgcghazipur.co.in/pgcadmitcard" target="_blank">Download Admit Card Entrance Exam  2018-2019
                  <!--       <img width="33" height="16" src="#">
                    </a>

                </div>-->
            
  <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/index.php/welcome/downloadAdmitCardPG" target="_blank">PG Improvement exam Admit Card 2017-2018
                      <!--  <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">-->

                </div>
                <div class="col-md-3 col-xs-6 col-sm-6 exam"> 
                  <a href="<?php echo base_url();?>assets/exam2018/BED-I-SEMESTER.pdf" target="_blank">B.Ed.  1st Semester Admit card
                        <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>
                

                </div>
                 <div class="col-md-3 col-xs-6 col-sm-6 exam"> 
                  <a href="<?php echo base_url();?>assets/exam2018/BED-3-SEMESTER.pdf" target="_blank">B.Ed.  3rd Semester Admit card
                        <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>
                

                </div>
                <!--<div class="col-md-2 col-xs-12 col-sm-12 exam"><a href="nptel_local_chapters.html" style="color:#000 !important;"><span style="line-height:35px;">NPTEL Local Chapters</span></a></div>-->
                <!--<div class="col-md-2 col-xs-12 col-sm-12 exam"><a href="#" target="_blank"><span style="line-height: 35px;" class="blink">Value Education</span></a></div>-->
<!--
                <div class="col-md-2 col-xs-12 col-sm-12 exam"><a href="http://pgcghazipur.co.in/pgcadmitcard/index.php/welcome/result" target="_blank"><span style="line-height: 35px;" class="blink">View Entrence Result 2018</span></a>
                 <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                </div>
              

<!--

                <div class="col-md-5 col-xs-12 col-sm-12 exam"><a href="#" target="_blank"><span style="line-height: 35px; color: red;">Counsling Card 2017-2018</span></a></div>
                <div class="clear"></div>
            </div>
        </div>-->
        <!--
        <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/assets/answerkey/answerKeyBAset-1.bmp" target="_blank">BA Set-1 Answerkey
                       <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>

                </div>
                 <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/assets/answerkey/answerKeyBASet-2.bmp" target="_blank">BA Set-2 Answerkey
                    <!--    <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>

                </div>
                 <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/assets/answerkey/answerkeyBASet-3.bmp" target="_blank">BA Set-3 Answerkey
                  <!--      <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>

                </div>
                 <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/assets/answerkey/answerkeyMAeconomics.bmp" target="_blank">MA Economics Answerkey
                  <!--      <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>

                </div>
                
                  <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/assets/answerkey/answerKeyMAsanskrit.bmp" target="_blank">MA Sanskrit Answerkey
                   <!--     <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>

                </div>
                 <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/assets/answerkey/answerKeyMaPoliticalSc..bmp" target="_blank">MA Political Sc. Answerkey
                  <!--      <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>

                </div>
                 <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/assets/answerkey/aswerKeyPsychology.jpg" target="_blank">MA Psychology Answerkey
                   <!--     <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>

                </div>
                 <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/assets/answerkey/answerKeyMCom.bmp" target="_blank">M.Com. Answerkey
                  <!--      <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>

                </div>
                 <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/assets/answerkey/answerkeybscbio" target="_blank">B.Sc.(BIO) Answerkey
                   <!--     <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>

                </div>
                 <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/assets/answerkey/answerkeyhindi" target="_blank">M.A (Hindi) Answerkey
                 <!--       <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>

                </div>
                <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/assets/answerkey/answerKeyMAHistory.bmp" target="_blank">M.A (History) Answerkey
                  <!--      <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>

                </div>
                <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/assets/answerkey/answerKeyBscAg.bmp" target="_blank">B.Sc. (AG) Answerkey
                    <!--    <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>

                </div>
                 <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/assets/answerkey/answerKeyMScBotany.bmp" target="_blank">M.Sc. (Botany) Answerkey
                    <!--    <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>

                </div>
                <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/assets/answerkey/answerKeyMSc(AG)Hort.bmp" target="_blank">M.Sc. (AG-Horticulture) Answerkey
                    <!--    <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>

                </div>
                <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/assets/answerkey/answerKeyMAGeography.bmp" target="_blank">M.A. (Geography) Answerkey
                     <!--   <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>

                </div>
                <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/assets/answerkey/answerKeyBPE.bmp" target="_blank">BPE Answerkey
                     <!--   <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>

                </div>
                 <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/assets/answerkey/answerKeyMScMath.bmp" target="_blank">M.Sc. Math Answerkey
                     <!--   <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>

                </div>
                  <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/assets/answerkey/BScPMC.bmp" target="_blank">B.Sc. PMC Answerkey
                     <!--   <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>

                </div>
                 <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/assets/answerkey/homescience.bmp" target="_blank">Home Sc. Answerkey
                     <!--   <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>

                </div>
                 <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/assets/answerkey/sociologyAnswerKey.bmp" target="_blank">MA Sociology Answerkey
                       <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>

                </div>
                 <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/assets/answerkey/gentics&plant.bmp" target="_blank">Genetics & Plant Breeding. Answerkey
                    <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>

                </div>
                 <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/assets/answerkey/environment.bmp" target="_blank">M.Sc. Environmental Sc. Answerkey
                       <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>

                </div>
                <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/assets/answerkey/MAENGLISHANS.bmp" target="_blank">MA English Answerkey
                       <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>

                </div>
               
              <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/pgcadmitcard/index.php/welcome/result" target="_blank">Entrance Result 2018
                      <!-- <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>

                </div>
              <!--   <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/assets/notice/ugmaincounselling.pdf" target="_blank">UG Main Counselling Merit List Notice
                       <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>

                </div>
                  <div class="col-md-2 col-xs-6 col-sm-6 exam"> 
                  <a href="http://pgcghazipur.co.in/assets/notice/ugwaitingcounselling.pdf" target="_blank">UG Waiting Counselling Merit List Notice
                       <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                    </a>

                </div>-->
           <!---     
   <div class="col-md-2 col-xs-6 col-sm-6 exam"><a href="http://pgcghazipur.co.in/exam/pgcRecheckRequest/" target="_blank"><span style="line-height: 35px;" class="blink">Re-Valuate OMR Sheet Request</span></a>
                 
                </div> 
                <div class="col-md-2 col-xs-6 col-sm-6 exam"><a href="http://pgcghazipur.co.in/pgcadmitcard/index.php/welcome/counsellingCard" target="_blank"><span style="line-height: 35px;" class="blink">PG Counselling Card 2018</span><img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif"></a>
                 
                </div>
                
                    <div class="col-md-2 col-xs-6 col-sm-6 exam"><a href="http://pgcghazipur.co.in/assets/studentElection2018-19/pgstudentlist2018-19.zip" target="_blank"><span style="line-height: 35px;" class="blink">PG Student Election List 2018-19</span><img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif"></a>
                   </div>
                     <div class="col-md-2 col-xs-6 col-sm-6 exam"><a href="http://pgcghazipur.co.in/assets/studentElection2018-19/uglist2018-19.zip" target="_blank"><span style="line-height: 35px;" class="blink">UG Student Election List2018-19</span><img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif"></a>
                   </div>
                  
              <!--     <div class="col-md-2 col-xs-6 col-sm-6 exam"><a href="http://pgcghazipur.co.in/assets/studentElection2018-19/uglist2018-19.zip" target="_blank"><span style="line-height: 35px;" class="blink">UG Student Election List 2018-19</span><img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif"></a>
                   </div>-->
       <div class="row">
            <!--<div class="col-md-6 sml-lnk">
                <div class="col-md-12 col-xs-12 col-sm-12 exam">
                    <a href="#" target="_blank">
                        <span style="color: red" class="blink">List of provisionally selected candidates under Ph.D. Program 2016-17</span>                        
                    </a>
                </div>
            </div>-->

            
        </div>
        <div class="row">
            <div class="col-md-12 sml-lnk">
                <div class="col-md-12 col-xs-12 col-sm-12 exam">
                    <p style="text-align: center;">Student's can meet the Principal on every Monday, Wednesday and Friday between 11 AM to 3 PM</p>
                     <marquee behavior="alternate" scrollamount="3" class="scrol"><a href="http://pgcghazipur.co.in/pgcadmitcard/index.php/welcome/result" target="_blank"><b>Download All Subject Results Entrence Exam 2018 </b><img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif"></a></marquee>
                </div>
            </div>
        </div>



  
    </div>
     <div class="jquery-script-ads">
   <script type="text/javascript">
</script>
<script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script></div>
</div>
<div id="boxes">
  <div style="top: 2px; left: 50px; display: none;" id="dialog" class="window">
      <div id="lorem">
     
      <img src="<?php echo base_url();?>assets/images/pgcghazipur1.jpg" alt="New York" width="470" height="600">
    </div>
   
  </div>
  <div style="width: 1478px; font-size: 32pt; color:white; height: 602px; display: none; opacity: 0.8;" id="mask"></div>
</div>
<!--<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.js"></script> -->
<script src="main.js"></script>
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

    <div class="clear"></div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-9 banner">
                <div class="slider-wrapper theme-default">
                    <div id="slider" class="nivoSlider">
                        <img src="<?php echo base_url();?>assets/images/02.jpg" alt="">
                        <img src="<?php echo base_url();?>assets/images/3.jpg" alt="">
                        <img src="<?php echo base_url();?>assets/images/5.jpg" alt="">
                     
                    </div>
                </div>
            </div>
            
            <div class="col-md-3 news">
                <div class="panel panel-default news-panel">
                    <div class="panel-heading heading-news">
                        what's New
              <ul style="margin-top: -4px;" class="pagination pull-right">
                  <li><a class="prev" href="#"><span class="glyphicon glyphicon-chevron-down"></span></a></li>
                  <li><a class="next" href="#"><span class="glyphicon glyphicon-chevron-up"></span></a></li>
              </ul>
                    </div>
                    <div class="panel-body whats-new-panel">
                        <div class="row">
                            <div class="col-xs-12"> 
                                <ul class="demo1">                                    
                                  <!--    <li class="news-item"><a href="#" target="_blank" class="blinking">PGC Student Election 2018</a>
                                        
                                        <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                                   </li>
                                <li class="news-item"><a href="http://pgcghazipur.co.in/pgcadmitcard/index.php/welcome/result" target="_blank" class="blinking">  MA Home Science Results 2018</a>
                                        
                                        <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                                   </li><li class="news-item"><a href="http://pgcghazipur.co.in/pgcadmitcard/index.php/welcome/result" target="_blank" class="blinking"> MA Sociology Results 2018</a>
                                        
                                        <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                                   </li><li class="news-item"><a href="http://pgcghazipur.co.in/pgcadmitcard/index.php/welcome/result" target="_blank" class="blinking">  M.Sc. Math  Results 2018</a>
                                        
                                        <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                                   </li><li class="news-item"><a href="http://pgcghazipur.co.in/pgcadmitcard/index.php/welcome/result" target="_blank" class="blinking">  M.Sc. Botany Results 2018</a>
                                        
                                        <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                                   </li>
                                   <li class="news-item"><a href="http://pgcghazipur.co.in/pgcadmitcard/index.php/welcome/result" target="_blank" class="blinking"> M.Sc. Horticulture Results 2018</a>
                                        
                                        <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                                   </li>
                                   <li class="news-item"><a href="http://pgcghazipur.co.in/pgcadmitcard/index.php/welcome/result" target="_blank" class="blinking">  B.Sc. Agriculture Results 2018</a>
                                        
                                        <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                                   </li>
                                   <li class="news-item"><a href="http://pgcghazipur.co.in/pgcadmitcard/index.php/welcome/result" target="_blank" class="blinking">  B.Sc. Biology Results 2018</a>
                                        
                                        <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                                   </li>
                                   <li class="news-item"><a href="http://pgcghazipur.co.in/pgcadmitcard/index.php/welcome/result" target="_blank" class="blinking">  B.Sc. Math Results 2018</a>
                                        
                                        <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                                   </li>
                                   <li class="news-item"><a href="http://pgcghazipur.co.in/pgcadmitcard/index.php/welcome/result" target="_blank" class="blinking">  B.A Results 2018</a>
                                        
                                        <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                                   </li>
                                   <li class="news-item"><a href="http://pgcghazipur.co.in/pgcadmitcard/index.php/welcome/result" target="_blank" class="blinking">  M.Sc. GPB Results 2018</a>
                                        
                                        <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                                   </li>
                                   <li class="news-item"><a href="http://pgcghazipur.co.in/pgcadmitcard/index.php/welcome/result" target="_blank" class="blinking"> M.Sc. Environmental Sc. Results 2018</a>
                                        
                                        <img width="33" height="16" src="<?php echo base_url();?>assets/images/new_red.gif">
                                   </li>-->
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <div class="clear"></div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3 left-news">
                <div class="panel panel-default panel-default-new">
                    <div class="panel-heading panel-heading-left">Circulars <a class="circular-more" href="circulars.html">More <i class="fa fa-arrow-circle-right"></i></a></div>
                    <div class="panel-body panel-body-bg circular">
                       <!-- <div class="row">
                            <div class="container-fluid">
                                <iframe width="100%" src="#" frameborder="0" scrolling="no" style="border: none; overflow-y: auto; overflow-x: hidden; min-height: 290px;"></iframe>
                            </div>
                        </div>-->
                    </div>
                    <!--div class="panel-footer"> <ul style="margin: 0px;" class="pagination pull-right"><li><a class="prev" href="#"><span class="glyphicon glyphicon-chevron-down"></span></a></li><li><a class="next" href="#"><span class="glyphicon glyphicon-chevron-up"></span></a></li></ul><div class="clearfix"></div></div-->
                </div>
            </div>
            <div class="col-md-6 cm-bg">
                <div class="container-fluid cm-img">
                    <div class="row">
                        <div class="col-md-12">
                            <!--<marquee class="scrol-news" scrollamount="2" behavior="alternate"><a target="_blank" href="#" class="blinking"><strong></strong></a></marquee>-->
                        </div>
                    </div>
                    <h3 style="font-style: bold;font-size: 18px;">Post Graduate College,Ghazipur ,( Accredited with B by NAAC U.G.C.)</h3>
                    <hr>
                    <div class="row extlnks">
                      <p>Post Graduate College, Ghazipur affiliated with Veer Bahadur Singh Purvanchal University, Jaunpur, and is accredited with B grade by NAAC. It would be worthily to mention that U.P. government has formulated a policy to develop twenty model colleges from N.G.O sector and ten from GOVT. colleges, for which initially top fifteen colleges From N.G.O the sector have been short-listed. It is our pride that P.G. College is one among them .We are striving to create a place among top ten. For last two years "College Placement Cell" has been successful to invite the corporate sector for campus placement. In the session 2007-2008, 17 students have been employed by the sugar industry.</p>  
                    
                    </div>
                </div>
               
            </div>
            <div class="col-md-3 right-news">
                <div class="panel panel-default panel-default-new">
                    <div class="panel-heading panel-heading-right">NEWS & COLLEGE EVENTS <a class="news-more" href="news_events_more.html">More <i class="fa fa-arrow-circle-right"></i></a></div>
                    <div class="panel-body panel-body-bg">
                        <div class="row">
                            <div class="col-xs-12">
                                <ul class="demo1">
                             <!--       <li class="news-item"><a href="http://pgcghazipur.co.in/pgcadmitcard/index.php/welcome/result" target="_blank">MA Economics Result 2018 </a>
                                       </li>
<li class="news-item"><a href="http://pgcghazipur.co.in/pgcadmitcard/index.php/welcome/result" target="_blank">MA Sanskrit Result 2018 </a>
                                       </li>
                                        <li class="news-item"><a href="http://pgcghazipur.co.in/pgcadmitcard/index.php/welcome/result" target="_blank">MA Hindi Result 2018 </a>
                                       </li>
                                        <li class="news-item"><a href="http://pgcghazipur.co.in/pgcadmitcard/index.php/welcome/result" target="_blank">MA History Result 2018 </a>
                                       </li>
                                        <li class="news-item"><a href="http://pgcghazipur.co.in/pgcadmitcard/index.php/welcome/result" target="_blank">MA Political Sc. Result 2018 </a>
                                       </li>
                                        <li class="news-item"><a href="http://pgcghazipur.co.in/pgcadmitcard/index.php/welcome/result" target="_blank">MA Psychology Result 2018 </a>
                                       </li>
                                        <li class="news-item"><a href="http://pgcghazipur.co.in/pgcadmitcard/index.php/welcome/result" target="_blank">M.Com. Result 2018 </a>
                                       </li>
-->

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
 <script>
         $(document).ready(function() {	

     		var id = '#dialog';
     	
     		//Get the screen height and width
     		var maskHeight = $(document).height();
     		var maskWidth = $(window).width();
     	
     		//Set heigth and width to mask to fill up the whole screen
     		$('#mask').css({'width':maskWidth,'height':maskHeight});
     		
     		//transition effect		
     		$('#mask').fadeIn(500);	
     		$('#mask').fadeTo("slow",0.9);	
     	
     		//Get the window height and width
     		var winH = $(window).height();
     		var winW = $(window).width();
                   
     		//Set the popup window to center
     		$(id).css('top',  winH/12-$(id).height()/12);
     		$(id).css('left', winW/2-$(id).width()/2);
     	
     		//transition effect
     		$(id).fadeIn(2000); 	
     	
     	//if close button is clicked
     	$('.window .close').click(function (e) {
     		//Cancel the link behavior
     		e.preventDefault();
     		
     		$('#mask').hide();
     		$('.window').hide();
     	});		
     	
     	//if mask is clicked
     	$('#mask').click(function () {
     		$(this).hide();
     		$('.window').hide();
     	});		
     	
     });

         </script> 
<?php $this->load->view('footer');?>