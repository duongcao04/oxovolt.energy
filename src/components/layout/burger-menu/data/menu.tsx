import type { LinkProps } from '@tanstack/react-router';

export type MenuItem = {
  title: string;
  href?: LinkProps['to'];
  linkProps?: LinkProps;
  children?: MenuItem[];
};
export const BURGER_MENU: MenuItem[] = [
  {
    title: 'About',
    children: [
      { title: 'Why Oxovolt', href: '/why-oxovolt' as LinkProps['to'] },
      { title: 'Certification', href: '/certification' as LinkProps['to'] },
      { title: 'Roadmap', href: '/roadmap' as LinkProps['to'] },
      { title: 'Who we are', href: '/who-we-are' as LinkProps['to'] },
      { title: 'Release Notes', href: '/release-notes' as LinkProps['to'] },
    ],
  },
  {
    title: 'Core Vision',
    children: [
      {
        title: 'Energy Breakthrough',
        href: '/energy-breakthrough' as LinkProps['to'],
      },
      {
        title: 'Breakthrough Possible',
        href: '/breakthrough-possible' as LinkProps['to'],
      },
      {
        title: 'Industrial Deployment',
        href: '/industrial-deployment' as LinkProps['to'],
      },
      {
        title: 'Performance Commitment',
        href: '/performance-commitment' as LinkProps['to'],
      },
      { title: 'Defrosting', href: '/defrosting' as LinkProps['to'] },
      { title: 'Driven Energy', href: '/driven-energy' as LinkProps['to'] },
      {
        title: 'Sovereignty & Resilience',
        href: '/sovereignty-n-resilience' as LinkProps['to'],
      },
    ],
  },
  {
    title: 'System Engineering',
    children: [
      {
        title: 'Boltarium Scrience',
        href: 'https://boltarium.science' as LinkProps['to'],
        linkProps: {
          target: '_blank',
        },
      },
      {
        title: 'Energy Efficiency',
        href: '/energt-efficiency' as LinkProps['to'],
      },
      {
        title: 'Recovery & Optimization',
        href: '/recovery-n-optimization' as LinkProps['to'],
      },
      {
        title: 'System Stability',
        href: '/system-stability' as LinkProps['to'],
      },
      {
        title: 'Use Cases',
        href: '/use-cases' as LinkProps['to'],
      },
    ],
  },
  { title: 'Kemeleo Series', href: '/kameleo/personal' as LinkProps['to'] },
  { title: 'LoopXcell Series', href: '/loopxcell/personal' as LinkProps['to'] },
  { title: 'Contact', href: '/contact-us' as LinkProps['to'] },
  { title: 'Press', href: '/press' as LinkProps['to'] },
];
