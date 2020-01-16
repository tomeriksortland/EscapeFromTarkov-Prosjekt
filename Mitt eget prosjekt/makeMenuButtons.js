


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
    html += `<div>
            <button onclick="dropDown()" class="dropDownMenu div1">Menu</button>
            </div>
            <div class="div2">
    `
    for (AmmoButton of model.makeAmmoButtons) {
        html += `
                <button class="${hideOrShow} dropdownMenuContent" onclick="${AmmoButton.makeAmmoFunction}()">${AmmoButton.buttonName}</button>
                `
    }
    html += `</div>`
    showContent.innerHTML = html + ammoChart;

}

function createMapButtons() {
    document.body.classList.remove("customsMap");
    document.body.classList.remove("factoryMap");
    document.body.classList.remove('interchangeMap')
    document.body.classList.remove('woodsMap')
    document.body.classList.remove('shorelineMap')
    document.body.classList.remove('reserveMap')
    html = '';
    html += `<div>
            <button onclick="dropDown()" class="dropDownMenu div1">Menu</button>
            </div>
            <div class="div2">
    `
    for (mapButton of model.makeMapButtons) {
        html += `
                <button class="${hideOrShow} dropdownMenuContent" onclick="${mapButton.makeMapFunction}()">${mapButton.buttonName}</button>
                `
    }
    html += `</div>`

    showContent.innerHTML = html;

}

    function makeEquipmentButtonList() {
        html = '';
        html += `<div>
            <button onclick="dropDown()" class="dropDownMenu div1">Menu</button>
            </div>
            <div class="div2">
    `
    for (AmmoButton of model.makeAmmoButtons) {
        html += `
                <button class="${hideOrShow} dropdownMenuContent" onclick="${AmmoButton.makeAmmoFunction}()">${AmmoButton.buttonName}</button>
                `
    }
    html += `</div>`
    showContent.innerHTML = html + ammoChart;

}