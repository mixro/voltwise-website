import { Link } from '../Router.jsx';

export default function NotFound() {
  return (
    <section className="section notfound">
      <div className="wrap">
        <span className="kicker">Page not found</span>
        <h1 className="title">This page doesn&apos;t exist.</h1>
        <p className="lead">It may have moved. Try one of these instead.</p>
        <div className="notfound-links">
          <Link className="btn btn-red" to="/">
            Home
          </Link>
          <Link className="btn btn-outline" to="/services">
            Services
          </Link>
          <Link className="btn btn-outline" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
