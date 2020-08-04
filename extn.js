let TABS = [];
prepGUI();
function prepGUI(){
var mc = document.createElement('div');mc.id="MAIN_CONT";
document.getElementsByTagName('body')[0].appendChild(mc);
mc.innerHTML = '<div id="LEFT_PANEL"></div><div id="RIGHT_PANEL"></div>';
}
