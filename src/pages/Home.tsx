import type { ReactNode } from 'react';
import { Footer } from '../components';

export default function Home(): ReactNode {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the Home page</p>
      <Footer title={"Projects"} href={"/projects"} />
    </div>
  );
}
