import { Layout, Smartphone, Cloud, Database, BarChart, Workflow } from 'lucide-react';
import { useTranslations } from 'next-intl';

const servicesList = [
    { id: 'web', icon: Layout },
    { id: 'mobile', icon: Smartphone },
    { id: 'cloud', icon: Cloud },
    { id: 'data', icon: Database },
    { id: 'bi', icon: BarChart },
    { id: 'architecture', icon: Workflow },
];

export default function Services() {
    const t = useTranslations('Services');

    return (
        <section id="services" className="section-padding bg-muted/30">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
                    <p className="text-muted-foreground text-lg">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesList.map((service) => (
                        <div
                            key={service.id}
                            className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{t(`items.${service.id}.title`)}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {t(`items.${service.id}.desc`)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
