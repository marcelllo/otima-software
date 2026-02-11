import { useTranslations } from 'next-intl';

export default function Contact() {
    const t = useTranslations('Contact');

    return (
        <section id="contact" className="section-padding bg-background relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -ml-[30rem] w-[60rem] h-[30rem] bg-primary/5 opacity-50 blur-3xl -z-10 rounded-full" />

            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('title')}</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            {t('subtitle')}
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-semibold">{t('info.email')}</h4>
                                    <p className="text-muted-foreground">contato@otima.com.br</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-semibold">{t('info.phone')}</h4>
                                    <p className="text-muted-foreground">(11) 99999-9999</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
                        <h3 className="text-xl font-bold mb-6">{t('form.title')}</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">{t('form.name')}</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        placeholder={t('form.name_ph')}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">{t('form.email')}</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        placeholder={t('form.email_ph')}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">{t('form.subject')}</label>
                                <select
                                    id="subject"
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                >
                                    <option value="">{t('form.subject_ph')}</option>
                                    <option value="orcamento">{t('form.subjects.budget')}</option>
                                    <option value="parceria">{t('form.subjects.partnership')}</option>
                                    <option value="duvidas">{t('form.subjects.general')}</option>
                                    <option value="outro">{t('form.subjects.other')}</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">{t('form.message')}</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                                    placeholder={t('form.message_ph')}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            >
                                {t('form.submit')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
