let hideOrShow = "hide";

const model = {


    class4HeadwearChart: [
        { img: './img/Helmets/Airframe.png', name: 'Crye Precision Airframe', durability: '40', ricochetChance: 'High', eronomics: '-3', soundReduction: 'None', headset: 'Yes' },
        { img: './img/Helmets/FastMT.gif', name: 'Ops-Core Fast MT SUPER HIGH CUT', durability: '40', ricochetChance: 'High', eronomics: '0', soundReduction: 'None', headset: 'Yes' },
        { img: './img/Helmets/WENDY.gif', name: 'Team Wendy EXFIL Ballistic', durability: '45', ricochetChance: 'High', eronomics: '-4', soundReduction: 'None', headset: 'Yes' },
        { img: './img/Helmets/Killahelmet.gif', name: 'Maska 1Sch', durability: '60', ricochetChance: 'Medium', eronomics: '-7', soundReduction: 'High', headset: 'No' },
    ],

    class5and6HeadwearChart: [
        { img: './img/Helmets/Altyn.png', name: 'Altyn helmet', durability: '45', ricochetChance: 'High', eronomics: '-6', soundReduction: 'High', headset: 'No' },
        { img: './img/Helmets/Vulkan5.png', name: 'Vulkan-5 (LShZ-5) heavy', durability: '55', ricochetChance: 'High', eronomics: '-20', soundReduction: 'High', headset: 'No' },
    ],

    arrayHeadset: [
        { img: './img/Headsets/Sordin.png', name: 'MSA Sordin Supreme' },
        { img: './img/Headsets/Comtac2.png', name: 'Peltor ComTac 2' },
        { img: './img/Headsets/TacticalSupport.png', name: 'Peltor Tactical Sport' },
        { img: './img/Headsets/Rac.png', name: 'Ops-Core FAST RAC' },
        { img: './img/Headsets/Gssh01.png', name: 'GSSh-01 Active' },
    ],

    arrayClass4ArmoredVests: [
        { img: './img/BodyArmor/Trooper.png', name: 'Highcom Trooper TFO Armor', prot: 'Thorax', durability: '70', mobility: '-9%', eronomics: '-3' },
        { img: './img/BodyArmor/6B23.png', name: '6B23-2 Armor', prot: 'Thorax and Stomach', durability: '55', mobility: '-11%', eronomics: '-9'  },
        { img: './img/BodyArmor/6B13.gif', name: '6B13 Assault', prot: 'Thorax and Stomach', durability: '47', mobility: '-12%', eronomics: '-5'  },
        { img: './img/BodyArmor/Gzhel.png', name: 'BNTI Gzhel Armor', prot: 'Thorax and Stomach', durability: '75', mobility: '-10%', eronomics: '-4'  },
    ],

    arrayClass5ArmoredVests: [
        { img: './img/BodyArmor/KillaArmor.png', name: '6B13 M Assault', prot: 'Thorax and Stomach', durability: '60', mobility: '-9%', eronomics: '-5'  },
        { img: './img/BodyArmor/Gen4Assault.png', name: 'Gen4 Armor (Assault Kit)', prot: 'Thorax, Arms and Stomach', durability: '68', mobility: '-17%', eronomics: '-8'  },
        { img: './img/BodyArmor/RedutM.png', name: 'FORT Redut-M', prot: 'Thorax and Stomach', durability: '57', mobility: '-13%', eronomics: '-11'  },
        { img: './img/BodyArmor/RedutT5.png', name: 'FORT Redut-T5', prot: 'Thorax, Arms and Stomach', durability: '95', mobility: '-37%', eronomics: '-14'  },
        { img: './img/BodyArmor/Gen4Full.png', name: 'Gen4 Armor (Full Protection)', prot: 'Thorax, Arms and Stomach', durability: '80', mobility: '-33%', eronomics: '-18'  },
        { img: './img/BodyArmor/Gen4HMK.png', name: 'Gen4 Armor (Mobility Kit)', prot: 'Thorax and Stomach', durability: '62', mobility: '-11%', eronomics: '-11'  },
    ],

    arrayClass6ArmoredVests: [
        { img: './img/BodyArmor/FORT.png', name: '6B43 Armor', prot: 'Thorax, Arms and Stomach', durability: '75', mobility: '-40%', eronomics: '-27'  },
        { img: './img/BodyArmor/Zhuk6a.png', name: 'Zhuk-6A', prot: 'Thorax and Stomach', durability: '75', mobility: '-13%', eronomics: '-6'  },
    ],

    arrayArmoredRigs: [
        { img: './img/ChestRigs/Tactec.png', name: '5.11 Tactec', class: '5', size: '18', durability: '50', mobility: '-7%', eronomics: '-3' },
        { img: './img/ChestRigs/TV110.png', name: 'WarTech TV-110', class: '4', size: '23', durability: '85', mobility: '-8%', eronomics: '-5' },
        { img: './img/ChestRigs/A18.png', name: 'Ars Arma A18 Skanda', class: '4', size: '25', durability: '80', mobility: '-7%', eronomics: '-6' },
        { img: './img/ChestRigs/AVS.png', name: 'Crye Precision AVS', class: '4', size: '23', durability: '70', mobility: '-10%', eronomics: '-2' },
        { img: './img/ChestRigs/M1.png', name: 'ANA Tactical M1', class: '4', size: '20', durability: '65', mobility: '-10%', eronomics: '-5' },
        { img: './img/ChestRigs/M2.png', name: 'ANa Tactical M2', class: '4', size: '18', durability: '60', mobility: '-8%', eronomics: '-2' },
    ],

    arrayUnarmoredRigs: [
        { img: './img/ChestRigs/BeltA.png', name: 'Belt-A + Belt-B', size: '25' },
        { img: './img/ChestRigs/MPPV.png', name: 'Velocity Systems Multi-Purpose Vest', size: '24' },
        { img: './img/ChestRigs/AlphaRig.png', name: 'ANA Tactical Alpha Rig', size: '20' },
        { img: './img/ChestRigs/MK3Rig.png', name: 'Wartech MK3 Rig', size: '20' },
    ],

    arrayMediumBackpacks: [
        { img: './img/Backpacks/Oakley.png', name: 'Oakley Mechanism Heavy', size: '32', mobility: '-8%' },
        { img: './img/Backpacks/Trizip.png', name: 'Tri-Zip', size: '30', mobility: '-15%' },
        { img: './img/Backpacks/Beta2.png', name: 'Beta 2', size: '30', mobility: '10%' },
        { img: './img/Backpacks/Berkut.png', name: 'Wartech Berkut VV-102', size: '20', mobility: '0%' },
    ],


    arrayXLBackpacks: [
        { img: './img/Backpacks/6SH118.png', name: '6SH118 Raid', size: '48', mobility: '-45%' },
        { img: './img/Backpacks/Blackjack50.png', name: 'Mystery Ranch Blackjack 50', size: '42', mobility: '-30%' },
        { img: './img/Backpacks/Attack2.png', name: 'SSO Attack 2', size: '35', mobility: '20%' },
        { img: './img/Backpacks/Pilgrim.png', name: 'Pilgrim Tourist', size: '35', mobility: '-28%' },
        { img: './img/Backpacks/Paratus.png', name: '3V G Paratus', size: '35', mobility: '-5%' },
    ],

    arrayHK416Build: [
        { img: './img/M4A1Build/Mag.png', name: 'Magpul PMAG D-60' },
        { img: './img/HK416Build/Sight.png', name: 'Whatever you prefeer' },
        { img: './img/HK416Build/BufferTube.png', name: 'HK "Enhanced Tube" buffer tube' },
        { img: './img/HK416Build/Stock.png', name: 'HK E1 Stock' },
        { img: './img/HK416Build/PistolGrip.png', name: 'HK Ergo PSG-1' },
        { img: './img/HK416Build/Barrel.png', name: '20" Barrel for 416A5' },
        { img: './img/HK416Build/Handguard.png', name: 'HK MRS 14" Keymod' },
        { img: './img/HK416Build/6inchGuide.png', name: 'Strike Industries Keymod 6 Inch Guide' },
        { img: './img/HK416Build/Foregrip.png', name: 'Zenit RK-2' },
        { img: './img/HK416Build/ChargeHandle.png', name: 'Raptor Charging Handle' },
        { img: './img/HK416Build/Muzzle.png', name: 'Daniel Defence Wave Muzzle' },
        { img: './img/HK416Build/Suppressor.png', name: 'Daniel Defence Wave QD' },
        { img: './img/HK416Build/GasBlock.png', name: 'HK 416A5 Regular Low Profile Gas Block' },
        { img: './img/HK416Build/RearSight.gif', name: 'MBUS Rear Sight' },
        { img: './img/HK416Build/FrontSight.gif', name: 'MBUS Front Sight' },
    ],

    arrayM4A1Build: [
        { img: './img/M4A1Build/Mag.png', name: 'Magpul PMAG D-60' },
        { img: './img/M4A1Build/Sight.png', name: 'Whatever you prefeer' },
        { img: './img/M4A1Build/Reciver.png', name: 'Vltor MUR-1S' },
        { img: './img/M4A1Build/BufferTube.gif', name: 'SI Advanced Receiver' },
        { img: './img/M4A1Build/Stock.png', name: 'HK E1 Stock' },
        { img: './img/M4A1Build/PistolGrip.png', name: 'HK Ergo PSG-1' },
        { img: './img/M4A1Build/Barrel.png', name: '370mm Barrel for AR-15' },
        { img: './img/M4A1Build/Handguard.png', name: 'SAI 10" Rail foregrip' },
        { img: './img/M4A1Build/4.1inchGuide.png', name: 'Magpul M-LOK 4.1 Inch Guide' },
        { img: './img/M4A1Build/Foregrip.png', name: 'Zenit RK-2' },
        { img: './img/M4A1Build/ChargeHandle.png', name: 'Raptor Charging Handle' },
        { img: './img/M4A1Build/Jailbreak.png', name: 'SAI Jail Break' },
        { img: './img/M4A1Build/Muzzle.png', name: 'Bulletec ST-6012' },
        { img: './img/M4A1Build/GasBlock.png', name: 'JP Enterprises Gas System-5b' },
        { img: './img/M4A1Build/RearSight.gif', name: 'MBUS Rear Sight' },
        { img: './img/M4A1Build/FrontSight.gif', name: 'MBUS Front Sight' },
    ],

    arrayMP7Build: [
        { img: './img/MP7Build/Mag.png', name: 'Standard MP7 40-Round Mag' },
        { img: './img/MP7Build/Sight.png', name: 'Whatever you prefeer' },
        { img: './img/MP7Build/Foregrip.png', name: 'Zenit RK-2' },
        { img: './img/MP7Build/Muzzle.png', name: 'HK A1 4.6x30 Flashhider' },
        { img: './img/MP7Build/Suppressor.png', name: 'B&T Rotex 2' },
        { img: './img/MP7Build/RearSight.gif', name: 'MBUS Rear Sight' },
        { img: './img/MP7Build/FrontSight.gif', name: 'MBUS Front Sight' },
    ],

    arrayASVALBuild: [
        { img: './img/ASVALBuild/Mag.png', name: '30-round SR3M.130' },
        { img: './img/ASVALBuild/Sight.png', name: 'Whatever you prefeer' },
        { img: './img/ASVALBuild/Cover.png', name: 'AS VAL Dust Cover' },
        { img: './img/ASVALBuild/Stock.png', name: 'TSNIITochMash AS VAL Stock' },
        { img: './img/ASVALBuild/PistolGrip.png', name: 'AS VAL Pistol Grip' },
        { img: './img/ASVALBuild/Mount.png', name: 'TOZ 6P29M Mount' },
        { img: './img/ASVALBuild/Foregrip.png', name: 'Zenit RK-2' },
    ],

    arraySecureContainer: [
        { img: './img/SecureContainer/Kappa.png', name: 'KAPPA Container', size: '12' },
        { img: './img/SecureContainer/Gamma.png', name: 'Gamma Container', size: '9' },
        { img: './img/SecureContainer/Epsilon.png', name: 'Epsilon Container', size: '8' },
        { img: './img/SecureContainer/Beta.png', name: 'Beta Container', size: '6' },
        { img: './img/SecureContainer/Alpha.png', name: 'Alpha Container', size: '4' },
    ],

    
    array46x30: [
        { img: './img/Ammo/46x30/APSX.png', type: 'AP SX', damage: '35', penetration: '47', weapon: 'MP7A1, MP7A2' },
        { img: './img/Ammo/46x30/SubsonicSX.png', type: 'Subsonic SX', damage: '41', penetration: '34', weapon: 'MP7A1, MP7A2' },
        { img: './img/Ammo/46x30/FMJSX.png', type: 'FMJ SX', damage: '43', penetration: '30', weapon: 'MP7A1, MP7A2' },
        { img: './img/Ammo/46x30/ActionSX.png', type: 'Action SX', damage: '65', penetration: '13', weapon: 'MP7A1, MP7A2' },
    ],

    array9x39: [
        { img: './img/Ammo/9x39/7N12BP.png', type: '7N12 BP', damage: '60', penetration: '44', weapon: 'AS VAL, VSS' },
        { img: './img/Ammo/9x39/7N9SPP.png', type: '7N9 SPP', damage: '67', penetration: '38', weapon: 'AS VAL, VSS' },
        { img: './img/Ammo/9x39/SP6.png', type: 'SP-6', damage: '58', penetration: '38', weapon: 'AS VAL, VSS' },
        { img: './img/Ammo/9x39/SP5.png', type: 'SP-5', damage: '68', penetration: '30', weapon: 'AS VAL, VSS' },
    ],

    array545x39: [
        { img: './img/Ammo/545x39/Igolnik.png', type: '7N39 Igolnik', damage: '37', penetration: '62', weapon: 'RPK-16, AK-105, AK-74 Variants' },
        { img: './img/Ammo/545x39/BS.png', type: 'BS Rounds', damage: '40', penetration: '50', weapon: 'RPK-16, AK-105, AK-74 Variants' },
        { img: './img/Ammo/545x39/BP.png', type: 'BP Rounds', damage: '42', penetration: '32', weapon: 'RPK-16, AK-105, AK-74 Variants' },
        { img: './img/Ammo/545x39/BT.png', type: 'BT Rounds', damage: '44', penetration: '33', weapon: 'RPK-16, AK-105, AK-74 Variants' },
    ],

    array556x45: [
        { img: './img/Ammo/556x45/M995.png', type: 'M995', damage: '42', penetration: '53', weapon: 'M4A1, HK416, TX-15, DT MDR, ADAR, AK-101/102' },
        { img: './img/Ammo/556x45/M856A1.png', type: 'M856A1', damage: '56', penetration: '34', weapon: 'M4A1, HK416, TX-15, DT MDR, ADAR, AK-101/102' },
        { img: './img/Ammo/556x45/M855A1.png', type: 'M855A1', damage: '57', penetration: '31', weapon: 'M4A1, HK416, TX-15, DT MDR, ADAR, AK-101/102' },
    ],

    array762x39: [
        { img: './img/Ammo/762x39/BP.png', type: 'BP', damage: '50', penetration: '45', weapon: 'AK-103/104, All AKMs, SKS' },
        { img: './img/Ammo/762x39/PS.png', type: 'PS', damage: '57', penetration: '33', weapon: 'AK-103/104, All AKMs, SKS' },
        { img: './img/Ammo/762x39/T45M.png', type: 'T45M', damage: '62', penetration: '31', weapon: 'AK-103/104, All AKMs, SKS' },
        { img: './img/Ammo/762x39/US.png', type: 'US', damage: '56', penetration: '29', weapon: 'AK-103/104, All AKMs, SKS' },
    ],

    array762x51: [
        { img: './img/Ammo/762x51/M61.png', type: 'M61', damage: '70', penetration: '68', weapon: 'SA-58, DT MDR.308, M1A, RSASS, SR-25, DVL-10, M700, Orsis-5000' },
        { img: './img/Ammo/762x51/M62.png', type: 'M62', damage: '79', penetration: '54', weapon: 'SA-58, DT MDR.308, M1A, RSASS, SR-25, DVL-10, M700, Orsis-5000' },
        { img: './img/Ammo/762x51/M80.png', type: 'M80', damage: '80', penetration: '45', weapon: 'SA-58, DT MDR.308, M1A, RSASS, SR-25, DVL-10, M700, Orsis-5000' },
        { img: './img/Ammo/762x51/TPZSP.png', type: 'TPZ SP', damage: '60', penetration: '36', weapon: 'SA-58, DT MDR.308, M1A, RSASS, SR-25, DVL-10, M700, Orsis-5000' },
    ],

    array762x54R: [
        { img: './img/Ammo/762x54R/7N37.png', type: '7N37', damage: '72', penetration: '70', weapon: 'SVDS, SV-98, Mosin' },
        { img: './img/Ammo/762x54R/SNB.png', type: 'SNB', damage: '75', penetration: '62', weapon: 'SVDS, SV-98, Mosin' },
        { img: './img/Ammo/762x54R/7BT1.png', type: '7BT1', damage: '78', penetration: '59', weapon: 'SVDS, SV-98, Mosin' },
        { img: './img/Ammo/762x54R/7N1.png', type: '7N1 Sniper Cartridge', damage: '86', penetration: '45', weapon: 'SVDS, SV-98, Mosin' },
        { img: './img/Ammo/762x54R/LPSGzh.png', type: 'LPS Gzh', damage: '81', penetration: '42', weapon: 'SVDS, SV-98, Mosin' },
    ],
}