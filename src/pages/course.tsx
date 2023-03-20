import { PrismaClient } from "@prisma/client";
import { CourseProps } from "@/common/models";
import { FaSearch } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import Card from "@/common/components/card";


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
            <div className=" bg-green-300  mx-auto text-center py-12">
                <div className="pt-16 pb-16">
                    <h2 className="text-3xl leading-9 font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-10">
                        Start studying with us
                    </h2>
                    <div className="mt-8 ">
                        <div className="inline-flex bg-white shadow rounded-lg">
                            <div className="flex justify-center mt-1 mb-1 mr-1 ">
                                <AiOutlineSearch size={20} fontWeight={400} className="text-gray-400 m-auto ml-2" />
                                <input className="w-60 pl-2 border-transparent focus:outline-none" placeholder="Søg efter kurser..." />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container mb-6">
                <div className="w-full text-left mt-4">
                    <h1 className="font-bold text-3xl font-press-start">Tilgængelige Kurser</h1>
                </div>

                <div className="mt-6 mb-6">
                    <div className="flex flex-row space-x-10 justify-center">
                        {courses.map((course) => (
                            <div key={course.id}>
                                <Card title={course.title} description={course.description ? course.description : ''} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>hej</div>
        </>
    )
}

export default Course;