function makeMedBackpackChart() {
    ammoChart = '';
    html = '';
    html = `
    <div>
    <button onclick="makeBackpackButtons()" class="${hideOrShow} dropdownMenuContent">Back</button>
    </div>
    `
    ammoChart = `
    <table class="div3">
        <tr>
            <th>Img</th>
            <th>Name</th>
            <th>Backpack Size</th>
            <th>Mobility Penalty</th>
        </tr>`


    for (info of model.arrayMediumBackpacks) {
        ammoChart += getMedBackpackinfo()


    }
    ammoChart += `</table>`
    showContent.innerHTML = html + ammoChart;

}

function getMedBackpackinfo() {
    return `
    
        <tr>
            <td><img src="${info.img}"</td>
            <td>${info.name}</td>
            <td>${info.size}</td>
            <td>${info.mobility}</td>
        </tr>
    `;
}

function makeXLBackpackChart() {
    ammoChart = '';
    html = '';
    html = `
    <div>
    <button onclick="makeBackpackButtons()" class="${hideOrShow} dropdownMenuContent">Back</button>
    </div>
    `
    ammoChart = `
    <table class="div3">
        <tr>
            <th>Img</th>
            <th>Name</th>
            <th>Backpack Size</th>
            <th>Mobility Penalty</th>
        </tr>`


    for (info of model.arrayXLBackpacks) {
        ammoChart += getMedBackpackinfo()


    }
    ammoChart += `</table>`
    showContent.innerHTML = html + ammoChart;

}

function getXLBackpackinfo() {
    return `
    
        <tr>
            <td><img src="${info.img}"</td>
            <td>${info.name}</td>
            <td>${info.size}</td>
            <td>${info.mobility}</td>
        </tr>
    `;
}

function makeSecureContainerChart() {
    ammoChart = '';
    html = '';
    html = `
    <div>
    <button onclick="makeEquipmentButtonList()" class="${hideOrShow} dropdownMenuContent">Back</button>
    </div>
    `
    ammoChart = `
    <table class="div3">
        <tr>
            <th>Img</th>
            <th>Name</th>
            <th>Container Size</th>
        </tr>`


    for (info of model.arraySecureContainer) {
        ammoChart += getContainerinfo()


    }
    ammoChart += `</table>`
    showContent.innerHTML = html + ammoChart;

}

function getContainerinfo() {
    return `
    
        <tr>
            <td><img src="${info.img}"</td>
            <td>${info.name}</td>
            <td>${info.size}</td>
        </tr>
    `;
}