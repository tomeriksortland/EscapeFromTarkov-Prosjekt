


function makeBuildListButtons() {
    ammoChart = '';
    html = '';
    html += `<div>
            <button onclick="dropDown()" class="dropDownMenu div1">Menu</button>
            </div>
            <div class="div2">
    `
    for (BuildButton of modelMenuButtons.makeBuildButtons) {
        html += `
                <button class="${hideOrShow} dropdownMenuContent" onclick="${BuildButton.makeAmmoFunction}()">${BuildButton.buttonName}</button>
                `
    }
    html += `</div>`
    showContent.innerHTML = html + ammoChart;

}


function makeAmmoButtonList() {
    ammoChart = '';
    html = '';
    html += `<div>
            <button onclick="dropDown()" class="dropDownMenu div1">Menu</button>
            </div>
            <div class="div2">
    `
    for (AmmoButton of modelMenuButtons.makeAmmoButtons) {
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
    for (mapButton of modelMenuButtons.makeMapButtons) {
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
    for (EquipmentButton of modelMenuButtons.makeEquipmentButtons) {
        html += `
                <button class="${hideOrShow} dropdownMenuContent" onclick="${EquipmentButton.makeEquipmentFunction}()">${EquipmentButton.buttonName}</button>
                `
    }
    html += `</div>`
    showContent.innerHTML = html;

}

function makeHeadwearButtons() {
    html = '';
    html += `<div>
        <button onclick="dropDown()" class="dropDownMenu div1">Menu</button>
        </div>
        <div class="div2">
`
    for (HeadwearButton of modelMenuButtons.makeHeadwearButtons) {
        html += `
            <button class="${hideOrShow} dropdownMenuContent" onclick="${HeadwearButton.makeHeadwearFunction}()">${HeadwearButton.buttonName}</button>
            `
    }
    html += `</div>`
    showContent.innerHTML = html;

}

function makeBodyArmorButtons() {
    html = '';
    html += `<div>
        <button onclick="makeEquipmentButtonList()" class="dropDownMenu div1">Menu</button>
        </div>
        <div class="div2">
`
    for (ArmoredVestsButton of modelMenuButtons.makeBodyArmorButtons) {
        html += `
            <button class="${hideOrShow} dropdownMenuContent" onclick="${ArmoredVestsButton.makeBodyArmorFunction}()">${ArmoredVestsButton.buttonName}</button>
            `
    }
    html += `</div>`
    showContent.innerHTML = html;

}

function makeChestRigButtons() {
    html = '';
    html += `<div>
        <button onclick="dropDown()" class="dropDownMenu div1">Menu</button>
        </div>
        <div class="div2">
`
    for (chestRigButton of modelMenuButtons.arrayChestRigType) {
        html += `
            <button class="${hideOrShow} dropdownMenuContent" onclick="${chestRigButton.makeChestRigFunction}()">${chestRigButton.buttonName}</button>
            `
    }
    html += `</div>`
    showContent.innerHTML = html;

}

function makeBackpackButtons() {
    html = '';
    html += `<div>
        <button onclick="dropDown()" class="dropDownMenu div1">Menu</button>
        </div>
        <div class="div2">
`
    for (BackpackButton of modelMenuButtons.makeBackpackButtons) {
        html += `
            <button class="${hideOrShow} dropdownMenuContent" onclick="${BackpackButton.makeBackpackFunction}()">${BackpackButton.buttonName}</button>
            `
    }
    html += `</div>`
    showContent.innerHTML = html;

}