'use client'

import Image from "next/image"
import React, { useState } from "react"
import Logo from "@/assets/logo.svg"
import MenuOpen from "@/assets/icon-menu.svg"
import { NavMenu } from "./NavMenu"
import { Search } from "./Search"
import { ButtonAccount } from "./ButtonAccount"
import { Grid } from "@/components/Grid/Grid"

export function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
        <header className=" relative flex items-center w-full h-20 bg-primary-orange">
            <div className="tablet:hidden absolute top-0 right-0 bg-primary-blue h-full w-[19%] z-0"></div>
            <Grid>
                <div className="flex flex-1 item-center justify-between">
                    <div className="flex items-center gap-14">
                        <Image
                        src={Logo}
                        alt="Logo do Banco Itaú"
                        title="Página inciial"
                        />
                        <NavMenu isOpen={isMenuOpen}/>
                    </div>
                    <Search />
                </div>
                <ButtonAccount />
                <button title="Abrir menu" className="hidden tablet:flex" onClick={toggleMenu}>
                            <Image
                            src={MenuOpen}
                            alt="Ícone de 3 traços"
                            />
                </button>
            </Grid>
        </header>
        </>
    )
}