const USERS = [
  {
    id: '2',
    name: "Obi-Wan ",
    lastname: "Kenobi",
    phone: "33333333",
    email: "test@test.com.tr",
    date_of_birth: "1999-10-09",
  },
  {
    id: '11',
    name: "Luke",
    lastname: "Skywalker",
    phone: "123123123333",
    email: "test@deneme.io",
    date_of_birth: "1997-07-25",
  },
  {
    id: '10',
    name: "Leia",
    lastname: "Organa",
    phone: "qweqweqwe",
    email: "aaa@bbb.com",
    date_of_birth: "1983-03-01",
  },
  {
    id: '3',
    name: "Anakin",
    lastname: "Skywalker",
    phone: "3276123",
    email: "i@e.m",
    date_of_birth: "2015-01-12",
  },
];

export function getAllUsers() {
  return USERS;
}

export function getUserById(id) {
  return USERS.find((user) => user.id === id);
}
