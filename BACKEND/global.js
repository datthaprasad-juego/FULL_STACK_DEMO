const global = {};

global.DEFAULT_POINTS = 500;
global.ROOM_INITIATE_COST = 50;
global.ROOM_REWARD = 100;
global.RANK_INDEX = 1;

global.USER_STATUS = {
  REGISTERED: 0,
  VERIFIED: 1,
};

global.DEFAULT_CARDS = [
  {
    name: "King Kohli",
    centuries: 70,
    best: 183,
    rank: 1,
    six: 100,
    four: 78,
    trophie: 2,
  },
  {
    name: "AB de Villiers",
    centuries: 30,
    best: 183,
    rank: 2,
    six: 150,
    four: 70,
    trophie: 2,
  },
  {
    name: "Rohit Sharma",
    centuries: 43,
    best: 268,
    rank: 3,
    six: 158,
    four: 90,
    trophie: 14,
  },
  {
    name: "MS Dhoni",
    centuries: 30,
    best: 183,
    rank: 4,
    six: 150,
    four: 70,
    trophie: 12,
  },
];
global.REWARD_CARDS = [
  {
    name: "King Kohli",
    centuries: 70,
    best: 183,
    rank: 1,
    six: 100,
    four: 78,
    trophie: 2,
  },
  {
    name: "AB de Villiers",
    centuries: 30,
    best: 183,
    rank: 2,
    six: 150,
    four: 70,
    trophie: 2,
  },
  {
    name: "Rohit Sharma",
    centuries: 43,
    best: 268,
    rank: 3,
    six: 158,
    four: 90,
    trophie: 14,
  },
  {
    name: "MS Dhoni",
    centuries: 30,
    best: 183,
    rank: 4,
    six: 150,
    four: 70,
    trophie: 12,
  },
];
global.CARD_INDEX = {
  1: "rank",
  2: "best",
  3: "centuries",
  4: "six",
  5: "four",
  6: "trophie",
};

module.exports = global;
