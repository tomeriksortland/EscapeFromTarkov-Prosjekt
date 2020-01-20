

const modelMenuButtons = {

    
    makeMenuCategories: [
        { makeCategoryFunction: 'makeBuildListButtons', buttonName: 'Weapon Builds' },
        { makeCategoryFunction: 'createMapButtons', buttonName: 'Maps' },
        { makeCategoryFunction: 'makeAmmoButtonList', buttonName: 'Ammo' },
        { makeCategoryFunction: 'makeEquipmentButtonList', buttonName: 'Equipment' },
    ],

    makeBuildButtons: [
        { makeAmmoFunction: 'updateView', buttonName: 'Back' },
        { makeAmmoFunction: 'makeHK416Build', buttonName: 'HK416 Recoil Build' },
        { makeAmmoFunction: 'makeM4Build', buttonName: 'M4A1 Recoil Build' },
        { makeAmmoFunction: 'makeMP7Build', buttonName: 'MP7A2 Recoil Build' },
        { makeAmmoFunction: 'makeASVALBuild', buttonName: 'ASVAL Recoil Build' },
        { makeAmmoFunction: 'makeAK74Build', buttonName: 'AK74M Recoil Build' },
    ],


    makeAmmoButtons: [
        { makeAmmoFunction: 'updateView', buttonName: 'Back' },
        { makeAmmoFunction: 'make46x30chart', buttonName: '4.6 x 30' },
        { makeAmmoFunction: 'make9x39chart', buttonName: '9 x 39' },
        { makeAmmoFunction: 'make545x39chart', buttonName: '5.45 x 39' },
        { makeAmmoFunction: 'make556x45chart', buttonName: '5.56 x 45' },
        { makeAmmoFunction: 'make762x39chart', buttonName: '7.62 x 39' },
        { makeAmmoFunction: 'make762x51chart', buttonName: '7.62 x 51' },
        { makeAmmoFunction: 'make762x54Rchart', buttonName: '7.62 x 54R' },
    ],


    makeMapButtons: [
        { makeMapFunction: 'updateView', buttonName: 'Back' },
        { makeMapFunction: 'makeFactoryMap', buttonName: 'Factory' },
        { makeMapFunction: 'makeCustomsMap', buttonName: 'Customs' },
        { makeMapFunction: 'makeInterchangeMap', buttonName: 'Interchange' },
        { makeMapFunction: 'makeWoodsMap', buttonName: 'Woods' },
        { makeMapFunction: 'makeShorelineMap', buttonName: 'Shoreline' },
        { makeMapFunction: 'makeReserveMap', buttonName: 'Reserve' },
    ],

    
    makeEquipmentButtons: [
        { makeEquipmentFunction: 'updateView', buttonName: 'Back',},
        { makeEquipmentFunction: 'makeHeadwearButtons', buttonName: 'Headwear' },
        { makeEquipmentFunction: 'makeHeadsetChart', buttonName: 'Headsets' },
        { makeEquipmentFunction: 'makeBodyArmorButtons', buttonName: 'Body Armor' },
        { makeEquipmentFunction: 'makeChestRigButtons', buttonName: 'Chest Rigs' },
        { makeEquipmentFunction: 'makeBackpackButtons', buttonName: 'Backpacks' },
        { makeEquipmentFunction: 'makeSecureContainerChart', buttonName: 'Secure Container' },
    ],

    makeHeadwearButtons: [
        { makeHeadwearFunction: 'makeEquipmentButtonList', buttonName: 'Back' },
        { makeHeadwearFunction: 'makeClass4HeadwearChart', buttonName: 'Class 4 Headwear' },
        { makeHeadwearFunction: 'makeClass5and6HeadwearChart', buttonName: 'Class 5 & 6 Headwear' }
    ],

    makeBodyArmorButtons: [
        { makeBodyArmorFunction: 'makeEquipmentButtonList', buttonName: 'Back' },
        { makeBodyArmorFunction: 'makeClass4ArmorChart', buttonName: 'Class 4 Body Armor' },
        { makeBodyArmorFunction: 'makeClass5ArmorChart', buttonName: 'Class 5 Body Armor' },
        { makeBodyArmorFunction: 'makeClass6ArmorChart', buttonName: 'Class 6 Body Armor' }
    ],

    arrayChestRigType: [
        { makeChestRigFunction: 'makeEquipmentButtonList', buttonName: 'Back' },
        { makeChestRigFunction: 'makeArmoredRigCharts', buttonName: 'Armored Chest Rigs' },
        { makeChestRigFunction: 'makeUnarmoredRigCharts', buttonName: 'Unarmored Chest Rigs' },
    ],

    makeBackpackButtons: [
        { makeBackpackFunction: 'makeEquipmentButtonList', buttonName: 'Back' },
        { makeBackpackFunction: 'makeMedBackpackChart', buttonName: 'Backpacks' },
        { makeBackpackFunction: 'makeXLBackpackChart', buttonName: 'XL Backpacks' },
    ]

}