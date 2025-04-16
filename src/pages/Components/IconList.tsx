import { useState } from 'react';
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
      <h1>Icon List</h1>
      <p>{filteredIcons.length}+ ready-to-use AnimeFLV Icons from the clone website.</p>
      <Alert data={toasts} />
      <section className="mb-4">
        <h2 className="h4" id="headings">Search</h2>
        <p>Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for "hamburger" or "logout."</p>
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