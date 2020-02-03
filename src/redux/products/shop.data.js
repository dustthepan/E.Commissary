//proxy database
const SHOP_DATA = {
 cold: {
    id: 1,
    title: 'Cold,Allergy,Fever',
    routeName: 'cold',
    items: [
      {
        id: 1,
        name: 'AdViee',
        imageUrl: "/images/shop-img/cold/advil.png",
        price: 8
      },
      {
        id: 2,
        name: 'Allegr0',
        imageUrl: "/images/shop-img/cold/allegra.png",
        price: 13
      },
      {
        id: 3,
        name: 'Qui-C',
        imageUrl: "/images/shop-img/cold/emergency.png",
        price: 11
      },
      {
        id: 4,
        name: 'BioPlus',
        imageUrl: "/images/shop-img/cold/mucinex.png",
        price: 12
      },
      {
        id: 5,
        name: 'Mintie',
        imageUrl: "/images/shop-img/cold/nyquil.png",
        price: 9
      },
      {
        id: 6,
        name: 'MediMax',
        imageUrl: "/images/shop-img/cold/sudafed.png",
        price: 7
      },
      {
        id: 7,
        name: 'Clevritin',
        imageUrl: "/images/shop-img/cold/claritan.png",
        price: 19
      },
      {
        id: 8,
        name: 'Fixie',
        imageUrl: "/images/shop-img/cold/dayquil.png",
        price: 10
      },
      {
        id: 9,
        name: 'PowerDo',
        // imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        imageUrl: "/images/shop-img/cold/tylenol.png",
        price: 8
      },
      {
        id: 10,
        name: "Xirop Allergy",
        imageUrl: "/images/shop-img/cold/Xyzal.png",
        price: 8
      }
    ]
  },
 oral:{
    id: 2,
    title: 'Oral Care',
    routeName: 'oral',
    items: [
      {
        id: 10,
        name: 'DenTek Dental Guard',
        description: "Protect your jaw \n fighting people",
        imageUrl: "/images/shop-img/oral/mouthguard.png", 
        price: 15
      },
      {
        id: 11,
        name: 'Senshine',
        imageUrl: "/images/shop-img/oral/sensodyne.png",
        price: 6
      },
      {
        id: 12,
        name: 'ElectriBRU',
        imageUrl: "/images/shop-img/oral/oralb.png",
        price: 100
      },
      {
        id: 13,
        name: 'Dentac Floss',
        imageUrl: "/images/shop-img/oral/floss.png",
        price: 15
      },
      {
        id: 14,
        name: 'DenBRU',
        imageUrl: "/images/shop-img/oral/brush.png",
        price: 11
      },
      {
        id: 15,
        name: 'RestoJel',
        imageUrl: "/images/shop-img/oral/oraljel.png",
        price: 10
      },
      {
        id: 16,
        name: 'Protectva',
        imageUrl: "/images/shop-img/oral/mouthwash.png",
        price: 5
      },
      {
        id: 17,
        name: 'Dentac Picks',
        imageUrl: "/images/shop-img/oral/picks.png",
        price: 10
      }
    ]
  },
 pain:{
    id: 3,
    title: 'Pain Relief',
    routeName: 'pain',
    items: [
      {
        id: 18,
        name: 'Xerov',
        imageUrl: "/images/shop-img/pain/pain1.png",
        price: 15
      },
      {
        id: 19,
        name: 'Artho',
        imageUrl: "/images/shop-img/pain/pain2.png",
        price: 12
      },
      {
        id: 20,
        name: 'MENthol Patch',
        imageUrl: "/images/shop-img/pain/pain3.png",
        price: 7
      },
      {
        id: 21,
        name: 'Mevrov Liquid Gels',
        imageUrl: "/images/shop-img/pain/pain4.png",
        price: 15
      },
      {
        id: 22,
        name: 'Evera',
        imageUrl: "/images/shop-img/pain/pain5.png",
        price: 14
      }
    ]
  },
 diabetic: {
    id: 4,
    title: 'Diabetic',
    routeName: 'diabetic',
    items: [
      {
        id: 23,
        name: 'Energibatic',
        imageUrl: "/images/shop-img/diabetic/diab1.png",
        price: 15
      },
      {
        id: 24,
        name: 'SKIN Expert',
        imageUrl: "/images/shop-img/diabetic/diab2.png",
        price: 11
      },
      {
        id: 25,
        name: 'NaturA',
        imageUrl: "/images/shop-img/diabetic/diab3.png",
        price: 14
      },
      {
        id: 26,
        name: 'CureStrip Monitor',
        imageUrl: "/images/shop-img/diabetic/diab4.png",
        price: 100
      },
      {
        id: 27,
        name: 'CureStrip Test Strips',
        imageUrl: "/images/shop-img/diabetic/diab5.png",
        price: 90
      },
      {
        id: 28,
        name: 'q-pharm Diabetic Testing Kit',
        imageUrl: "/images/shop-img/diabetic/diab6.png",
        price: 200
      },
      {
        id: 29,
        name: 'FitLIFE Lancets',
        imageUrl: "/images/shop-img/diabetic/diab7.png",
        price: 8
      }
    ]
  },
 diagnostics: {
    id: 5,
    title: 'Diagnostics',
    routeName: 'diagnostics',
    items: [
      {
        id: 30,
        name: 'Fast Check Drug Test',
        imageUrl: "/images/shop-img/diagnostic/diag1.png",
        price: 35
      },
      {
        id: 31,
        name: 'Fast Solution Pregnancy Test',
        imageUrl: "/images/shop-img/diagnostic/diag2.png",
        price: 15
      },
      {
        id: 32,
        name: 'EV Ketone Test Strips',
        imageUrl: "/images/shop-img/diagnostic/diag3.png",
        price: 8
      },
      {
        id: 33,
        name: 'HAZi Ovulation Test System',
        imageUrl: "/images/shop-img/diagnostic/diag4.png",
        price: 17
      },
      {
        id: 34,
        name: 'Fast Check Cholesterol Test',
        imageUrl: "/images/shop-img/diagnostic/diag5.png",
        price: 21
      },
      {
        id: 35,
        name: 'q-Heal Blood Pressure Monitor',
        imageUrl: "/images/shop-img/diagnostic/diag6.png",
        price: 40
      }
    ]
  }
};

export default SHOP_DATA;
