import { Layout, Smartphone, Cloud, Database, BarChart, ShieldCheck } from 'lucide-react';

const services = [
    {
        title: 'Desenvolvimento Web',
        description: 'Sites e aplicações web robustas, rápidas e otimizadas para SEO que convertem visitantes em clientes.',
        icon: Layout,
    },
    {
        title: 'Apps Mobile',
        description: 'Aplicativos nativos e híbridos para iOS e Android com experiência de usuário excepcional.',
        icon: Smartphone,
    },
    {
        title: 'Soluções em Nuvem',
        description: 'Arquitetura escalável e segura na AWS, Azure ou Google Cloud para suportar o crescimento do seu negócio.',
        icon: Cloud,
    },
    {
        title: 'Engenharia de Dados',
        description: 'Transforme dados brutos em insights acionáveis com nossas soluções de análise e processamento.',
        icon: Database,
    },
    {
        title: 'Business Intelligence',
        description: 'Dashboards interativos e relatórios automatizados para tomada de decisão baseada em dados.',
        icon: BarChart,
    },
    {
        title: 'Cibersegurança',
        description: 'Proteção avançada para seus sistemas e dados contra ameaças digitais em constante evolução.',
        icon: ShieldCheck,
    },
];

export default function Services() {
    return (
        <section id="services" className="section-padding bg-muted/30">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossas Especialidades</h2>
                    <p className="text-muted-foreground text-lg">
                        Combinamos expertise técnica com visão de negócio para entregar soluções completas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
