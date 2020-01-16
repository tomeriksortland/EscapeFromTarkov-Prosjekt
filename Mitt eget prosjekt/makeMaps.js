function makeFactoryMap() {
    document.body.classList.add("factoryMap");
    html = '';
    html = `
            <div>
            <button onclick="createMapButtons()" class="${hideOrShow} dropdownMenuContent">Back</button>
            </div>
            `
    showContent.innerHTML = html;
}

function makeCustomsMap() {
    document.body.classList.add("customsMap");
    html = '';
    html = `
             <div>
             <button onclick="createMapButtons()" class="${hideOrShow} dropdownMenuContent">Back</button>
             </div>
             `
    showContent.innerHTML = html;
}

function makeInterchangeMap() {
    document.body.classList.add("interchangeMap")
    html = '';
    html = `
             <div>
             <button onclick="createMapButtons()" class="${hideOrShow} dropdownMenuContent">Back</button>
             </div>
             `
    showContent.innerHTML = html;
}

function makeWoodsMap() {
    document.body.classList.add("woodsMap")
    html = '';
    html = `
             <div>
             <button onclick="createMapButtons()" class="${hideOrShow} dropdownMenuContent">Back</button>
             </div>
             `
    showContent.innerHTML = html;
}

function makeShorelineMap() {
    document.body.classList.add("shorelineMap")
    html = '';
    html = `
             <div>
             <button onclick="createMapButtons()" class="${hideOrShow} dropdownMenuContent">Back</button>
             </div>
             `
    showContent.innerHTML = html;
}

function makeReserveMap() {
    document.body.classList.add("reserveMap")
    html = '';
    html = `
             <div>
             <button onclick="createMapButtons()" class="${hideOrShow} dropdownMenuContent">Back</button>
             </div>
             `
    showContent.innerHTML = html;
}