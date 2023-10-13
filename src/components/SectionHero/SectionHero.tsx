import Image from "next/image";
import { Grid } from "../Grid/Grid";
import { ButtonStore } from "./ButtonStore";
import ArrowDrown from "@/assets/arrow-explorer.svg"
import Woman from "@/assets/woman.png"

export function SectionHero() {
    return (
        <>
            <section className="desktop:h-[512px] w-full h-[704px] bg-img_bg_hero bg-no-repeat bg-center bg-cover tablet:h-auto">
                <Grid>
                    <div className="flex items-center tablet:flex-col tablet:flex-1 tablet:pt-5 mobile:pt-12 mobile:w-full">
                        <div className="flex-1 max-w-[500px] desktop:max-w-[650px]">
                            <h1 className="text-white text-7xl font-bold mb-4 tablet:text-center mobile:text-[2.75rem] mobile:max-w-sm">Tenha seu banco na palma da mão.</h1>
                            <p className="text-white text-xl max-w-[408px] mb-8 tablet:text-center tablet:mx-auto">Todas as operações que você precisa em um só lugar. Simples, completo e feito pra você.</p>
                            <div className="flex gap-4 mb-24 tablet:justify-center tablet:mb-12">
                                <ButtonStore />
                            </div>
                            <button className="flex items-center gap-3 tablet:mx-auto">
                                <Image
                                src={ArrowDrown}
                                alt="Seta para baixo"
                                />
                                <span className="text-white text-sm font-bold">Continue explorando</span>
                            </button>
                        </div>
                        <Image className="mr-[-41px] desktop:mr-[-30px] desktop:max-w-lg"
                        src={Woman}
                        alt="Imagem de uma mulher segurando um telefone" />
                    </div>
                </Grid>
            </section>
        </>
    )
}