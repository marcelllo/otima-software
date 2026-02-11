import { CheckCircle2 } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="section-padding bg-background">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-border">
                            {/* Used a placeholder gradient/pattern div instead of an image for now to avoid broken links. 
                  In a real scenario, this would be an optimized Image component. */}
                            <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                                <span className="text-white/20 text-6xl font-bold">Otima</span>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl -z-10" />
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl -z-10" />
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre a Otima</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            Somos uma consultoria de desenvolvimento de software apaixonada por tecnologia e focada em resultados. Desde 2024, ajudamos empresas a inovarem através de soluções digitais robustas.
                        </p>
                        <p className="text-muted-foreground mb-8">
                            Acreditamos que o código é apenas o meio. O fim é gerar valor real para o seu negócio, seja automatizando processos, melhorando a experiência do seus clientes ou criando novos canais de receita.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {[
                                "Equipe Senior",
                                "Metodologia Ágil",
                                "Código Limpo",
                                "Entrega Contínua",
                                "Foco em UX",
                                "Suporte Dedicado"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
