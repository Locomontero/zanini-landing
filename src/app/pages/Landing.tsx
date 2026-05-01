import { motion } from "motion/react";
import { Zap, Award, Clock, Star, ArrowRight, Sparkles, Phone, Mail, MapPin } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import logoImage from "figma:asset/logo3d.png";
import backgroundImage from "figma:asset/da69969b543d1767b57d1613f749b134a9851b7a.png";
import portfolio1 from "../../imports/copoTermico500.jpeg";
import portfolio2 from "../../imports/garrafaTermica.jpeg";
import portfolio3 from "../../imports/copoOvo.jpeg";
import portfolio4 from "../../imports/caneca.jpeg";
import portfolio5 from "../../imports/copoOvo2.jpeg";
import portfolio6 from "../../imports/coqueteleira.jpeg";

export function Landing() {
  const services = [
    {
      title: "Gravação em Copos",
      description: "Taças, copos e canecas com gravação laser permanente e de alta definição",
      icon: Sparkles,
    },
    {
      title: "Garrafas Personalizadas",
      description: "Garrafas de vidro, whisky, vinho e destilados com designs exclusivos",
      icon: Star,
    },
    {
      title: "Brindes Corporativos",
      description: "Soluções personalizadas para eventos, premiações e presentes empresariais",
      icon: Award,
    },
    {
      title: "Produção Ágil",
      description: "Atendimento rápido e eficiente sem comprometer a qualidade",
      icon: Clock,
    },
  ];

  const portfolioCategories = [
    {
      title: "Copos",
      description: "Copos térmicos, canecas e muito mais",
      image: portfolio1,
      link: "/copos",
      count: "15+ Modelos",
    },
    {
      title: "Garrafas",
      description: "Garrafas térmicas e squeeze personalizados",
      image: portfolio2,
      link: "/garrafas",
      count: "20+ Modelos",
    },
    {
      title: "Brindes",
      description: "Brindes corporativos exclusivos",
      image: portfolio5,
      link: "/brindes",
      count: "30+ Opções",
    },
  ];

  const whyChoose = [
    "Tecnologia Laser de Última Geração",
    "Gravações Permanentes e Duráveis",
    "Design Personalizado sem Limites",
    "Atendimento Profissional e Consultivo",
    "Entrega Rápida em Todo o Brasil",
    "Qualidade Garantida",
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 overflow-hidden relative">
      {/* Background Image - Dark metallic texture */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: 'brightness(0.3)',
        }}
      />

      {/* Dark overlay for depth */}
      <div className="fixed inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-950/70 to-black/90" />

      {/* Subtle metallic shine effect */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-700/5 via-transparent to-slate-800/10 pointer-events-none" />

      {/* Animated scan lines */}
      <motion.div
        initial={{ top: "-100%" }}
        animate={{ top: "100%" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="fixed left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/20 to-transparent pointer-events-none"
      />
      <motion.div
        initial={{ top: "-100%" }}
        animate={{ top: "100%" }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
        className="fixed left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400/10 to-transparent pointer-events-none"
      />

      {/* Lightning bolt decorative elements */}
      <div className="fixed top-20 right-20 w-32 h-32 opacity-10">
        <Zap className="w-full h-full text-red-600" />
      </div>
      <div className="fixed bottom-40 left-10 w-24 h-24 opacity-10">
        <Zap className="w-full h-full text-red-600" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50 shadow-lg shadow-black/50">
          <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="Zanini Laser" className="h-12 w-auto" />
            </div>
            <div className="flex items-center gap-8">
              <a href="#servicos" className="text-sm hover:text-red-500 transition-colors">Serviços</a>
              <a href="#portfolio" className="text-sm hover:text-red-500 transition-colors">Portfolio</a>
              <a href="#sobre" className="text-sm hover:text-red-500 transition-colors">Sobre</a>
              <a
                href="https://wa.me/5567998681141?text=Olá,%20vim%20pelo%20site%20e%20quero%20um%20orçamento"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Contato
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-8 pt-24">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-red-600/30 to-red-700/20 border border-red-600/60 rounded-full text-sm text-red-400 mb-6 shadow-lg shadow-red-600/30">
                  Tecnologia Laser de Precisão
                </span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Transforme
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                  Momentos
                </span>
                <br />
                em Memórias
              </h1>

              <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                Gravação a laser de alta precisão em copos, garrafas e diversos itens.
                Personalize presentes e brindes corporativos com qualidade profissional.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/public/catalogo-zanini-laser.pdf"
                  download="Catalogo-Zanini-Laser.pdf"
                  className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg transition-all flex items-center justify-center gap-2 shadow-2xl shadow-red-600/40"
                >
                  <span className="font-semibold">Baixar Catálogo PDF</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://wa.me/5567998681141?text=Olá,%20vim%20pelo%20site%20e%20quero%20um%20orçamento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-slate-600 hover:border-red-600 hover:bg-red-600/20 rounded-lg transition-all flex items-center justify-center gap-2 bg-slate-800/50 backdrop-blur-sm shadow-xl shadow-black/50"
                >
                  <span className="font-semibold">Solicitar Orçamento</span>
                </a>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-black text-red-500 mb-1">500+</div>
                  <div className="text-sm text-neutral-500">Projetos Realizados</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-red-500 mb-1">100%</div>
                  <div className="text-sm text-neutral-500">Satisfação</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-red-500 mb-1">10+</div>
                  <div className="text-sm text-neutral-500">Anos de Experiência</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-red-500/20 to-transparent rounded-3xl blur-3xl" />
              <div className="absolute inset-0 bg-gradient-to-tl from-slate-400/10 to-transparent rounded-3xl blur-2xl" />
              <div className="relative">
                <img
                  src={logoImage}
                  alt="Zanini Laser"
                  className="w-full max-w-lg mx-auto drop-shadow-[0_0_120px_rgba(220,38,38,0.5)] hover:drop-shadow-[0_0_150px_rgba(220,38,38,0.7)] transition-all duration-500"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-32 px-8 bg-gradient-to-b from-slate-900/60 via-slate-800/40 to-transparent backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-black mb-4">
                Nossos <span className="text-red-500">Serviços</span>
              </h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                Soluções completas em gravação a laser para todas as suas necessidades
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/60 backdrop-blur-sm border border-slate-600/40 hover:border-red-600/60 rounded-2xl p-8 transition-all hover:shadow-2xl hover:shadow-red-600/20 shadow-lg shadow-black/50"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-600/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative">
                    <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className="w-7 h-7 text-red-500" />
                    </div>

                    <h3 className="text-2xl font-black mb-3">{service.title}</h3>
                    <p className="text-neutral-400 leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1769512585429-df338954cd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNlciUyMGVuZ3JhdmluZyUyMG1hY2hpbmUlMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc3NTU3ODQ5OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Laser engraving technology"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl font-black mb-6">
                  Tecnologia
                  <br />
                  <span className="text-red-500">Laser de Precisão</span>
                </h2>

                <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                  Utilizamos equipamentos de última geração para garantir gravações perfeitas,
                  duráveis e com acabamento profissional em todos os materiais.
                </p>

                <div className="space-y-4">
                  {whyChoose.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-neutral-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-32 px-8 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-800/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-black mb-4">
                Nosso <span className="text-red-500">Catálogo</span>
              </h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-8">
                Baixe nosso catálogo completo com todas as opções de produtos personalizados
              </p>

              <motion.a
                href="/public/catalogo-zanini-laser.pdf"
                download="catalogo-zanini-laser.pdf"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-xl transition-all shadow-2xl shadow-red-600/40 hover:shadow-red-600/60 hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-lg font-black">Baixar Catálogo Completo (PDF)</span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-black mb-8">
                Ou navegue por <span className="text-red-500">categoria</span>
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolioCategories.map((category, index) => (
                <motion.a
                  key={category.title}
                  href={category.link}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/60 border-2 border-slate-600/50 hover:border-red-600/60 transition-all shadow-xl shadow-black/60 hover:shadow-2xl hover:shadow-red-600/20"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-red-600/30 border border-red-600/60 rounded-full text-xs text-red-400">
                        {category.count}
                      </span>
                    </div>
                    <h3 className="text-3xl font-black text-white mb-2">{category.title}</h3>
                    <p className="text-neutral-300 mb-4">{category.description}</p>
                    <div className="flex items-center gap-2 text-red-500">
                      <span className="font-semibold">Ver Galeria</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl font-black mb-6">
                  Sobre a
                  <br />
                  <span className="text-red-500">Zanini Laser</span>
                </h2>

                <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
                  Mais de 3 anos de experiência no mercado, a Zanini Laser se consolidou
                  como referência em gravação a laser de alta precisão.
                </p>

                <p className="text-lg text-neutral-400 mb-6 leading-relaxed">
                  Nossa missão é transformar ideias em realidade através da tecnologia laser,
                  oferecendo soluções personalizadas para clientes que buscam qualidade,
                  durabilidade e exclusividade em seus produtos.
                </p>

                <p className="text-lg text-neutral-400 leading-relaxed">
                  Atendemos desde pequenas personalizações até grandes lotes corporativos,
                  sempre com o mesmo compromisso: entregar resultados impecáveis que
                  superem as expectativas.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1735494033794-b82c88743a16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsYXNlciUyMGVuZ3JhdmluZyUyMG1hY2hpbmUlMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc3NTU3ODQ5OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Laser engraving machine"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contato" className="py-32 px-8 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-black/90 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-5xl font-black mb-6">
                Pronto para <span className="text-red-500">Criar</span>
                <br />
                Algo Único?
              </h2>

              <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
                Entre em contato conosco e descubra como podemos transformar suas ideias
                em gravações laser de alta qualidade.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/70 border border-slate-600/50 rounded-2xl p-6 shadow-xl shadow-black/50">
                  <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="font-black mb-2">Telefone</h3>
                  <p className="text-neutral-400">(67) 99868-1141</p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/70 border border-slate-600/50 rounded-2xl p-6 shadow-xl shadow-black/50">
                  <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="font-black mb-2">Email</h3>
                  <p className="text-neutral-400">contato@zaninilaser.com</p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/70 border border-slate-600/50 rounded-2xl p-6 shadow-xl shadow-black/50">
                  <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="font-black mb-2">Localização</h3>
                  <p className="text-neutral-400">Ivinhema, MS</p>
                </div>
              </div>

              <a
                href="https://wa.me/5567998681141?text=Olá,%20vim%20pelo%20site%20e%20quero%20um%20orçamento"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg transition-all shadow-2xl shadow-red-600/40 hover:shadow-red-600/60 hover:scale-105"
              >
                <Zap className="w-5 h-5" />
                <span className="font-semibold">Solicitar Orçamento Agora</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-8 border-t border-slate-700/50 bg-slate-900/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <img src={logoImage} alt="Zanini Laser" className="h-10 w-auto" />
              </div>

              <div className="flex gap-8">
                <a href="#servicos" className="text-sm text-neutral-400 hover:text-red-500 transition-colors">
                  Serviços
                </a>

                <a href="#portfolio" className="text-sm text-neutral-400 hover:text-red-500 transition-colors">
                  Portfolio
                </a>

                <a href="#sobre" className="text-sm text-neutral-400 hover:text-red-500 transition-colors">
                  Sobre
                </a>

                <a
                  href="https://wa.me/5567998681141"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-400 hover:text-red-500 transition-colors"
                >
                  Contato
                </a>
              </div>

              <div className="text-sm text-neutral-500">
                © 2022 Zanini Laser. Todos os direitos reservados.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
