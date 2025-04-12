import CodeBlock from '../components/CodeBlock';
import { one } from './Icons.codePart';
import IconsJSON from '../../lib/icomoon/selection.json'
//import { useState } from 'react';
import Icon from '../../lib/components/Icon'

const IconsPage = () => {
  //const [isCopy, setIsCopy] = useState(false);
   
  const copy = (content: string) => {
    navigator.clipboard.writeText(content);
    //setIsCopy(true);
    //setTimeout(() => setIsCopy(false), 2000)
  }

  return (
    <>
      <h1>Icons</h1>
      <p>Guidance and suggestions for using icons with Material UI.</p>
      <section className="mb-4">
        <h2 className="h4" id="global-settings">Setup</h2>
        <p>Browse the <a href="#" target="_top">thousands</a> of icons in v6 to find some icons you like and then add the icon name and style as CSS classes to an HTML <code>{`<i>`}</code> tag.</p>
        <CodeBlock language="html" code={`<i className="icon-User_Circle"></i>`}>
          <i className="icon-User_Circle"></i>
        </CodeBlock>
      </section>
      <section className="mb-4">
        <h4 id="headings">Color and size</h4>
        <p>Colorize text with color utilities. If you want to colorize links, you can use the .link-* helper classes which have :hover and :focus states.</p>
        <CodeBlock language="html" code={one}>
          <i className="icon-Calendar_Days h1 fw-normal"></i>
          <i className="icon-Calendar_Days h1 fw-normal text-secondary"></i>
          <i className="icon-Calendar_Days"></i>
          <i className="icon-Calendar_Days text-success"></i>
          <i className="icon-Calendar_Days small"></i>
          <i className="icon-Calendar_Days small text-danger"></i>
        </CodeBlock>
      </section>
      <section className="mb-4">
        <h2 className="h4" id="headings">Search</h2>
        <p>Colorize text with color utilities. If you want to colorize links, you can use the .link-* helper classes which have :hover and :focus states.</p>
        <div className='mb-3'>
          <div className="form-floating">
            <input type="search" className="form-control" id="exampleDataList" placeholder="Type to search..." />
            <label htmlFor="exampleDataList">Search</label>
          </div>
          <datalist id="datalistOptions">
            <option value="San Francisco" />
            <option value="New York" />
            <option value="Seattle" />
            <option value="Los Angeles" />
            <option value="Chicago" />
          </datalist>
        </div>
        <div className="row my-n3">
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            IconsJSON.icons.map((el: any) => (
              <div className="col-3 my-3" key={el.iconIdx}>
                <div className="cursor-pointer" onClick={() => copy(`<i className="icon-${el.properties.name}"></i>`)}>
                  <div className="d-flex flex-column align-items-center border text-center bg-light rounded-4 p-3">
                    {/*<i className={`h2 fw-normal icon-${el.properties.name}`}></i>*/}
                    <Icon key={el.iconIdx} icon={el.properties.name} size={32} className="text-dark small m-3" />
                    <span className="small text-break">{el.properties.name}</span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </>
  );
};

export default IconsPage;