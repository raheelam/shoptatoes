const PRODUCTS_CATEGORIES = {
  diffuser: 'diffuser',
  perfume: 'perfume',
  candle: 'candle',
  turarenWuta: 'turarenWuta',
};

export const products = [
  {
    productName: 'Apple diffuser',
    price: 5000,
    id: 1,
    featured: true,
    category: PRODUCTS_CATEGORIES.diffuser,
    quantity: 10,
    description: 'Apple diffuser',
    imageUrl:
      'https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?cs=srgb&dl=pexels-houzlook-com-3356416.jpg&fm=jpg',
  },
  {
    productName: 'Pineapple diffuser',
    price: 5000,
    id: 2,
    featured: true,
    category: PRODUCTS_CATEGORIES.diffuser,
    description: 'Pineapple diffuser',
    imageUrl:
      'https://images.pexels.com/photos/6198663/pexels-photo-6198663.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6198663.jpg&fm=jpg',
  },
  {
    productName: 'Abal Hugo Boss',
    price: 5000,
    id: 3,
    featured: true,
    category: PRODUCTS_CATEGORIES.perfume,
    description: 'oil perfume',
    imageUrl:
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571463.jpg&fm=jpg',
  },
  {
    productName: 'Abal Halut',
    price: 1000,
    id: 4,
    featured: true,
    category: PRODUCTS_CATEGORIES.turarenWuta,
    description: 'halut by abal',
    imageUrl:
      'https://images.pexels.com/photos/6207824/pexels-photo-6207824.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6207824.jpg&fm=jpg',
  },
  {
    productName: 'Abal sandal flakes',
    price: 1000,
    id: 5,
    featured: false,
    category: PRODUCTS_CATEGORIES.turarenWuta,
    description: 'sandal flakes by abal',
    imageUrl:
      'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?cs=srgb&dl=pexels-atbo-245208.jpg&fm=jpg',
  },
  {
    productName: 'Abal Kajiji',
    price: 1500,
    id: 6,
    featured: true,
    category: PRODUCTS_CATEGORIES.turarenWuta,
    description: 'Kajiji by abal',
    imageUrl:
      'https://images.pexels.com/photos/932095/pexels-photo-932095.jpeg?cs=srgb&dl=pexels-photomix-company-932095.jpg&fm=jpg',
  },
  {
    productName: 'Tropical scented candle',
    price: 5000,
    id: 7,
    featured: true,
    category: PRODUCTS_CATEGORIES.candle,
    description: 'scented candle',
    imageUrl:
      'https://images.pexels.com/photos/6283845/pexels-photo-6283845.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6283845.jpg&fm=jpg',
  },
  {
    productName: 'Orange scented Candle',
    price: 5000,
    id: 8,
    featured: false,
    category: PRODUCTS_CATEGORIES.candle,
    description: 'orange scented candle',
    imageUrl:
      'https://images.pexels.com/photos/6283845/pexels-photo-6283845.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6283845.jpg&fm=jpg',
  },
];

export const featuredProducts = products.filter((product) => product.featured);
