let TABS = [];
prepGUI();
function prepGUI(){
var mc = document.createElement('div');mc.id="MAIN_CONT";
document.getElementsByTagName('body')[0].appendChild(mc);
mc.innerHTML = `<div id="LEFT_PANEL"> <div></div>
<div id="SECTION_SELECTOR"><h4 class="ON_OPEN">Open tabs</h4><h4>Archived</h4> <div id="HOME_BTN" onclick="focusHome()">
<img src="https://uvoa.github.io/VSOAR/home.svg" alt="">
</div></div>
</div><div id="RIGHT_PANEL"></div>`;
}

