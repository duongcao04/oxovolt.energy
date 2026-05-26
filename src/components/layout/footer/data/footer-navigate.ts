import type { LinkProps } from '@tanstack/react-router';

type NavigateItem = {
  href: LinkProps['to'];
  id: string;
  label: string;
  linkProps?: LinkProps;
};
export const FOOTER_NAVIGATE: NavigateItem[] = [
  { id: 'personal', label: 'Personal', href: '/personal' as LinkProps['to'] },
  { id: 'business', label: 'Business', href: '/business' as LinkProps['to'] },
  {
    id: 'boltarium-env',
    label: 'Boltarium Environment',
    href: 'https://boltarium.science' as LinkProps['to'],
    linkProps: {
      target: '_blank',
    },
  },
  {
    id: 'privacy-legal',
    label: 'Privacy & Legal',
    href: '/privacy-legal' as LinkProps['to'],
  },
  {
    id: 'privacy-pre',
    label: 'Privacy Preferences',
    href: '/privacy-preferences' as LinkProps['to'],
  },
  { id: 'press', label: 'Press', href: '/press' as LinkProps['to'] },
  {
    id: 'contact-us',
    label: 'Contact us',
    href: '/contact-us' as LinkProps['to'],
  },
];
