const { Post } = require('../models');

const postdata = [
  {
    title: 'HELLO TECH PEOPLE',
    content : 'Are keyboards a thing of the PAST!!!',
    user_id: 10
  },
  {
    title: 'ACTORS BREAKING INTO TECH',
    content : 'When is the best time to break into software development?',
    user_id: 8
  },
  {
    title: 'MOTOROLA MAKE A COMEBACK!',
    content : 'Phones are a thing of the past.',
    user_id: 1
  },
  {
    title: 'TECH NEWS DAILY',
    content : 'Best pc of 2022 is a laptop',
    user_id: 4
  },
  {
    title: 'DAILY TECH NEWS ',
    content : 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 7
  },
  {
    title: 'CODING PONG ',
    content : 'ping pong helps developers code',
    user_id: 4
  },
  {
    title: 'NBA FINALS TECH BACKED!.',
    content : 'http://edublogs.org/non/ligula/pellentesque.js',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content : 'HELP, this application is not finished',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    content : 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 9
  },
  {
    title: 'WE ARE JUST LEARNIG JAVASCRIPT!',
    content : 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content : 'http://china.com.cn/lectus/vestibulum.json',
    user_id: 3
  },
  {
    title: 'BOBS BURGER MOVIE',
    content : 'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
    user_id: 10
  },
  {
    title: 'TECH NEWS WEEKLY',
    content : 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
    user_id: 8
  },
  {
    title: 'WEEKLY TECH NEWS',
    content : 'https://lycos.com/natoque/penatibus/et.html',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    content : 'https://gmpg.org/lorem.jpg',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    content : 'https://paginegialle.it/mattis/egestas.jsp',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content : 'http://wikia.com/turpis/eget.jpg',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    content : 'https://shareasale.com/quis.json',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    content : 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    content : 'https://java.com/at/nibh/in.png',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
