import Code from '../../components/Code';
import { one, two, three, four, five, six, seven } from './codePart'

const TypographyPage = () => {
  return (
    <>
      <h1>Typography</h1>
      <p>Documentation and examples for AnimeFLV typography, including global settings, headings, body text, lists, and more.</p>
      <section className="mb-4">
        <h2 id="global-settings">Global settings</h2>
        <p>Bootstrap sets basic global display, typography, and link styles. When more control is needed, check out the textual utility classes.</p>
        <ul>
          <li>Use a native font stack that selects the best <code>font-family</code> for each OS and device.</li>
          <li>For a more inclusive and accessible type scale, we use the browser’s default root <code>font-size</code> (typically 16px) so visitors can customize their browser defaults as needed.</li>
          <li>Use the <code>$font-family-base</code>, <code>$font-size-base</code>, and <code>$line-height-base</code> attributes as our typographic base applied to the <code>{`<body>`}</code>.</li>
          <li>Set the global link color via <code>$link-color</code>.</li>
          <li>Use <code>$body-bg</code> to set a background-color on the <code>{`<body>`}</code> (<code>#fff</code> by default).</li>
        </ul>
        <p>These styles can be found within <code>_reboot.scss</code>, and the global variables are defined in <code>_variables.scss</code>. Make sure to set <code>$font-size-base</code> in rem.</p>
      </section>
      <section className="mb-4">
        <h2 id="headings">Headings</h2>
        <p>All HTML headings, <code>{`<h1>`}</code> through <code>{`<h6>`}</code>, are available.</p>
        <Code codeString={one}>
          <h1 className="m-0">h1. AnimeFLV heading</h1>
          <h2 className="m-0">h2. AnimeFLV heading</h2>
          <h3 className="m-0">h3. AnimeFLV heading</h3>
          <h4 className="m-0">h4. AnimeFLV heading</h4>
          <h5 className="m-0">h5. AnimeFLV heading</h5>
          <h6 className="m-0">h6. AnimeFLV heading</h6>
        </Code>
        <p><code>.h1</code> through <code>.h6</code> classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.</p>
        <Code codeString={two}>
          <p className="m-0 h1">h1. AnimeFLV heading</p>
          <p className="m-0 h2">h2. AnimeFLV heading</p>
          <p className="m-0 h3">h3. AnimeFLV heading</p>
          <p className="m-0 h4">h4. AnimeFLV heading</p>
          <p className="m-0 h5">h5. AnimeFLV heading</p>
          <p className="m-0 h6">h6. AnimeFLV heading</p>
        </Code>
      </section>
      <section className="mb-4">
        <h2 id="text-alignment">Text alignment</h2>
        <p>Easily realign text to components with text alignment classes. For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.</p>
        <Code codeString={three}>
          <p className="text-start">Start aligned text on all viewport sizes.</p>
          <p className="text-center">Center aligned text on all viewport sizes.</p>
          <p className="text-end">End aligned text on all viewport sizes.</p>
          <p className="text-sm-end">End aligned text on viewports sized SM (small) or wider.</p>
          <p className="text-md-end">End aligned text on viewports sized MD (medium) or wider.</p>
          <p className="text-lg-end">End aligned text on viewports sized LG (large) or wider.</p>
          <p className="text-xl-end">End aligned text on viewports sized XL (extra large) or wider.</p>
          <p className="text-xxl-end">End aligned text on viewports sized XXL (extra extra large) or wider.</p>
        </Code>
      </section>
      <section className="mb-4">
        <h2 id="text-transform">Text transform</h2>
        <p>Transform text in components with our text capitalization classes: <code>text-lowercase</code>, <code>text-uppercase</code> or <code>text-capitalize</code>.</p>
        <Code codeString={four}>
          <p className="text-lowercase">Lowercased text.</p>
          <p className="text-uppercase">Uppercased text.</p>
          <p className="text-capitalize">CapiTaliZed text.</p>
        </Code>
        <p>Note how <code>.text-capitalize</code> only changes the first letter of each word, leaving the case of any other letters unaffected.</p>
      </section>
      <section className="mb-4">
        <h2 id="font-weight-and-italics">Font weight and italics</h2>
        <p>Quickly change the font-weight or <code>font-style</code> of text with these utilities. <code>font-style</code> utilities are abbreviated as <code>.fst-*</code> and <code>font-weight</code> utilities are abbreviated as <code>.fw-*</code>.</p>
        <Code codeString={five}>
          <p className="fw-bold">Bold text.</p>
          <p className="fw-bolder">Bolder weight text (relative to the parent element).</p>
          <p className="fw-semibold">Semibold weight text.</p>
          <p className="fw-medium">Medium weight text.</p>
          <p className="fw-normal">Normal weight text.</p>
          <p className="fw-light">Light weight text.</p>
          <p className="fw-lighter">Lighter weight text (relative to the parent element).</p>
          <p className="fst-italic">Italic text.</p>
          <p className="fst-normal">Text with normal font style</p>
        </Code>
      </section>
      <section className="mb-4">
        <h2 id="line-height">Line height</h2>
        <p>Change the line height with <code>.lh-*</code> utilities.</p>
        <Code codeString={six}>
          <p className="lh-1">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
          <p className="lh-sm">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
          <p className="lh-base">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
          <p className="lh-lg">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
        </Code>
      </section>
      <section>
        <h2 id="text-decoration">Text decoration</h2>
        <p>Decorate text in components with text decoration classes.</p>
        <Code codeString={seven}>
          <p className="text-decoration-underline">This text has a line underneath it.</p>
          <p className="text-decoration-line-through">This text has a line going through it.</p>
          <a href="#" className="text-decoration-none">This link has its text decoration removed</a>
        </Code>
      </section>
    </>
  );
};

export default TypographyPage;