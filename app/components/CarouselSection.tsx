import CarouselLogo from "@/app/components/CarouselLogo";

export default function CarouselSection() {
    return (
        <div className="bg-green-500 pt-4 md:shadow-2xl shadow-green-950">
            <CarouselLogo
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