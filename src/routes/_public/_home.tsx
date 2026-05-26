import { createFileRoute, Outlet } from '@tanstack/react-router';
import { FixedBackground, Footer, Header } from '../../components/layout';

export const Route = createFileRoute('/_public/_home')({
    head: () => ({ meta: [{ title: 'Home | Oxovolt Energy' }] }),
    component: () => {
        return (
            <FixedBackground>
                <Header />

                <main className="flex w-full flex-1 flex-col pt-20">
                    <Outlet />
                </main>

                <div className="z-50 -mt-40">
                    <Footer />
                </div>
            </FixedBackground>
        );
    },
});
