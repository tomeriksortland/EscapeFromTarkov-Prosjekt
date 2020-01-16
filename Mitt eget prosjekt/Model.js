let hideOrShow = "hide";
let customsMapLink = "./img/Customs.png";

let model = {

    weaponCategory: [
        { categories: 'Assault Rifles' },
        { categories: 'Heavy Assault Rifles' },
        { categories: '' },
    ],


    calibers: [
        { size: '4.6 x 30' },
        { size: '9 x 39' },
        { size: '5.45 x 39' },
        { size: '5.56 x 45' },
        { size: '7.62 x 39' },
        { size: '7.62 x 51' },
        { size: '7.62 x 54R' },
    ],



    makeMapButtons: [
        { makeMapFunction: 'makeFactoryMap', buttonName: 'Factory' },
        { makeMapFunction: 'makeCustomsMap', buttonName: 'Customs' },
        { makeMapFunction: 'makeInterchangeMap', buttonName: 'Interchange' },
        { makeMapFunction: 'makeWoodsMap', buttonName: 'Woods' },
        { makeMapFunction: 'makeShorelineMap', buttonName: 'Shoreline' },
        { makeMapFunction: 'makeReserveMap', buttonName: 'Reserve' },
    ],

    array46x30: [
        { type: 'AP SX', damage: '35', penetration: '47', price: 'xxx' },
        { type: 'Subsonic SX', damage: '41', penetration: '34', price: 'xxx' },
        { type: 'FMJ SX', damage: '43', penetration: '30', price: 'xxx' },
        { type: 'Action SX', damage: '65', penetration: '13', price: 'xxx' },
    ],

    array9x39: [
        { type: '7N12 BP', damage: '60', penetration: '44', price: 'xxx' },
        { type: '7N9 SPP', damage: '67', penetration: '38', price: 'xxx' },
        { type: 'SP-6', damage: '58', penetration: '38', price: 'xxx' },
        { type: 'SP-5', damage: '68', penetration: '30', price: 'xxx' },
    ],

    array545x39: [
        { type: '7N39 Igolnik', damage: '37', penetration: '62', price: 'xxx' },
        { type: 'BS Rounds', damage: '40', penetration: '50', price: 'xxx' },
        { type: 'BP Rounds', damage: '42', penetration: '32', price: 'xxx' },
        { type: 'BT Rounds', damage: '44', penetration: '33', price: 'xxx' },
    ],

    array545x45: [
        { type: 'M995', damage: '42', penetration: '53', price: 'xxx' },
        { type: 'M856A1', damage: '56', penetration: '34', price: 'xxx' },
        { type: 'M855A1', damage: '57', penetration: '31', price: 'xxx' },
    ],

    array762x39: [
        { type: 'BP', damage: '50', penetration: '45', price: 'xxx' },
        { type: 'PS', damage: '57', penetration: '33', price: 'xxx' },
    ],

    array762x51: [
        { type: 'M61', damage: '70', penetration: '68', price: 'xxx' },
        { type: 'M62', damage: '79', penetration: '54', price: 'xxx' },
        { type: 'M80', damage: '80', penetration: '45', price: 'xxx' },
    ],

    array762x54R: [
        { type: 'SNB', damage: '75', penetration: '62', price: 'xxx' },
        { type: '7N1 Sniper Cartridge', damage: '86', penetration: '45', price: 'xxx' },
        { type: 'LPS Gzh', damage: '81', penetration: '42', price: 'xxx' },
    ],
}