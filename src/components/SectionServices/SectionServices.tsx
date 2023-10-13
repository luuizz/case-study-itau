import Image from "next/image";
import { Grid } from "../Grid/Grid";
import IconPhone from "@/assets/icon-phone.svg"
import IconSolutions from "@/assets/icon-solutions.svg"
import IconDiversosOpcoes from "@/assets/icon-options.svg"
import IconCard from "@/assets/icon-card.svg"

import ImagePhone from "@/assets/phone.png"

export function SectionServices() {

    const topics = [
        {
            text: 'Acompanhar sua conta, fazer transferências e pagamentos de onde estiver',
            image: {
                src: IconPhone,
                alt: 'Ícone de um telefone',
            }
        },
        {
            text: 'Soluções de empréstimos e renegociação para organizar suas finanças',
            image: {
                src: IconSolutions,
                alt: 'Ícone de uma mão estendida',
            }
        },
        {
            text: 'Diversas opções de investimentos, de acordo com o seu perfil de investidor',
            image: {
                src: IconDiversosOpcoes,
                alt: 'Ícone de uma pessoa na frente do quadro',
            }
        },
        {
            text: 'Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual.',
            image: {
                src: IconCard,
                alt: 'Ícone de um cartão de crédito',
            }
        }
    ]

    return (
        <>
            <section className="relative w-full h-[965px] desktop:h-[875px] tablet:h-auto tablet:mb-10">
                <Grid>
                    <div className="flex-1 max-w-[594px] pt-32 desktop:pt-20 tablet:max-w-full">
                        <span className="text-primary-orange text-sm font-bold uppercase mb-9 block desktop:mb-6 tablet:text-center">serviços exclusivos</span>
                        <h2 className="text-primary-gray text-[56px] font-bold leading-[120%] mb-6 tablet:text-center tablet:max-w-xl tablet:mx-auto mobile:text-[45px]">Gerencie suas finanças sem sair de casa</h2>
                        <p className="text-lg max-w-[554px]  mb-16 text-second-gray leading-relaxed tablet:text-center tablet:mx-auto">Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, rápida e o melhor, no corforto da sua casa.</p>
                        <ul className="flex flex-col item-start gap-9">
                            {
                                topics.map((topic, index) => (
                                    <li key={index} className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray last-of-type:border-b-[0px] tablet:mx-auto">
                                    <div className="w-7 h-7 flex items-center justify-center">
                                        <Image
                                        src={topic.image.src}
                                        alt={topic.image.alt}
                                        />
                                    </div>
                                    <p className="flex-1 text-txt-gray pr-2">{topic.text}</p>
                                </li>
                                ))
                            }
                        </ul>
                    </div>
                </Grid>
                <div className="absolute flex items-center top-0 right-0 w-[32%] h-full bg-gray-phone desktop:w-[28%] tablet:hidden">
                    <Image className="translate-x-[-50%]"
                    src={ImagePhone}
                    alt="Imagem do celular"
                    />
                </div>
            </section>
        </>
    )
}