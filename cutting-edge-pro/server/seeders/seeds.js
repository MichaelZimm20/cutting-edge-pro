const { faker } = require('@faker-js/faker');

const db = require("../config/connection");
const { Product, User, Category } = require("../models");

db.once("open", async () => {
  await Product.deleteMany({});
  await User.deleteMany({});
  await Category.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  await User.collection.insertMany(userData);

  //create products
  const productData = [];

  for (let i = 0; i < 3; i += 1){
    const name = faker.name.findName();
    const description = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const quantity = faker.datatype.number({ min: 0, max: 100 })

    productData.push({name, description, quantity})
  }

  await Product.collection.insertMany(productData);

  console.log('all done!');
  process.exit(0);
});
