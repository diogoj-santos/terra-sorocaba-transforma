import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
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
  Ruler,
  ShieldCheck,
  Shovel,
  Sparkles,
  Tractor,
  Trash2,
  Truck,
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
    q: "Quanto custa um serviço de terraplenagem?",
    a: "O valor depende do tipo de terreno, do acesso para as máquinas, do desnível e da quantidade de terra a movimentar. Por isso fazemos uma avaliação presencial gratuita antes de enviar um orçamento personalizado.",
  },
  {
    q: "Quais serviços de terraplenagem vocês fazem?",
    a: "Limpeza e preparação de terrenos, escavações, nivelamento, abertura de valas, perfurações, execução de aterros, demolições, movimentação de terra e remoção de entulho.",
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

function SectionHeading({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className="mb-10 max-w-3xl">
      <div className="mb-4 flex items-center gap-3 font-display text-sm font-bold tracking-[0.16em] text-gold"><span className="h-px w-9 bg-gold" />{eyebrow}</div>
      <h2 className={`font-display text-4xl font-black leading-[0.95] tracking-normal sm:text-5xl lg:text-6xl ${light ? "text-primary-foreground" : "text-foreground"}`}>{title}</h2>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-foreground/10">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:h-24 lg:px-8">
          <Brand compact />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {([['Sobre', '#sobre'], ['Serviços', '#servicos'], ['Equipamentos', '#equipamentos'], ['Galeria', '#galeria'], ['Atendimento', '#atendimento'], ['Região', '#regiao'], ['Contato', '#contato']] as const).map(([label, href]) => (
              <a key={href} href={href} className="font-display text-sm font-bold tracking-[0.06em] text-foreground/80 transition-colors hover:text-gold">{label.toUpperCase()}</a>
            ))}
          </nav>
          <a href={whatsapp} target="_blank" rel="noreferrer" onClick={() => trackEvent("whatsapp_click", { location: "header" })} className="hidden min-h-11 items-center gap-2 rounded-sm bg-gold px-5 font-display text-sm font-extrabold text-primary-foreground transition-colors hover:bg-gold-soft sm:flex"><MessageCircle className="h-4 w-4" /> FALE CONOSCO</a>
          <a href="#servicos" className="flex h-11 w-11 items-center justify-center border border-foreground/20 text-foreground lg:hidden" aria-label="Ver serviços"><Menu className="h-5 w-5" /></a>
        </div>
      </header>

      <section id="inicio" className="relative flex min-h-[760px] items-end overflow-hidden pt-28 lg:min-h-[820px]">
        <img src={heroImageUrl} alt="Escavação com máquinas de terraplenagem em Sorocaba e região" width={1200} height={900} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[68%_38%]" />
        <div className="absolute inset-0 bg-navy-deep/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 lg:px-8 lg:pb-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 border-l-2 border-gold pl-4 font-display text-sm font-bold tracking-[0.14em] text-gold sm:text-base">EXPERIÊNCIA QUE PREPARA O FUTURO</div>
            <h1 className="font-display text-5xl font-black uppercase leading-[0.91] tracking-normal text-foreground sm:text-7xl lg:text-[5.5rem]">Há 14 anos<br /><span className="text-gold">transformando terrenos</span> em Sorocaba e região</h1>
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
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
            {gallery.map(({ image, title, alt, width, height }) => (
              <figure key={title} className="group min-w-0 overflow-hidden bg-navy-deep">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image}
                    alt={alt}
                    width={width}
                    height={height}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 motion-safe:lg:group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="border-t-2 border-gold px-3 py-4 font-display text-sm font-extrabold uppercase leading-tight text-foreground sm:text-base">{title}</figcaption>
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
              <h2 className="font-display text-5xl font-black uppercase leading-[0.92] sm:text-6xl">DO PRIMEIRO CONTATO AO TERRENO PRONTO.</h2>
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
          <div className="max-w-2xl"><span className="font-display text-sm font-bold tracking-[0.15em] text-gold">SEU PROJETO COMEÇA PELO TERRENO</span><h2 className="mt-3 font-display text-4xl font-black uppercase leading-none sm:text-5xl">Vamos conversar sobre a sua obra?</h2></div>
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

      <a href={whatsapp} target="_blank" rel="noreferrer" onClick={() => trackEvent("whatsapp_click", { location: "floating_button" })} aria-label="Solicitar orçamento pelo WhatsApp" className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gold text-primary-foreground shadow-xl transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-ring/40"><MessageCircle className="h-8 w-8" fill="currentColor" strokeWidth={1.5} /></a>
    </main>
  );
}
