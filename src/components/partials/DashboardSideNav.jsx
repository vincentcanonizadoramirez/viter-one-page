import { IndentDecrease } from "lucide-react";

const DashboardSideNav = ({ isSideNavOpen, setIsSideNavOpen }) => {
  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav
        className={`z-[1] w-[224px] transition-all ease-in-out duration-300 fixed left-0 top-16 ${
          isSideNavOpen ? "translate-x-0" : "-translate-x-full"
        } max-w-[224px] bg-dashboard h-[calc(100dvh-64px)] text-white relative`}
      >
        <span
          onClick={toggleSideNav}
          className={`absolute ${
            isSideNavOpen ? "" : "!-right-10"
          } -right-3 top-1 cursor-pointer bg-white h-[23px] w-[23px] rounded-full inline-flex items-center justify-center shadow-md group hover:bg-dashboard transition-all ease-in-out duration-200 ${
            isSideNavOpen ? "" : "!bg-dashboard"
          }`}
        >
          <IndentDecrease
            onClick={toggleSideNav}
            className={`text-dashboard h-[18px] w-[18px] group-hover:text-white transition-all ease-in-out duration-300 cursor-pointer ${
              isSideNavOpen ? "" : "!text-white rotate-180"
            }`}
          />
        </span>
        <ul className="py-5">
          <li className="mb-3">
            <div
              className={`py-1 px-5 flex items-center justify-between gap-2 hover:bg-primary transition-all ease-in-out duration-200 cursor-pointer`}
            >
              <a
                onClick={() => handleScroll("header")}
                href="#header"
                className="flex items-center gap-2 w-full"
              >
                Header
              </a>
            </div>
          </li>
          <li className="mb-3">
            <div
              className={`py-1 px-5 flex items-center justify-between gap-2 hover:bg-primary transition-all ease-in-out duration-200 cursor-pointer`}
            >
              <a
                onClick={() => handleScroll("banner")}
                href="#banner"
                className="flex items-center gap-2 w-full"
              >
                Banner
              </a>
            </div>
          </li>
          <li className="mb-3">
            <div
              className={`py-1 px-5 flex items-center justify-between gap-2 hover:bg-primary transition-all ease-in-out duration-200 cursor-pointer`}
            >
              <a
                onClick={() => handleScroll("services")}
                href="#services"
                className="flex items-center gap-2 w-full"
              >
                Services
              </a>
            </div>
          </li>
          <li className="mb-3">
            <div
              className={`py-1 px-5 flex items-center justify-between gap-2 hover:bg-primary transition-all ease-in-out duration-200 cursor-pointer`}
            >
              <a
                onClick={() => handleScroll("about")}
                href="#about"
                className="flex items-center gap-2 w-full"
              >
                About
              </a>
            </div>
          </li>
          <li className="mb-3">
            <div
              className={`py-1 px-5 flex items-center justify-between gap-2 hover:bg-primary transition-all ease-in-out duration-200 cursor-pointer`}
            >
              <a
                onClick={() => handleScroll("testimonials")}
                href="#testimonials"
                className="flex items-center gap-2 w-full"
              >
                Testimonials
              </a>
            </div>
          </li>
          <li className="mb-3">
            <div
              className={`py-1 px-5 flex items-center justify-between gap-2 hover:bg-primary transition-all ease-in-out duration-200 cursor-pointer`}
            >
              <a
                onClick={() => handleScroll("contact")}
                href="#contact"
                className="flex items-center gap-2 w-full"
              >
                Contact
              </a>
            </div>
          </li>
          <li className="mb-3">
            <div
              className={`py-1 px-5 flex items-center justify-between gap-2 hover:bg-primary transition-all ease-in-out duration-200 cursor-pointer`}
            >
              <a
                onClick={() => handleScroll("footer")}
                href="#footer"
                className="flex items-center gap-2 w-full"
              >
                Footer
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default DashboardSideNav;
