message = {'begin':'<h3>Keep It Simple, Stupid.</h3><p>With this <a href="http://en.wikipedia.org/wiki/KISS_principle" >simple mantra</a> firmly grasped, I present to you Simple Input Tabs. A content plugin designed to be easy to use for template designers, and even easier for their clients. The following are basic install and usage instructions for the simple plugin.</p><p>Created for an equally simple <a href="http://get-simple.info/download/">GetSimple CMS</a>, this plugin allows template makers an easy out-of-box means of populating different sections in their designs with user content. Breaking free of the single content area shackles that previously held them back. For instance it allows you to create entities such as a sidebar and have users populate it with its own content, separate from the main body.</p><p>If you have not yet got the plugin file, you can find the latest version over at the CMS\'s website, <a href="http://get-simple.info/extend/plugin/simple-input-tabs/523/">HERE</a>.</p><p>Click a Tab to learn more...</p>',

'setup':'<h3>Setup.</h3><li>Download <a href="http://get-simple.info/extend/plugin/simple-input-tabs/523/">the plugin</a> and unzip the file.</li><br><li>Download <a href="http://get-simple.info/extend/plugin/small-plugin-toolkit/531/">Small Plugin Toolkit</a>, and unzip that also.</li><br><li>Copy the files that come out of both plugins.</li><br><li>Find the location you uploaded your copy of GetSimple CMS, and within it find the "plugins" folder.</li><br><li>Paste the copied files into the plugins folder.</li><br><br>Done.',

'template':'<h3>Template Time.</h3><li>Open your template file with a text editor of some description.</li><br><li>Where you want the core of your pages content to reside (in the code) copy and paste the following(if you already have get_page_content, then simply replace the word "get" with "insert"):<br><br>&lt;?php insert_page_content(); ?></li><br><li>Repeating the same process for any additional entities in their corresponding locations (ie a Sidebar), paste this code into the page. Note: Change the name of the entitiy in the brackets to what you want.<br><br>&lt;?php insert_page_content("sidebar"); ?></li><br>Not too difficult.',

'using':'<h3>Using the plugin. It\'s easy!</h3><p>The funny thing is, you already know how to use it.<br>In using this site you have learned all the functionality necessary. Using it is exactly the same as clicking these tabs surrounding this text-box.<br>Each tab on your site will correspond to different sections of the web page. Simply fill in your information and save the page.</p>That\'s it! Easy. I have run out of cake, but you can have a drink. You\'ve earned it!<br><br><center><a href="http://get-simple.info/extend/plugin/simple-extra-inputs/523/"><img src="can.jpg" width="77px" height="150px"/></a></center>'};


function reset(){
	$('.submit').removeAttr('style');
	$('#toptabs li a').removeClass('activetab');
	$("#pointer").fadeOut('slow');
}

function change(item){
	$('#' + item).css('background','#96f4b4').css('box-shadow','inset 0px 2px 3px 0px #acacac');
	$('#' + item + '2').addClass('activetab');
	$("#editor").html(message[item]);
}

$(document).ready(function(){
//	Initialize the welcome message
	$("#begin").css('background','#96f4b4').css('box-shadow','inset 0px 2px 3px 0px #acacac');
	$("#editor").html(message['begin']);
	$("#button-container").fadeOut(0);

//	Change tab layout
	$("#togglebox").click(function(){
		$("#pointer").fadeOut('slow');
		if($(this).attr('checked')){
			$("#toptabs").fadeIn('slow');
			$('#button-container').fadeOut('slow');
		} else {
			$("#toptabs").fadeOut('slow');
			$('#button-container').fadeIn('slow');
		}
	});

//	Click a button?
	$("#begin").click(function(){ reset(); change('begin');});
	$("#begin2").click(function(){ reset(); change('begin');});
	$("#setup").click(function(){ reset(); change('setup');});
	$("#setup2").click(function(){ reset(); change('setup');});
	$("#template").click(function(){ reset(); change('template');});
	$("#template2").click(function(){ reset(); change('template');});
	$("#using").click(function(){ reset(); change('using');});
	$("#using2").click(function(){ reset(); change('using');});

})