import { MenuLinks } from "./Navbar";
import { redirectToWhatsApp } from "../../utils/whatsapp";
const ResponsiveMenu = ({ showMenu, toggleMenu }) => {
  // console.log("showMenu", showMenu);
  return (
    <div
      className={`${
        showMenu ? "left-0" : "left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        {/* <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div>
        </div> */}
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {MenuLinks.map((data) => (
              <li key={data.name}>
                <a
                  href={data.link}
                  onClick={toggleMenu}
                  className="mb-5 inline-block"
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button
              onClick={redirectToWhatsApp}
              className="w-full primary-btn font-bold"
            >
              Get In Touch
            </button>
          </div>
        </nav>
      </div>
      <div className="footer">
        <h1>
          Developed with ❤ by{" "}
          <a href="https://Usohps.github.io/">CozyDev Group</a>
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
