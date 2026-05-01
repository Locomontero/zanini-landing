import { motion } from "motion/react";
import { ArrowLeft, Zap } from "lucide-react";
import { Link } from "react-router";
import logoImage from "figma:asset/0464351365b70cc194be9dae29faa1f34d01cb17.png";
import backgroundImage from "figma:asset/da69969b543d1767b57d1613f749b134a9851b7a.png";
import portfolio2 from "../../imports/garrafaTermica.jpeg";
import portfolio6 from "../../imports/coqueteleira.jpeg";

export function Garrafas() {
  const garrafasGallery = [
    {
      url: portfolio2,
      title: "Garrafas Personalizadas",
      description: "Garrafa térmica com design exclusivo",
    },
    {
      url: portfolio6,
      title: "Coqueteleira Exclusivas",
      description: "Coqueteleira exclusivas com gravação delicada",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 overflow-hidden relative">
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: 'brightness(0.3)',
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-950/70 to-black/90" />
      <div className="fixed inset-0 bg-gradient-to-br from-slate-700/5 via-transparent to-slate-800/10 pointer-events-none" />

      <motion.div
        initial={{ top: "-100%" }}
        animate={{ top: "100%" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="fixed left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/20 to-transparent pointer-events-none"
      />

      <div className="relative z-10">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50 shadow-lg shadow-black/50">
          <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="Zanini Laser" className="h-12 w-auto" />
            </div>
            <Link
              to="/"
              className="flex items-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Link>
          </div>
        </nav>

        <section className="min-h-screen px-8 pt-32 pb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-600/30 to-red-700/20 border border-red-600/60 rounded-full text-sm text-red-400 mb-6">
                Portfolio
              </div>
              <h1 className="text-6xl font-black mb-4">
                <span className="text-red-500">Garrafas</span> Personalizadas
              </h1>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                Garrafas térmicas e squeeze com gravação laser permanente
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {garrafasGallery.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/60 border border-slate-600/40 hover:border-red-600/60 transition-all shadow-xl shadow-black/60"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-black mb-2">{item.title}</h3>
                    <p className="text-neutral-400">{item.description}</p>
                    <div className="w-12 h-1 bg-red-600 group-hover:w-24 transition-all duration-300 mt-4" />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 text-center"
            >
              <Link
                to="/#contato"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg transition-all shadow-2xl shadow-red-600/40"
              >
                <Zap className="w-5 h-5" />
                <span className="font-semibold">Solicitar Orçamento</span>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
