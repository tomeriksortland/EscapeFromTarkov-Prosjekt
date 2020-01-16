function make46x30chart() {
    ammoChart = '';
    html = '';
    html = `
    <div>
    <button onclick="makeAmmoButtonList()" class="${hideOrShow} dropdownMenuContent">Back</button>
    </div>
    `
    ammoChart = `
    <table class="div3">
        <tr>
            <th>Ammo Type</th>
            <th>Damage</th>
            <th>Penetration</th>
            <th>Price</th>
        </tr>
    `

    for (info of model.array46x30) {
        ammoChart += get46x30info()


    }
    ammoChart += `</table>`

    showContent.innerHTML = html + ammoChart;

}

function get46x30info() {
    return `
    
        <tr>
            <td>${info.type}</td>
            <td>${info.damage}</td>
            <td>${info.penetration}</td>
            <td>${info.price}</td>
        </tr>
    `;
}




function make9x39chart() {
    ammoChart = '';
    html = '';
    html = `
            <div>
            <button onclick="makeAmmoButtonList()" class="${hideOrShow} dropdownMenuContent">Back</button>
            </div>
            `
    ammoChart = `
            <table class="div3">
                <tr>
                    <th>Ammo Type</th>
                    <th>Damage</th>
                    <th>Penetration</th>
                    <th>Price</th>
                </tr>
            `
    for (info of model.array9x39) {
        ammoChart += get9x39Info();
    }

    ammoChart += `</table>`

    showContent.innerHTML = html + ammoChart;

}

function get9x39Info() {

    return `
               
                   <tr>
                       <td>${info.type}</td>
                       <td>${info.damage}</td>
                       <td>${info.penetration}</td>
                       <td>${info.price}</td>
                   </tr>
               `
};


function make545x39chart() {
    ammoChart = '';
    html = '';
    html = `
    <div>
    <button onclick="makeAmmoButtonList()" class="${hideOrShow} dropdownMenuContent">Back</button>
    </div>
    `
    ammoChart = `
    <table class="div3">
        <tr>
            <th>Ammo Type</th>
            <th>Damage</th>
            <th>Penetration</th>
            <th>Price</th>
        </tr>`


    for (info of model.array545x39) {
        ammoChart += get545x39info()


    }
    ammoChart += `</table>`

    showContent.innerHTML = html + ammoChart;

}

function get545x39info() {
    return `
    
        <tr>
            <td>${info.type}</td>
            <td>${info.damage}</td>
            <td>${info.penetration}</td>
            <td>${info.price}</td>
        </tr>
    `;
}


function make545x45chart() {
    ammoChart = '';
    html = '';
    html = `
    <div>
    <button onclick="makeAmmoButtonList()" class="${hideOrShow} dropdownMenuContent">Back</button>
    </div>
    `
    ammoChart = `
    <table class="div3">
        <tr>
            <th>Ammo Type</th>
            <th>Damage</th>
            <th>Penetration</th>
            <th>Price</th>
        </tr>`


    for (info of model.array545x45) {
        ammoChart += get545x45info()


    }
    ammoChart += `</table>`

    showContent.innerHTML = html + ammoChart;

}

function get545x45info() {
    return `
    
        <tr>
            <td>${info.type}</td>
            <td>${info.damage}</td>
            <td>${info.penetration}</td>
            <td>${info.price}</td>
        </tr>
    `;
}





function make762x39chart() {
    ammoChart = '';
    html = '';
    html = `
            <div>
            <button onclick="makeAmmoButtonList()" class="${hideOrShow} dropdownMenuContent">Back</button>
            </div>
            `
    ammoChart = `
            <table class="div3">
                <tr>
                    <th>Ammo Type</th>
                    <th>Damage</th>
                    <th>Penetration</th>
                    <th>Price</th>
                </tr>
            `



    for (info of model.array762x39) {
        ammoChart += get762x39info();

    }
    ammoChart += `</table>`

    showContent.innerHTML = html + ammoChart;

}

function get762x39info() {
    return `
            
                <tr>
                    <td>${info.type}</td>
                    <td>${info.damage}</td>
                    <td>${info.penetration}</td>
                    <td>${info.price}</td>
                </tr>
            
            `;
}

function make762x51chart() {
    ammoChart = '';
    html = '';
    html = `
            <div>
            <button onclick="makeAmmoButtonList()" class="${hideOrShow} dropdownMenuContent">Back</button>
            </div>
            `
    ammoChart = `
            <table class="div3">
                <tr>
                    <th>Ammo Type</th>
                    <th>Damage</th>
                    <th>Penetration</th>
                    <th>Price</th>
                </tr>
            `



    for (info of model.array762x51) {
        ammoChart += get762x51info();

    }
    ammoChart += `</table>`

    showContent.innerHTML = html + ammoChart;

}

function get762x51info() {
    return `
            
                <tr>
                    <td>${info.type}</td>
                    <td>${info.damage}</td>
                    <td>${info.penetration}</td>
                    <td>${info.price}</td>
                </tr>
            
            `;
}


function make762x54Rchart() {
    ammoChart = '';
    html = '';
    html = `
            <div>
            <button onclick="makeAmmoButtonList()" class="${hideOrShow} dropdownMenuContent">Back</button>
            </div>
            `
    ammoChart = `
            <table class="div3">
                <tr>
                    <th>Ammo Type</th>
                    <th>Damage</th>
                    <th>Penetration</th>
                    <th>Price</th>
                </tr>
            `



    for (info of model.array762x54R) {
        ammoChart += get762x54Rinfo();

    }
    ammoChart += `</table>`

    showContent.innerHTML = html + ammoChart;

}

function get762x54Rinfo() {
    return `
            
                <tr>
                    <td>${info.type}</td>
                    <td>${info.damage}</td>
                    <td>${info.penetration}</td>
                    <td>${info.price}</td>
                </tr>
            
            `;
}
