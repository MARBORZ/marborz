export type ProjectStatus = "active" | "shipped" | "experiment" | "planned";

export const PROJECT_FILTERS = [
  "all",
  "active",
  "shipped",
  "experiment",
] as const;
export type ProjectFilter = (typeof PROJECT_FILTERS)[number];

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  fullDescription?: string;
  stack: string;
  status: ProjectStatus;
  demoUrl?: string;
  videoUrl?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: "aether",
    number: "01",
    title: "AETHER",
    subtitle: "minimalist UI component library",
    stack: "React · TypeScript · Tailwind · Framer Motion · Lenis",
    status: "shipped",
    demoUrl: "https://aether-site-nine.vercel.app/",
    videoUrl: new URL("../assets/project_videos/aether.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/aether.jpg", import.meta.url).href,
  },
  {
    id: "2048",
    number: "02",
    title: "2048 Game",
    subtitle: "classic sliding puzzle game",
    stack: "JavaScript · HTML · CSS",
    status: "shipped",
    demoUrl: "https://im25ama5104.imporsgrunn.no/2048/index.html",
    videoUrl: new URL("../assets/project_videos/2048.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/2048.jpg", import.meta.url).href,
  },
  {
    id: "yatzy",
    number: "03",
    title: "Yatzy Dice Game",
    subtitle: "multiplayer dice scoring game",
    stack: "JavaScript · HTML · CSS",
    status: "shipped",
    demoUrl: "https://im25ama5104.imporsgrunn.no/Yatzy/",
    videoUrl: new URL("../assets/project_videos/yatzy.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/yatzy.jpg", import.meta.url).href,
  },
  {
    id: "stasis",
    number: "04",
    title: "STASIS",
    subtitle: "static site with modular styling",
    stack: "React · TypeScript · Tailwind · Framer Motion · Lenis",
    status: "shipped",
    demoUrl: "https://statis-inky.vercel.app/",
    videoUrl: new URL("../assets/project_videos/stasis.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/stasis.jpg", import.meta.url).href,
  },
  {
    id: "hdufndsk",
    number: "05",
    title: "HDUFNDSK",
    subtitle: "social platform experiment",
    stack: "React · Node · SCSS · Express · Lenis",
    status: "experiment",
    demoUrl: "https://www.hdufndsk.site/",
    videoUrl: new URL("../assets/project_videos/hdufndsk.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/hdufndsk.jpg", import.meta.url).href,
  },
  {
    id: "kropp-fitness",
    number: "06",
    title: "Kropp Fitness",
    subtitle: "gym landing page",
    stack: "JavaScript · CSS · HTML",
    status: "shipped",
    demoUrl: "https://kropp-fitness-layout.vercel.app/",
    videoUrl: new URL("../assets/project_videos/kroppfitness.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/kroppfitness.jpg", import.meta.url).href,
  },
  {
    id: "skrekkeparken",
    number: "07",
    title: "Skrekkeparken",
    subtitle: "interactive horror park experience",
    stack: "JavaScript · HTML · CSS · Leaflet.js",
    status: "shipped",
    demoUrl: "https://im25ama5104.imporsgrunn.no/Skrekkeparken/",
    videoUrl: new URL("../assets/project_videos/skrekkeparken.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/skrekkeparken.jpg", import.meta.url).href,
  },
  {
    id: "date-time",
    number: "08",
    title: "Date-Time Wallpaper",
    subtitle: "live clock wallpaper generator",
    stack: "JavaScript · HTML · CSS",
    status: "experiment",
    demoUrl: "https://im25ama5104.imporsgrunn.no/Date-time/",
    videoUrl: new URL("../assets/project_videos/date_time.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/date_time.jpg", import.meta.url).href,
  },
  {
    id: "redbeardvfx",
    number: "09",
    title: "RedbeardVFX",
    subtitle: "portfolio for VFX supervisor",
    stack: "React · TypeScript · SCSS · Framer Motion · Lenis",
    status: "active",
    demoUrl: "https://redbeardvfx-site.vercel.app/",
    videoUrl: new URL("../assets/project_videos/redbeardvfx.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/redbeardvfx.jpg", import.meta.url).href,
  },
  {
    id: "todo-react",
    number: "10",
    title: "Todo-React",
    subtitle: "fullstack task manager",
    stack: "React · Node · Express",
    status: "shipped",
    demoUrl: "https://todo-react-ten-phi.vercel.app/",
    videoUrl: new URL("../assets/project_videos/todo.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/todo.jpg", import.meta.url).href,
  },
  {
    id: "skan-jus",
    number: "11",
    title: "Skan Jus",
    subtitle: "law firm landing page",
    stack: "React · TypeScript · Tailwind · Framer Motion · Lenis",
    status: "shipped",
    demoUrl: "https://skan-jus.vercel.app/",
    videoUrl: new URL("../assets/project_videos/skan_jus.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/skan_jus.jpg", import.meta.url).href,
  },
  {
    id: "norden-verk",
    number: "12",
    title: "Norden Verk",
    subtitle: "furniture workshop landing page",
    stack: "React · TypeScript · Tailwind · Framer Motion · Lenis",
    status: "shipped",
    demoUrl: "https://norden-verk.vercel.app/",
    videoUrl: new URL("../assets/project_videos/norden_verk.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/norden_verk.jpg", import.meta.url).href,
  },
  {
    id: "greenfield-farms",
    number: "13",
    title: "Greenfield Farms",
    subtitle: "farm multi-page site",
    stack: "React · TypeScript · SCSS · Framer Motion · React Router",
    status: "shipped",
    demoUrl: "https://greenfield-farms.vercel.app/",
    videoUrl: new URL("../assets/project_videos/greenfield_farms.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/greenfield_farms.jpg", import.meta.url).href,
  },
];

export const plannedProjects: Project[] = [
  {
    id: "nordic-market",
    number: "14",
    title: "Nordic Market",
    subtitle: "e-commerce with Nordic design",
    stack: "React · TypeScript",
    status: "planned",
  },
];

export const allProjects = [...projects, ...plannedProjects];
