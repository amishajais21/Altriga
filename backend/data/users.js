import bcrypt from 'bcryptjs'
const users=[
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Amisha Jaiswal',
        email: 'amisha@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Dhanya Sri',
        email: 'dhanya@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Tanishq Kumar',
        email: 'tanishq@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]
export default users