import Image from "next/image";
import ImgAppStore from "@/assets/btn-apple-store.svg"
import ImgGooglePlay from "@/assets/btn-google-play.svg"


export function ButtonStore() {
    return (
        <>
            <button title="Baixar na AppStore">
            <Image
            src={ImgAppStore}
            alt="Imagem da App Store"
            />
            </button>
                <button title="Baixar na GooglePlay">
                <Image
                src={ImgGooglePlay}
                alt="Imagem da GooglePlay"
                />
            </button>
        </>
    )
}