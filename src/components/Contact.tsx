"use client";

import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const t = useTranslations('Contact');

    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus('idle');

        if (!form.current) return;

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                form.current,
                {
                    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    setStatus('success');
                    form.current?.reset();
                },
                (error) => {
                    console.error('FAILED...', error);
                    setStatus('error');
                },
            )
            .finally(() => {
                setLoading(false);
            });
    };

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
                                    <p className="text-muted-foreground">contato@otima.software</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-semibold">{t('info.phone')}</h4>
                                    <p className="text-muted-foreground">+55 (61) 99967-1694</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
                        <h3 className="text-xl font-bold mb-6">{t('form.title')}</h3>
                        <form ref={form} onSubmit={sendEmail} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">{t('form.name')}</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    placeholder={t('form.name_ph')}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">{t('form.email')}</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    placeholder={t('form.email_ph')}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">{t('form.message')}</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                                    placeholder={t('form.message_ph')}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Sending...' : t('form.submit')}
                            </button>
                            {status === 'success' && <p className="text-green-500 text-sm text-center">Message sent successfully!</p>}
                            {status === 'error' && <p className="text-red-500 text-sm text-center">Failed to send message. Please try again.</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
