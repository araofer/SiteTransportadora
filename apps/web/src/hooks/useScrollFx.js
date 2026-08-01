import { useEffect, useRef, useState } from 'react';

export function useReveal(options = {}) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('in-view');
                        io.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.15, ...options }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);
    return ref;
}

export function useCountUp(target, { duration = 1800, decimals = 0 } = {}) {
    const ref = useRef(null);
    const [value, setValue] = useState(0);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        let started = false;
        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting && !started) {
                    started = true;
                    const start = performance.now();
                    const tick = (now) => {
                        const p = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - p, 3);
                        setValue(target * eased);
                        if (p < 1) requestAnimationFrame(tick);
                        else setValue(target);
                    };
                    requestAnimationFrame(tick);
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.4 });
        io.observe(el);
        return () => io.disconnect();
    }, [target]);
    const formatted = value.toLocaleString('pt-BR', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    });
    return { ref, formatted };
}
