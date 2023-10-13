import Image from "next/image"
import IconUser from "@/assets/icon-user.svg"

export function ButtonAccount() {
    return (
        <>
            <button className="z-10 flex items-center gap-4 bg-primary-blue h-20 pl-10 tablet:hidden">
                <Image
                src={IconUser}
                alt="Ícone de um usuário"
                />
                <span className="text-white font-bold">Acessar conta</span>
            </button>
        </>
    )
}