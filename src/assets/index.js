export const deck = [
  {
    image:  require('./mcard-00.jpeg')
  },
  {
    image:  require('./mcard-01.jpeg')
  },
  {
    image:  require('./mcard-02.jpeg')
  },
  {
    image:  require('./mcard-03.jpeg')
  },
  {
    image:  require('./mcard-04.jpeg')
  },
  {
    image:  require('./mcard-05.jpeg')
  },
  {
    image:  require('./mcard-06.jpeg')
  },
  {
    image:  require('./mcard-07.jpeg')
  },
  {
    image:  require('./mcard-08.jpeg')
  },
  {
    image:  require('./mcard-09.jpeg')
  },
  {
    image:  require('./mcard-10.jpeg')
  },
  {
    image:  require('./mcard-11.jpeg')
  },
  {
    image:  require('./mcard-12.jpeg')
  },
  {
    image:  require('./mcard-13.jpeg')
  },
  {
    image:  require('./mcard-14.jpeg')
  },
  {
    image:  require('./mcard-15.jpeg')
  },
  {
    image:  require('./mcard-16.jpeg')
  },
  {
    image:  require('./mcard-17.jpeg')
  },
  {
    image:  require('./mcard-18.jpeg')
  },
  {
    image:  require('./mcard-19.jpeg')
  },
  {
    image:  require('./mcard-20.jpeg')
  },
  {
    image:  require('./mcard-21.jpeg')
  },
  {
    image:  require('./mcard-22.jpeg')
  },
  {
    image:  require('./mcard-23.jpeg')
  },
  {
    image:  require('./mcard-24.jpeg')
  },
  {
    image:  require('./mcard-25.jpeg')
  },
  {
    image:  require('./mcard-26.jpeg')
  },
  {
    image:  require('./mcard-27.jpeg')
  },
  {
    image:  require('./mcard-28.jpeg')
  },
  {
    image:  require('./mcard-29.jpeg')
  },
  {
    image:  require('./mcard-30.jpeg')
  }
];

export const config = {
  stacks: [
    {
      name: 'Simple',
      stack: [1, 2, 5, 6, 7, 8, 3, 4], // card grouping + ordering
      interval: 3, // 3 days
    },
    {
      name: 'Tension Release 1',
      stack: [1, 2, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 25, 26, 3, 4], // card grouping + ordering
      interval: 3,
    },
    {
      name: 'Tension Release 2',
      stack: [1, 2, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 25, 26, 3, 4],
      interval: 2,
    },
    {
      name: 'Body and Breath',
      stack: [1, 2, 5, 6, 7, 8, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 3, 4],
      interval: 2,
    },
    {
      name: 'Exploring the senses',
      stack: [1, 2, 5, 6, 7, 8, 29, 30, 3, 4],
      interval: 2,
    },
  ]
}
