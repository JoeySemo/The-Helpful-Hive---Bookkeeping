'use client';

import Image from 'next/image';

interface BeeConfig {
    src: string;
    alt: string;
    flyClass: string;
    size: string;
}

interface FlyingBeesProps {
    /** Array of bee configs to display — each page should pass only its assigned bees */
    bees: BeeConfig[];
    /** Accent color for the logo border */
    accentColor?: string;
}

export default function FlyingBees({ bees, accentColor = '#E2C16B' }: FlyingBeesProps) {
    return (
        <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Glow */}
            <div className="absolute inset-4 rounded-full blur-2xl" style={{ backgroundColor: `${accentColor}15` }} />

            {/* Main Logo — matches homepage style: no white bg, object-contain with border on the Image */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mt-8 md:mt-12 animate-float z-10">
                <Image
                    src="/official-logo-circular.jpg"
                    alt="The Helpful Hive"
                    fill
                    className="object-contain rounded-full shadow-2xl"
                    style={{ border: `4px solid ${accentColor}` }}
                    priority
                />
            </div>

            {/* Flying Bees */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                {bees.map((bee, index) => (
                    <div key={index} className={`absolute ${bee.flyClass} ${bee.size}`}>
                        <Image src={bee.src} alt={bee.alt} fill className="object-contain" />
                    </div>
                ))}
            </div>
        </div>
    );
}
