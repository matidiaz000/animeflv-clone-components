import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';
import { one } from './Icons.codePart';
import IconsJSON from '../../../lib/icomoon/selection.json'
import { Icon } from '../../../lib'
//import { Icon } from '@matidiaz000/animeflv-clone-components'
import { Alert, IAlert } from '../../components/Alert';

const IconsPage = () => {
  const [searchText, setSearchText] = useState("");
  const [toasts, setToasts] = useState<IAlert[]>([]);

  const filteredIcons = IconsJSON.icons.filter(
    ({ properties }) =>
      properties.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const copy = (content: string) => {
    navigator.clipboard.writeText(content);
    showToast("The code was copied to the clipboard", "success");
  }

  const showToast = (message: IAlert["message"], type: IAlert["type"]) => {
    const toast: IAlert = {
      id: Date.now().toString(),
      message,
      type,
    };

    setToasts((prevToasts) => [...prevToasts, toast]);

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((t) => t.id !== toast.id));
    }, 2000);
  };

  return (
    <>
      <h1>Icons</h1>
      <p>Guidance and suggestions for using icons with Material UI.</p>
      <Alert data={toasts} />
      <section className="mb-4">
        <h2 className="h4" id="global-settings">Setup</h2>
        <p>Browse the <a href="#" target="_top">thousands</a> of icons in v6 to find some icons you like and then add the icon name and style as CSS classes to an HTML <code>{`<i>`}</code> tag.</p>
        <CodeBlock language="html" code={`<i className="icon-User_Circle"></i>`}>
          <Icon icon="User_Circle" />
        </CodeBlock>
      </section>
      <section className="mb-4">
        <h2 id="headings">Color and size</h2>
        <p>Colorize text with color utilities. If you want to colorize links, you can use the .link-* helper classes which have :hover and :focus states.</p>
        <CodeBlock language="html" code={one}>
          <Icon icon="Calendar_Days" className="h1 fw-normal" />
          <Icon icon="Calendar_Days" className="h1 fw-normal text-secondary" />
          <Icon icon="Calendar_Days" />
          <Icon icon="Calendar_Days" className="text-success" />
          <Icon icon="Calendar_Days" className="small" />
          <Icon icon="Calendar_Days" className="small text-danger" />
        </CodeBlock>
      </section>
      <section className="mb-4">
        <h2 className="h4" id="headings">Search</h2>
        <p>Colorize text with color utilities. If you want to colorize links, you can use the .link-* helper classes which have :hover and :focus states.</p>
        <div className='mb-3'>
          <div className="form-floating">
            <input
              type="search"
              className="form-control"
              id="exampleDataList"
              placeholder="Type to search..."
              value={searchText}
              onChange={({ target }) => setSearchText(target.value)}
            />
            <label htmlFor="exampleDataList">Search</label>
          </div>
        </div>
        <div className="row my-n3">
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            filteredIcons.map((el: any) => (
              <div className="col-3 my-3" key={el.iconIdx}>
                <div className="cursor-pointer" onClick={() => copy(el.properties.name)}>
                  <div className="d-flex flex-column align-items-center border text-center bg-light rounded-4 p-3">
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