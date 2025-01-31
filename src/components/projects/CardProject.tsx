/* eslint-disable prettier/prettier */
import React, { useRef } from 'react'
import { CardContainer, CardBody, CardItem } from '../ui/3d-card'
import { FiEye } from "react-icons/fi";
import { IoCodeSlash } from "react-icons/io5";
import { motion, useInView } from 'motion/react';
import Image from 'next/image'
import Link from 'next/link';
import { SiStyledcomponents, SiSpring, SiPostgresql, SiTypescript, SiVite, SiNodedotjs, SiNextdotjs } from "react-icons/si";
import { FaJava, FaReact, FaExternalLinkAlt } from "react-icons/fa";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

type Props = {
    title: string
    description: string
    src: string
    repository: string
    index: number,
    techs: string[],
    tags: string[]
}

const CardProject = ({ title, src, repository, index, techs, tags }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    const CardVariants = {
        "initial": { y: 100, opacity: 0 },
        "animate": { y: 0, opacity: 1 }
    }

    const IconTech = (tech: string, index: number) => {
        const style = "p-1  text-black dark:text-white hover:text-primaryColor dark:hover:text-primaryColor text-3xl md:text-4xl"
        switch (tech) {
            case "Typescript":
                return <SiTypescript className={`${style} text-black`} key={index} />;
            case "React.js":
                return <FaReact className={`${style}`} key={index} />;
            case "Vite.js":
                return <SiVite className={`${style}`} key={index} />;
            case "Styled-components":
                return <SiStyledcomponents className={`${style}`} key={index} />;
            case "Java":
                return <FaJava className={`${style}`} key={index} />;
            case "SpringBoot":
                return <SiSpring className={`${style}`} key={index} />;
            case "Postgres":
                return <SiPostgresql className={`${style}`} key={index} />;
            case "Next.js":
                return <SiNextdotjs className={`${style}`} key={index} />;
            case "Node.js":
                return <SiNodedotjs className={`${style}`} key={index} />;
            default:
                return null;
        }
    }
    return (
        <motion.div
            ref={ref}
            variants={CardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.7, delay: index * 0.4 }}>
            <CardContainer className="inter-var ">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
                    dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] 
                    h-auto rounded-xl p-6 border  ">
                    <CardItem
                        translateZ="50"
                        className="text-2xl font-extrabold text-black dark:text-white flex items-center justify-center text-center gap-2 w-full"
                    >
                        {title}
                        <Link href={repository}
                            className='sm:hidden font-extrabold text-black text-xl' >
                            <FaExternalLinkAlt />
                        </Link>
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-6 h-[25em] group">
                        <div className='absolute items-center justify-center gap-5 w-full h-full inset-0 bg-black opacity-0 hidden sm:group-hover:opacity-70
                            group-hover:flex transition-opacity duration-500'>
                            {tags.includes('Web') && (
                                <Link href="/">
                                    <FiEye size={40} className='cursor-pointer rounded-full border border-gray-500 p-2 
                                        hover:border-white text-gray-500 hover:text-white' />
                                </Link>
                            )}
                            <Link href={repository}>
                                <IoCodeSlash size={40} className='cursor-pointer rounded-full border border-gray-500 p-2 
                                    hover:border-white text-gray-500 hover:text-white' />
                            </Link>
                        </div>

                        <Image
                            src={src}
                            loading='lazy'
                            width={500}
                            height={500}
                            className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="mt-2 w-full flex items-center justify-center sm:items-end sm:justify-end gap-4"
                    >
                        {techs.map((tech, index) => (
                            <TooltipProvider key={index} delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger aria-label="Nome da tecnologia utilizada no projeto.">
                                        {IconTech(tech, index)}
                                    </TooltipTrigger>
                                    <TooltipContent className='font-bold' aria-label='Botão para ilustrar as tecnlogias do projeto.'>
                                        {tech}
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        ))}
                    </CardItem>
                </CardBody>
            </CardContainer>
        </motion.div>
    )
}

export default CardProject
