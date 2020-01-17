let hideOrShow = "hide";
let customsMapLink = "./img/Customs.png";

const model = {

    

    class2HeadwearChart: [
        { name: 'PSH-97 Djeta', durability: '65', ricochetChance: 'Low', eronomics: '-14', soundReduction: 'High', headset: 'No' },
        { name: 'SHPM Firefighters', durability: '40', ricochetChance: 'Low', eronomics: '-10', soundReduction: 'High', headset: 'No' },
        { name: 'Kolpak-1S riot', durability: '20', ricochetChance: 'Low', eronomics: '-5', soundReduction: 'High', headset: 'No' },
    ],

    class3HeadwearChart: [
        { name: 'SSSh-95 Sfera-S', durability: '100', ricochetChance: 'Medium', eronomics: '-3', soundReduction: 'High', headset: 'No' },
        { name: 'Kiver-M Helmet', durability: '35', ricochetChance: 'Medium', eronomics: '-1', soundReduction: 'High', headset: 'No' },
        { name: 'SSh-68', durability: '30', ricochetChance: 'High', eronomics: '-13', soundReduction: 'None', headset: 'Yes' },
        { name: 'LZSh light', durability: '30', ricochetChance: 'Medium', eronomics: '-1', soundReduction: 'None', headset: 'Yes' },
        { name: '6B47 Ratnik-BSh', durability: '25', ricochetChance: 'High', eronomics: '-2', soundReduction: 'Low', headset: 'Yes' },
        { name: 'UNTAR Helmet', durability: '25', ricochetChance: 'High', eronomics: '-2', soundReduction: 'Low', headset: 'Yes' },
    ],

    class4HeadwearChart: [
        { name: 'Crye Precision Airframe', durability: '40', ricochetChance: 'High', eronomics: '-3', soundReduction: 'None', headset: 'Yes' },
        { name: 'Ops-Core Fast MT SUPER HIGH CUT', durability: '40', ricochetChance: 'High', eronomics: '0', soundReduction: 'None', headset: 'Yes' },
        { name: 'Team Wendy EXFIL Ballistic', durability: '45', ricochetChance: 'High', eronomics: '-4', soundReduction: 'None', headset: 'Yes' },
        { name: 'Maska 1Sch', durability: '60', ricochetChance: 'Medium', eronomics: '-7', soundReduction: 'High', headset: 'No' },
        { name: 'BNTI LSHZ-2DTM', durability: '55', ricochetChance: 'High', eronomics: '-10', soundReduction: 'High', headset: 'No' },
        { name: 'Highcom Striker ACHHC IIIA', durability: '30', ricochetChance: 'High', eronomics: '-2', soundReduction: 'None', headset: 'Yes' },
        { name: 'MSA ACH TC-2002 MICH Series', durability: '27', ricochetChance: 'High', eronomics: '-2', soundReduction: 'None', headset: 'Yes' },
    ],

    
    class5and6HeadwearChart: [
        { name: 'Altyn helmet', durability: '45', ricochetChance: 'High', eronomics: '-6', soundReduction: 'High', headset: 'No' },
        { name: 'Vulkan-5 (LShZ-5) heavy', durability: '55', ricochetChance: 'High', eronomics: '-20', soundReduction: 'High', headset: 'No' },
    ],

    arrayHeadset: [
        { name: 'Peltor ComTac 2' },
        { name: 'MSA Sordin Supreme' },
        { name: 'Peltor Tactical Sport' },
        { name: 'Ops-Core FAST RAC' },
        { name: 'GSSh-01 Active' },
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

    array556x45: [
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