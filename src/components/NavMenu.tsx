import { ItemMenu } from "./ItemMenu"

type Props = {
    isOpen: boolean;
}

export function NavMenu({ isOpen }: Props) {

    const menuClasses = isOpen ? "tablet:flex" : "laptop:hidden";

    return (
        <ul className={`flex items-center gap-12 ${menuClasses} desktop:gap-8 tablet:hidden`}>
        <li>
            <ItemMenu
            name="Para você" />
        </li>
        <li>
            <ItemMenu
            name="Para empresas" />
        </li>
        <li>
            <ItemMenu
            name="Serviços" />
        </li>
        <li>
            <ItemMenu
            name="Ajuda" />
        </li>
    </ul>
    )
}