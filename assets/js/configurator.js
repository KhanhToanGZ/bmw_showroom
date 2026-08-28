const carData = {
    m4: {
        name: "BMW M4",
        price: 4500000000,
        generations: [
            { id: "F82", year: "2014 - 2020", desc: "High Performance Coupe", hp: "425 HP", price: 0 },
            { id: "G82", year: "2021 - Hiện tại", desc: "Competition Coupe", hp: "510 HP", price: 500000000 }
        ]
    },
    x5: {
        name: "BMW X5",
        price: 4200000000,
        generations: [
            { id: "E70", year: "2006 - 2013", desc: "Classic SAV", hp: "355 HP", price: 0 },
            { id: "G05", year: "2019 - 2023", desc: "Luxury SAV", hp: "340 HP", price: 800000000 },
            { id: "G05 LCI", year: "2023 - Hiện tại", desc: "LCI xDrive40i", hp: "381 HP", price: 1200000000 }
        ]
    },
    x7: {
        name: "BMW X7",
        price: 6200000000,
        generations: [
            { id: "G07", year: "2019 - Hiện tại", desc: "Flagship Luxury", hp: "381 HP", price: 0 }
        ]
    },
    xm: {
        name: "BMW XM",
        price: 10999000000,
        generations: [
            { id: "BMW XM", year: "2023 - Hiện tại", desc: "M Hybrid Power", hp: "653 HP", price: 0 }
        ]
    }
};

// CƠ SỞ DỮ LIỆU MÀU TÙY CHỈNH THEO TỪNG MÃ XE (GENERATION)
const carColorsData = {
    // === MÀU CHO CÁC MÃ BMW M4 ===
    "F82": [
        { 
            id: 'flamenco_red', name: 'Flamenco Red', hex: '#ff0033', price: 0, 
            images: [
                'custom-option/bmw-m4/bmw-m4-f82/flamenco-red/back.webp',
                'custom-option/bmw-m4/bmw-m4-f82/flamenco-red/front.webp'
            ] 
        },
        { 
            id: 'frozen_silver', name: 'Frozen Silver', hex: '#c0c0c0', price: 20000000, 
            images: [
                'custom-option/bmw-m4/bmw-m4-f82/frozen-silver/back1.webp',
                'custom-option/bmw-m4/bmw-m4-f82/frozen-silver/back2.webp',
                'custom-option/bmw-m4/bmw-m4-f82/frozen-silver/back3.webp',
                'custom-option/bmw-m4/bmw-m4-f82/frozen-silver/front1.webp',
                'custom-option/bmw-m4/bmw-m4-f82/frozen-silver/front2.webp',
                'custom-option/bmw-m4/bmw-m4-f82/frozen-silver/front3.webp',
                'custom-option/bmw-m4/bmw-m4-f82/frozen-silver/front4.webp',
                'custom-option/bmw-m4/bmw-m4-f82/frozen-silver/side1.webp',
                'custom-option/bmw-m4/bmw-m4-f82/frozen-silver/side2.webp',
                'custom-option/bmw-m4/bmw-m4-f82/frozen-silver/side3.webp',
            ] 
        },
        { 
            id: 'nardo_grey', name: 'Nardo Grey', hex: '#8c9297', price: 25000000, 
            images: [
                'custom-option/bmw-m4/bmw-m4-f82/nardo-grey/back1.webp',
                'custom-option/bmw-m4/bmw-m4-f82/nardo-grey/back2.webp',
                'custom-option/bmw-m4/bmw-m4-f82/nardo-grey/back3.webp',
                'custom-option/bmw-m4/bmw-m4-f82/nardo-grey/front1.webp',
                'custom-option/bmw-m4/bmw-m4-f82/nardo-grey/front2.webp',
                'custom-option/bmw-m4/bmw-m4-f82/nardo-grey/front3.webp',
                'custom-option/bmw-m4/bmw-m4-f82/nardo-grey/side1.webp',
                'custom-option/bmw-m4/bmw-m4-f82/nardo-grey/side2.webp',
                'custom-option/bmw-m4/bmw-m4-f82/nardo-grey/side3.webp',
            ] 
        },
        { 
            id: 'sepia_violet', name: 'Sepia Violet', hex: '#8b4513', price: 25000000, 
            images: [
                'custom-option/bmw-m4/bmw-m4-f82/sepia-violet/back1.webp',
                'custom-option/bmw-m4/bmw-m4-f82/sepia-violet/back2.webp',
                'custom-option/bmw-m4/bmw-m4-f82/sepia-violet/inside.webp',
                'custom-option/bmw-m4/bmw-m4-f82/sepia-violet/front1.webp',
                'custom-option/bmw-m4/bmw-m4-f82/sepia-violet/front2.webp',
                'custom-option/bmw-m4/bmw-m4-f82/sepia-violet/side1.webp',
            ] 
        },
        { 
            id: 'silver_lake', name: 'Silver Lake', hex: '#c0c0c0', price: 25000000, 
            images: [
                'custom-option/bmw-m4/bmw-m4-f82/silver-lake/back1.webp',
                'custom-option/bmw-m4/bmw-m4-f82/silver-lake/back2.webp',
                'custom-option/bmw-m4/bmw-m4-f82/silver-lake/inside.webp',
                'custom-option/bmw-m4/bmw-m4-f82/silver-lake/inside2.webp',
                'custom-option/bmw-m4/bmw-m4-f82/silver-lake/front1.webp',
                'custom-option/bmw-m4/bmw-m4-f82/silver-lake/front2.webp',
                'custom-option/bmw-m4/bmw-m4-f82/silver-lake/side1.webp',
            ] 
        },
    ],
    "G82": [
        { 
            id: 'blue_bay_lagoon', name: 'Blue Bay Lagoon', hex: '#00626f', price: 0, 
            images: [
                'custom-option/bmw-m4/bmw-m4-g82/blue-bay-lagoon/back1.webp',
                'custom-option/bmw-m4/bmw-m4-g82/blue-bay-lagoon/back2.webp',
                'custom-option/bmw-m4/bmw-m4-g82/blue-bay-lagoon/front1.webp',
                'custom-option/bmw-m4/bmw-m4-g82/blue-bay-lagoon/front2.webp',
                'custom-option/bmw-m4/bmw-m4-g82/blue-bay-lagoon/front3.webp',
                'custom-option/bmw-m4/bmw-m4-g82/blue-bay-lagoon/front4.webp',
                'custom-option/bmw-m4/bmw-m4-g82/blue-bay-lagoon/front5.webp',
                'custom-option/bmw-m4/bmw-m4-g82/blue-bay-lagoon/front6.webp',
                'custom-option/bmw-m4/bmw-m4-g82/blue-bay-lagoon/logo.webp',
                'custom-option/bmw-m4/bmw-m4-g82/blue-bay-lagoon/side1.webp',
                'custom-option/bmw-m4/bmw-m4-g82/blue-bay-lagoon/side2.webp',
                'custom-option/bmw-m4/bmw-m4-g82/blue-bay-lagoon/side3.webp',
                'custom-option/bmw-m4/bmw-m4-g82/blue-bay-lagoon/side4.webp',
                'custom-option/bmw-m4/bmw-m4-g82/blue-bay-lagoon/side5.webp',
            ] 
        },
        { 
            id: 'blue_sapphire', name: 'Blue Sapphire', hex: '#151667', price: 35000000, 
            images: [
                'custom-option/bmw-m4/bmw-m4-g82/blue-sapphire/back1.webp',
                'custom-option/bmw-m4/bmw-m4-g82/blue-sapphire/back2.webp',
                'custom-option/bmw-m4/bmw-m4-g82/blue-sapphire/back3.webp',
                'custom-option/bmw-m4/bmw-m4-g82/blue-sapphire/front.webp',
                'custom-option/bmw-m4/bmw-m4-g82/blue-sapphire/front2.webp',
                'custom-option/bmw-m4/bmw-m4-g82/blue-sapphire/logo.webp',
                'custom-option/bmw-m4/bmw-m4-g82/blue-sapphire/side1.webp',
                'custom-option/bmw-m4/bmw-m4-g82/blue-sapphire/side2.webp',
                'custom-option/bmw-m4/bmw-m4-g82/blue-sapphire/side3.webp',
                'custom-option/bmw-m4/bmw-m4-g82/blue-sapphire/side4.webp',
                'custom-option/bmw-m4/bmw-m4-g82/blue-sapphire/side5.webp',
                'custom-option/bmw-m4/bmw-m4-g82/blue-sapphire/side6.webp',
            ] 
        },
        { 
            id: 'preciosa_red', name: 'Preciosa Red', hex: '#c10000', price: 25000000, 
            images: [
                'custom-option/bmw-m4/bmw-m4-g82/preciosa-red/back.webp',
                'custom-option/bmw-m4/bmw-m4-g82/preciosa-red/back2.webp',
                'custom-option/bmw-m4/bmw-m4-g82/preciosa-red/front.webp'
            ] 
        },
        { 
            id: 'techno_violet', name: 'Techno Violet', hex: '#4B0082', price: 30000000, 
            images: [
                'custom-option/bmw-m4/bmw-m4-g82/techno-violet/back1.webp',
                'custom-option/bmw-m4/bmw-m4-g82/techno-violet/back2.webp',
                'custom-option/bmw-m4/bmw-m4-g82/techno-violet/back3.webp',
                'custom-option/bmw-m4/bmw-m4-g82/techno-violet/back4.webp',
                'custom-option/bmw-m4/bmw-m4-g82/techno-violet/back5.webp',
                'custom-option/bmw-m4/bmw-m4-g82/techno-violet/front.webp',
                'custom-option/bmw-m4/bmw-m4-g82/techno-violet/front2.webp',
                'custom-option/bmw-m4/bmw-m4-g82/techno-violet/front3.webp',
                'custom-option/bmw-m4/bmw-m4-g82/techno-violet/front4.webp',
                'custom-option/bmw-m4/bmw-m4-g82/techno-violet/front5.webp',
                'custom-option/bmw-m4/bmw-m4-g82/techno-violet/front6.webp',
                'custom-option/bmw-m4/bmw-m4-g82/techno-violet/logo.webp',
                'custom-option/bmw-m4/bmw-m4-g82/techno-violet/side1.webp',
                'custom-option/bmw-m4/bmw-m4-g82/techno-violet/side2.webp',
            ] 
        }
    ],

    // === MÀU CHO CÁC MÃ BMW X5 ===
    "E70": [
        { 
            id: 'carlo_blue', name: 'Carlo Blue', hex: '#0033A0', price: 0, 
            images: [
                'custom-option/bmw-x5/bmw-x5-e70/carlo-blue/back1.webp',
                'custom-option/bmw-x5/bmw-x5-e70/carlo-blue/back2.webp',
                'custom-option/bmw-x5/bmw-x5-e70/carlo-blue/back3.webp',
                'custom-option/bmw-x5/bmw-x5-e70/carlo-blue/back4.webp',
                'custom-option/bmw-x5/bmw-x5-e70/carlo-blue/front1.webp',
                'custom-option/bmw-x5/bmw-x5-e70/carlo-blue/front2.webp',
                'custom-option/bmw-x5/bmw-x5-e70/carlo-blue/side1.webp',
                'custom-option/bmw-x5/bmw-x5-e70/carlo-blue/side2.webp',
                'custom-option/bmw-x5/bmw-x5-e70/carlo-blue/side3.webp',
            ] 
        }
    ],
    "G05": [
        { 
            id: 'black_carbon', name: 'Black Carbon', hex: '#2c2c2c', price: 0, 
            images: [
                'custom-option/bmw-x5/bmw-x5-g05/carbon-black/back1.webp',
                'custom-option/bmw-x5/bmw-x5-g05/carbon-black/front1.webp',
                'custom-option/bmw-x5/bmw-x5-g05/carbon-black/front2.webp',
                'custom-option/bmw-x5/bmw-x5-g05/carbon-black/front3.webp',
                'custom-option/bmw-x5/bmw-x5-g05/carbon-black/side1.webp',
                'custom-option/bmw-x5/bmw-x5-g05/carbon-black/side2.webp',
                'custom-option/bmw-x5/bmw-x5-g05/carbon-black/side3.webp',
                'custom-option/bmw-x5/bmw-x5-g05/carbon-black/side4.webp',
                'custom-option/bmw-x5/bmw-x5-g05/carbon-black/side5.webp',
                'custom-option/bmw-x5/bmw-x5-g05/carbon-black/side6.webp',
            ] 
        },
        { 
            id: 'nardo_gray', name: 'Nardo Gray', hex: '#6b7280', price: 20000000, 
            images: [
                'custom-option/bmw-x5/bmw-x5-g05/nardo-grey/back1.webp',
                'custom-option/bmw-x5/bmw-x5-g05/nardo-grey/back2.webp',
                'custom-option/bmw-x5/bmw-x5-g05/nardo-grey/back3.webp',
                'custom-option/bmw-x5/bmw-x5-g05/nardo-grey/back4.webp',
                'custom-option/bmw-x5/bmw-x5-g05/nardo-grey/front1.webp',
                'custom-option/bmw-x5/bmw-x5-g05/nardo-grey/front2.webp',
                'custom-option/bmw-x5/bmw-x5-g05/nardo-grey/front3.webp',
            ] 
        },
        { 
            id: 'verde_ermes', name: 'Verde Ermes', hex: '#1a365d', price: 25000000, 
            images: [
                'custom-option/bmw-x5/bmw-x5-g05/verde-ermes/back1.webp',
                'custom-option/bmw-x5/bmw-x5-g05/verde-ermes/back2.webp',
                'custom-option/bmw-x5/bmw-x5-g05/verde-ermes/back3.webp',
                'custom-option/bmw-x5/bmw-x5-g05/verde-ermes/side1.webp',
                'custom-option/bmw-x5/bmw-x5-g05/verde-ermes/side2.webp',
                'custom-option/bmw-x5/bmw-x5-g05/verde-ermes/front1.webp',
                'custom-option/bmw-x5/bmw-x5-g05/verde-ermes/front2.webp',
                'custom-option/bmw-x5/bmw-x5-g05/verde-ermes/front3.webp',
                'custom-option/bmw-x5/bmw-x5-g05/verde-ermes/front4.webp',
            ] 
        },
    ],
    "G05 LCI": [
        { 
            id: 'blue_ridge', name: 'Blue Ridge', hex: '#4A5F73', price: 0, 
            images: [
                'custom-option/bmw-x5/bmw-x5-g05GLI/blue-ridge/back1.webp',
                'custom-option/bmw-x5/bmw-x5-g05GLI/blue-ridge/back2.webp',
                'custom-option/bmw-x5/bmw-x5-g05GLI/blue-ridge/back3.webp',
                'custom-option/bmw-x5/bmw-x5-g05GLI/blue-ridge/back4.webp',
                'custom-option/bmw-x5/bmw-x5-g05GLI/blue-ridge/front1.webp',
                'custom-option/bmw-x5/bmw-x5-g05GLI/blue-ridge/front2.webp',
                'custom-option/bmw-x5/bmw-x5-g05GLI/blue-ridge/front3.webp',
                'custom-option/bmw-x5/bmw-x5-g05GLI/blue-ridge/front4.webp',
                'custom-option/bmw-x5/bmw-x5-g05GLI/blue-ridge/side1.webp',
                'custom-option/bmw-x5/bmw-x5-g05GLI/blue-ridge/side2.webp',
                'custom-option/bmw-x5/bmw-x5-g05GLI/blue-ridge/side3.webp',
                'custom-option/bmw-x5/bmw-x5-g05GLI/blue-ridge/side4.webp',
            ] 
        },
        { 
            id: 'tanzanite_blue', name: 'Tanzanite Blue', hex: '#4A5F73', price: 0, 
            images: [
                'custom-option/bmw-x5/bmw-x5-g05GLI/tanzanite-blue/back1.webp',
                'custom-option/bmw-x5/bmw-x5-g05GLI/tanzanite-blue/back2.webp',
                'custom-option/bmw-x5/bmw-x5-g05GLI/tanzanite-blue/back3.webp',
                'custom-option/bmw-x5/bmw-x5-g05GLI/tanzanite-blue/back4.webp',
                'custom-option/bmw-x5/bmw-x5-g05GLI/tanzanite-blue/front1.webp',
                'custom-option/bmw-x5/bmw-x5-g05GLI/tanzanite-blue/front2.webp',
                'custom-option/bmw-x5/bmw-x5-g05GLI/tanzanite-blue/front3.webp',
                'custom-option/bmw-x5/bmw-x5-g05GLI/tanzanite-blue/side1.webp',
                'custom-option/bmw-x5/bmw-x5-g05GLI/tanzanite-blue/side2.webp',
                'custom-option/bmw-x5/bmw-x5-g05GLI/tanzanite-blue/side3.webp',
            ] 
        },


    ],

    // === MÀU CHO CÁC MÃ BMW X7 ===
    "G07": [
        { id: 'aurora_green', name: 'Aurora Green', hex: '#4caf50', price: 0,
            images: [
                'custom-option/bmw-x7/bmw-x7-g07/aurora-green/back1.webp',
                'custom-option/bmw-x7/bmw-x7-g07/aurora-green/back2.webp',
                'custom-option/bmw-x7/bmw-x7-g07/aurora-green/front1.webp',
                'custom-option/bmw-x7/bmw-x7-g07/aurora-green/front2.webp',
                'custom-option/bmw-x7/bmw-x7-g07/aurora-green/front3.webp',
                'custom-option/bmw-x7/bmw-x7-g07/aurora-green/front4.webp',
                'custom-option/bmw-x7/bmw-x7-g07/aurora-green/front5.webp',
                'custom-option/bmw-x7/bmw-x7-g07/aurora-green/side1.webp',
                'custom-option/bmw-x7/bmw-x7-g07/aurora-green/side2.webp',
                'custom-option/bmw-x7/bmw-x7-g07/aurora-green/side3.webp',
                'custom-option/bmw-x7/bmw-x7-g07/aurora-green/side4.webp',
            ] 
        },
        { id: 'copper_grey', name: 'Copper Grey', hex: '#8b4513', price: 0,
            images: [
                'custom-option/bmw-x7/bmw-x7-g07/copper-grey/back1.webp',
                'custom-option/bmw-x7/bmw-x7-g07/copper-grey/back2.webp',
                'custom-option/bmw-x7/bmw-x7-g07/copper-grey/front1.webp',
                'custom-option/bmw-x7/bmw-x7-g07/copper-grey/front2.webp',
                'custom-option/bmw-x7/bmw-x7-g07/copper-grey/front3.webp',
                'custom-option/bmw-x7/bmw-x7-g07/copper-grey/front4.webp',
                'custom-option/bmw-x7/bmw-x7-g07/copper-grey/front5.webp',
                'custom-option/bmw-x7/bmw-x7-g07/copper-grey/side1.webp',
                'custom-option/bmw-x7/bmw-x7-g07/copper-grey/side2.webp',
                'custom-option/bmw-x7/bmw-x7-g07/copper-grey/side3.webp',
            ] 
        },
        { id: 'daytona_violet', name: 'Daytona Violet', hex: '#63048B', price: 0,
            images: [
                'custom-option/bmw-x7/bmw-x7-g07/daytona-violet/back1.webp',
                'custom-option/bmw-x7/bmw-x7-g07/daytona-violet/front1.webp',
                'custom-option/bmw-x7/bmw-x7-g07/daytona-violet/front2.webp',
                'custom-option/bmw-x7/bmw-x7-g07/daytona-violet/side1.webp',
                'custom-option/bmw-x7/bmw-x7-g07/daytona-violet/side2.webp',
                'custom-option/bmw-x7/bmw-x7-g07/daytona-violet/side3.webp',
            ] 
        },
        { id: 'manhattan', name: 'Manhattan', hex: '#354875', price: 0,
            images: [
                'custom-option/bmw-x7/bmw-x7-g07/manhattan/back1.webp',
                'custom-option/bmw-x7/bmw-x7-g07/manhattan/back2.webp',
                'custom-option/bmw-x7/bmw-x7-g07/manhattan/front1.webp',
                'custom-option/bmw-x7/bmw-x7-g07/manhattan/front2.webp',
                'custom-option/bmw-x7/bmw-x7-g07/manhattan/front3.webp',
                'custom-option/bmw-x7/bmw-x7-g07/manhattan/front4.webp',
                'custom-option/bmw-x7/bmw-x7-g07/manhattan/side1.webp',
            ] 
        },
        { id: 'oxford_green', name: 'Oxford Green', hex: '#228B22', price: 0,
            images: [
                'custom-option/bmw-x7/bmw-x7-g07/oxford-green/back1.webp',
                'custom-option/bmw-x7/bmw-x7-g07/oxford-green/back2.webp',
                'custom-option/bmw-x7/bmw-x7-g07/oxford-green/front1.webp',
                'custom-option/bmw-x7/bmw-x7-g07/oxford-green/side1.webp',
            ] 
        },
        { id: 'petrol_mica', name: 'Petrol Mica', hex: '#0C5678', price: 0,
            images: [
                'custom-option/bmw-x7/bmw-x7-g07/petrol-mica/back1.webp',
                'custom-option/bmw-x7/bmw-x7-g07/petrol-mica/back2.webp',
                'custom-option/bmw-x7/bmw-x7-g07/petrol-mica/back3.webp',
                'custom-option/bmw-x7/bmw-x7-g07/petrol-mica/front1.webp',
                'custom-option/bmw-x7/bmw-x7-g07/petrol-mica/front2.webp',
                'custom-option/bmw-x7/bmw-x7-g07/petrol-mica/front3.webp',
                'custom-option/bmw-x7/bmw-x7-g07/petrol-mica/side1.webp',
                'custom-option/bmw-x7/bmw-x7-g07/petrol-mica/side2.webp',
                'custom-option/bmw-x7/bmw-x7-g07/petrol-mica/side3.webp',
            ] 
        },
        { id: 'santorini_blue', name: 'Santorini Blue', hex: '#416d83', price: 0,
            images: [
                'custom-option/bmw-x7/bmw-x7-g07/santorini-blue/back1.webp',
                'custom-option/bmw-x7/bmw-x7-g07/santorini-blue/back2.webp',
                'custom-option/bmw-x7/bmw-x7-g07/santorini-blue/back3.webp',
                'custom-option/bmw-x7/bmw-x7-g07/santorini-blue/front1.webp',
                'custom-option/bmw-x7/bmw-x7-g07/santorini-blue/front2.webp',
                'custom-option/bmw-x7/bmw-x7-g07/santorini-blue/front3.webp',
                'custom-option/bmw-x7/bmw-x7-g07/santorini-blue/side1.webp',
                'custom-option/bmw-x7/bmw-x7-g07/santorini-blue/side2.webp',
                'custom-option/bmw-x7/bmw-x7-g07/santorini-blue/side3.webp',
                'custom-option/bmw-x7/bmw-x7-g07/santorini-blue/side4.webp',
            ] 
        },
    ],

    // === MÀU CHO CÁC MÃ BMW XM ===
    "BMW XM": [
        { id: 'cape_york_green', name: 'Cape York Green', hex: '#228B22', price: 0,
            images: [
                'custom-option/bmw-xm/cape-york-green/back1.webp',
                'custom-option/bmw-xm/cape-york-green/back2.webp',
                'custom-option/bmw-xm/cape-york-green/back3.webp',
                'custom-option/bmw-xm/cape-york-green/front1.webp',
                'custom-option/bmw-xm/cape-york-green/front2.webp',
                'custom-option/bmw-xm/cape-york-green/front3.webp',
                'custom-option/bmw-xm/cape-york-green/side1.webp',
            ]
        },
        { id: 'carbon_black', name: 'Carbon Black', hex: '#2c2c2c', price: 0,
            images: [
                'custom-option/bmw-xm/carbon-black/back1.webp',
                'custom-option/bmw-xm/carbon-black/back2.webp',
                'custom-option/bmw-xm/carbon-black/back3.webp',
                'custom-option/bmw-xm/carbon-black/front1.webp',
                'custom-option/bmw-xm/carbon-black/front2.webp',
                'custom-option/bmw-xm/carbon-black/front3.webp',
                'custom-option/bmw-xm/carbon-black/side1.webp',
                'custom-option/bmw-xm/carbon-black/side2.webp',
                'custom-option/bmw-xm/carbon-black/side3.webp',
            ]
        },
        { id: 'marina_bay_blue', name: 'Marina Bay Blue', hex: '#1E90FF', price: 0,
            images: [
                'custom-option/bmw-xm/marina-bay-blue/back1.webp',
                'custom-option/bmw-xm/marina-bay-blue/back2.webp',
                'custom-option/bmw-xm/marina-bay-blue/back3.webp',
                'custom-option/bmw-xm/marina-bay-blue/front1.webp',
                'custom-option/bmw-xm/marina-bay-blue/front2.webp',
                'custom-option/bmw-xm/marina-bay-blue/front3.webp',
                'custom-option/bmw-xm/marina-bay-blue/side1.webp',
                'custom-option/bmw-xm/marina-bay-blue/side2.webp',
                'custom-option/bmw-xm/marina-bay-blue/side3.webp',
            ]
        },
        { id: 'mineral_white', name: 'Mineral White', hex: '#F5F5F5', price: 0,
            images: [
                'custom-option/bmw-xm/mineral-white/back1.webp',
                'custom-option/bmw-xm/mineral-white/back2.webp',
                'custom-option/bmw-xm/mineral-white/back3.webp',
                'custom-option/bmw-xm/mineral-white/back4.webp',
                'custom-option/bmw-xm/mineral-white/back5.webp',
                'custom-option/bmw-xm/mineral-white/front1.webp',
                'custom-option/bmw-xm/mineral-white/front2.webp',
                'custom-option/bmw-xm/mineral-white/front3.webp',
                'custom-option/bmw-xm/mineral-white/front4.webp',
                'custom-option/bmw-xm/mineral-white/front5.webp',
                'custom-option/bmw-xm/mineral-white/logo.webp',
                'custom-option/bmw-xm/mineral-white/side1.webp',
                'custom-option/bmw-xm/mineral-white/side2.webp',
                'custom-option/bmw-xm/mineral-white/side3.webp',
            ]
        },
    ]
};

// 2. Render danh sách màu ra màn hình
// Hàm Render danh sách màu sắc động theo Mã Xe
function renderColorOptions(genId) {
    const listContainer = document.getElementById('color-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';
    
    // Lấy danh sách màu riêng của mã xe đang chọn
    const colors = carColorsData[genId] || [];

    if (colors.length === 0) {
        listContainer.innerHTML = '<p class="text-gray-400 text-sm italic">Đang cập nhật danh sách màu cho phiên bản này.</p>';
        document.getElementById('color-image-slider').innerHTML = '';
        return;
    }

    colors.forEach((color, index) => {
        const colorBtn = document.createElement('div');
        colorBtn.className = 'color-item flex items-center gap-4 cursor-pointer group p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all';
        colorBtn.dataset.colorId = color.id;

        colorBtn.innerHTML = `
            <div class="color-swatch-circle w-10 h-10 rounded-full border-2 border-white/20 group-hover:border-amber-400 transition-all shadow-lg shrink-0" style="background-color: ${color.hex}"></div>
            <div>
                <h4 class="color-title text-sm font-bold uppercase text-white group-hover:text-amber-400 transition-colors">${color.name}</h4>
                <p class="text-xs text-gray-400">${color.price > 0 ? '+' + formatPrice(color.price) : 'Tiêu chuẩn'}</p>
            </div>
        `;
        
        colorBtn.onclick = () => selectColor(color, colorBtn);
        listContainer.appendChild(colorBtn);
    });

    // Tự động chọn màu đầu tiên trong danh sách khi vừa đổi mã xe
    const firstColorBtn = listContainer.querySelector('.color-item');
    if (firstColorBtn) selectColor(colors[0], firstColorBtn);
}

// Logic khi khách hàng kích chọn màu
function selectColor(colorObj, btnElement) {
    // 1. Cập nhật Slider Ảnh ngoại thất (hỗ trợ nhiều ảnh cho một màu)
    renderColorSlider(colorObj);
    
    // 2. Cập nhật State & Tổng tiền
    state.color = colorObj;
    state.prices.color = colorObj.price;
    if (document.getElementById('sum-color')) {
        document.getElementById('sum-color').innerText = colorObj.name;
    }
    updateSummary();

    // 3. Cập nhật giao diện Highlight màu đang được chọn
    document.querySelectorAll('#color-list .color-item').forEach(el => {
        el.classList.remove('bg-white/10', 'border-amber-400/50');
        el.querySelector('.color-swatch-circle').classList.remove('border-amber-400', 'scale-110');
        el.querySelector('.color-title').classList.remove('text-amber-400');
    });

    if (btnElement) {
        btnElement.classList.add('bg-white/10', 'border-amber-400/50');
        btnElement.querySelector('.color-swatch-circle').classList.add('border-amber-400', 'scale-110');
        btnElement.querySelector('.color-title').classList.add('text-amber-400');
    }

    // 4. Mở rộng phần tiếp theo và cuộn xuống
    const personalitySection = document.getElementById('conf-personality');
    if (personalitySection && personalitySection.classList.contains('hidden')) {
        personalitySection.classList.remove('hidden');
    }
}
// 3. Xử lý Slider Hình Ảnh Trượt Ngang
function renderColorSlider(colorObj) {
    const slider = document.getElementById('color-image-slider');
    const dotsContainer = document.getElementById('slider-dots');
    
    slider.innerHTML = '';
    dotsContainer.innerHTML = '';

    colorObj.images.forEach((imgSrc, i) => {
        // Đổ ảnh vào slider
        const imgEl = document.createElement('img');
        imgEl.src = imgSrc;
        imgEl.className = 'w-full h-full object-contain shrink-0 snap-center';
        slider.appendChild(imgEl);

        // Tạo dấu chấm điều hướng (dots)
        const dot = document.createElement('div');
        dot.className = `w-2 h-2 rounded-full cursor-pointer transition-all ${i === 0 ? 'bg-amber-400 scale-125' : 'bg-white/30 hover:bg-white/60'}`;
        
        // Nhấn vào chấm để cuộn tới ảnh tương ứng
        dot.onclick = () => {
            slider.scrollTo({ left: slider.clientWidth * i, behavior: 'smooth' });
            updateSliderDots(i);
        };
        dotsContainer.appendChild(dot);
    });

    // Cập nhật dấu chấm khi người dùng tự lướt bằng tay hoặc chuột
    slider.onscroll = () => {
        const activeIndex = Math.round(slider.scrollLeft / slider.clientWidth);
        updateSliderDots(activeIndex);
    };
    
    // Cập nhật luôn Icon của Lucide nếu vừa render
    if(window.lucide) lucide.createIcons();
}

function updateSliderDots(activeIndex) {
    const dots = document.getElementById('slider-dots').children;
    for (let i = 0; i < dots.length; i++) {
        if (i === activeIndex) {
            dots[i].className = 'w-2 h-2 rounded-full cursor-pointer transition-all bg-amber-400 scale-125';
        } else {
            dots[i].className = 'w-2 h-2 rounded-full cursor-pointer transition-all bg-white/30 hover:bg-white/60';
        }
    }
}

// Xử lý nút mũi tên lướt ảnh sang Trái/Phải
document.getElementById('slide-left')?.addEventListener('click', () => {
    const slider = document.getElementById('color-image-slider');
    slider.scrollBy({ left: -slider.clientWidth, behavior: 'smooth' });
});

document.getElementById('slide-right')?.addEventListener('click', () => {
    const slider = document.getElementById('color-image-slider');
    slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
});
// State Management
const state = {
    car: null,
    generation: null,
    color: null,
    personality: null,
    package: null,
    prices: {
        base: 0,
        generation: 0,
        color: 0,
        personality: 0,
        package: 0
    }
};

// Utilities
const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN').format(price) + ' VNĐ';
};

// DOM Elements
const configBuilder = document.getElementById('config-builder');
const stepSections = document.querySelectorAll('.step-section');

// Navigation / Hero
document.getElementById('btn-start-config').addEventListener('click', () => {
    document.getElementById('conf-models').scrollIntoView({ behavior: 'smooth' });
});

// 1. Select Model
document.querySelectorAll('.model-card').forEach(card => {
    card.addEventListener('click', function() {
        // Reset selections
        document.querySelectorAll('.model-card').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        
        const modelId = this.dataset.model;
        state.car = carData[modelId];
        state.prices.base = state.car.price;
        
        // Reset downstream state
        state.generation = null;
        state.color = null;
        state.personality = null;
        state.package = null;
        state.prices.generation = 0;
        state.prices.color = 0;
        state.prices.personality = 0;
        state.prices.package = 0;

        renderGenerations(modelId);
        // Bỏ gọi renderColors(), vì hàm renderColorOptions(modelId) đã được xử lý ở event click riêng.
        //Đồng bộ State Management,truyền dữ liệu màu mặc định.
        if(carColorsData[modelId] && carColorsData[modelId].length > 0) {
            state.color = carColorsData[modelId][0]; 
            state.prices.color = state.color.price;
        }
        // Show builder
        configBuilder.classList.remove('hidden');
        gsap.to(configBuilder, { opacity: 1, duration: 1 });
        
        // Reset UI steps
        stepSections.forEach(sec => sec.classList.add('hidden'));
        document.getElementById('conf-generation').classList.remove('hidden');
        
        // Smooth scroll to generation
        setTimeout(() => {
            document.getElementById('conf-generation').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);

        updateSummary();
    });
});

// 2. Render Generations
function renderGenerations(modelId) {
    const grid = document.getElementById('generation-grid');
    grid.innerHTML = '';
    
    const gens = carData[modelId].generations;
    gens.forEach((gen, index) => {
        const card = document.createElement('div');
        card.className = `gen-card glass-card p-6 rounded-xl cursor-pointer border border-white/5 hover:border-amber-400/50 transition-all group relative`;
        card.innerHTML = `
            <h4 class="text-xl font-bold text-white mb-1 uppercase">${gen.id}</h4>
            <p class="text-xs text-amber-400 tracking-widest mb-4">${gen.year}</p>
            <p class="text-sm text-gray-400 mb-2">${gen.desc}</p>
            <div class="flex justify-between items-end mt-4 pt-4 border-t border-white/10">
                <span class="text-white font-bold">${gen.hp}</span>
                <span class="text-amber-400 text-xs font-bold">${gen.price > 0 ? '+' + formatPrice(gen.price) : 'Tiêu chuẩn'}</span>
            </div>
        `;
        
        card.addEventListener('click', () => {
            document.querySelectorAll('.gen-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            
            state.generation = gen;
            state.prices.generation = gen.price;
            renderColorOptions(gen.id);
            
            document.getElementById('conf-color').classList.remove('hidden');
            document.getElementById('conf-personality').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('conf-color').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
            
            updateSummary();
        });
        
        grid.appendChild(card);
    });
}


// 4. Personalities
document.querySelectorAll('.personality-card').forEach(card => {
    card.addEventListener('click', function() {
        document.querySelectorAll('.personality-card').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        
        state.personality = {
            name: this.dataset.personality,
            price: parseInt(this.dataset.price)
        };
        state.prices.personality = state.personality.price;
        
        document.getElementById('conf-package').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('conf-package').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        
        updateSummary();
    });
});

// 5. Packages
document.querySelectorAll('.package-card').forEach(card => {
    card.addEventListener('click', function() {
        document.querySelectorAll('.package-card').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        
        state.package = {
            name: this.dataset.package,
            price: parseInt(this.dataset.price)
        };
        state.prices.package = state.package.price;
        
        document.getElementById('conf-contact').classList.remove('hidden');
        // Show finish button
        document.querySelectorAll('.step-section').forEach(s => s.classList.remove('hidden'));
        
        updateSummary();
    });
});

// Summary Updater
// Thay thế hàm updateSummary() cũ bằng hàm này:
function updateSummary() {
    const modelStr = state.car ? state.car.name : '-';
    const genStr = state.generation ? state.generation.id : '-';
    const colorStr = state.color ? state.color.name : '-';
    const persStr = state.personality ? state.personality.name : '-';
    const pkgStr = state.package ? state.package.name : '-';

    // Desktop
    if (document.getElementById('sum-model')) document.getElementById('sum-model').textContent = modelStr;
    if (document.getElementById('sum-generation')) document.getElementById('sum-generation').textContent = genStr;
    if (document.getElementById('sum-color')) document.getElementById('sum-color').textContent = colorStr;
    if (document.getElementById('sum-personality')) document.getElementById('sum-personality').textContent = persStr;
    if (document.getElementById('sum-package')) document.getElementById('sum-package').textContent = pkgStr;

    // Mobile Hamburger Menu
    if (document.getElementById('m-sum-model')) document.getElementById('m-sum-model').textContent = modelStr;
    if (document.getElementById('m-sum-generation')) document.getElementById('m-sum-generation').textContent = genStr;
    if (document.getElementById('m-sum-color')) document.getElementById('m-sum-color').textContent = colorStr;
    if (document.getElementById('m-sum-personality')) document.getElementById('m-sum-personality').textContent = persStr;
    if (document.getElementById('m-sum-package')) document.getElementById('m-sum-package').textContent = pkgStr;

    const basePrice = state.prices.base;
    const optionsPrice = state.prices.generation + state.prices.color + state.prices.personality + state.prices.package;
    const totalPrice = basePrice + optionsPrice;

    const baseStr = formatPrice(basePrice);
    const optStr = formatPrice(optionsPrice);
    const totStr = formatPrice(totalPrice);

    // Desktop Prices
    if (document.getElementById('sum-base-price')) document.getElementById('sum-base-price').textContent = baseStr;
    if (document.getElementById('sum-options-price')) document.getElementById('sum-options-price').textContent = optStr;
    if (document.getElementById('sum-total-price')) document.getElementById('sum-total-price').textContent = totStr;

    // Mobile Prices
    if (document.getElementById('m-sum-base-price')) document.getElementById('m-sum-base-price').textContent = baseStr;
    if (document.getElementById('m-sum-options-price')) document.getElementById('m-sum-options-price').textContent = optStr;
    if (document.getElementById('m-sum-total-price')) document.getElementById('m-sum-total-price').textContent = totStr;
}

// Bổ sung sự kiện click cho nút "HOÀN TẤT CẤU HÌNH" trên mobile:
document.getElementById('m-btn-finish')?.addEventListener('click', () => {
    toggleMenu(false); // Ẩn mobile menu
    document.getElementById('btn-finish')?.click(); // Trigger sự kiện hoàn tất chung
});

// Upload Inspiration
const uploadZone = document.getElementById('upload-zone');
const uploadPreview = document.getElementById('upload-preview');

uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.classList.add('border-amber-400');
});

uploadZone.addEventListener('dragleave', () => {
    uploadZone.classList.remove('border-amber-400');
});

uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.classList.remove('border-amber-400');
    handleFiles(e.dataTransfer.files);
});

uploadZone.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = 'image/jpeg, image/png, image/webp';
    input.onchange = e => handleFiles(e.target.files);
    input.click();
});

function handleFiles(files) {
    Array.from(files).forEach(file => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = e => {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.className = 'w-24 h-24 object-cover rounded-lg border border-white/20';
                uploadPreview.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });
}

// Final Showcase
document.getElementById('btn-finish').addEventListener('click', () => {
    const finalSec = document.getElementById('conf-final');
    
    document.getElementById('final-model').textContent = state.car.name;
    document.getElementById('final-gen').textContent = state.generation.id;
    document.getElementById('final-color').textContent = state.color.name;
    document.getElementById('final-personality').textContent = state.personality.name;
    document.getElementById('final-package').textContent = state.package.name;
    
    const totalPrice = state.prices.base + state.prices.generation + state.prices.color + state.prices.personality + state.prices.package;
    document.getElementById('final-price').textContent = formatPrice(totalPrice);
    
    // Set final image
    const modelSlug = Object.keys(carData).find(key => carData[key].name === state.car.name);
    const finalImg = document.getElementById('final-car-img');
    const finalBg = document.getElementById('final-bg');
    
    const imgSrc = state.color.images[0]; // Lấy luôn ảnh đầu tiên trong mảng color đã chọn
    finalImg.src = imgSrc;
    finalBg.src = imgSrc;
    
    finalImg.onerror = function() {
        this.src = 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1000&auto=format&fit=crop';
        finalBg.src = this.src;
    };
    
    finalSec.classList.remove('hidden');
    finalSec.classList.add('flex');
    setTimeout(() => {
        finalSec.classList.remove('opacity-0');
        finalSec.classList.add('opacity-100');
    }, 100);
});

document.getElementById('btn-back-edit').addEventListener('click', () => {
    const finalSec = document.getElementById('conf-final');
    finalSec.classList.remove('opacity-100');
    finalSec.classList.add('opacity-0');
    setTimeout(() => {
        finalSec.classList.remove('flex');
        finalSec.classList.add('hidden');
    }, 1000);
});

// Mobile menu
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenuBg = document.getElementById('mobile-menu-bg');
const mobileMenuPanel = document.getElementById('mobile-menu-panel');

function toggleMenu(show) {
    if (show) {
        mobileMenu.classList.remove('hidden');
        setTimeout(() => {
            mobileMenu.classList.remove('opacity-0');
            mobileMenuPanel.classList.remove('translate-x-full');
        }, 10);
    } else {
        mobileMenu.classList.add('opacity-0');
        mobileMenuPanel.classList.add('translate-x-full');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300);
    }
}

hamburgerBtn?.addEventListener('click', () => toggleMenu(true));
closeMenuBtn?.addEventListener('click', () => toggleMenu(false));
mobileMenuBg?.addEventListener('click', () => toggleMenu(false));

