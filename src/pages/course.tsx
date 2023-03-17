import { PrismaClient } from "@prisma/client";
import { CourseProps } from "@/common/models";

export async function getStaticProps() {
    const prisma = new PrismaClient();
    const courses = await prisma.course.findMany({
        include: { author: true }
    })
    return {
        props: {
            courses
        }
    }
}

const Course = ({ courses }: CourseProps) => {
    return (
        <>
            <div className="bg-cover bg-center  h-auto text-black py-24 px-10 object-fill">
                <div className="md:w-1/2">
                    <h1 className="text-3xl font-bold">Multimedia products</h1>
                    <p className="text-2xl mb-10 leading-none">Atractive designs for your brand</p>
                    <a href="#" className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Contact us</a>
                </div>
            </div>
            <div className="container ">
                <div className="w-full text-center">
                    <h1 className="font-bold text-3xl text-green-500">Kurser</h1>
                </div>


                {courses.map((course) => (
                    <div key={course.id}>{course.title}</div>
                ))}
            </div>
        </>
    )
}

export default Course;