import Image from "next/image"
import IconSearch from "@/assets/icon-search.svg"

export function Search() {
    return (
        <>
            <div className="flex items-center gap-4 tablet:hidden">
                <Image
                src={IconSearch}
                alt="Ícone de uma lupa"
                />
                <input type="text" className="bg-transparent pr-5 outline-none text-white placeholder:text-white"
                placeholder="Buscar"
                />
            </div>
        </>
    )
}