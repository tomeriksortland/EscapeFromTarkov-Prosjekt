function makeClass4ArmorChart() {
    ammoChart = '';
    html = '';
    html = `
    <div>
    <button onclick="makeBodyArmorButtons()" class="${hideOrShow} dropdownMenuContent">Back</button>
    </div>
    `
    ammoChart = `
    <table class="div3">
        <tr>
            <th>Img</th>
            <th>Name</th>
            <th>Durability</th>
            <th>Mobility Penalty</th>
            <th>Ergonomics</th>
        </tr>`


    for (info of model.arrayClass4ArmoredVests) {
        ammoChart += getClass4BodyArmorinfo()


    }
    ammoChart += `</table>`
    showContent.innerHTML = html + ammoChart;

}

function getClass4BodyArmorinfo() {
    return `
    
        <tr>
            <td><img src="${info.img}"</td>
            <td>${info.name}</td>
            <td>${info.durability}</td>
            <td>${info.mobility}</td>
            <td>${info.eronomics}</td>
        </tr>
    `;
}

function makeClass5ArmorChart() {
    ammoChart = '';
    html = '';
    html = `
    <div>
    <button onclick="makeBodyArmorButtons()" class="${hideOrShow} dropdownMenuContent">Back</button>
    </div>
    `
    ammoChart = `
    <table class="div3">
        <tr>
            <th>Img</th>
            <th>Name</th>
            <th>Durability</th>
            <th>Mobility Penalty</th>
            <th>Ergonomics</th>
        </tr>`


    for (info of model.arrayClass5ArmoredVests) {
        ammoChart += getClass5BodyArmorinfo()


    }
    ammoChart += `</table>`
    showContent.innerHTML = html + ammoChart;

}

function getClass5BodyArmorinfo() {
    return `
    
        <tr>
            <td><img src="${info.img}"</td>
            <td>${info.name}</td>
            <td>${info.durability}</td>
            <td>${info.mobility}</td>
            <td>${info.eronomics}</td>
        </tr>
    `;
}

function makeClass6ArmorChart() {
    ammoChart = '';
    html = '';
    html = `
    <div>
    <button onclick="makeBodyArmorButtons()" class="${hideOrShow} dropdownMenuContent">Back</button>
    </div>
    `
    ammoChart = `
    <table class="div3">
        <tr>
            <th>Img</th>
            <th>Name</th>
            <th>Durability</th>
            <th>Mobility Penalty</th>
            <th>Ergonomics</th>
        </tr>`


    for (info of model.arrayClass6ArmoredVests) {
        ammoChart += getClass6BodyArmorinfo()


    }
    ammoChart += `</table>`
    showContent.innerHTML = html + ammoChart;

}

function getClass6BodyArmorinfo() {
    return `
    
        <tr>
            <td><img src="${info.img}"</td>
            <td>${info.name}</td>
            <td>${info.durability}</td>
            <td>${info.mobility}</td>
            <td>${info.eronomics}</td>
        </tr>
    `;
}