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
    stack: "React · TypeScript · Tailwind · Framer Motion · Lenis",
    status: "shipped",
    demoUrl: "https://aether-site-nine.vercel.app/",
    videoUrl: new URL("../assets/project_videos/aether.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/aether.webp", import.meta.url).href,
  },
  {
    id: "2048",
    number: "02",
    title: "2048 Game",
    stack: "JavaScript · HTML · CSS",
    status: "shipped",
    demoUrl: "https://im25ama5104.imporsgrunn.no/2048/index.html",
    videoUrl: new URL("../assets/project_videos/2048.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/2048.webp", import.meta.url).href,
  },
  {
    id: "yatzy",
    number: "03",
    title: "Yatzy Dice Game",
    stack: "JavaScript · HTML · CSS",
    status: "shipped",
    demoUrl: "https://im25ama5104.imporsgrunn.no/Yatzy/",
    videoUrl: new URL("../assets/project_videos/yatzy.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/yatzy.webp", import.meta.url).href,
  },
  {
    id: "stasis",
    number: "04",
    title: "STASIS",
    stack: "React · TypeScript · Tailwind · Framer Motion · Lenis",
    status: "shipped",
    demoUrl: "https://statis-inky.vercel.app/",
    videoUrl: new URL("../assets/project_videos/stasis.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/stasis.webp", import.meta.url).href,
  },
  {
    id: "hdufndsk",
    number: "05",
    title: "HDUFNDSK",
    stack: "React · Node · SCSS · Express · Lenis",
    status: "experiment",
    demoUrl: "https://www.hdufndsk.site/",
    videoUrl: new URL("../assets/project_videos/hdufndsk.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/hdufndsk.webp", import.meta.url).href,
  },
  {
    id: "kropp-fitness",
    number: "06",
    title: "Kropp Fitness",
    stack: "JavaScript · CSS · HTML",
    status: "shipped",
    demoUrl: "https://kropp-fitness-layout.vercel.app/",
    videoUrl: new URL("../assets/project_videos/kroppfitness.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/kroppfitness.webp", import.meta.url).href,
  },
  {
    id: "skrekkeparken",
    number: "07",
    title: "Skrekkeparken",
    stack: "JavaScript · HTML · CSS · Leaflet.js",
    status: "shipped",
    demoUrl: "https://im25ama5104.imporsgrunn.no/Skrekkeparken/",
    videoUrl: new URL("../assets/project_videos/skrekkeparken.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/skrekkeparken.webp", import.meta.url).href,
  },
  {
    id: "date-time",
    number: "08",
    title: "Date-Time Wallpaper",
    stack: "JavaScript · HTML · CSS",
    status: "experiment",
    demoUrl: "https://im25ama5104.imporsgrunn.no/Date-time/",
    videoUrl: new URL("../assets/project_videos/date_time.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/date_time.webp", import.meta.url).href,
  },
  {
    id: "redbeardvfx",
    number: "09",
    title: "RedbeardVFX",
    stack: "React · TypeScript · SCSS · Framer Motion · Lenis",
    status: "active",
    demoUrl: "https://redbeardvfx-site.vercel.app/",
    videoUrl: new URL("../assets/project_videos/redbeardvfx.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/redbeardvfx.webp", import.meta.url).href,
  },
  {
    id: "todo-react",
    number: "10",
    title: "Todo-React",
    stack: "React · Node · Express",
    status: "shipped",
    demoUrl: "https://todo-react-ten-phi.vercel.app/",
    videoUrl: new URL("../assets/project_videos/todo.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/todo.webp", import.meta.url).href,
  },
  {
    id: "skan-jus",
    number: "11",
    title: "Skan Jus",
    stack: "React · TypeScript · Tailwind · Framer Motion · Lenis",
    status: "shipped",
    demoUrl: "https://skan-jus.vercel.app/",
    videoUrl: new URL("../assets/project_videos/skan_jus.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/skan_jus.webp", import.meta.url).href,
  },
  {
    id: "norden-verk",
    number: "12",
    title: "Norden Verk",
    stack: "React · TypeScript · Tailwind · Framer Motion · Lenis",
    status: "shipped",
    demoUrl: "https://norden-verk.vercel.app/",
    videoUrl: new URL("../assets/project_videos/norden_verk.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/norden_verk.webp", import.meta.url).href,
  },
  {
    id: "greenfield-farms",
    number: "13",
    title: "Greenfield Farms",
    stack: "React · TypeScript · SCSS · Framer Motion · React Router",
    status: "shipped",
    demoUrl: "https://greenfield-farms.vercel.app/",
    videoUrl: new URL("../assets/project_videos/greenfield_farms.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/greenfield_farms.webp", import.meta.url).href,
  },
];

export const plannedProjects: Project[] = [
  {
    id: "nordic-market",
    number: "14",
    title: "Nordic Market",
    stack: "React · TypeScript",
    status: "planned",
  },
];

export const allProjects = [...projects, ...plannedProjects];
