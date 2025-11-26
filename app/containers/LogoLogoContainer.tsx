import React from "react";
import LogoLoop from "@/components/LogoLoop";
import {trustedOngs, TrustedOng} from '@/lib/trustedOng'

type LogosProps = {
    src: string,
    alt: string,
    href: string
}

const logos: LogosProps[] = trustedOngs.map((ong: TrustedOng): LogosProps => ({
    src: ong.image,
    alt: ong.name,
    href: ong.link
}));


export default function LogoLogoContainer() {
    return (
        <div className="bg-green-500 pt-4">
            <LogoLoop
                logos={logos}
                speed={40}
                direction="left"
                logoHeight={96}
                gap={80}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#00c950"
                ariaLabel="Technology partners"
            />
        </div>
    )
}

