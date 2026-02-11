import Link from 'next/link';
import { ArrowRight, Code, Cpu, Globe } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-background pt-16 md:pt-20 lg:pt-32 pb-16">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -ml-[40rem] w-[80rem] h-[30rem] bg-gradient-to-tr from-primary/20 to-transparent opacity-50 blur-3xl -z-10 rounded-full" />
            <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-tl from-primary/10 to-transparent opacity-30 blur-3xl -z-10 rounded-full" />

            <div className="container-custom">
                <div className="flex flex-col items-center text-center">
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8 animate-fade-in-up">
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                        Transformação Digital para o seu Negócio
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 max-w-4xl animate-fade-in-up animation-delay-100">
                        Construímos o Software que Impulsiona o Futuro.
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in-up animation-delay-200">
                        Da concepção ao lançamento, a Otima desenvolve soluções digitais de alta performance que escalam com o seu sucesso. Web, Mobile e Cloud.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up animation-delay-300">
                        <Link
                            href="#contact"
                            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            Começar Projeto
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                        <Link
                            href="#services"
                            className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-background px-8 text-base font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            Nossos Serviços
                        </Link>
                    </div>
                </div>

                {/* Feature Highlights */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in-up animation-delay-400">
                    <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                            <Globe className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Web Moderna</h3>
                        <p className="text-muted-foreground text-sm">Aplicações rápidas e responsivas construídas com as tecnologias mais recentes.</p>
                    </div>
                    <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                            <Code className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Software Sob Medida</h3>
                        <p className="text-muted-foreground text-sm">Soluções personalizadas desenhadas especificamente para os seus desafios.</p>
                    </div>
                    <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                            <Cpu className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">IA & Automação</h3>
                        <p className="text-muted-foreground text-sm">Integração de inteligência artificial para otimizar seus processos.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
