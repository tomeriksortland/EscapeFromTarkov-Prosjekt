function makeHK416BuildChart() {
    ammoChart = '';
    html = '';
    
    html = `
            <div>
            <button onclick="makeBuildListButtons()" class="${hideOrShow} dropdownMenuContent">Back</button>
            </div>
            `
    ammoChart = `
    <div class="HK416background div4"></div>
            <table class="div3">
                <tr>
                    <th>Img</th>
                    <th>Weapon Part</th>
                </tr>
            `



    for (info of model.arrayHK416Build) {
        ammoChart += getHK416info();

    }
    ammoChart += `</table>`

    showContent.innerHTML = html + ammoChart;

}

function getHK416info() {
    return `
            
                <tr>
                    <td><img src="${info.img}"</td>
                    <td>${info.name}</td>
                </tr>
            
            `;
}

function makeM4BuildChart() {
    ammoChart = '';
    html = '';
    
    html = `
            <div>
            <button onclick="makeBuildListButtons()" class="${hideOrShow} dropdownMenuContent">Back</button>
            </div>
            `
    ammoChart = `
            <table class="div3">
                <tr>
                    <th>Img</th>
                    <th>Weapon Part</th>
                </tr>
            `



    for (info of model.arrayM4A1Build) {
        ammoChart += getM4A1info();

    }
    ammoChart += `</table>`

    showContent.innerHTML = html + ammoChart;

}

function getM4A1info() {
    return `
            
                <tr>
                    <td><img src="${info.img}"</td>
                    <td>${info.name}</td>
                </tr>
            
            `;
}

function makeMP7BuildChart() {
    ammoChart = '';
    html = '';
    
    html = `
            <div>
            <button onclick="makeBuildListButtons()" class="${hideOrShow} dropdownMenuContent">Back</button>
            </div>
            `
    ammoChart = `
            <table class="div3">
                <tr>
                    <th>Img</th>
                    <th>Weapon Part</th>
                </tr>
            `



    for (info of model.arrayMP7Build) {
        ammoChart += getMP7info();

    }
    ammoChart += `</table>`

    showContent.innerHTML = html + ammoChart;

}

function getMP7info() {
    return `
            
                <tr>
                    <td><img src="${info.img}"</td>
                    <td>${info.name}</td>
                </tr>
            
            `;
}

function makeASVALBuildChart() {
    ammoChart = '';
    html = '';
    
    html = `
            <div>
            <button onclick="makeBuildListButtons()" class="${hideOrShow} dropdownMenuContent">Back</button>
            </div>
            `
    ammoChart = `
            <table class="div3">
                <tr>
                    <th>Img</th>
                    <th>Weapon Part</th>
                </tr>
            `



    for (info of model.arrayASVALBuild) {
        ammoChart += getASVALinfo();

    }
    ammoChart += `</table>`

    showContent.innerHTML = html + ammoChart;

}

function getASVALinfo() {
    return `
            
                <tr>
                    <td><img src="${info.img}"</td>
                    <td>${info.name}</td>
                </tr>
            
            `;
}