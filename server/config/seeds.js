const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Wood" },
    { name: "Metal" },
    { name: "Acrylic" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();
  const products = await Product.insertMany([
    {
      name: "Small Wood ",
      category: categories[0]._id,
      image: "wood-small-cut-2.jpg",
      description:
        "These are examples of small items we can print your image on. Ranging from a key chain to a 4x8 photo.",
      price: 29.99,
    },
    {
      name: "Medium Wood Piece",
      category: categories[0]._id,
      image: "medium-wood.webp",
      description:
        'These are examples of medium items we can print your image on. The largest cut out in medium is 24" x 24"',
      price: 59.99,
    },
    {
      name: "Large Wood Piece",
      category: categories[0]._id,
      image: "large-wood-3.jpg",
      description:
        "These are examples of large items we can print your image on. The largest cut out in large is 4' x 6'",
      price: 99.99,
    },
    {
      name: "Custom Wood Piece",
      category: categories[0]._id,
      image: "example-logo.jpg",
      description:
        "Please provide us with your image and dimensions of what size you would like. We will review the order and send you a price quote within 24hrs",
      price: 120.0,
    },

    {
      name: "Small Metal Piece",
      category: categories[1]._id,
      image: "small-metal-2.jpg",
      description:
        "These are examples of small items we can print your image on. Ranging from a key chain to a 4x8 photo.",
      price: 35.99,
    },
    {
      name: "Medium Metal Piece",
      category: categories[1]._id,
      image: "medium-metal-4.jpg",
      description:
        'These are examples of medium items we can print your image on. The largest cut out in medium is 24" x 24"',
      price: 65.99,
    },
    {
      name: "Large Metal Piece",
      category: categories[1]._id,
      image: "large-metal-1.jpg",
      description:
        "These are examples of large items we can print your image on. The largest cut out in large is 4' x 6'",
      price: 99.99,
    },
    {
      name: "Custom Metal Piece",
      category: categories[1]._id,
      image: "metal-custom.avif",
      description:
        "Please provide us with your image and dimensions of what size you would like. We will review the order and send you a price quote within 24hrs",
      price: 150.0,
    },

    {
      name: "Small Acrylic Piece",
      category: categories[2]._id,
      image: "acrylic-small-3.jpg",
      description:
        "These are examples of small items we can print your image on. Ranging from a key chain to a 4x8 photo.",
      price: 10.99,
      quantity: 45,
    },
    {
      name: "Medium Acrylic Piece",
      category: categories[2]._id,
      image: "acrylic-medium-3.avif",
      description:
        'These are examples of medium items we can print your image on. The largest cut out in medium is 24" x 24"',
      price: 29.99,
      quantity: 20,
    },
    {
      name: "Large Acrylic Piece",
      category: categories[2]._id,
      image: "acrylic-large-2.jpg",
      description:
        "These are examples of large items we can print your image on. The largest cut out in large is 4' x 6'",
      price: 69.99,
      quantity: 10,
    },
    {
      name: "Custom Acrylic Piece",
      category: categories[2]._id,
      image: "acrylic-custom-example.jpg",
      description:
        "Please provide us with your image and dimensions of what size you would like. We will review the order and send you a price quote within 24hrs",
      price: 99.99,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    username: "Mike",
    email: "test@email.com",
    password: "password",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  console.log("users seeded");

  process.exit();
});
