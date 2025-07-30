"use client";
import { NotificationProvider, I18nProvider, ThemeProvider } from "@/portfolio/providers";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <I18nProvider>
                <NotificationProvider>
                    {children}
                </NotificationProvider>
            </I18nProvider>
        </ThemeProvider>
    );
}
