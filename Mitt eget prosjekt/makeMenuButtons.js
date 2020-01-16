


function makeWeaponsList() {
    html = ''
    html = `
            <div>
            <button onclick="dropDown()" class="dropDownMenu div1">Menu</button>
            <div class="div2">
            <button onclick="updateView()" class="${hideOrShow} dropdownMenuContent">Back</button>
    
    `
    showContent.innerHTML = html;
}


function makeAmmoButtonList() {
    ammoChart = '';
    html = '';
    html = `
            <div>
            <button onclick="dropDown()" class="dropDownMenu div1">Menu</button>
            <div class="div2">
                    <button onclick="updateView()" class="${hideOrShow} dropdownMenuContent">Back</button>
                    <button onclick="make46x30chart()" class="${hideOrShow} dropdownMenuContent">${model.calibers[0].size}</button>
                    <button onclick="make9x39chart()" class="${hideOrShow} dropdownMenuContent">${model.calibers[1].size}</button>
                    <button onclick="make545x39chart()" class="${hideOrShow} dropdownMenuContent">${model.calibers[2].size}</button>
                    <button onclick="make545x45chart()" class="${hideOrShow} dropdownMenuContent">${model.calibers[3].size}</button>
                    <button onclick="make762x39chart()" class="${hideOrShow} dropdownMenuContent">${model.calibers[4].size}</button>
                    <button onclick="make762x51chart()" class="${hideOrShow} dropdownMenuContent">${model.calibers[5].size}</button>
                    <button onclick="make762x54Rchart()" class="${hideOrShow} dropdownMenuContent">${model.calibers[6].size}</button>
                            
                
                </div>
                </div>
                `
    showContent.innerHTML = html + ammoChart;
}

function createMapButtons() {
    html = '';
    html += `<div class="div2">
    <buttton class="${hideOrShow} dropdownMenuContent">back</button>
        
    `
    for (mapButton of model.makeMapButtons) {
        html += `
            
             <buttton class="${hideOrShow} dropdownMenuContent" onclick="${mapButton.makeMapFunction}()">${mapButton.buttonName}</button>
             ` 
             }
             html += `</div>`


    console.log(html)
    showContent.innerHTML = html;

}