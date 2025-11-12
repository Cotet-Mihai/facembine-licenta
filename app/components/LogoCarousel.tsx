'use client'

import LogoLoop from "@/components/LogoLoop";

const imageLogos = [
    { src: "/ong/agentia-impreuna.png", alt: "Company 1", href: "https://company1.com" },
    { src: "/ong/asociatia-ramses.png", alt: "Company 2", href: "https://company2.com" },
    { src: "/ong/centrul-filia.png", alt: "Company 3", href: "https://company3.com" },
];


export default function LogoCarousel() {

    return (
        <LogoLoop
            logos={imageLogos}
            speed={40}
            direction="left"
            logoHeight={96}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#00c950"
            ariaLabel="Technology partners"
        />
    )
}