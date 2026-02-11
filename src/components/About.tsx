import { CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function About() {
    const t = useTranslations('About');

    const checks = [
        'team', 'agile', 'code', 'delivery', 'ux', 'support'
    ];

    return (
        <section id="about" className="section-padding bg-background">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-border">
                            <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                                <span className="text-white/20 text-6xl font-bold">Otima</span>
                            </div>
                        </div>
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl -z-10" />
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl -z-10" />
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('title')}</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            {t('p1')}
                        </p>
                        <p className="text-muted-foreground mb-8">
                            {t('p2')}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {checks.map((item) => (
                                <div key={item} className="flex items-center space-x-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                    <span className="font-medium">{t(`checks.${item}`)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
