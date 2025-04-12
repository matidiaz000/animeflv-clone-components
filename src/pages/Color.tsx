import CodeBlock from './../components/CodeBlock';
import { Button } from './../../lib'
// import { Button } from '@matidiaz000/animeflv-clone-components'

const ColorPage = () => {
  return (
    <>
      <h1>Colors, buttons and badges</h1>
      <p>We use a subset of all colors to create a smaller color palette for generating color schemes, also available as Sass variables and a Sass map in Bootstrap’s <code>scss/_variables.scss</code> file.</p>
      <div className="row">
        <div className="col-md-4">
          <div className="p-3 mb-3 text-bg-primary rounded-3">Primary</div>
        </div>
        <div className="col-md-4">
          <div className="p-3 mb-3 text-bg-secondary rounded-3">Secondary</div>
        </div>
        <div className="col-md-4">
          <div className="p-3 mb-3 text-bg-success rounded-3">Success</div>
        </div>
        <div className="col-md-4">
          <div className="p-3 mb-3 text-bg-danger rounded-3">Danger</div>
        </div>
        <div className="col-md-4">
          <div className="p-3 mb-3 text-bg-warning rounded-3">Warning</div>
        </div>
        <div className="col-md-4">
          <div className="p-3 mb-3 text-bg-info rounded-3">Info</div>
        </div>
        <div className="col-md-4">
          <div className="p-3 mb-3 text-bg-light rounded-3">Light</div>
        </div>
        <div className="col-md-4">
          <div className="p-3 mb-3 text-bg-dark rounded-3">Dark</div>
        </div>
      </div>
      <h2 className="h4">Buttons</h2>
      <p>Bootstrap includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control.</p>
      <CodeBlock language="html" code={`<button type="button" className="btn btn-primary">Primary</button>
<button type="button" className="btn btn-secondary">Secondary</button>
<button type="button" className="btn btn-success">Success</button>
<button type="button" className="btn btn-danger">Danger</button>
<button type="button" className="btn btn-warning">Warning</button>
<button type="button" className="btn btn-info">Info</button>
<button type="button" className="btn btn-light">Light</button>
<button type="button" className="btn btn-dark">Dark</button>
<button type="button" className="btn btn-link">Link</button>`}>
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-secondary">Secondary</button>
        <button type="button" className="btn btn-success">Success</button>
        <button type="button" className="btn btn-danger">Danger</button>
        <button type="button" className="btn btn-warning">Warning</button>
        <button type="button" className="btn btn-info">Info</button>
        <button type="button" className="btn btn-light">Light</button>
        <button type="button" className="btn btn-dark">Dark</button>
        <button type="button" className="btn btn-link">Link</button>
      </CodeBlock>
      <h2 className="h4" id="what-is-vite">What is Vite?</h2>
      <p><a href="#">Vite</a> is a modern frontend build tool designed for speed and simplicity. It provides an efficient and streamlined development experience, especially for modern JavaScript frameworks.</p>
      <Button />
      <h2 className="h4" id="variants">Buttons</h2>
      <p>Bootstrap includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control.</p>
      <div className="bd-example m-0 border-0">
        <button type="button" className="btn text-white">Nav button</button>
        <button type="button" className="btn bg-white text-black text-opacity-50 text-uppercase">Ver todo</button>
        <button type="button" className="btn bg-light bg-opacity-25">Footer</button>
        <button type="button" className="btn btn-primary">Ordernar</button>
        <span className="badge text-dark bg-light bg-opacity-25 text-opacity-75">Default</span>
        <span className="badge text-bg-primary">Pelicula</span>
        <span className="badge text-bg-primary">Serie</span>
        <span className="badge text-bg-primary">OVA</span>
        <span className="badge text-bg-primary">24m</span>
      </div>
    </>
  );
};

export default ColorPage;