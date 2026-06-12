import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    { name: "الرئيسية", link: "/" },
    { name: "المنتجات", link: "/products" },
    { name: "السلة", link: "/cart" },
    { name: "نبذة عنا", link: "/about" },
    { name: "الشروط والاحكام", link: "/terms" },
    { name: "اتصل بنا", link: "/contact" },
  ];
  return (
    <footer className="footer footer-center rounded-sm p-6 py-12 bg-primary gap-2">
      <nav className="grid grid-flow-col gap-4 text-base-content mb-4">
        {footerLinks.map((item, idx) => (
          <Link
            key={idx}
            to={item.link}
            className="link link-animated transition-all duration-300 font-normal text-3xl text-white"
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <nav className="mb-4">
        <div className="flex gap-4">
          <Link
            to="#"
            className="link  bg-[#55ACEE] size-14 rounded-full center"
            aria-label="Facebook Link"
          >
            <span className="icon-[tabler--brand-twitter] size-6 text-white"></span>
          </Link>
          <Link
            to="#"
            className="link  bg-[#1877F2] size-14 rounded-full center"
            aria-label="Facebook Link"
          >
            <span className="icon-[tabler--brand-facebook] text-white size-6"></span>
          </Link>

          <Link
            to="#"
            className="link  bg-[#FF0000] size-14 rounded-full center"
            aria-label="Facebook Link"
          >
            <span className="icon-[tabler--brand-youtube] text-white size-6"></span>
          </Link>

          <Link
            to="#"
            className="link  bg-[#25D366] size-14 rounded-full center"
            aria-label="Facebook Link"
          >
            <span className="icon-[tabler--brand-whatsapp] text-white size-6"></span>
          </Link>
        </div>
      </nav>
      <h6 className="font-semibold text-3xl text-white mb-10">ابق على تواصل</h6>
      <aside>
        <p className="text-white font-bold text-xl">
          جميع حقوق النشر &copy; محفوظه لشركة سمارت كود
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
