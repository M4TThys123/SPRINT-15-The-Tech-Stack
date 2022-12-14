import {
  PrismicRichText,
  useFirstPrismicDocument,
  PrismicImage,
} from "@prismicio/react";
import "./Homepage.css";

function Homepage() {
  const [document] = useFirstPrismicDocument();
  console.log(document);

  return (
    <section className="home__section">
      <figure>
        {document && <PrismicRichText field={document.data.hompage_heading} />}

        {document && (
          <PrismicImage field={document.data.homepage__header__img} />
        )}
      </figure>

      <article className="text__image--article">
        <div className="text__wrapper">
          {document && <PrismicRichText field={document.data.test} />}
        </div>
        <div className="image__wrapper">
          {document && <PrismicImage field={document.data.home__image} />}
        </div>
      </article>

      <section className="home__para--section">
        {document && <PrismicRichText field={document.data.last_text} />}
      </section>
    </section>
  );
}

export default Homepage;
