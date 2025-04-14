import { Card } from '../../../lib'
import CodeBlock from '../../components/CodeBlock';
import { one, two, three, four } from './Card.codePart';

const CardPage = () => {
  return (
    <>
      <h1>Cards</h1>
      <p>Browse the <a href="#" target="_top">thousands</a> of icons in v6 to find some icons you like and then add the icon name and style as CSS classes to an HTML <code>{`<i>`}</code> tag.</p>
      <section className="mb-4">
        <h2 className="h4" id="large">Large</h2>
        <p>Bootstrap sets basic global display, typography, and link styles. When more control is needed, check out the textual utility classes.</p>
        <CodeBlock language="js" code={one}>
          <div className="col-5">
            <Card
              img="https://www3.animeflv.net/uploads/animes/covers/3220.jpg"
              title=""
              subtitle=""
              link=""
            />
          </div>
        </CodeBlock>
      </section>
      <section className="mb-4">
        <h2 className="h4" id="middle">Middle</h2>
        <p>Bootstrap sets basic global display, typography, and link styles. When more control is needed, check out the textual utility classes.</p>
        <CodeBlock language="js" code={two}>
          <div className="col-4">
            <Card
              img="https://www3.animeflv.net/uploads/animes/covers/3220.jpg"
              category="anime"
              title="Boku no Hero Academia"
              subtitle="3 temporadas | 49 episodios"
              link="#"
            />
          </div>
        </CodeBlock>
      </section>
      <section className="mb-4">
        <h2 className="h4" id="small">Small</h2>
        <p>Bootstrap sets basic global display, typography, and link styles. When more control is needed, check out the textual utility classes.</p>
        <CodeBlock language="js" code={three}>
          <div className="col-4">
            <Card
              img="https://www3.animeflv.net/uploads/animes/thumbs/4172.jpg"
              title="Reencarnación sin empleo"
              link="#"
              subtitle="Episodio 1"
              time="24m"
            >
              <span className="small">548 L</span>
            </Card>
          </div>
        </CodeBlock>
      </section>
      <section className="mb-4">
        <h2 className="h4" id="next-prev">Next or Prev</h2>
        <p>Bootstrap sets basic global display, typography, and link styles. When more control is needed, check out the textual utility classes.</p>
        <CodeBlock language="js" code={four}>
          <div className="col-4">
            <Card
              img=""
              title="Proximo episodio"
              link=""
              subtitle=""
              date={new Date()}
            ></Card>
          </div>
        </CodeBlock>
      </section>
    </>
  );
};

export default CardPage;