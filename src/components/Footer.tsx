import { Link } from '@/i18n/routing';
import { Code2, Github, Twitter, Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className="border-t border-border bg-muted/50">
            <div className="container-custom py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <Code2 className="h-6 w-6 text-primary" />
                            <span className="font-bold text-xl tracking-tight">Otima</span>
                        </Link>
                        <p className="text-sm text-muted-foreground w-full md:w-3/4">
                            {t('tagline')}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">{t('company')}</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/#about" className="hover:text-primary transition-colors">{t('links.about')}</Link></li>
                            <li><Link href="/#services" className="hover:text-primary transition-colors">{t('links.services')}</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">{t('links.careers')}</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">{t('links.blog')}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">{t('legal')}</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">{t('links.privacy')}</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">{t('links.terms')}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">{t('social')}</h3>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                    <p>{t('copyright', { year: new Date().getFullYear() })}</p>
                </div>
            </div>
        </footer>
    );
}
