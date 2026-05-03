export type ProjectStatus = 'active' | 'shipped' | 'experiment' | 'planned';

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  stack: string;
  status: ProjectStatus;
  href?: string;
}

export const projects: Project[] = [
  {
    id: 'aether',
    number: '01',
    title: 'AETHER',
    subtitle: 'minimalist UI component library',
    stack: 'React · TypeScript · CSS',
    status: 'shipped',
  },
  {
    id: '2048',
    number: '02',
    title: '2048 Game',
    subtitle: 'classic sliding puzzle game',
    stack: 'JavaScript · HTML · CSS',
    status: 'shipped',
  },
  {
    id: 'yatzy',
    number: '03',
    title: 'Yatzy Dice Game',
    subtitle: 'multiplayer dice scoring game',
    stack: 'JavaScript · HTML · CSS',
    status: 'shipped',
  },
  {
    id: 'stasis',
    number: '04',
    title: 'STASIS',
    subtitle: 'static site with modular styling',
    stack: 'React · CSS Modules',
    status: 'shipped',
  },
  {
    id: 'hdufndsk',
    number: '05',
    title: 'HDUFNDSK',
    subtitle: 'social platform experiment',
    stack: 'React · Node · MongoDB',
    status: 'experiment',
  },
  {
    id: 'kropp-fitness',
    number: '06',
    title: 'Kropp Fitness',
    subtitle: 'gym landing page',
    stack: 'HTML · CSS',
    status: 'shipped',
  },
  {
    id: 'skrekkeparken',
    number: '07',
    title: 'Skrekkeparken',
    subtitle: 'interactive horror park experience',
    stack: 'JavaScript · HTML · CSS · Canvas',
    status: 'shipped',
  },
  {
    id: 'date-time',
    number: '08',
    title: 'Date-Time Wallpaper',
    subtitle: 'live clock wallpaper generator',
    stack: 'JavaScript · HTML · CSS',
    status: 'experiment',
  },
  {
    id: 'redbeardvfx',
    number: '09',
    title: 'RedbeardVFX',
    subtitle: 'portfolio for VFX supervisor',
    stack: 'React · TypeScript · Express · Resend',
    status: 'active',
  },
];

export const plannedProjects: Project[] = [
  {
    id: 'todo-react',
    number: '10',
    title: 'Todo-React',
    subtitle: 'fullstack task manager',
    stack: 'React · Node · Express · PostgreSQL',
    status: 'active',
  },
  {
    id: 'interactive-dashboard',
    number: '11',
    title: 'Interactive Dashboard',
    subtitle: 'data visualisation platform',
    stack: 'React · TypeScript · D3.js · API',
    status: 'planned',
  },
  {
    id: 'nordic-market',
    number: '12',
    title: 'Nordic Market',
    subtitle: 'e-commerce with Nordic design',
    stack: 'Next.js · TypeScript · Stripe · PostgreSQL',
    status: 'planned',
  },
];

export const allProjects = [...projects, ...plannedProjects];
