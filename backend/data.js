import bcrypt from 'bcrypt';

const data = {
    users: [
        {
            name: 'Gideon',
            email: 'admin@fakemail.com',
            password: bcrypt.hashSync('12345678', 10),
            isAdmin: true,
        },
        {
            name: 'Heraldo',
            email: 'user@fakemail.com',
            password: bcrypt.hashSync('12345678', 10),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'Useless Grass',
            category: 'Plants',
            brand: 'Useless',
            image: '/images/p1.jpg',
            price: 10,
            rating: 4.5,
            numReviews: 10,
            description: 'Grass used for nothing...',
            countInStock: 40,
        },
        {
            name: 'Pacific Island',
            category: 'Island',
            brand: 'No Brand',
            image: '/images/p2.jpg',
            price: 190000,
            rating: 4.1,
            numReviews: 14,
            description: 'A good island to forget the world...',
            countInStock: 2,
        },
        {
            name: 'Wheat Farm',
            category: 'Farm',
            brand: 'No Brand',
            image: '/images/p3.jpg',
            price: 500000,
            rating: 4.8,
            numReviews: 2,
            description: 'A great way to gey money!',
            countInStock: 1,
        },
        {
            name: 'Hiphone',
            category: 'Smartphone',
            brand: 'Pearl',
            image: '/images/p4.jpg',
            price: 1000,
            rating: 4.1,
            numReviews: 78,
            description: 'Just another smartphone',
            countInStock: 250,
        },
        {
            name: 'Old laptop',
            category: 'Laptop',
            brand: 'Not Apple',
            image: '/images/p5.jpg',
            price: 2500,
            rating: 4.9,
            numReviews: 16,
            description: 'A good laptop for a good price',
            countInStock: 24,
        },
    ]
}

export default data;