import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { FixedBackground, Footer, Header } from '../../components/layout';

export const Route = createFileRoute('/_public/_home')({
    head: () => ({ meta: [{ title: 'Home | Oxovolt Energy' }] }),
    beforeLoad: ({ location }) => {
        // If a hash exists, redirect to the exact same route without the hash
        if (location.hash) {
            throw redirect({
                // We cast to `never` here to bypass strict TS route checking
                // since location.pathname is dynamic.
                to: location.pathname as never,
                hash: '',
                replace: true, // Replace the history entry so the user can't hit "Back" into the hash
            });
        }
    },
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
