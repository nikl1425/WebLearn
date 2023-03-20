import { PrismaClient } from "@prisma/client";
import { CourseProps } from "@/common/models";
import { FaSearch } from "react-icons/fa";

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
            <div className=" shadow-md bg-gray-50 py-12">
                <div className="pt-16 pb-16 container flex-1 text-center">
                    <h2 className="text-3xl leading-9 font-bold tracking-tight text-green-400 sm:text-4xl sm:leading-10 text-shadow-custom drop-shadow-xl">
                        Start studying with us
                    </h2>
                    
                </div>

            </div>
            <div className="container mb-6">
                <div className="flex flex-col">
                    <div className="w-full text-left mt-4">
                        <h1 className="font-bold text-3xl font-press-start">Tilgængelige Kurser</h1>
                    </div>

                    <div className="flex">
                        <div>

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

                    
                </div>

            </div>
            <div>hej</div>
        </>
    )
}

export default Course;