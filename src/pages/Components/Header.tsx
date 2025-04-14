import { Header as HeaderComponent } from '../../../lib'
import AnimeFLVLogo from '../../assets/logo.png'

const Header = () => {
  return (
    <>
      <h1>Headers</h1>
      <p>We use a subset of all colors to create a smaller color palette for generating color schemes, also available as Sass variables and a Sass map in Bootstrap’s <code>scss/_variables.scss</code> file.</p>
      <HeaderComponent
        logo={AnimeFLVLogo}
        navLinks={[{id: 0, link: "#", content: "Noticias"}, {id: 1, link: "#", content: "Explorar"}]}
        iconLinks={[
          {id: 0, link: "#", content: "Search_Magnifying_Glass"},
          {id: 1, link: "#", content: "Bookmark"},
          {id: 2, link: "#", content: "User_Circle"}
        ]}
      />
    </>
  );
};

export default Header;