let TABS = [];
var RES = getRES();
prepGUI();
function prepGUI(){
var mc = document.createElement('div');mc.id="MAIN_CONT";
document.getElementsByTagName('body')[0].appendChild(mc);
mc.innerHTML = `<div id="LEFT_PANEL"> <div></div>
<div id="SECTION_SELECTOR"><h4 class="ON_OPEN">Open tabs</h4><h4>Archived</h4> <div id="HOME_BTN" onclick="focusHome()">
`+RES[0]+`
</div></div>
</div><div id="RIGHT_PANEL"></div>`;
}
function getRES (){
  var temp = [];
  temp.push(`<svg width="28px" height="28px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g stroke="white" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="white" fill-rule="nonzero">
            <path d="M12.5919,3.49635 C13.4146,2.83625 14.5854,2.83625 15.4081,3.49635 L23.1581,9.71468 C23.6903,10.1417 24,10.7872 24,11.4696 L24,22.75 C24,23.9926 22.9926,25 21.75,25 L18.75,25 C17.5074,25 16.5,23.9926 16.5,22.75 L16.5,16.75 C16.5,16.3358 16.1642,16 15.75,16 L12.25,16 C11.8358,16 11.5,16.3358 11.5,16.75 L11.5,22.75 C11.5,23.9926 10.4926,25 9.25,25 L6.25,25 C5.00736,25 4,23.9926 4,22.75 L4,11.4696 C4,10.7872 4.30967,10.1417 4.84191,9.71468 L12.5919,3.49635 Z M14.4694,4.6663 C14.1951,4.44627 13.8049,4.44627 13.5306,4.6663 L5.78064,10.8846 C5.60322,11.027 5.5,11.2421 5.5,11.4696 L5.5,22.75 C5.5,23.1642 5.83579,23.5 6.25,23.5 L9.25,23.5 C9.66421,23.5 10,23.1642 10,22.75 L10,16.75 C10,15.5074 11.0074,14.5 12.25,14.5 L15.75,14.5 C16.9926,14.5 18,15.5074 18,16.75 L18,22.75 C18,23.1642 18.3358,23.5 18.75,23.5 L21.75,23.5 C22.1642,23.5 22.5,23.1642 22.5,22.75 L22.5,11.4696 C22.5,11.2421 22.3968,11.027 22.2194,10.8846 L14.4694,4.6663 Z"/>
        </g></g></svg>`);
  return temp;
}
