const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "randysavage",
    email: "nwestnedge0@cbc.ca",
    password: "password123",
  },
  {
    username: "hulkhogan",
    email: "rmebes1@sogou.com",
    password: "password123",
  },
  {
    username: "cocobeware",
    email: "cstoneman2@last.fm",
    password: "password123",
  },
  {
    username: "jakeroberts",
    email: "ihellier3@goo.ne.jp",
    password: "password123",
  },
  {
    username: "ultimatewarrior",
    email: "gmidgley4@weather.com",
    password: "password123",
  },
  {
    username: "mrperfect",
    email: "larnout5@imdb.com",
    password: "password123",
  },
  {
    username: "brutusbeefcake",
    email: "hnapleton6@feedburner.com",
    password: "password123",
  },
  {
    username: "rickflair",
    email: "kperigo7@china.com.cn",
    password: "password123",
  },
  {
    username: "bretthart",
    email: "lmongain8@google.ru",
    password: "password123",
  },
  {
    username: "jimduggan",
    email: "bsteen9@epa.gov",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
