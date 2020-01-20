function makeArmoredRigCharts() {
    ammoChart = '';
    html = '';
    html = `
    <div>
    <button onclick="makeChestRigButtons()" class="${hideOrShow} dropdownMenuContent">Back</button>
    </div>
    `
    ammoChart = `
    <table class="div3">
        <tr>
            <th>Img</th>
            <th>Name</th>
            <th>Class</th>
            <th>Container Size</th>
            <th>Durability</th>
            <th>Mobility Penalty</th>
            <th>Ergonomics</th>
        </tr>`


    for (info of model.arrayArmoredRigs) {
        ammoChart += getArmoredChestRiginfo()


    }
    ammoChart += `</table>`

    showContent.innerHTML = html + ammoChart;

}

function getArmoredChestRiginfo() {
    return `
    
        <tr>
            <td><img src="${info.img}"</td>
            <td>${info.name}</td>
            <td>${info.class}</td>
            <td>${info.size}</td>
            <td>${info.durability}</td>
            <td>${info.mobility}</td>
            <td>${info.eronomics}</td>
        </tr>
    `;
}

function makeUnarmoredRigCharts() {
    ammoChart = '';
    html = '';
    html = `
    <div>
    <button onclick="makeChestRigButtons()" class="${hideOrShow} dropdownMenuContent">Back</button>
    </div>
    `
    ammoChart = `
    <table class="div3">
        <tr>
            <th>Img</th>
            <th>Name</th>
            <th>Container Size</th>
        </tr>`


    for (info of model.arrayUnarmoredRigs) {
        ammoChart += getUnarmoredChestRiginfo()


    }
    ammoChart += `</table>`

    showContent.innerHTML = html + ammoChart;

}

function getUnarmoredChestRiginfo() {
    return `
    
        <tr>
            <td><img src="${info.img}"</td>
            <td>${info.name}</td>
            <td>${info.size}</td>
    `;
}