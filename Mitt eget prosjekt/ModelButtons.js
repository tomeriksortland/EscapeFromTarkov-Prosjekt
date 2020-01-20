

const modelMenuButtons = {

    
    makeMenuCategories: [
        { makeCategoryFunction: 'createMapButtons', buttonName: 'Maps' },
        { makeCategoryFunction: 'makeAmmoButtonList', buttonName: 'Ammo' },
        { makeCategoryFunction: 'makeEquipmentButtonList', buttonName: 'Equipment' },
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
        { makeEquipmentFunction: 'makeKevlarButtons', buttonName: 'Armored Vests' },
        { makeEquipmentFunction: 'makeChestRigButtons', buttonName: 'Chest Rigs' },
        { makeEquipmentFunction: 'makeBackpackButtons', buttonName: 'Backpacks' },
        { makeEquipmentFunction: 'makeSecureContainerChart', buttonName: 'Secure Container' },
    ],

    makeHeadwearButtons: [
        { makeHeadwearFunction: 'makeEquipmentButtonList', buttonName: 'Back' },
        { makeHeadwearFunction: 'makeClass4HeadwearChart', buttonName: 'Class 4 Headwear' },
        { makeHeadwearFunction: 'makeClass5and6HeadwearChart', buttonName: 'Class 5 & 6 Headwear' }
    ],

    makeKevlarButtons: [
        { makeArmoredVestsFunction: 'makeEquipmentButtonList', buttonName: 'Back' },
        { makeArmoredVestsFunction: 'makeEarlyMidgameArmoredVestsChart', buttonName: 'Class 4 Armored Vests' },
        { makeArmoredVestsFunction: 'makeEarlyMidgameArmoredVestsChart', buttonName: 'Class 5 & 6 Armored Vests' }
    ],

    makeChestRigButtons: [
        { makeChestRigFunction: 'makeEquipmentButtonList', buttonName: 'Back' },
        { makeChestRigFunction: 'makeUnarmoredRigChart', buttonName: 'Unarmored Chest Rigs' },
        { makeChestRigFunction: 'makeArmoredRigChart', buttonName: 'Armored Chest Rigs' },
    ],

    makeBackpackButtons: [
        { makeBackpackFunction: 'makeEquipmentButtonList', buttonName: 'Back' },
        { makeBackpackFunction: 'makeMedBackpackChart', buttonName: 'Backpacks' },
        { makeBackpackFunction: 'makeBigBackpackChart', buttonName: 'XL Backpacks' },
    ]

}