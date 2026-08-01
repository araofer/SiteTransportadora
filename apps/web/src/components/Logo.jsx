import React from 'react';

const LOGO_URL = 'https://horizons-cdn.hostinger.com/68d30915-2b5e-4f4b-8eda-345ea11ddf5b/ada7f0454c9b8490759bbc7224d63f02.png';

const Logo = ({ className = '' }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <img
                src={LOGO_URL}
                alt="C. Guimarães"
                className="h-12 w-auto object-contain"
                loading="eager"
            />
            <div className="flex flex-col leading-none">
                <span className="font-display font-extrabold text-lg md:text-xl tracking-tight text-[hsl(var(--brand-deep))]">
                    C. Guimarães
                </span>
                <span className="text-[9px] md:text-[10px] font-medium tracking-[0.15em] text-[hsl(var(--brand-teal))] uppercase mt-0.5">
                    Gestão Logística · Transportes
                </span>
            </div>
        </div>
    );
};

export default Logo;
