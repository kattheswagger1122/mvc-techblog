const { User } = require('../models');

const userData = [
    {
        username: "Claudia A",
        twitter: "claudz",
        github: "clauz",
        email: "claudzgmail.com",
        password: "p@ssword1"
    },
    {
        username: "Chris B",
        twitter: "chrisb",
        github: "chrisb",
        email: "chrisb@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "andy c",
        twitter: "andy",
        github: "andy",
        email: "andy@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "yitee d",
        twitter: "yitee",
        github: "teeneasy",
        email: "yitee@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "celine e",
        twitter: "celine123",
        github: "celine123",
        email: "celine@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "amber f",
        twitter: "amberf",
        github: "amber",
        email: "amber@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;