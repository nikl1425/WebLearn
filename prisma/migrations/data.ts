/**
 * Test courses
 */

const javascript = {
    title: 'Javascript',
    description: 'Used for client side logic.',
    poster: 'insert a path'
}

const typescript = {
    title: 'Typescript',
    description: 'Super set of javascript.',
    poster: 'insert a path'
}

/**
 * Test users
 */

const admin = {
    name: 'admin',
    email: 'admin@admin.dk',
    courses: {
        create: [
            javascript,
            typescript
        ]
    }
}

const test_user_one = {
    name: 'test_one',
    email: 'test@test.dk',
    courses: {
        create: []
    }
}


export const data = [
    admin,
    test_user_one
]




