/* eslint-disable prettier/prettier */
'use client'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'
import NavMobile from './NavMobile'
import Nav from './Nav'
import Logo from '../Logo'

interface headerProps {
    isDarkMode: boolean
    setIsDarkMode: (state: boolean) => void
}

const Header = ({ isDarkMode, setIsDarkMode }: headerProps) => {
    const handleViewMode = () => {
        setIsDarkMode(!isDarkMode)
        if (!isDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    return (
        <div className="fixed mx-auto shadow-sm top-0 left-0 right-0 z-10 bg-gray-200 dark:bg-gray-800 bg-opacity-100 px-10 ">
            <div className='flex items-center justify-between py-8'>
                {/* LOGO */}
                <Logo />

                {/* NAV */}
                <NavMobile isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                <div className="items-center gap-5 hidden lg:flex">
                    <Nav close={setIsDarkMode} />

                    <div className="flex items-center justify-center text-black dark:text-white">
                        <motion.button
                            onClick={() => handleViewMode()}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.5, ease: 'linear' }}
                            className="hover:text-purple-500"
                            aria-label="Botão para alterar tema do site"
                        >
                            <motion.div
                                whileHover={{ rotate: 360 }}  // Rotaciona o ícone em 180 graus ao passar o mouse
                                transition={{ duration: 0.3 }}  // Define a duração da rotação
                            >
                                {isDarkMode ? <Sun size={25} /> : <Moon size={25} />}
                            </motion.div>
                        </motion.button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header
