/* Used as starting data for ShopPage */
const SHOP_DATA = [
  {
    id: 1,
    title: 'Cold,Allergy,Fever',
    routeName: 'cold',
    items: [
      {
        id: 1,
        name: 'Advil',
        // imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        imageUrl: "/images/shop-img/cold/advil.jpg",
        price: 12
      },
      {
        id: 2,
        name: 'Allegra',
        // imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        imageUrl: "/images/shop-img/cold/allegra.png",
        price: 11
      },
      {
        id: 3,
        name: 'Emergen-C',
        // imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        imageUrl: "/images/shop-img/cold/emergenc.png",
        price: 12
      },
      {
        id: 4,
        name: 'Mucinex',
        // imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        imageUrl: "/images/shop-img/cold/mucinex.jpg",
        price: 17
      },
      {
        id: 5,
        name: 'Nyquil',
        // imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        imageUrl: "/images/shop-img/cold/nyquil.jpg",
        price: 18
      },
      {
        id: 6,
        name: 'Sudafed',
        // imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        imageUrl: "/images/shop-img/cold/sudafed.jpeg",
        price: 14
      },
      {
        id: 7,
        name: 'Claritan',
        // imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        imageUrl: "/images/shop-img/cold/claritan.jpg",
        price: 18
      },
      {
        id: 8,
        name: 'Dayquil',
        // imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        imageUrl: "/images/shop-img/cold/dayquil.jpg",
        price: 14
      },
      {
        id: 9,
        name: 'Tylenol',
        // imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        imageUrl: "/images/shop-img/cold/tylenol.jpeg",
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: 'Oral Care',
    routeName: 'oral',
    items: [
      {
        id: 10,
        name: 'DenTek Dental Guard',
        // imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        imageUrl: "/images/shop-img/oral/mouthguard.jpg", 
        price: 17
      },
      {
        id: 11,
        name: 'Sensodyne',
        // imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        imageUrl: "/images/shop-img/oral/sensodyne.jpeg",
        price: 10
      },
      {
        id: 12,
        name: 'Oralb Electronic Toothbrush',
        // imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        imageUrl: "/images/shop-img/oral/oralb.jpg",
        price: 110
      },
      {
        id: 13,
        name: 'Oralb Glide Floss',
        // imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        imageUrl: "/images/shop-img/oral/floss.png",
        price: 7
      },
      {
        id: 14,
        name: 'Oralb Toothbrush',
        // imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        imageUrl: "/images/shop-img/oral/brush.jpg",
        price: 7
      },
      {
        id: 15,
        name: 'Oraljel Toothache Relief',
        // imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        imageUrl: "/images/shop-img/oral/oraljel.png",
        price: 12
      },
      {
        id: 16,
        name: 'Crest Mouthwash',
        // imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        imageUrl: "/images/shop-img/oral/mouthwash.jpg",
        price: 10
      },
      {
        id: 17,
        name: 'Oralb Floss Picks',
        // imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        imageUrl: "/images/shop-img/oral/picks.jpg",
        price: 12
      }
    ]
  },
  {
    id: 3,
    title: 'pain relief',
    routeName: 'pain',
    items: [
      {
        id: 18,
        name: 'Excedrin Migraine',
        // imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        imageUrl: "/images/shop-img/pain/pain1.jpg",
        price: 10
      },
      {
        id: 19,
        name: 'Tylenol Arthritis',
        // imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        imageUrl: "/images/shop-img/pain/pain2.png",
        price: 9
      },
      {
        id: 20,
        name: 'IcyHot Medicated Patch',
        // imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        imageUrl: "/images/shop-img/pain/pain3.png",
        price: 9
      },
      {
        id: 21,
        name: 'Motrin Liquid Gels',
        // imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        imageUrl: "/images/shop-img/pain/pain4.jpg",
        price: 10
      },
      {
        id: 22,
        name: 'Aleve',
        // imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        imageUrl: "/images/shop-img/pain/pain5.jpeg",
        price: 11
      }
    ]
  },
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        // imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        imageUrl: "/images/shop-img/womens/blue-tank.png",
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        // imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        imageUrl: "/images/shop-img/womens/floral-blouse.png",
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        // imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        imageUrl: "/images/shop-img/womens/floral-skirt.png",
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        // imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        imageUrl: "/images/shop-img/womens/red-polka-dot-dress.png",
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        // imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        imageUrl: "/images/shop-img/womens/striped-sweater.png",
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        // imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        imageUrl: "/images/shop-img/womens/yellow-track-suit.png",
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        // imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        imageUrl: "/images/shop-img/womens/white-vest.png",
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        // imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        imageUrl: "/images/shop-img/mens/camo-vest.png",
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        // imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        imageUrl: "/images/shop-img/mens/floral-shirt.png",
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        // imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        imageUrl: "/images/shop-img/mens/long-sleeve.png",
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        // imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        imageUrl: "/images/shop-img/mens/pink-shirt.png",
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        // imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        imageUrl: "/images/shop-img/mens/roll-up-jean-shirt.png",
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        // imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        imageUrl: "/images/shop-img/mens/polka-dot-shirt.png",
        price: 25
      }
    ]
  }
];

export default SHOP_DATA;
