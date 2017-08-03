export const deck = [
  {
    image: require('./mcard-00.jpeg'),
  },
  {
    image: require('./mcard-01.jpeg'),
  },
  {
    image: require('./mcard-02.jpeg'),
  },
  {
    image: require('./mcard-03.jpeg'),
  },
  {
    image: require('./mcard-04.jpeg'),
  },
  {
    image: require('./mcard-05.jpeg'),
  },
  {
    image: require('./mcard-06.jpeg'),
  },
  {
    image: require('./mcard-07.jpeg'),
  },
  {
    image: require('./mcard-08.jpeg'),
  },
  {
    image: require('./mcard-09.jpeg'),
  },
];

export const config = {
  name: 'cardDeck',
  stacks: [
    {
      stack: [1, 2, 3, 4, 5, 6, 7, 8, 9], // card grouping + ordering
      interval: 3, // 3 days
    },
    {
      stack: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 2],
      interval: 3,
    },
    {
      stack: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 21, 2],
      interval: 2,
    },
    {
      stack: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 2],
      interval: 2,
    },
    {
      stack: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 2],
      interval: 2,
    },
    {
      stack: [1, 3, 4, 21, 5, 6, 7, 8, 9, 10, 11, 22, 2],
      interval: 2,
    },
    {
      stack: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 22, 2],
      interval: 2,
    },
    {
      stack: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 22, 2, 39],
      interval: 2,
    },
    {
      stack: [1, 3, 4, 21, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 23, 24, 22, 2, 40, 41],
      interval: 2,
    },
    {
      stack: [1, 3, 4, 21, 22], // random choose 5-6 other cards
      interval: 2,
    },
  ]
}
