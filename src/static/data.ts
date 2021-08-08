const data = {
  categories: [
    { id: 1, title: 'Мясные' },
    { id: 2, title: 'Вегетарианская' },
    { id: 3, title: 'Гриль' },
    { id: 4, title: 'Острые' },
    { id: 5, title: 'Закрытые' },
    { id: 6, title: 'Категория 6' },
    { id: 7, title: 'Категория 7' },
  ],

  sizes: [
    { id: 1, title: '26 см.', ratioCost: 1 },
    { id: 2, title: '30 см.', ratioCost: 1.2 },
    { id: 3, title: '40 см.', ratioCost: 1.5 },
  ],

  depths: [
    { id: 1, title: 'тонкое', ratioCost: 1 },
    { id: 2, title: 'традиционное', ratioCost: 1.3 },
  ],

  pizzas: [
    {
      id: '11',
      title: '1 Чизбургер-пицца',
      category: '1',
      image:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
      cost: 10,
      availableDepths: ['1', '2'],
      availableSizes: ['2', '3'],
    },
    {
      id: '12',
      title: '2 Чизбургер-пицца',
      category: '1',
      image:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
      cost: 23,
      availableDepths: ['1', '2'],
      availableSizes: ['2', '3'],
    },
    {
      id: '13',
      title: '3 Чизбургер-пицца',
      category: '5',
      image:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
      cost: 3.6,
      availableDepths: ['2'],
      availableSizes: ['2', '3'],
    },
    {
      id: '14',
      title: '4 Чизбургер-пицца',
      category: '1',
      image:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
      cost: 99.523,
      availableDepths: ['1', '2'],
      availableSizes: ['2', '3'],
    },
    {
      id: '15',
      title: '5 Чизбургер-пицца',
      category: '3',
      image:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
      cost: 17.58,
      availableDepths: ['1', '2'],
      availableSizes: ['2', '3'],
    },
    {
      id: '16',
      title: '6 Чизбургер-пицца',
      category: '3',
      image:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
      cost: 89.16,
      availableDepths: ['1'],
      availableSizes: ['2', '3'],
    },
    {
      id: '17',
      title: '7 Чизбургер-пицца',
      category: '3',
      image:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
      cost: 89.16,
      availableDepths: ['2'],
      availableSizes: ['2', '3'],
    },
    {
      id: '18',
      title: '8 Чизбургер-пицца',
      category: '3',
      image:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
      cost: 89.16,
      availableDepths: ['1', '2'],
      availableSizes: ['2', '3'],
    },
    {
      id: '19',
      title: '9 Чизбургер-пицца',
      category: '3',
      image:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
      cost: 89.16,
      availableDepths: ['1', '2'],
      availableSizes: ['2', '3'],
    },
  ],

  users: [
    {
      id: 1,
      email: 'email@loc',
      password: '111',
    },
  ],
};

export const pizzas = data.pizzas;
export const depths = data.depths;
export const sizes = data.sizes;
export const categories = data.categories;
