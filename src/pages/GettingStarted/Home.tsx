import CodeBlock from '../../components/CodeBlock';

const Home = () => {
  return (
    <>
      <h1>AnimeFLV clone components</h1>
      <p>Library for connect components and styles in one place, plus contain the documentation of itself.</p>
      <div className="watercolor-warning mb-4 p-4 rounded border border-warning">
        <span className="fw-bold d-flex align-items-center mb-2">
          <span className="material-icons-round me-2">warning_amber</span>
          Warning
        </span>
        This project is a clone of AnimeFLV official site and is develop purpose of demostration in my portfolio, is not a official project.
      </div>
      <section className="mb-4">
        <h2 className="h4" id="microfrontend">Microfrontend</h2>
        <p>This project is develop with microfrontend methodology, for this reason the project itself has different interconnected modules.</p>
        <ul>
          <li><strong>Library</strong> - <a href="https://github.com/matidiaz000/animeflv-clone-components/" target="_blank">Github</a> - <a href="https://animeflv-clone-components.vercel.app/" target="_blank">Demo</a></li>
          <li><strong>Configuration</strong> - <a href="https://github.com/matidiaz000/animeflv-clone-host/" target="_blank">Github</a> - <a href="https://animeflv-clone-host.vercel.app/" target="_blank">Demo</a></li>
          <li><strong>Home</strong> - <a href="https://github.com/matidiaz000/animeflv-clone-home/" target="_blank">Github</a> - <a href="https://animeflv-clone-home.vercel.app/" target="_blank">Demo</a></li>
          <li><strong>Anime</strong> - <a href="https://github.com/matidiaz000/animeflv-clone-list/" target="_blank">Github</a> - <a href="https://animeflv-clone-list.vercel.app/" target="_blank">Demo</a></li>
          <li><strong>Chapter</strong> - <a href="https://github.com/matidiaz000/animeflv-clone-chapter/" target="_blank">Github</a> - <a href="https://animeflv-clone-chapter.vercel.app/" target="_blank">Demo</a></li>
        </ul>
      </section>
      <section className="mb-4">
        <h2 className="h4" id="Installing">Installing</h2>
        <p>Run one of the following commands to add AnimeFLV UI to your project:</p>
        <p>Using npm:</p>
        <CodeBlock language="command" code="npm install @matidiaz000/animeflv-clone-components" />
        <p>Using yarn:</p>
        <CodeBlock language="command" code="yarn install @matidiaz000/animeflv-clone-components" />
        <p>Using pnpm:</p>
        <CodeBlock language="command" code="pnpm install @matidiaz000/animeflv-clone-components" />
      </section>
      <section className="mb-4">
        <h2 className="h4" id="usage">Usage</h2>
        <p>Once the package is installed, you can import the library using import or require approach:</p>
        <CodeBlock language="js" code={`import "@matidiaz000/animeflv-clone-components/styles.css"
import { Button } from "@matidiaz000/animeflv-clone-components`} />
      </section>
      <section className="mb-4">
        <h2 className="h4" id="documentation">Description</h2>
        <p>This project is to showcase my knowledge in <code>Microfrontend</code>, <code>Clean Architecture</code>, <code>SSG</code> (Static Site Generator), <code>ci/cd</code>, Develop <code>npm library</code> & <code>React + Vite + SASS</code>.</p>
      </section>
    </>
  );
};

export default Home;