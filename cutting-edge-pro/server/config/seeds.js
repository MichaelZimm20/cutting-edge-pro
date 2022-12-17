const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    // await Category.deleteMany();


    // const categories = await Category.insertMany([
    //     { name: 'Wood'},
    //     { name: 'Metal'},
    //     { name: 'Vinyl'},
    // ]);
    
    // console.log('categories seeded');


    // products.js
    await Product.deleteMany();
    
    // const sizeName = [
    //     { name: 'Small' },
    //     { name: 'Medium' },
    //     { name: 'Large' },
    //     { name: 'Custom' }
    //   ]
      
      const products = await Product.insertMany([
          {
            name: 'Small',
            description:
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            price: 29.99,
            quantity: 45
          },
          {
            name: 'Medium',
            description:
            'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
            price: 59.99,
            quantity: 20
          },
          {
            name: 'Large',
            description:
            'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
            price: 99.99,
            quantity: 10
          },
          {
              name: 'Custom',
              description:
              'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
              price: 120.00,
            }
        ]);
        
        console.log('products seeded');
        


        await User.deleteMany();

  await User.create({
    userName: 'Mike',
    email: 'test@email.com',
    password: 'password',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });


  console.log('users seeded');
        
        
  process.exit();
        
});
