import { navIcons, navLinks } from "../constants";
import dayjs from "dayjs";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="Apple Logo" />
        <p className="font-bold">Sanskar's Portfolio</p>
        <ul>
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <p>{nav.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map((icon) => (
            <li key={icon.id}>
              <img
                src={icon.img}
                alt={`icon-${icon.id}`}
                className="icon-hover"
              />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
