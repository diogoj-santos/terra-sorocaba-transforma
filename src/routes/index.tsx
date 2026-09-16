import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  Construction,
  Drill,
  Facebook,
  Hammer,
  Instagram,
  Layers3,
  MapPin,
  Menu,
  MessageCircle,
  Mountain,
  MoveDown,
  Pickaxe,
  Quote,
  Ruler,
  ShieldCheck,
  Shovel,
  Sparkles,
  Star,
  Tractor,
  Trash2,
  Truck,
  X,
} from "lucide-react";
import fleetImage from "@/assets/abertura-fundacao.webp";
import heroImageUrl from "@/assets/escavacao-piscina-hero.webp";
import logoAssetUrl from "@/assets/adao-terraplenagem-logo.png";
import foundationAssetUrl from "@/assets/abertura-fundacao.webp";
import demolitionAssetUrl from "@/assets/demolicao.webp";
import excavationAssetUrl from "@/assets/escavacao-piscina.webp";
import levelingAssetUrl from "@/assets/nivelamento-jcb.webp";
import preparationAssetUrl from "@/assets/preparacao-terreno.webp";
import craneAssetUrl from "@/assets/transplante-palmeira.webp";
import { trackEvent } from "@/lib/analytics";

const logoAsset = { url: logoAssetUrl };
const foundationAsset = { url: foundationAssetUrl };
const demolitionAsset = { url: demolitionAssetUrl };
const excavationAsset = { url: excavationAssetUrl };
const levelingAsset = { url: levelingAssetUrl };
const preparationAsset = { url: preparationAssetUrl };
const craneAsset = { url: craneAssetUrl };

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Terraplenagem em Sorocaba e Araçoiaba da Serra | Adão Terraplenagem" },
      { name: "description", content: "Terraplenagem (terraplanagem) em Sorocaba, Araçoiaba da Serra, Votorantim, Tatuí e região há 14 anos. Escavação, nivelamento, aterro, demolição e limpeza de terreno. Orçamento e avaliação gratuitos pelo WhatsApp." },
      { name: "keywords", content: "terraplenagem Sorocaba, terraplanagem Sorocaba, terraplenagem Araçoiaba da Serra, escavação Sorocaba, nivelamento de terreno, demolição Sorocaba, aterro, limpeza de terreno, terraplenagem Votorantim, terraplenagem Tatuí" },
      { property: "og:title", content: "Terraplenagem em Sorocaba e Araçoiaba da Serra | Adão Terraplenagem" },
      { property: "og:description", content: "Terraplenagem e terraplanagem em Sorocaba e região com máquinas próprias, equipe experiente e avaliação gratuita. Há 14 anos no mercado." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://adao-terraplenagem.vercel.app/" },
      { property: "og:image", content: "https://adao-terraplenagem.vercel.app/assets/escavacao-piscina.webp" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://adao-terraplenagem.vercel.app/" },
      { rel: "preload", as: "image", href: heroImageUrl, fetchPriority: "high" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Adão Terraplenagem",
        image: "https://adao-terraplenagem.vercel.app/assets/escavacao-piscina.webp",
        url: "https://adao-terraplenagem.vercel.app/",
        telephone: "+55 15 99785-8631",
        priceRange: "$$",
        sameAs: [
          "https://www.instagram.com/adaoterraplenagem/",
          "https://www.facebook.com/p/Adão-Terraplenagem-100031402016949/",
        ],
        areaServed: ["Sorocaba", "Araçoiaba da Serra", "Votorantim", "Tatuí", "Cerquilho", "Alumínio", "Piedade", "Iperó", "Salto de Pirapora", "Capela do Alto"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Estr. Irmã Theoberta, 101 - Jd Arco Verde",
          addressLocality: "Araçoiaba da Serra",
          addressRegion: "SP",
          postalCode: "18191-494",
          addressCountry: "BR",
        },
        makesOffer: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.text },
        })),
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: GOOGLE_RATING,
          reviewCount: GOOGLE_REVIEW_COUNT,
        },
        review: reviews.map((r) => ({
          "@type": "Review",
          author: { "@type": "Person", name: r.name },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: r.text,
        })),
        description: "Serviços de terraplenagem (terraplanagem) em Sorocaba e Araçoiaba da Serra, incluindo escavações, nivelamento, aterros, demolições e preparação de terrenos.",
      }),
    }, {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
});

const whatsapp = "https://wa.me/5515997858631";
const mapUrl = "https://www.google.com/maps/search/?api=1&query=Estr.+Irmã+Theoberta,+101,+Jd+Arco+Verde,+Araçoiaba+da+Serra+-+SP,+18191-494";
const instagram = "https://www.instagram.com/adaoterraplenagem/";
const facebook = "https://www.facebook.com/p/Adão-Terraplenagem-100031402016949/";
const googleReviewsUrl = "https://www.google.com/search?q=Ad%C3%A3o+Terraplenagem+Ara%C3%A7oiaba+da+Serra";
const GOOGLE_RATING = "5.0";
const GOOGLE_REVIEW_COUNT = 58;

const services = [
  { icon: Sparkles, title: "Limpeza e preparação", text: "Terrenos prontos para o início seguro da sua obra." },
  { icon: Shovel, title: "Escavações", text: "Escavação precisa para fundações, piscinas e projetos diversos." },
  { icon: Ruler, title: "Nivelamento", text: "Correção de desníveis e preparação técnica do solo." },
  { icon: MoveDown, title: "Abertura de valas", text: "Valas para redes, drenagem, tubulações e infraestrutura." },
  { icon: Drill, title: "Perfurações", text: "Perfurações eficientes para diferentes necessidades do projeto." },
  { icon: Layers3, title: "Execução de aterros", text: "Aterros executados com controle, segurança e planejamento." },
  { icon: Hammer, title: "Demolições", text: "Demolições com agilidade, cuidado e destinação adequada." },
  { icon: Mountain, title: "Movimentação de terra", text: "Corte, carga e transporte de solo em qualquer escala." },
  { icon: Trash2, title: "Remoção de entulho", text: "Retirada e transporte para manter sua área limpa e organizada." },
];

const equipment = [
  { icon: Tractor, name: "Retroescavadeira", use: "Versatilidade para escavar, carregar e nivelar" },
  { icon: Construction, name: "Mini carregadeira", use: "Agilidade em áreas compactas e acessos reduzidos" },
  { icon: Pickaxe, name: "Mini escavadeira", use: "Precisão para obras residenciais e espaços estreitos" },
  { icon: Truck, name: "Caminhão caçamba", use: "Transporte eficiente de terra, pedra e entulho" },
  { icon: Shovel, name: "Escavadeira hidráulica", use: "Força e produtividade para grandes volumes" },
  { icon: Hammer, name: "Rompedor hidráulico", use: "Demolição de concreto, rocha e pisos reforçados" },
  { icon: Drill, name: "Perfuratriz", use: "Perfuração de solo com precisão e rendimento" },
];

const gallery = [
  {
    image: excavationAsset.url,
    title: "Escavação para piscina",
    alt: "Escavação para piscina com máquinas de terraplenagem em Sorocaba e região",
    width: 1200,
    height: 900,
  },
  {
    image: demolitionAsset.url,
    title: "Demolição",
    alt: "Demolição de imóvel com escavadeira hidráulica em Sorocaba e região",
    width: 1200,
    height: 900,
  },
  {
    image: preparationAsset.url,
    title: "Preparação de terreno",
    alt: "Terraplenagem e preparação de terreno para construção na região de Sorocaba",
    width: 797,
    height: 417,
  },
  {
    image: foundationAsset.url,
    title: "Abertura de fundação",
    alt: "Abertura de fundação e alicerce com terraplenagem em Sorocaba e região",
    width: 718,
    height: 538,
  },
  {
    image: levelingAsset.url,
    title: "Nivelamento de terreno",
    alt: "Nivelamento de terreno com retroescavadeira JCB na região de Sorocaba",
    width: 725,
    height: 379,
  },
  {
    image: craneAsset.url,
    title: "Transplante de palmeira",
    alt: "Transplante de palmeira com caminhão munck e guindaste em Sorocaba e região",
    width: 720,
    height: 960,
  },
];

const cities = ["Sorocaba", "Araçoiaba da Serra", "Votorantim", "Tatuí", "Cerquilho", "Alumínio", "Piedade", "Iperó", "Salto de Pirapora", "Capela do Alto"];

const NAV_ITEMS = [['Sobre', '#sobre'], ['Serviços', '#servicos'], ['Equipamentos', '#equipamentos'], ['Galeria', '#galeria'], ['Atendimento', '#atendimento'], ['Avaliações', '#depoimentos'], ['Região', '#regiao'], ['Contato', '#contato']] as const;

const reviews = [
  { name: "Marinho Marte", text: "Profissionais competentes e atenciosos. Super recomendo, preço justo. Logo vou contratá-lo novamente." },
  { name: "Daf Jay", text: "Adão é um excelente parceiro de obras, já construí algumas casas com ele fazendo as terraplenagens pra mim com um trabalho de excelente qualidade, preço justo e pontualidade." },
  { name: "Grega Córdova", text: "Excelente profissional, equipe empenhada em oferecer o melhor. Obrigada pelo serviços de terraplanagem prestados. Sucesso" },
  { name: "Robson INNOVAZIONE", text: "Excelente empresa, bem organizada e com profissionais técnicos que fazem total diferença na obra! Sempre indico e nas atividades que a Innovazione atua sempre incluímos como parceiros. Equipe sensacional." },
  { name: "João Ricardo Feitoza", text: "Empresa excelente, cumpre prazos e orçamentos com serviço de alta qualidade!" },
  { name: "Lizandra Fabiele", text: "Ótimo trabalho, profissionais excelentes e um atendimento de qualidade. Serviço feito com muito cuidado e profissionalismo. Recomendo!" },
  { name: "Juliana Rodrigues", text: "Trabalho feito com muita excelência e profissionalismo." },
  { name: "José Carlos Vieira", text: "Excelente serviço. Pessoal bem qualificado e atencioso." },
];

const faq = [
  {
    q: "Terraplenagem ou terraplanagem, qual é o nome certo?",
    a: "As duas formas são usadas no dia a dia, mas o termo correto em português é terraplenagem. É o serviço de preparar e nivelar um terreno para receber uma obra, seja ela residencial, comercial ou rural.",
  },
  {
    q: "Quais cidades a Adão Terraplenagem atende?",
    a: "Atendemos Sorocaba, Araçoiaba da Serra, Votorantim, Tatuí, Cerquilho, Alumínio, Piedade, Iperó, Salto de Pirapora, Capela do Alto e região. Consulte nossa equipe pelo WhatsApp para confirmar o atendimento em sua localização.",
  },
  {
    q: "Quanto custa terraplenagem ou máquina por hora em Sorocaba?",
    a: "O preço da terraplenagem e da hora-máquina varia conforme o equipamento necessário, o acesso ao local, o tipo de solo, o volume de terra e o tempo estimado de execução. Fazemos uma avaliação presencial gratuita em Sorocaba, Araçoiaba da Serra, Votorantim e região para indicar a solução adequada e apresentar um orçamento claro, sem compromisso.",
  },
  {
    q: "Quais serviços de terraplenagem vocês fazem?",
    a: "Executamos limpeza e preparação de terrenos, escavação de piscina e fundação, nivelamento de terreno, abertura de valas, perfurações, aterros, demolições, movimentação de terra e remoção de entulho. Avaliamos cada obra para definir a máquina e o método mais seguros.",
  },
  {
    q: "Vocês fazem escavação de piscina em Sorocaba e região?",
    a: "Sim. Fazemos escavação de piscina em Sorocaba, Araçoiaba da Serra, Votorantim e cidades próximas. Antes do serviço, avaliamos medidas, profundidade, acesso das máquinas, tipo de solo e local para retirada ou reaproveitamento da terra.",
  },
  {
    q: "Como funciona o nivelamento de terreno para construção?",
    a: "O nivelamento corrige desníveis e prepara a área para fundações, pisos, jardins ou outras etapas da obra. A equipe analisa as cotas, realiza cortes e aterros quando necessários e utiliza o equipamento adequado para deixar o terreno conforme o projeto.",
  },
  {
    q: "A Adão faz limpeza de lote e retirada de entulho?",
    a: "Sim. Realizamos limpeza de lote, preparação de terreno, movimentação de terra e remoção de entulho em Sorocaba e região. A visita técnica identifica vegetação, resíduos, acessos e o volume a retirar para que o orçamento seja preciso.",
  },
  {
    q: "Quando é necessário fazer aterro no terreno?",
    a: "O aterro é indicado para elevar cotas, corrigir desníveis ou preparar a base de uma construção. O serviço deve considerar o material adequado, a distribuição em camadas e as condições do solo. Após avaliar o local, orientamos a execução mais apropriada para a obra.",
  },
  {
    q: "É possível contratar retroescavadeira ou escavadeira por hora?",
    a: "Sim. Conforme o tipo e a duração do serviço, podemos elaborar orçamento por hora-máquina ou pelo projeto completo. Temos retroescavadeira, mini escavadeira, escavadeira hidráulica, mini carregadeira, caminhão caçamba, rompedor e perfuratriz.",
  },
  {
    q: "Como faço para pedir um orçamento?",
    a: "É só chamar no WhatsApp e contar sobre o seu projeto. Agendamos uma visita para avaliar o terreno presencialmente e depois enviamos um orçamento personalizado, sem custo e sem compromisso.",
  },
];


function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#inicio" className="inline-flex shrink-0 items-center" aria-label="Adão Terraplenagem — início">
      <img
        src={logoAsset.url}
        alt="Adão Terraplenagem"
        width={179}
        height={196}
        className={`${compact ? "h-14 w-auto sm:h-16" : "h-24 w-auto"} object-contain object-left`}
      />
    </a>
  );
}

function WhatsAppButton({ label = "SOLICITAR ORÇAMENTO GRÁTIS", dark = false, location = "unknown" }: { label?: string; dark?: boolean; location?: string }) {
  return (
    <a href={whatsapp} target="_blank" rel="noreferrer" onClick={() => trackEvent("whatsapp_click", { location })} className={`group inline-flex min-h-14 items-center justify-center gap-3 rounded-sm px-6 font-display text-base font-extrabold tracking-[0.04em] transition-colors ${dark ? "bg-navy-deep text-foreground hover:bg-background" : "bg-gold text-primary-foreground hover:bg-gold-soft"}`}>
      <MessageCircle className="h-5 w-5" />
      {label}
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function WhatsAppMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="currentColor">
      <path d="M16.04 3A12.82 12.82 0 0 0 5.16 22.62L3.3 29l6.55-1.72A12.9 12.9 0 1 0 16.04 3Zm0 23.52a10.58 10.58 0 0 1-5.4-1.48l-.39-.23-3.88 1.02 1.04-3.78-.25-.4a10.62 10.62 0 1 1 8.88 4.87Zm5.82-7.96c-.32-.16-1.88-.93-2.17-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57a9.55 9.55 0 0 1-1.76-2.19c-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.07 1.3 3.28c.16.21 2.24 3.42 5.42 4.79.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.26-.74.26-1.38.18-1.51-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

function ScrollRow({ children, edgeClass = "px-5 lg:px-8" }: { children: React.ReactNode; edgeClass?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.82, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className={`scrollbar-none flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 lg:gap-4 ${edgeClass}`}
        style={{ scrollbarWidth: "none" }}
      >
        {children}
      </div>
      <button
        type="button"
        onClick={() => scroll(-1)}
        aria-label="Ver anteriores"
        className="absolute left-2 top-[38%] hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background text-foreground shadow-lg transition-transform hover:scale-105 sm:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => scroll(1)}
        aria-label="Ver próximos"
        className="absolute right-2 top-[38%] hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background text-foreground shadow-lg transition-transform hover:scale-105 sm:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}

function SectionHeading({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className="mb-10 max-w-3xl">
      <div className="mb-4 flex items-center gap-3 font-display text-sm font-bold tracking-[0.16em] text-gold"><span className="h-px w-9 bg-gold" />{eyebrow}</div>
      <h2 className={`break-words font-display text-4xl font-black leading-[0.95] tracking-normal sm:text-5xl lg:text-6xl ${light ? "text-primary-foreground" : "text-foreground"}`}>{title}</h2>
    </div>
  );
}

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileMenuOpen]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-foreground/10">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:h-24 lg:px-8">
          <Brand compact />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {NAV_ITEMS.map(([label, href]) => (
              <a key={href} href={href} className="font-display text-sm font-bold tracking-[0.06em] text-foreground/80 transition-colors hover:text-gold">{label.toUpperCase()}</a>
            ))}
          </nav>
          <a href={whatsapp} target="_blank" rel="noreferrer" onClick={() => trackEvent("whatsapp_click", { location: "header" })} className="hidden min-h-11 items-center gap-2 rounded-sm bg-gold px-5 font-display text-sm font-extrabold text-primary-foreground transition-colors hover:bg-gold-soft sm:flex"><MessageCircle className="h-4 w-4" /> FALE CONOSCO</a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
             aria-controls="mobile-nav"
             className="relative z-50 flex h-12 w-12 items-center justify-center rounded-sm border border-foreground/25 bg-navy-deep/80 text-foreground transition-colors hover:border-gold hover:text-gold lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        <button
          type="button"
          aria-label="Fechar menu"
          tabIndex={mobileMenuOpen ? 0 : -1}
          onClick={() => setMobileMenuOpen(false)}
          className={`fixed inset-0 z-30 bg-navy-deep/75 transition-opacity duration-200 lg:hidden ${mobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        />
        <nav id="mobile-nav" aria-label="Navegação mobile" aria-hidden={!mobileMenuOpen} className={`fixed inset-y-0 right-0 z-40 w-[min(88vw,24rem)] border-l border-border bg-background shadow-2xl transition-transform duration-300 ease-out lg:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex h-full flex-col px-6 pb-7 pt-24">
              <span className="mb-3 font-display text-xs font-bold tracking-[0.16em] text-gold">NAVEGAÇÃO</span>
              {NAV_ITEMS.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                  className="flex min-h-13 items-center justify-between border-b border-foreground/10 font-display text-lg font-bold text-foreground/90 transition-colors hover:text-gold"
                >
                  {label.toUpperCase()}
                  <ChevronRight className="h-4 w-4 text-gold" />
                </a>
              ))}
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  trackEvent("whatsapp_click", { location: "mobile_menu" });
                  setMobileMenuOpen(false);
                }}
                 tabIndex={mobileMenuOpen ? 0 : -1}
                 className="mt-auto flex min-h-14 items-center justify-center gap-3 rounded-sm bg-gold px-5 font-display text-base font-extrabold text-primary-foreground transition-colors hover:bg-gold-soft"
              >
                <MessageCircle className="h-4 w-4" /> FALE CONOSCO
              </a>
            </div>
          </nav>
      </header>

      <section id="inicio" className="relative flex min-h-[760px] items-end overflow-hidden pt-28 lg:min-h-[820px]">
        <img src={heroImageUrl} alt="Escavação com máquinas de terraplenagem em Sorocaba e região" width={1200} height={900} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[68%_38%]" />
        <div className="absolute inset-0 bg-navy-deep/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 lg:px-8 lg:pb-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 border-l-2 border-gold pl-4 font-display text-sm font-bold tracking-[0.14em] text-gold sm:text-base">EXPERIÊNCIA QUE PREPARA O FUTURO</div>
            <h1 className="break-words font-display text-4xl font-black uppercase leading-[0.95] tracking-normal text-foreground sm:text-7xl lg:text-[5.5rem]">Há 14 anos<br /><span className="text-gold">transformando terrenos</span> em Sorocaba e região</h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-xl">Soluções completas para residências, condomínios, empresas, construtoras e propriedades rurais — com máquinas próprias e equipe experiente.</p>
            <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <WhatsAppButton location="hero" />
              <div className="flex items-center gap-3 text-sm text-foreground/75"><ShieldCheck className="h-9 w-9 text-gold" /><span><strong className="block text-foreground">Avaliação presencial</strong>Sem custo e sem compromisso</span></div>
            </div>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-3 border-t border-foreground/20 pt-6">
            {[['14+', 'ANOS DE EXPERIÊNCIA'], ['7', 'EQUIPAMENTOS PRÓPRIOS'], ['10', 'CIDADES ATENDIDAS']].map(([number, label]) => <div key={label}><strong className="font-display text-3xl text-gold sm:text-4xl">{number}</strong><span className="mt-1 block max-w-24 font-display text-[0.65rem] font-bold leading-tight text-foreground/70 sm:text-xs">{label}</span></div>)}
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-foreground py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div className="relative overflow-hidden">
            <img src={fleetImage} alt="Abertura de fundação em obra da Adão Terraplenagem" width={718} height={538} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div className="absolute bottom-0 left-0 flex items-center gap-3 bg-gold p-3 text-primary-foreground sm:block sm:p-7"><strong className="font-display text-2xl font-black sm:block sm:text-5xl">14</strong><span className="font-display text-[0.65rem] font-bold tracking-[0.1em] sm:text-xs sm:tracking-[0.12em]">ANOS CONSTRUINDO CONFIANÇA</span></div>
          </div>
          <div>
            <SectionHeading eyebrow="NOSSA HISTÓRIA" title="TRABALHO FIRME. RESULTADO BEM-FEITO." light />
            <p className="text-lg leading-relaxed text-primary-foreground/75">A Adão Terraplenagem nasceu em Araçoiaba da Serra e cresceu atendendo toda a região de Sorocaba com responsabilidade, excelência e dedicação em cada serviço.</p>
            <p className="mt-5 leading-relaxed text-primary-foreground/65">Há 14 anos, preparamos o terreno para os projetos dos nossos clientes saírem do papel. Cuidamos de cada etapa com atenção, equipamentos adequados e o compromisso de entregar um trabalho seguro, organizado e no prazo.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {([['Responsabilidade', ShieldCheck], ['Excelência', BadgeCheck], ['Dedicação', CheckCircle2]] as const).map(([label, Icon]) => <div key={label} className="flex items-center gap-3 border-t border-primary-foreground/15 pt-4"><Icon className="h-5 w-5 text-gold" /><strong className="font-display text-sm tracking-[0.05em]">{label.toUpperCase()}</strong></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="O QUE FAZEMOS" title="SOLUÇÕES COMPLETAS EM TERRAPLENAGEM" />
          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text }, i) => (
              <article key={title} className="group min-h-56 bg-background p-7 transition-colors hover:bg-surface-raised">
                <div className="flex items-start justify-between"><span className="flex h-12 w-12 items-center justify-center bg-gold text-primary-foreground"><Icon className="h-6 w-6" /></span><span className="font-display text-sm font-bold text-gold/60">0{i + 1}</span></div>
                <h3 className="mt-7 font-display text-2xl font-extrabold uppercase tracking-normal">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="equipamentos" className="bg-navy-deep py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionHeading eyebrow="NOSSA ESTRUTURA" title="EQUIPAMENTO CERTO PARA CADA DESAFIO" />
            <p className="mb-10 max-w-xl leading-relaxed text-muted-foreground lg:ml-auto">Máquinas próprias e bem cuidadas para garantir eficiência, segurança e excelente acabamento — do pequeno terreno à grande obra.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {equipment.map(({ icon: Icon, name, use }, index) => (
              <article key={name} className={`border border-border bg-card p-6 ${index === 0 ? 'lg:col-span-2' : ''}`}>
                <Icon className="h-8 w-8 text-gold" strokeWidth={1.7} />
                <h3 className="mt-7 font-display text-2xl font-extrabold uppercase">{name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{use}</p>
              </article>
            ))}
            <div className="flex min-h-48 flex-col justify-between bg-gold p-6 text-primary-foreground sm:col-span-2 lg:col-span-1">
              <CircleDot className="h-8 w-8" />
              <p className="font-display text-2xl font-black uppercase leading-tight">Qual máquina seu projeto precisa?</p>
              <a href={whatsapp} target="_blank" rel="noreferrer" onClick={() => trackEvent("whatsapp_click", { location: "equipamentos" })} className="mt-4 inline-flex items-center gap-2 font-display text-sm font-bold">FALE COM A EQUIPE <ChevronRight className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="galeria" className="bg-foreground py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="GALERIA DE OBRAS" title="OBRAS QUE JÁ TRANSFORMAMOS" light />
          <p className="-mt-5 mb-10 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">Alguns dos projetos que já executamos em Sorocaba e região.</p>
        </div>
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12">
            {gallery.map(({ image, title, alt, width, height }, index) => (
              <figure key={title} className={`group relative min-h-48 overflow-hidden rounded-lg bg-navy-deep shadow-lg ${index < 2 ? "col-span-2 aspect-[4/3] sm:aspect-[16/9] lg:col-span-6" : "aspect-[4/5] lg:col-span-3"}`}>
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={image}
                    alt={alt}
                    width={width}
                    height={height}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.035]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 border-l-2 border-gold px-3 py-3 font-display text-sm font-extrabold uppercase leading-tight text-foreground sm:px-5 sm:py-5 sm:text-lg">{title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="atendimento" className="bg-gold py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="mb-4 flex items-center gap-3 font-display text-sm font-bold tracking-[0.16em]"><span className="h-px w-9 bg-primary-foreground" />COMO FUNCIONA</div>
              <h2 className="break-words font-display text-4xl font-black uppercase leading-[0.92] sm:text-6xl">DO PRIMEIRO CONTATO AO TERRENO PRONTO.</h2>
              <div className="mt-8 border-l-4 border-primary-foreground bg-primary-foreground/10 p-5"><strong className="font-display text-xl font-black">ORÇAMENTO GRATUITO</strong><span className="mt-1 block font-display text-sm font-bold">AVALIAÇÃO PRESENCIAL GRATUITA</span></div>
              <div className="mt-7"><WhatsAppButton label="AGENDAR MINHA AVALIAÇÃO" dark location="atendimento" /></div>
            </div>
            <ol className="grid gap-px bg-primary-foreground/25 sm:grid-cols-2">
              {[
                ['01', 'Entre em contato', 'Conte o que você precisa pelo WhatsApp.'],
                ['02', 'Agendamos a visita', 'Escolhemos o melhor dia e horário.'],
                ['03', 'Avaliamos o terreno', 'Nossa equipe faz uma análise presencial.'],
                ['04', 'Receba seu orçamento', 'Você recebe uma proposta clara e detalhada.'],
                ['05', 'Projeto aprovado', 'Agendamos as máquinas e iniciamos o serviço.'],
              ].map(([number, title, text], index) => <li key={number} className={`bg-gold p-6 ${index === 4 ? 'sm:col-span-2' : ''}`}><span className="font-display text-4xl font-black text-primary-foreground/35">{number}</span><h3 className="mt-5 font-display text-xl font-extrabold uppercase">{title}</h3><p className="mt-2 text-sm text-primary-foreground/75">{text}</p></li>)}
            </ol>
          </div>
        </div>
      </section>

      <section id="regiao" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div><SectionHeading eyebrow="ONDE ATENDEMOS" title="SOROCABA E TODA A REGIÃO" /><p className="max-w-md leading-relaxed text-muted-foreground">Levamos nossa estrutura até sua obra. Consulte nossa equipe para confirmar o atendimento em sua localização.</p></div>
            <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
              {cities.map((city, i) => <div key={city} className="flex items-center gap-4 bg-background p-5"><span className="font-display text-xs font-bold text-gold">{String(i + 1).padStart(2, '0')}</span><MapPin className="h-5 w-5 text-gold" /><span className="font-display text-lg font-bold uppercase">{city}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="depoimentos" className="bg-navy-deep py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="QUEM JÁ CONTRATOU" title="AVALIAÇÕES DE CLIENTES" light />
            <div className="mb-10 rounded-lg border border-gold/35 bg-card px-5 py-4 text-primary-foreground sm:text-right">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-gold text-gold" />)}</div>
                <span className="font-display text-sm font-bold">{GOOGLE_RATING} no Google</span>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">Baseado em {GOOGLE_REVIEW_COUNT} avaliações</div>
              <a href={googleReviewsUrl} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm font-bold text-gold underline-offset-4 hover:underline">Ver avaliações no Google →</a>
            </div>
          </div>
        </div>
        <ScrollRow>
          {reviews.map((review) => (
            <figure key={review.name} className="flex w-[84vw] shrink-0 snap-start flex-col justify-between rounded-lg border border-primary-foreground/15 bg-card p-6 shadow-lg transition-colors hover:border-gold/45 sm:w-88">
              <div>
                <div className="mb-5 flex items-start justify-between gap-4">
                  <Quote className="h-8 w-8 text-gold" fill="currentColor" />
                  <span className="font-display text-sm font-black text-foreground" aria-label="Avaliação publicada no Google">G</span>
                </div>
                <blockquote className="min-h-32 leading-relaxed text-foreground/85">“{review.text}”</blockquote>
                <div className="mt-6 flex min-w-0 items-center gap-3 border-t border-primary-foreground/10 pt-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-lg font-bold text-gold">{review.name.charAt(0)}</span>
                  <div className="min-w-0">
                    <figcaption className="truncate font-display text-sm font-bold uppercase text-foreground">{review.name}</figcaption>
                    <div className="mt-1 flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />)}</div>
                  </div>
                  <span className="ml-auto inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-gold"><BadgeCheck className="h-4 w-4" /> Verificada</span>
                </div>
              </div>
            </figure>
          ))}
        </ScrollRow>
      </section>

      <section id="faq" className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionHeading eyebrow="DÚVIDAS FREQUENTES" title="PERGUNTAS SOBRE TERRAPLENAGEM" />
          <div className="divide-y divide-border border-y border-border">
            {faq.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-foreground marker:content-none">
                  {item.q}
                  <ChevronRight className="h-5 w-5 shrink-0 text-gold transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface-raised py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl"><span className="font-display text-sm font-bold tracking-[0.15em] text-gold">SEU PROJETO COMEÇA PELO TERRENO</span><h2 className="break-words mt-3 font-display text-4xl font-black uppercase leading-none sm:text-5xl">Vamos conversar sobre a sua obra?</h2></div>
          <WhatsAppButton location="cta_final" />
        </div>
      </section>

      <section id="contato" className="bg-foreground py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:px-8">
          <div>
            <SectionHeading eyebrow="CONTATO E LOCALIZAÇÃO" title="VENHA CONVERSAR COM A NOSSA EQUIPE" light />
            <div className="flex items-start gap-4 border-t border-primary-foreground/15 pt-6">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-gold" />
              <address className="not-italic leading-relaxed text-primary-foreground/75">Estr. Irmã Theoberta, 101 - Jd Arco Verde<br />Araçoiaba da Serra - SP, 18191-494</address>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={mapUrl} target="_blank" rel="noreferrer" onClick={() => trackEvent("map_click", { location: "contato" })} className="inline-flex min-h-12 items-center gap-2 rounded-sm bg-gold px-5 font-display text-sm font-extrabold text-primary-foreground transition-colors hover:bg-gold-soft"><MapPin className="h-5 w-5" />VER NO MAPA</a>
              <a href={whatsapp} target="_blank" rel="noreferrer" onClick={() => trackEvent("whatsapp_click", { location: "contato" })} className="inline-flex min-h-12 items-center gap-2 rounded-sm border border-primary-foreground/25 px-5 font-display text-sm font-extrabold transition-colors hover:border-gold hover:text-gold"><MessageCircle className="h-5 w-5" />CHAMAR NO WHATSAPP</a>
            </div>
          </div>
          <div className="overflow-hidden border border-primary-foreground/15 bg-background">
            <iframe
              src="https://maps.google.com/maps?q=Estr.+Irmã+Theoberta,+101,+Jd+Arco+Verde,+Araçoiaba+da+Serra+-+SP,+18191-494&output=embed"
              title="Localização da Adão Terraplenagem"
              width="100%"
              height="300"
              className="block border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer className="bg-navy-deep pt-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div className="sm:col-span-2"><Brand /><p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">Terraplenagem com responsabilidade, excelência e dedicação em Sorocaba, Araçoiaba da Serra e região.</p></div>
          <div><h3 className="font-display text-sm font-bold tracking-[0.12em] text-gold">CONTATO</h3><a href={whatsapp} target="_blank" rel="noreferrer" onClick={() => trackEvent("whatsapp_click", { location: "footer" })} className="mt-5 block font-display text-2xl font-bold hover:text-gold">(15) 99785-8631</a><a href={mapUrl} target="_blank" rel="noreferrer" onClick={() => trackEvent("map_click", { location: "footer" })} className="mt-3 flex max-w-xs items-start gap-2 text-sm leading-relaxed text-muted-foreground hover:text-gold"><MapPin className="mt-0.5 h-4 w-4 shrink-0" />Estr. Irmã Theoberta, 101 - Jd Arco Verde, Araçoiaba da Serra - SP</a></div>
          <div><h3 className="font-display text-sm font-bold tracking-[0.12em] text-gold">ACOMPANHE</h3><div className="mt-5 flex gap-3"><a href={instagram} target="_blank" rel="noreferrer" onClick={() => trackEvent("social_click", { platform: "instagram" })} aria-label="Instagram da Adão Terraplenagem" className="flex h-11 w-11 items-center justify-center border border-border transition-colors hover:bg-gold hover:text-primary-foreground"><Instagram className="h-5 w-5" /></a><a href={facebook} target="_blank" rel="noreferrer" onClick={() => trackEvent("social_click", { platform: "facebook" })} aria-label="Facebook da Adão Terraplenagem" className="flex h-11 w-11 items-center justify-center border border-border transition-colors hover:bg-gold hover:text-primary-foreground"><Facebook className="h-5 w-5" /></a></div><span className="mt-3 block text-sm text-muted-foreground">@adaoterraplenagem</span></div>
        </div>
        <div className="border-t border-border"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between lg:px-8"><span>© 2026 Adão Terraplenagem. Todos os direitos reservados.</span><span>Araçoiaba da Serra • São Paulo</span></div></div>
      </footer>

      <a href={whatsapp} target="_blank" rel="noreferrer" onClick={() => trackEvent("whatsapp_click", { location: "floating_button" })} aria-label="Solicitar orçamento pelo WhatsApp" className="whatsapp-float fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-xl transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-whatsapp/35"><WhatsAppMark /></a>
    </main>
  );
}
