import logo from "../assets/imgs/Navbar/logo.svg";
import logoDark from "../assets/imgs/Navbar/logo-dark.svg";
import SearchIcon from "@iconify-react/material-symbols/search";
import AccountOutlineIcon from "@iconify-react/mdi/account-outline";
import HeartOutlineIcon from "@iconify-react/mdi/heart-outline";
import CartOutlineIcon from "@iconify-react/mdi/cart-outline";
import { useTheme } from "../providers/ThemeProvider";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme, LIGHT_THEME } = useTheme();

  const navLinks = [
    {
      title: "الرئيسية",
      link: "/",
    },

    {
      title: "المنتجات",
      link: "/products",
    },
    {
      title: "الخدمات",
      link: "/services",
    },
    {
      title: "نبذة عنا",
      link: "/about",
    },
    {
      title: "الشروط والاحكام",
      link: "/terms",
    },
    {
      title: "المدونة",
      link: "/blogs",
    },
    {
      title: "اتصل بنا",
      link: "/contact",
    },
  ];
  return (
    <nav className="fixed top-0  z-[99] navbar rounded-box flex w-full items-center justify-between gap-2 shadow-base-300/20 shadow-sm">
      <div className="navbar-start max-md:w-1/4">
        <Link
          className="link text-base-content link-neutral text-xl font-bold no-underline"
          to={"/"}
        >
          <img src={theme == LIGHT_THEME ? logo : logoDark} alt="nav logo" />
        </Link>
      </div>
      <div className="navbar-center max-lg:hidden">
        <ul className="menu menu-horizontal p-0 font-medium">
          {navLinks.map((item, idx) => (
            <li key={idx}>
              <NavLink
                className={({ isActive }) =>
                  ` ${isActive ? "text-primary font-bold" : ""} font-normal text-base text-[#00000080] hover:text-primary dark:text-base-content`
                }
                to={item.link}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end items-center gap-2">
        <div className="dropdown relative inline-flex lg:hidden">
          <button
            id="mobile-dropdown"
            type="button"
            className="dropdown-toggle btn btn-text btn-secondary btn-square"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            <span className="icon-[tabler--menu-2] dropdown-open:hidden size-5"></span>
            <span className="icon-[tabler--x] dropdown-open:block hidden size-5"></span>
          </button>
          <ul
            className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="mobile-dropdown"
          >
            {navLinks.map((item, idx) => (
              <li key={idx}>
                <NavLink className="dropdown-item" to={item.link}>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <button className="btn btn-square btn-soft">
          <SearchIcon height="24" />
        </button>

        <button className="btn btn-square btn-soft">
          <AccountOutlineIcon height="24" />
        </button>
        <button className="btn btn-square btn-soft">
          <HeartOutlineIcon height="24" />
        </button>
        <button className="btn btn-square btn-soft relative">
          <CartOutlineIcon height="24" />
          <span className="badge badge-primary badge-xs start-[-4px] absolute top-[-4px]  !p-0.5">
            +2
          </span>
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === LIGHT_THEME ? "Dark mode" : "Light mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
