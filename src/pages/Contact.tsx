import type { ReactNode } from 'react';
import { Footer } from '../components';

export default function Contact(): ReactNode {
  return (
    <div>
      <h1>Contact</h1>
      <p>This is the Contact page</p>
      <Footer title={"Home"} href={"/"} />
    </div>
  );
}
