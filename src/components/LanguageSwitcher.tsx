"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { ChangeEvent, useState, startTransition } from 'react';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, setIsPending] = useState(false);

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    }

    return (
        <div className="relative inline-flex items-center">
            <Globe className="h-4 w-4 absolute left-2 text-muted-foreground pointer-events-none" />
            <select
                defaultValue={locale}
                disabled={isPending}
                onChange={onSelectChange}
                className="h-9 pl-8 pr-3 rounded-md border border-border bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring appearance-none cursor-pointer"
            >
                <option value="pt">PT</option>
                <option value="en">EN</option>
            </select>
        </div>
    );
}
