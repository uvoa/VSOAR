var TABS = [];
var IBDB = [];loadBBSIBDB();
prepGUI();
function prepGUI(){
  var popu;
  var mc = document.createElement('div');mc.id="MAIN_CONT";
  document.getElementsByTagName('body')[0].appendChild(mc);
mc.innerHTML = `<div id="LEFT_PANEL"> <div></div>
<div id="SECTION_SELECTOR"><h4 class="ON_OPEN">Open tabs</h4><h4>Archived</h4> <div id="HOME_BTN" onclick="focusHome()">
<img src="https://uvoa.github.io/VSOAR/home.svg" alt="">
</div></div>
</div><div id="RIGHT_PANEL"></div>`;
  document.getElementById('RIGHT_PANEL').innerHTML = ` <div class="vp special" id="INDEX"></div> `;
  popu = document.getElementById('INDEX');
  populate();
}
function populate(){
  for(i=0;i<IBDB.length;i++){
    ATI(`<div class="block"><header><img src="`+IBDB[i].logoURL+`"><h2>`+IBDB[i].ibTitle+`</h2></header></div>`);
  }
}
function ATI(htmlLibretto){
  popu.innerHTML = popu.innerHTML + htmlLibretto;
}
function loadBBSIBDB(){
    IBDB[0] = {
        'boards' : {'wiz' : 'Wizardry','dep':'Depression','hob':'Hobbies',
        'lounge':'Lounge','jp':'Japan/Anime','meta':'Meta','games':'Video Games',
        'music':'Music'},'ibTitle' : 'WizardChan','short':'wz',
        'logoURL':'https://seeklogo.com/images/1/4chan-logo-620B8734A9-seeklogo.com.png'
    };
    IBDB[1] = {
        'boards' : {'ic' : 'Artwork Critique','r9k':'ROBOT9000'},'ibTitle' : '4chan','short':'fc',
        'logoURL':'https://seeklogo.com/images/1/4chan-logo-620B8734A9-seeklogo.com.png'
    };
};
