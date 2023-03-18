import { PrismaClient } from "@prisma/client";
import { CourseProps } from "@/common/models";
import { FaSearch } from "react-icons/fa";
import {AiOutlineSearch} from "react-icons/ai";


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
                            <AiOutlineSearch size={20} fontWeight={400} className="text-gray-400 m-auto ml-2"/>
                            <input className="w-60 pl-2 border-transparent focus:outline-none" placeholder="Søg efter kurser..." />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container ">
                <div className="w-full text-center mt-4">
                    <h1 className="font-bold text-3xl">Tilgængelige Kurser</h1>
                </div>


                {courses.map((course) => (
                    <div key={course.id}>{course.title}</div>
                ))}
            </div>
        </>
    )
}

export default Course;