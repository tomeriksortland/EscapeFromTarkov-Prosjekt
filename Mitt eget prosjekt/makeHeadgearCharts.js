function makeClass2HeadwearChart() {
    ammoChart = '';
    html = '';
    html = `
    <div>
    <button onclick="makeHeadwearButtons()" class="${hideOrShow} dropdownMenuContent">Back</button>
    </div>
    `
    ammoChart = `
    <table class="div3">
        <tr>
            <th>Name</th>
            <th>Durability</th>
            <th>Ricochet Change</th>
            <th>Ergonomics</th>
            <th>Sound Reduction</th>
            <th>Can Use Headsett?</th>
        </tr>`


    for (info of model.class2HeadwearChart) {
        ammoChart += getClass2Headwearinfo()


    }
    ammoChart += `</table>`

    showContent.innerHTML = html + ammoChart;

}

function getClass2Headwearinfo() {
    return `
    
        <tr>
            <td>${info.name}</td>
            <td>${info.durability}</td>
            <td>${info.ricochetChance}</td>
            <td>${info.eronomics}</td>
            <td>${info.soundReduction}</td>
            <td>${info.headset}</td>
        </tr>
    `;
}


function makeClass3HeadwearChart() {
    ammoChart = '';
    html = '';
    html = `
    <div>
    <button onclick="makeHeadwearButtons()" class="${hideOrShow} dropdownMenuContent">Back</button>
    </div>
    `
    ammoChart = `
    <table class="div3">
        <tr>
            <th>Name</th>
            <th>Durability</th>
            <th>Ricochet Change</th>
            <th>Ergonomics</th>
            <th>Sound Reduction</th>
            <th>Can Use Headsett?</th>
        </tr>`


    for (info of model.class3HeadwearChart) {
        ammoChart += getClass3Headwearinfo()


    }
    ammoChart += `</table>`

    showContent.innerHTML = html + ammoChart;

}

function getClass3Headwearinfo() {
    return `
    
        <tr>
            <td>${info.name}</td>
            <td>${info.durability}</td>
            <td>${info.ricochetChance}</td>
            <td>${info.eronomics}</td>
            <td>${info.soundReduction}</td>
            <td>${info.headset}</td>
        </tr>
    `;
}

function makeClass4HeadwearChart() {
    ammoChart = '';
    html = '';
    html = `
    <div>
    <button onclick="makeHeadwearButtons()" class="${hideOrShow} dropdownMenuContent">Back</button>
    </div>
    `
    ammoChart = `
    <table class="div3">
        <tr>
            <th>Name</th>
            <th>Durability</th>
            <th>Ricochet Change</th>
            <th>Ergonomics</th>
            <th>Sound Reduction</th>
            <th>Can Use Headsett?</th>
        </tr>`


    for (info of model.class4HeadwearChart) {
        ammoChart += getClass4Headwearinfo()


    }
    ammoChart += `</table>`

    showContent.innerHTML = html + ammoChart;

}

function getClass4Headwearinfo() {
    return `
    
        <tr>
            <td>${info.name}</td>
            <td>${info.durability}</td>
            <td>${info.ricochetChance}</td>
            <td>${info.eronomics}</td>
            <td>${info.soundReduction}</td>
            <td>${info.headset}</td>
        </tr>
    `;
}

function makeClass5and6HeadwearChart() {
    ammoChart = '';
    html = '';
    html = `
    <div>
    <button onclick="makeHeadwearButtons()" class="${hideOrShow} dropdownMenuContent">Back</button>
    </div>
    `
    ammoChart = `
    <table class="div3">
        <tr>
            <th>Name</th>
            <th>Durability</th>
            <th>Ricochet Change</th>
            <th>Ergonomics</th>
            <th>Sound Reduction</th>
            <th>Can Use Headsett?</th>
        </tr>`


    for (info of model.class5and6HeadwearChart) {
        ammoChart += getClass5and6Headwearinfo()


    }
    ammoChart += `</table>`

    showContent.innerHTML = html + ammoChart;

}

function getClass5and6Headwearinfo() {
    return `
    
        <tr>
            <td>${info.name}</td>
            <td>${info.durability}</td>
            <td>${info.ricochetChance}</td>
            <td>${info.eronomics}</td>
            <td>${info.soundReduction}</td>
            <td>${info.headset}</td>
        </tr>
    `;
}