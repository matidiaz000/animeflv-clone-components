import CodeBlock from '../../components/CodeBlock';
import { one } from './codePart'

const Home = () => {
  return (
    <>
      <h1>AnimeFLV clone components</h1>
      <p>The official guide for how to include and bundle Bootstrap’s CSS and JavaScript in your project using Vite.</p>
      <h2 id="Installing">Installing</h2>
      <p><strong>Package manager</strong></p>
      <p>Using npm:</p>
      <CodeBlock language="plaintext" code="$ npm install @matidiaz000/animeflv-clone-components" />
      <p>Using yarn:</p>
      <CodeBlock language="plaintext" code="$ yarn install @matidiaz000/animeflv-clone-components" />
      <p>Using pnpm:</p>
      <CodeBlock language="plaintext" code="$ pnpm install @matidiaz000/animeflv-clone-components" />
      <p>Once the package is installed, you can import the library using import or require approach:</p>
      <CodeBlock language="js" code={one} />
    </>
  );
};

export default Home;