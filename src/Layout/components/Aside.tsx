import { useEffect, useState } from 'react';

interface ITitlesNav {
  id: number;
  link: string;
  text: string;
}

export const AsideComponent = () => {
  const [titlesNav, setTitlesNav] = useState<ITitlesNav[] | null>(null);
  
  useEffect(() => {
    if (!titlesNav) {
      const h2 = document.body.getElementsByTagName(`h2`)
      const titlesNavMap: ITitlesNav[] = [];
      let h2Id: ITitlesNav['link'] | null = null;
      for (let i = 0; i < h2.length; i++) {
        h2Id = h2[i].getAttribute("id");
        if (h2Id != null) {
          titlesNavMap.push({ id: i, link: h2Id, text: h2[i].innerText});
        }
      }
      setTitlesNav(titlesNavMap)
    }
  }, [titlesNav]);

  return (
    <div className="sticky-top">
      <aside className="pt-4">
        <strong className="h6 my-2 p-0">On this page</strong>
        <hr className="my-2" />
        <div>
          <nav>
            <ul className="list-unstyled">
              {titlesNav?.map((el) => (
                <li key={el.id}><a href={`#${el.link}`} className="small text-dark text-decoration-none">{el.text}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  )
}