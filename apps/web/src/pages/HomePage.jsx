import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
    Menu, X, ArrowRight, ArrowUp, Phone, MapPin, Clock,
    Truck, Building2, CalendarClock, Warehouse, Store, Settings2,
    ShieldCheck, Timer, HeartHandshake, Route, PackageCheck, Users,
    MessageCircle, CheckCircle2, Send,
} from 'lucide-react';
import Logo from '@/components/Logo';
import { useReveal, useCountUp } from '@/hooks/useScrollFx';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

const IMG = {
    hero: 'https://images.hostinger.com/54720627-d50c-41d4-bf15-315903247c31.png',
    about: 'https://images.hostinger.com/1f6a62f5-1b5c-4818-a720-8b7f73eae14b.png',
    driver: 'https://images.hostinger.com/ee969c29-7dca-4926-9f7b-f7e4ddb8f000.png',
    urban: 'https://images.hostinger.com/bdd32b9b-f264-483c-b258-2a9868275199.png',
};

const NAV = [
    { label: 'Home', id: 'home' },
    { label: 'Sobre Nós', id: 'sobre' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Diferenciais', id: 'diferenciais' },
    { label: 'Regiões', id: 'regioes' },
    { label: 'Clientes', id: 'clientes' },
    { label: 'Contato', id: 'contato' },
];

const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
};

/* ---------- Header ---------- */
const Header = () => {
    const [open, setOpen] = useState(false);
    const [solid, setSolid] = useState(false);

    useEffect(() => {
        const onScroll = () => setSolid(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header 
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                open
                    ? 'bg-[hsl(var(--brand-deep))] py-4'
                    : solid
                    ? 'bg-[hsl(var(--brand-deep))]/95 shadow-md backdrop-blur-md py-2.5'
                    : 'bg-transparent py-4'
            }`}
        >
            <div className="mx-auto flex max-w-[90rem] items-center justify-between px-5">
                <button onClick={() => scrollTo('home')} aria-label="Início">
                    <Logo variant="light" />
                </button>
                <nav className="hidden items-center gap-7 lg:flex">
                    {NAV.map((n) => (
                        <button
                            key={n.id}
                            onClick={() => scrollTo(n.id)}
                            className="text-sm font-medium text-white/90 transition-colors hover:text-accent"
                        >
                            {n.label}
                        </button>
                    ))}
                    <button
                        onClick={() => scrollTo('contato')}
                        className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-transform hover:-translate-y-0.5"
                    >
                        Solicitar Orçamento
                    </button>
                </nav>
                <button 
                    className="text-white lg:hidden" 
                    onClick={() => setOpen(true)} 
                    aria-label="Menu"
                >
                    <Menu className="h-7 w-7" />
                </button>
            </div>

            {/* Menu Mobile */}
            {open && (
                <div className="fixed inset-0 z-50 bg-[hsl(var(--brand-deep))] lg:hidden">
                    <div className="flex items-center justify-between px-5 py-4">
                        <Logo variant="light" />
                        <button onClick={() => setOpen(false)} className="text-white" aria-label="Fechar">
                            <X className="h-7 w-7" />
                        </button>
                    </div>
                    <nav className="flex flex-col gap-1 px-5 pt-6">
                        {NAV.map((n) => (
                            <button 
                                key={n.id} 
                                onClick={() => { scrollTo(n.id); setOpen(false); }} 
                                className="border-b border-white/10 py-4 text-left text-lg font-medium text-white"
                            >
                                {n.label}
                            </button>
                        ))}
                        <button 
                            onClick={() => { scrollTo('contato'); setOpen(false); }} 
                            className="mt-6 rounded-full bg-accent py-3.5 text-center font-semibold text-white"
                        >
                            Solicitar Orçamento
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

/* ---------- Hero ---------- */
const Hero = () => {
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (
        <section id="home" className="relative flex min-h-[100dvh] items-center overflow-hidden">
            <div
                className="absolute inset-0 scale-110"
                style={{ transform: `translateY(${offset * 0.35}px) scale(1.12)` }}
            >
                <img src={IMG.hero} alt="Frota de caminhões C. Guimarães em rodovia" className="h-full w-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--brand-deep))]/95 via-[hsl(var(--brand-deep))]/80 to-[hsl(var(--brand-deep))]/40" />
            <div className="relative mx-auto w-full max-w-[90rem] px-5 pt-28">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl">
                    <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur">
                        <Truck className="h-4 w-4 text-[#8fd8dc]" /> Desde 2010 · São Paulo
                    </span>
                    <h1 className="font-display text-4xl font-800 leading-[1.05] text-white sm:text-5xl md:text-6xl" style={{ fontWeight: 800 }}>
                        Transportando confiança.<br />
                        <span className="text-[#5fd0d6]">Entregando resultados.</span>
                    </h1>
                    <p className="mt-6 max-w-xl text-lg text-white/85">
                        Há mais de uma década oferecendo soluções em transporte rodoviário e logística
                        para empresas do atacado e varejo com segurança, eficiência e compromisso.
                    </p>
                    <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                        <button onClick={() => scrollTo('contato')} className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 font-semibold text-white shadow-xl shadow-accent/30 transition-transform hover:-translate-y-0.5">
                            Solicitar Orçamento <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </button>
                        <button onClick={() => scrollTo('servicos')} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-4 font-semibold text-white transition-colors hover:bg-white/10">
                            Conheça nossos serviços
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

/* ---------- Section title helper ---------- */
const Eyebrow = ({ children }) => (
    <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">{children}</span>
);

/* ---------- About ---------- */
const About = () => {
    const ref = useReveal();
    const bullets = [
        'Comprometimento com prazos',
        'Segurança operacional',
        'Atendimento personalizado',
        'Gestão logística eficiente',
        'Relacionamentos duradouros com clientes',
    ];
    return (
        <section id="sobre" className="bg-white py-24">
            <div ref={ref} className="reveal mx-auto grid max-w-[80rem] items-center gap-14 px-5 lg:grid-cols-2">
                <div className="relative">
                    <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-accent/15" />
                    <img src={IMG.about} loading="lazy" alt="Operação logística C. Guimarães" className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl" />
                    <div className="absolute -bottom-6 -right-4 rounded-2xl bg-[hsl(var(--brand-deep))] px-7 py-5 text-white shadow-xl">
                        <div className="font-display text-3xl font-800" style={{ fontWeight: 800 }}>+14</div>
                        <div className="text-xs uppercase tracking-wider text-white/70">anos de estrada</div>
                    </div>
                </div>
                <div>
                    <Eyebrow>Sobre Nós</Eyebrow>
                    <h2 className="mt-3 font-display text-3xl font-800 text-[hsl(var(--brand-deep))] md:text-4xl" style={{ fontWeight: 800 }}>Sobre a C. Guimarães</h2>
                    <p className="mt-5 text-muted-foreground">
                        A <strong className="text-foreground">C. Guimarães Transportes</strong> atua desde 2010 no segmento de
                        logística e transporte rodoviário, oferecendo soluções eficientes e seguras para empresas do
                        atacado e varejo na região de São Paulo.
                    </p>
                    <p className="mt-4 text-muted-foreground">
                        Ao longo de mais de uma década de atuação, consolidou sua presença no mercado através de:
                    </p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2.5 text-sm font-medium text-foreground">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" /> {b}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-6 text-muted-foreground">
                        Nossa experiência permite atender diferentes demandas logísticas com agilidade,
                        organização e alto padrão operacional.
                    </p>
                </div>
            </div>
        </section>
    );
};

/* ---------- Services ---------- */
const SERVICES = [
    { icon: Truck, t: 'Transporte Rodoviário de Cargas', d: 'Operações dedicadas e fracionadas com foco em eficiência, segurança e pontualidade.' },
    { icon: Building2, t: 'Distribuição Urbana', d: 'Especialistas em distribuição urbana na Grande São Paulo e região metropolitana.' },
    { icon: CalendarClock, t: 'Coletas Programadas', d: 'Operações organizadas conforme a necessidade e a rotina de cada cliente.' },
    { icon: Warehouse, t: 'Entregas para Centros de Distribuição', d: 'Operação estruturada para alto desempenho e cumprimento de prazos.' },
    { icon: Store, t: 'Atacado e Varejo', d: 'Entrega especializada para redes varejistas e atacadistas, com expertise em supermercados.' },
    { icon: Settings2, t: 'Operações Personalizadas', d: 'Projetos logísticos desenvolvidos conforme a necessidade de cada cliente.' },
];
const Services = () => {
    const ref = useReveal();
    return (
        <section id="servicos" className="bg-secondary py-24">
            <div className="mx-auto max-w-[80rem] px-5">
                <div className="max-w-2xl">
                    <Eyebrow>Portfólio de Serviços</Eyebrow>
                    <h2 className="mt-3 font-display text-3xl font-800 text-[hsl(var(--brand-deep))] md:text-4xl" style={{ fontWeight: 800 }}>Nossos Serviços</h2>
                    <p className="mt-4 text-muted-foreground">Soluções completas em transporte e logística para acompanhar o ritmo do seu negócio.</p>
                </div>
                <div ref={ref} className="reveal mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((s) => (
                        <div key={s.t} className="group relative overflow-hidden rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                            <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[hsl(var(--brand-deep))] text-white transition-colors group-hover:bg-accent">
                                <s.icon className="h-7 w-7" strokeWidth={1.6} />
                            </div>
                            <h3 className="font-display text-lg font-700 text-[hsl(var(--brand-deep))]" style={{ fontWeight: 700 }}>{s.t}</h3>
                            <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ---------- Differentials ---------- */
const DIFF = [
    { icon: Timer, t: 'Pontualidade e Compromisso', d: 'Garantimos entregas dentro do prazo, mantendo a confiança dos clientes.' },
    { icon: ShieldCheck, t: 'Baixo Índice de Sinistros', d: 'Controle operacional rigoroso, menor índice de avarias e redução de riscos logísticos.' },
    { icon: HeartHandshake, t: 'Atendimento Humanizado', d: 'Relacionamento próximo e personalizado com cada cliente.' },
    { icon: Route, t: 'Gestão Logística', d: 'Eficiência operacional em toda a cadeia de transporte.' },
    { icon: PackageCheck, t: 'Segurança', d: 'Carga monitorada no depósito e transportada com seguro.' },
    { icon: Users, t: 'Relacionamento', d: 'Clientes fiéis e parcerias comerciais duradouras.' },
];
const Differentials = () => {
    const ref = useReveal();
    return (
        <section id="diferenciais" className="relative overflow-hidden bg-[hsl(var(--brand-deep))] py-24 text-white">
            <div className="mx-auto max-w-[80rem] px-5">
                <div className="max-w-2xl">
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#5fd0d6]">Diferenciais</span>
                    <h2 className="mt-3 font-display text-3xl font-800 md:text-4xl" style={{ fontWeight: 800 }}>Por que somos diferentes</h2>
                    <p className="mt-4 text-white/70">O que sustenta relações comerciais de longo prazo com nossos clientes.</p>
                </div>
                <div ref={ref} className="reveal mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {DIFF.map((d) => (
                        <div key={d.t} className="rounded-2xl border border-white/10 bg-white/[0.06] p-7 transition-colors hover:bg-white/[0.12]">
                            <d.icon className="mb-4 h-10 w-10 text-[#5fd0d6]" strokeWidth={1.5} />
                            <h3 className="font-display text-lg font-700" style={{ fontWeight: 700 }}>{d.t}</h3>
                            <p className="mt-2.5 text-sm text-white/70">{d.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ---------- Regions ---------- */
const REGIONS = ['Capital', 'Grande São Paulo', 'Vale do Paraíba', 'Vale do Ribeira', 'Litoral Norte', 'Litoral Sul', 'Interior até 150 km da Capital'];
const Regions = () => {
    const ref = useReveal();
    return (
        <section id="regioes" className="bg-white py-24">
            <div ref={ref} className="reveal mx-auto grid max-w-[80rem] items-center gap-14 px-5 lg:grid-cols-2">
                <div>
                    <Eyebrow>Cobertura</Eyebrow>
                    <h2 className="mt-3 font-display text-3xl font-800 text-[hsl(var(--brand-deep))] md:text-4xl" style={{ fontWeight: 800 }}>Regiões Atendidas</h2>
                    <p className="mt-4 text-muted-foreground">
                        Atuamos em toda a Capital e Grande São Paulo, litoral e interior, com perímetro de até 150 km da Capital.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-2.5">
                        {REGIONS.map((r) => (
                            <span key={r} className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-[hsl(var(--brand-deep))]">
                                <MapPin className="h-4 w-4 text-accent" /> {r}
                            </span>
                        ))}
                    </div>
                    <div className="mt-8 rounded-2xl border border-border bg-secondary/60 p-6">
                        <p className="text-sm font-semibold text-[hsl(var(--brand-deep))]">Segmentos atendidos</p>
                        <p className="mt-1.5 text-sm text-muted-foreground">
                            Carga seca: calçadista, eventos e festas, higiênicos e limpeza, cosméticos, beleza e outros.
                        </p>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img src={IMG.urban} loading="lazy" alt="Distribuição urbana em São Paulo" className="aspect-[4/3] w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-deep))]/70 to-transparent" />
                    <div className="absolute bottom-5 left-5 text-white">
                        <div className="font-display text-2xl font-800" style={{ fontWeight: 800 }}>São Paulo & Região</div>
                        <div className="text-sm text-white/80">Capital · Litoral · Interior</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ---------- Indicators (count up) ---------- */
const Metric = ({ target, decimals, suffix, prefix, label }) => {
    const { ref, formatted } = useCountUp(target, { decimals });
    return (
        <div ref={ref} className="rounded-2xl bg-white/[0.06] p-6 text-center">
            <div className="font-display text-3xl font-800 text-white md:text-4xl" style={{ fontWeight: 800 }}>
                {prefix}{formatted}{suffix}
            </div>
            <div className="mt-2 text-sm text-white/70">{label}</div>
        </div>
    );
};
const Indicators = () => {
    const ref = useReveal();
    const years = [
        { y: '2024', data: [{ target: 479.1, decimals: 1, suffix: ' t', label: 'Peso transportado' }, { target: 1.0, decimals: 1, prefix: 'R$ ', suffix: ' mi', label: 'Em fretes' }, { target: 25.5, decimals: 1, prefix: 'R$ ', suffix: ' mi', label: 'Em notas fiscais' }] },
        { y: '2025', data: [{ target: 506.6, decimals: 1, suffix: ' t', label: 'Peso transportado' }, { target: 1.4, decimals: 1, prefix: 'R$ ', suffix: ' mi', label: 'Em fretes' }, { target: 32.3, decimals: 1, prefix: 'R$ ', suffix: ' mi', label: 'Em notas fiscais' }] },
    ];
    return (
        <section className="relative bg-[hsl(var(--brand-teal))] py-24 text-white">
            <div ref={ref} className="reveal mx-auto max-w-[80rem] px-5">
                <div className="max-w-2xl">
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">Indicadores</span>
                    <h2 className="mt-3 font-display text-3xl font-800 md:text-4xl" style={{ fontWeight: 800 }}>Números que geram confiança</h2>
                    <p className="mt-4 text-white/80">Crescimento consistente ano após ano.</p>
                </div>
                <div className="mt-12 grid gap-10 lg:grid-cols-2">
                    {years.map((yr) => (
                        <div key={yr.y}>
                            <div className="mb-5 font-display text-5xl font-900 text-white/25" style={{ fontWeight: 900 }}>{yr.y}</div>
                            <div className="grid gap-4 sm:grid-cols-3">
                                {yr.data.map((m, i) => <Metric key={i} {...m} />)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ---------- Clients marquee ---------- */
const CLIENTS = ['D. Silveira', 'Atitude', 'Rofer Brasil', 'HG', 'Pratic', 'Distripop', 'Power Save', 'Higiemais', 'Sul Festas', 'Nessa Distrib.'];
const Clients = () => (
    <section id="clientes" className="overflow-hidden bg-white py-24">
        <div className="mx-auto max-w-[80rem] px-5 text-center">
            <Eyebrow>Confiança</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-800 text-[hsl(var(--brand-deep))] md:text-4xl" style={{ fontWeight: 800 }}>Clientes que confiam na C. Guimarães</h2>
        </div>
        <div className="relative mt-12 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="flex shrink-0 animate-[marquee_32s_linear_infinite] gap-4 pr-4">
                {[...CLIENTS, ...CLIENTS].map((c, i) => (
                    <div key={i} className="flex h-20 w-52 shrink-0 items-center justify-center rounded-2xl border border-border bg-secondary/50 px-6">
                        <span className="font-display text-lg font-700 text-[hsl(var(--brand-deep))]" style={{ fontWeight: 700 }}>{c}</span>
                    </div>
                ))}
            </div>
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
);

/* ---------- Partner ---------- */
const PARTNER = [
    'Mais de uma década de experiência', 'Atendimento personalizado', 'Operação eficiente',
    'Cumprimento rigoroso dos prazos', 'Baixo índice de sinistros', 'Monitoramento das mercadorias',
    'Seguro da carga', 'Forte atuação em distribuição urbana', 'Relacionamento sólido com clientes',
    'Compromisso com qualidade',
];
const Partner = () => {
  const ref = useReveal();
  return (
    <section className="relative overflow-hidden py-24">
      {/* Imagem de fundo */}
      <img 
        src={IMG.driver} 
        alt="" 
        aria-hidden="true" 
        className="absolute inset-0 h-full w-full object-cover" 
        loading="lazy" 
      />

      {/* ✅ Máscara escura com gradiente (Garante visibilidade total do texto) */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-900/50" />

      {/* Conteúdo com destaque */}
      <div ref={ref} className="reveal relative mx-auto max-w-[80rem] px-5 text-white">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#5fd0d6]">
            Seja Nosso Parceiro
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-white md:text-4xl">
            Por que escolher a C. Guimarães?
          </h2>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {PARTNER.map((p) => (
            <div key={p} className="flex items-center gap-3 border-b border-white/20 pb-4">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-[#5fd0d6]" />
              <span className="font-medium text-slate-100">{p}</span>
                        </div>
                    ))}
                </div>
                <button onClick={() => scrollTo('contato')} className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-semibold text-white shadow-xl shadow-black/20 transition-transform hover:-translate-y-0.5">
                    Solicite um Orçamento <ArrowRight className="h-5 w-5" />
                </button>
            </div>
        </section>
    );
};

/* ---------- Contact ---------- */
const Contact = () => {
    const { toast } = useToast();
    const [form, setForm] = useState({ nome: '', empresa: '', email: '', telefone: '', mensagem: '' });
    const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
    const submit = (e) => {
        e.preventDefault();
        if (!form.nome || !form.email) {
            toast({ title: 'Preencha os campos obrigatórios', description: 'Nome e e-mail são necessários.' });
            return;
        }
        toast({ title: 'Solicitação enviada!', description: 'Em breve nossa equipe entrará em contato.' });
        setForm({ nome: '', empresa: '', email: '', telefone: '', mensagem: '' });
    };
    const field = 'w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20';
    return (
        <section id="contato" className="bg-secondary py-24">
            <div className="mx-auto grid max-w-[80rem] gap-12 px-5 lg:grid-cols-2">
                <div>
                    <Eyebrow>Contato</Eyebrow>
                    <h2 className="mt-3 font-display text-3xl font-800 text-[hsl(var(--brand-deep))] md:text-4xl" style={{ fontWeight: 800 }}>Vamos transportar juntos</h2>
                    <p className="mt-4 text-muted-foreground">Solicite um orçamento sem compromisso. Respondemos rápido.</p>
                    <div className="mt-8 space-y-5">
                        <div className="flex items-start gap-4">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--brand-deep))] text-white"><MapPin className="h-5 w-5" /></span>
                            <div>
                                <div className="font-semibold text-foreground">C. Guimarães Transportes</div>
                                <div className="text-sm text-muted-foreground">Rua Gedivaldo Calixto de Souza, 172 — Vila Nova York<br />São Paulo – SP · CEP 03479-030</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--brand-deep))] text-white"><Phone className="h-5 w-5" /></span>
                            <div>
                                <div className="font-semibold text-foreground">Telefone</div>
                                <a href="tel:+551127224598" className="text-sm text-muted-foreground hover:text-accent">(11) 2722-4598</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white"><MessageCircle className="h-5 w-5" /></span>
                            <div>
                                <div className="font-semibold text-foreground">WhatsApp</div>
                                <a href="https://wa.me/5511974910886" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-accent">(11) 97491-0886</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--brand-deep))] text-white"><Clock className="h-5 w-5" /></span>
                            <div>
                                <div className="font-semibold text-foreground">Atendimento</div>
                                <div className="text-sm text-muted-foreground">Segunda a Sexta · 08h às 18h</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-md">
                    <iframe
                    title="Mapa C. Guimarães Transportes"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0673007469796!2d-46.51475472379377!3d-23.56598587879707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d8d8bfd5b77%3A0x6b772b988bb19bd9!2sRua%20Gedivaldo%20Calixto%20de%20Souza%2C%20172%20-%20Vila%20Nova%20York%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1714000000000!5m2!1spt-BR!2sbr"
            className="h-56 w-full border-0"
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                </div>
                <form onSubmit={submit} className="rounded-3xl border border-border bg-white p-7 shadow-xl md:p-9">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-foreground">Nome *</label>
                            <input className={field} value={form.nome} onChange={set('nome')} placeholder="Seu nome" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-foreground">Empresa</label>
                            <input className={field} value={form.empresa} onChange={set('empresa')} placeholder="Sua empresa" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-foreground">E-mail *</label>
                            <input type="email" className={field} value={form.email} onChange={set('email')} placeholder="voce@email.com" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-foreground">Telefone</label>
                            <input className={field} value={form.telefone} onChange={set('telefone')} placeholder="(11) 90000-0000" />
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                        <label className="text-sm font-medium text-foreground">Mensagem</label>
                        <textarea rows={4} className={field} value={form.mensagem} onChange={set('mensagem')} placeholder="Conte sobre sua demanda logística" />
                    </div>
                    <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 font-semibold text-white shadow-lg shadow-accent/30 transition-transform hover:-translate-y-0.5">
                        Enviar Solicitação <Send className="h-4 w-4" />
                    </button>
                </form>
            </div>
        </section>
    );
};

/* ---------- Footer ---------- */
const Footer = () => (
    <footer className="bg-[hsl(var(--brand-deep))] pt-16 text-white">
        <div className="mx-auto grid max-w-[80rem] gap-10 px-5 pb-12 md:grid-cols-4">
            <div className="md:col-span-1">
                <Logo variant="light" />
                <p className="mt-5 text-sm text-white/60">
                    Soluções em transporte rodoviário e logística para o atacado e varejo desde 2010.
                </p>
            </div>
            <div>
                <div className="mb-4 font-display text-sm font-700 uppercase tracking-wider text-[#5fd0d6]" style={{ fontWeight: 700 }}>Links Rápidos</div>
                <ul className="space-y-2.5 text-sm text-white/70">
                    {NAV.map((n) => <li key={n.id}><button onClick={() => scrollTo(n.id)} className="hover:text-white">{n.label}</button></li>)}
                </ul>
            </div>
            <div>
                <div className="mb-4 font-display text-sm font-700 uppercase tracking-wider text-[#5fd0d6]" style={{ fontWeight: 700 }}>Serviços</div>
                <ul className="space-y-2.5 text-sm text-white/70">
                    {SERVICES.map((s) => <li key={s.t}>{s.t}</li>)}
                </ul>
            </div>
            <div>
                <div className="mb-4 font-display text-sm font-700 uppercase tracking-wider text-[#5fd0d6]" style={{ fontWeight: 700 }}>Contato</div>
                <ul className="space-y-2.5 text-sm text-white/70">
                    <li>Rua Gedivaldo Calixto de Souza, 172</li>
                    <li>Vila Nova York — São Paulo/SP</li>
                    <li>CEP 03479-030</li>
                    <li><a href="tel:+551127224598" className="hover:text-white">(11) 2722-4598</a></li>
                    <li><a href="https://wa.me/5511974910886" className="hover:text-white">(11) 97491-0886</a></li>
                </ul>
            </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
            © 2026 C. Guimarães Transportes. Todos os direitos reservados.
        </div>
    </footer>
);

/* ---------- Floating buttons ---------- */
const Floating = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 600);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (
        <>
            <a
                href="https://wa.me/5511974910886"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110"
            >
                <MessageCircle className="h-7 w-7" />
            </a>
            {show && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    aria-label="Voltar ao topo"
                    className="fixed bottom-24 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--brand-deep))] text-white shadow-xl transition-transform hover:-translate-y-1"
                >
                    <ArrowUp className="h-5 w-5" />
                </button>
            )}
        </>
    );
};

const HomePage = () => {
    // 🟢 O console.log DEVE ficar AQUI (dentro das chaves, antes do return)
    console.log("O componente HomePage foi carregado!");

    return (
        <div className="bg-white">
            <Helmet>
                <title>C. Guimarães Transportes | Logística e Transporte Rodoviário em São Paulo</title>
                <meta name="description" content="C. Guimarães Transportes: soluções em transporte rodoviário de cargas e distribuição urbana para atacado e varejo em São Paulo desde 2010. Solicite seu orçamento." />
                <meta property="og:title" content="C. Guimarães Transportes" />
                <meta property="og:description" content="Transportando confiança. Entregando resultados." />
            </Helmet>
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Differentials />
                <Regions />
                <Indicators />
                <Clients />
                <Partner />
                <Contact />
            </main>
            <Footer />
            <Floating />
            <Toaster />
        </div>
    );
};

export default HomePage;