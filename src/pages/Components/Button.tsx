import CodeBlock from '../../components/CodeBlock';
//import { Button } from '../../../lib'
import { Button } from '@matidiaz000/animeflv-clone-components'

const ButtonPage = () => {
  return (
    <>
      <h1>Buttons</h1>
      <p>Use AnimeFLV custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
      <section className="mb-4">
        <h2 className="h4" id="variants">Variants</h2>
        <p>The <code>Button</code> comes with three variants: text (default), contained, and outlined.</p>
        <CodeBlock language="html" code={`<Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="watercolor">Watercolor</Button>`}>
          <div className="d-flex justify-content-center align-items-center">
            <Button className="mx-2" variant="text" color="primary">Text</Button>
            <Button className="mx-2" variant="contained" color="primary">Contained</Button>
            <Button className="mx-2" variant="outlined" color="primary">Outlined</Button>
            <Button className="mx-2" variant="watercolor" color="primary">Watercolor</Button>
          </div>
        </CodeBlock>
      </section>
      <section className="mb-4">
        <h2 className="h4" id="button-tags">Button tags</h2>
        <p>The <code>Button</code> are designed to be used with the <code>{`<button>`}</code> element. However, you can also use these component with <code>{`<a>`}</code>, <code>{`<span>`}</code>, <code>{`<input>`}</code> elements or <code>{`<NavLink>`}</code> (component of <code>'react-router-dom'</code> library).</p>
        <CodeBlock language="html" code={`<Button>Text</Button>                        <!--<button>Text</button>-->
<Button span>Span</Button>                   <!--<span>Span</span>-->
<Button disabled>Input</Button>              <!--<input type="button />-->
<Button href="#">Router</Button>             <!--<NavLink to="#">Router</NavLink>-->
<Button href="#" reload>Router</Button>      <!--<NavLink to="#" reloadDocument>Router</NavLink>-->
<Button href="#" external>Hyperlink</Button> <!--<a href="#" target="_blank>Hyperlink</a>-->`}> 
          <div className="d-flex justify-content-center align-items-center">
            <Button className="mx-2" color="primary" variant="contained">Text</Button>
            <Button className="mx-2" color="primary" variant="contained" span>Span</Button>
            <Button className="mx-2" color="primary" variant="contained" disabled>Input</Button>
            <Button className="mx-2" color="primary" variant="contained" href="#">Router</Button>
            <Button className="mx-2" color="primary" variant="contained" href="#" external>Hyperlink</Button>
          </div>
        </CodeBlock>
      </section>
      <section className="mb-4">
        <h2 className="h4" id="color">Color</h2>
        <p>AnimeFLV includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control.</p>
        <CodeBlock language="html" code={`<Button color="secondary">Secondary</Button>
<Button color="success" variant="contained">Success</Button>
<Button color="danger" variant="outlined">Danger</Button>
<Button color="info" variant="watercolor">Info</Button>`}>
          <div className="d-flex justify-content-center align-items-center">
            <Button className="mx-2" color="secondary" variant="text">Secondary</Button>
            <Button className="mx-2" color="success" variant="contained">Success</Button>
            <Button className="mx-2" color="danger" variant="outlined">Danger</Button>
            <Button className="mx-2" color="info" variant="watercolor">Info</Button>
          </div>
        </CodeBlock>
      </section>
      <section className="mb-4">
        <h2 className="h4" id="color">Sizes</h2>
        <p>AnimeFLV includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control.</p>
        <CodeBlock language="html" code={`<Button size="sm">Small</Button>
<Button size="md">Middle</Button>
<Button size="lg">Large</Button>`}>
          <div className="d-flex justify-content-center align-items-center">
            <Button className="mx-2" color="primary" variant="contained" size="sm">Small</Button>
            <Button className="mx-2" color="primary" variant="contained" size="md">Middle</Button>
            <Button className="mx-2" color="primary" variant="contained" size="lg">Large</Button>
          </div>
        </CodeBlock>
      </section>
      <section className="mb-4">
        <h2 className="h4" id="color">With icon</h2>
        <p>Sometimes you might want to have icons for certain buttons to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon.</p>
        <CodeBlock language="html" code={`<Button variant="outlined" startIcon="Progress-Activity">
  Loading
</Button>
<Button variant="contained" endIcon="Add_plus">
  Add more
</Button>`}>
          <div className="d-flex justify-content-center align-items-center">
            <Button className="mx-2" color="primary" variant="outlined" startIcon="Progress-Activity">Loading</Button>
            <Button className="mx-2" color="primary" variant="contained" endIcon="Add_plus">Add more</Button>
          </div>
        </CodeBlock>
      </section>
      <section className="mb-4">
        <h2 className="h4" id="color">Only icon</h2>
        <p>Sometimes you might want to have icons for certain buttons to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon.</p>
        <CodeBlock language="html" code={`<Button startIcon="Calendar_Days" />
<Button startIcon="Devices" disabled />
<Button startIcon="House_01" color="primary" />`}>
          <div className="d-flex justify-content-center align-items-center">
            <Button className="mx-2" variant="text" startIcon="Calendar_Days" />
            <Button className="mx-2" variant="text" startIcon="Devices" disabled />
            <Button className="mx-2" variant="text" startIcon="House_01" color="primary" />
          </div>
        </CodeBlock>
      </section>
      <section className="mb-4">
        <h2 className="h4" id="borders">More</h2>
        <CodeBlock language="html" code={`<Button className="shadow">Shadow</Button>
<Button className="rounded-2">Border radius</Button>
<Button className="rounded-circle p-2" startIcon="Hamburger_LG" />`}>
          <div className="d-flex justify-content-center align-items-center">
            <Button variant="contained" color="primary" className="mx-2 shadow">Shadow</Button>
            <Button variant="contained" color="primary" className="mx-2 rounded-2">Border Pill</Button>
            <Button variant="contained" color="primary" className="mx-2 rounded-circle p-2" startIcon="Hamburger_LG" />
          </div>
        </CodeBlock>
      </section>
    </>
  );
};

export default ButtonPage;