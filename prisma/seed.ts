import { PrismaClient } from "@prisma/client";
import { data } from "./migrations/data";


const prisma = new PrismaClient();

async function main() {

    const admin = await prisma.user.upsert({
        where: { email: 'admin@admin.dk' },
        update: {},
        create: {
            name: 'admin',
            email: 'admin@admin.dk',
            courses: {
                create: [
                    {
                        title: 'Typescript Basics',
                        description: 'Super set of javascript.',
                        poster: 'insert a path'
                    }, 
                    {
                        title: 'Javascript Basics',
                        description: 'Used for client side logic.',
                        poster: 'insert a path'
                    },
                    {
                        title: 'C# Basics',
                        description: '.NET framework object oriented language',
                        poster: 'insert a path'
                    }
                ]
            }
        }
    })

    const testUser = await prisma.user.upsert({
        where: { email: 'test@test.dk' },
        update: {},
        create: {
            name: 'test',
            email: 'test@test.dk',
            courses: {
                create: [ ]
            }
        }
    })

    console.log(admin, testUser);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })