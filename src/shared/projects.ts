export type ProjectStatus = 'active' | 'shipped' | 'experiment' | 'planned';

export interface Project {
  id: string;
  number: string;
  title: string;
  stack: string;
  status: ProjectStatus;
  href?: string;
}

export const projects: Project[] = [
  {
    id: 'aether',
    number: '01',
    title: 'AETHER',
    stack: 'React · TypeScript · CSS',
    status: 'shipped',
  },
  {
    id: '2048',
    number: '02',
    title: '2048 Game',
    stack: 'JavaScript · HTML · CSS',
    status: 'shipped',
  },
  {
    id: 'yatzy',
    number: '03',
    title: 'Yatzy Dice Game',
    stack: 'JavaScript · HTML · CSS',
    status: 'shipped',
  },
  {
    id: 'stasis',
    number: '04',
    title: 'STASIS',
    stack: 'React · CSS Modules',
    status: 'shipped',
  },
  {
    id: 'hdufndsk',
    number: '05',
    title: 'HDUFNDSK',
    stack: 'React · Node · MongoDB',
    status: 'experiment',
  },
  {
    id: 'kropp-fitness',
    number: '06',
    title: 'Kropp Fitness',
    stack: 'HTML · CSS',
    status: 'shipped',
  },
  {
    id: 'skrekkeparken',
    number: '07',
    title: 'Skrekkeparken',
    stack: 'JavaScript · HTML · CSS · Canvas',
    status: 'shipped',
  },
  {
    id: 'date-time',
    number: '08',
    title: 'Date-Time Wallpaper',
    stack: 'JavaScript · HTML · CSS',
    status: 'experiment',
  },
  {
    id: 'redbeardvfx',
    number: '09',
    title: 'RedbeardVFX',
    stack: 'React · TypeScript · Express · Resend',
    status: 'active',
  },
];

export const plannedProjects: Project[] = [
  {
    id: 'todo-react',
    number: '10',
    title: 'Todo-React',
    stack: 'React · Node · Express · PostgreSQL',
    status: 'active',
  },
  {
    id: 'interactive-dashboard',
    number: '11',
    title: 'Interactive Dashboard',
    stack: 'React · TypeScript · D3.js · API',
    status: 'planned',
  },
  {
    id: 'nordic-market',
    number: '12',
    title: 'Nordic Market',
    stack: 'Next.js · TypeScript · Stripe · PostgreSQL',
    status: 'planned',
  },
];

export const allProjects = [...projects, ...plannedProjects];
