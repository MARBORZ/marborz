import type { ReactNode } from 'react';
import { Footer } from '../components';

export default function About(): ReactNode {
  return (
    <div>
      <h1>About</h1>
      <p>This is the About page</p>
      <Footer title={"Contact"} href={"/contact"} />
    </div>
  );
}
