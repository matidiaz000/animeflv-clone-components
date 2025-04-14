import CodeBlock from './../components/CodeBlock';

const ColorPage = () => {
  return (
    <>
      <h1>Color</h1>
      <p>AnimeFLV is supported by an extensive color system that themes our styles and components. This enables more comprehensive customization and extension for any project.</p>
      <section className="mb-4">
        <h2 id="overview">Overview</h2>
        <p>AnimeFLV color palette has continued to expand and become more nuanced in v5.3.0. We’ve added new <code>variables</code> for <code>secondary</code> and tertiary text and background colors, plus <code>{`{color}-bg-subtle`}</code>, <code>{`{color}-border-subtle`}</code>, and <code>{`{color}-text-emphasis`}</code> for our theme colors. These new colors are available through Sass and CSS variables (but not our color maps or utility classes) with the express goal of making it easier to customize across multiple colors modes like light and dark. These new variables are globally set on :root and are adapted for our new dark color mode while our original theme colors remain unchanged.</p>
        <p>Colors ending in <code>-rgb</code> provide the <code>red, green, blue</code> values for use in <code>rgb()</code> and <code>rgba()</code> color modes. For example, <code>rgba(var(--bs-secondary-bg-rgb), .5)</code>.</p>
        <CodeBlock language="html" code={`<div className="bg-primary">Primary</div>
<div className="bg-secondary">Secondary</div>
<div className="bg-success">Success</div>
<div className="bg-danger">Danger</div>
<div className="bg-warning">Warning</div>
<div className="bg-info">Info</div>
<div className="bg-light">Light</div>
<div className="bg-dark">Dark</div>`} />
      </section>
      <section className="mb-4">
        <h2 id="theme">Theme</h2>
        <p>We use a subset of all colors to create a smaller color palette for generating color schemes, also available as Sass variables and a Sass map in Bootstrap’s <code>scss/_variables.scss</code> file.</p>
        <CodeBlock language="html" code={`<div className="bg-primary">Primary</div>
<div className="bg-secondary">Secondary</div>
<div className="bg-success">Success</div>
<div className="bg-danger">Danger</div>
<div className="bg-warning">Warning</div>
<div className="bg-info">Info</div>
<div className="bg-light">Light</div>
<div className="bg-dark">Dark</div>`}>
          <div className="row">
            <div className="col-md-4">
              <div className="p-3 mb-3 text-white bg-primary rounded-3">Primary</div>
            </div>
            <div className="col-md-4">
              <div className="p-3 mb-3 text-white bg-secondary rounded-3">Secondary</div>
            </div>
            <div className="col-md-4">
              <div className="p-3 mb-3 text-white bg-success rounded-3">Success</div>
            </div>
            <div className="col-md-4">
              <div className="p-3 mb-3 text-white bg-danger rounded-3">Danger</div>
            </div>
            <div className="col-md-4">
              <div className="p-3 mb-3 bg-warning rounded-3">Warning</div>
            </div>
            <div className="col-md-4">
              <div className="p-3 mb-3 text-white bg-info rounded-3">Info</div>
            </div>
            <div className="col-md-4">
              <div className="p-3 mb-3 bg-light rounded-3">Light</div>
            </div>
            <div className="col-md-4">
              <div className="p-3 mb-3 text-white bg-dark rounded-3">Dark</div>
            </div>
          </div>
        </CodeBlock>
      </section>
      <section className="mb-4">
        <h2 id="palette">Palette</h2>
        <p>All AnimeFLV colors are available as Sass variables and a Sass map in <code>scss/_variables.scss</code> file. To avoid increased file sizes, we don’t create text or background color classes for each of these variables. Instead, we choose a subset of these colors for a <a href="#theme-palette" target="_top">theme palette</a>.</p>
        <p>Be sure to monitor contrast ratios as you customize colors. As shown below, we’ve added three contrast ratios to each of the main colors—one for the swatch’s current colors, one for against white, and one for against black.</p>
        <div className="row font-monospace">
          <div className="col-4 mb-3">
            <div className="p-3 bg-primary mb-2 d-flex flex-column text-white">
              <p className="mb-1">$primary</p>
              <p className="m-0">#0DCAF0</p>
            </div>
            <div className="p-3 bg-primary-100">$primary-100</div>
            <div className="p-3 bg-primary-200">$primary-200</div>
            <div className="p-3 bg-primary-300">$primary-300</div>
            <div className="p-3 bg-primary-400 text-white">$primary-400</div>
            <div className="p-3 bg-primary text-white">$primary</div>
            <div className="p-3 bg-primary-600 text-white">$primary-600</div>
          </div>
          <div className="col-4 mb-3">
            <div className="p-3 bg-secondary mb-2 d-flex flex-column text-white">
              <p className="mb-1">$secondary</p>
              <p className="m-0">#FD7E14</p>
            </div>
            <div className="p-3 bg-secondary-100">$secondary-100</div>
            <div className="p-3 bg-secondary-200">$secondary-200</div>
            <div className="p-3 bg-secondary-300">$secondary-300</div>
            <div className="p-3 bg-secondary-400 text-white">$secondary-400</div>
            <div className="p-3 bg-secondary text-white">$secondary</div>
            <div className="p-3 bg-secondary-600 text-white">$secondary-600</div>
          </div>
          <div className="col-4 mb-3">
            <div className="p-3 bg-dark mb-2 d-flex flex-column text-white">
              <p className="mb-1">$dark</p>
              <p className="m-0">#212529</p>
            </div>
            <div className="p-3 bg-light">$light</div>
            <div className="p-3 bg-gray-200">$gray-200</div>
            <div className="p-3 bg-gray-300">$gray-300</div>
            <div className="p-3 bg-gray-400">$gray-400</div>
            <div className="p-3 bg-gray-500">$gray-500</div>
            <div className="p-3 bg-gray-600 text-white">$gray-600</div>
            <div className="p-3 bg-gray-700 text-white">$gray-700</div>
            <div className="p-3 bg-gray-800 text-white">$gray-800</div>
            <div className="p-3 bg-dark text-white">$dark</div>
          </div>
          <div className="col-4 mb-3">
            <div className="p-3 bg-success d-flex flex-column text-white">
              <p className="mb-1">$success</p>
              <p className="m-0">#28A745</p>
            </div>
          </div>
          <div className="col-4 mb-3">
            <div className="p-3 bg-info d-flex flex-column text-white">
              <p className="mb-1">$info</p>
              <p className="m-0">#0DCAF0</p>
            </div>
          </div>
          <div className="col-4 mb-3">
            <div className="p-3 bg-warning d-flex flex-column">
              <p className="mb-1">$warning</p>
              <p className="m-0">#ffc107</p>
            </div>
          </div>
          <div className="col-4 mb-3">
            <div className="p-3 bg-danger d-flex flex-column text-white">
              <p className="mb-1">$danger</p>
              <p className="m-0">#dc3545</p>
            </div>
          </div>
          <div className="col-4 mb-3">
            <div className="p-3 bg-white d-flex flex-column">
              <p className="mb-1">$white</p>
              <p className="m-0">#ffffff</p>
            </div>
          </div>
          <div className="col-4 mb-3">
            <div className="p-3 bg-black d-flex flex-column text-white">
              <p className="mb-1">$black</p>
              <p className="m-0">#000000</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ColorPage;