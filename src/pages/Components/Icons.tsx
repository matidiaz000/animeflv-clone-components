import CodeBlock from '../../components/CodeBlock';
import { NavLink } from 'react-router-dom'
import { Icon } from '../../../lib'
//import { Icon } from '@matidiaz000/animeflv-clone-components'

const IconsPage = () => {
  return (
    <>
      <h1>Icons</h1>
      <p>Guidance and suggestions for using icons with AnimeFLV.</p>
      <section className="mb-4">
        <h2 className="h4" id="global-settings">Usage</h2>
        <p>Import icons using the library package and set <code>icon</code> prop with one of the key words founded in <NavLink to="iconlist" reloadDocument>Icon List</NavLink> page.</p>
        <CodeBlock language="js" code={`import { Icon } from '@matidiaz000/animeflv-clone-components'
...
<Icon icon="Calendar_Days" />`}>
          <div className="d-flex justify-content-center align-items-center">
            <Icon icon="Calendar_Days" />
          </div>
        </CodeBlock>
      </section>
      <section className="mb-4">
        <h2 className="h4" id="global-settings">Color</h2>
        <p>For set color of the icon just change the color text with <code>className</code> prop. See the <code>Colors</code> page in the documentation for get more color variables.</p>
        <CodeBlock language="html" code={`<Icon icon="Calendar_Days" className="text-primary" />
<Icon icon="Calendar_Days" className="text-secondary" />
<Icon icon="Calendar_Days" className="text-danger" />
<Icon icon="Calendar_Days" className="text-success" />'`}>
          <div className="d-flex justify-content-center align-items-center">
            <Icon icon="Calendar_Days" className="mx-2 text-primary" />
            <Icon icon="Calendar_Days" className="mx-2 text-secondary" />
            <Icon icon="Calendar_Days" className="mx-2 text-danger" />
            <Icon icon="Calendar_Days" className="mx-2 text-success" />
          </div>
        </CodeBlock>
      </section>
      <section className="mb-4">
        <h2 className="h4" id="global-settings">Size</h2>
        <p>With the <code>size</code> prop you can change the size of the icon, this component use <code>24px</code> by default and all the time use the <code>height</code> same as <code>width</code>.</p>
        <CodeBlock language="html" code={`<Icon icon="Calendar_Days" size="12" />
<Icon icon="Calendar_Days" />
<Icon icon="Calendar_Days" size="42" />
<Icon icon="Calendar_Days" size="64" />'`}>
          <div className="d-flex justify-content-center align-items-center">
            <Icon icon="Calendar_Days" size="12" className="mx-2" />
            <Icon icon="Calendar_Days" className="mx-2" />
            <Icon icon="Calendar_Days" size="42" className="mx-2" />
            <Icon icon="Calendar_Days" size="64" className="mx-2" />
          </div>
        </CodeBlock>
      </section>
    </>
  );
};

export default IconsPage;