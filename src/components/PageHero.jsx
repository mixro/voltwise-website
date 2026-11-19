export default function PageHero({ kicker, title, intro, image, position = 'center' }) {
  return (
    <section className="page-hero">
      <img className="page-hero-img" src={image} alt="" style={{ objectPosition: position }} />
      <div className="page-hero-shade" />
      <div className="wrap page-hero-inner">
        <span className="kicker kicker-light">{kicker}</span>
        <h1 className="page-hero-title">{title}</h1>
        {intro && <p className="hero-lead">{intro}</p>}
      </div>
    </section>
  );
}
