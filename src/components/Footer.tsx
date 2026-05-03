import { Link } from "react-router-dom";

export default function Footer({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <section className="footer">
      <span>© Amadi Masuev</span>
      <Link to={href}>{title}</Link>
    </section>
  );
}
