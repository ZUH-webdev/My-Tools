
import { Link } from "react-router-dom";

const Menu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const menuItems = [
    { label: "Login/Register", href: "/signin" },
    { label: "Product Finder", href: "/product-finder" },
    { label: "About", href: "/about" },
    { label: "Terms of use", href: "/termsofuse" },
    { label: "Privacy Policy", href: "/privacyandpolicy" },
    { label: "Contact", href: "/contact" },
    { label: "Follow on X", href: "https://x.com/10015io" },
    { label: "Buy me a coffee", href: "https://buymeacoffee.com/fatihtelis" },
  ];

  return (<>
    {/* Overlay */}
    <div
      onClick={onClose}
      className="fixed inset-0 z-1001 flex items-center justify-center
                 bg-black/50 animate-fadeIn"
    >
      {/* Fullscreen Menu */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed inset-0 w-full h-full
                   bg-[rgb(71,75,255)]
                   flex items-center justify-center
                   animate-slideUp"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4.5 right-4.5
                     w-10 h-10 rounded-full
                     bg-[rgba(71,82,236,0.08)]
                     text-white text-[20px]
                     flex items-center justify-center
                     transition-all duration-200
                     hover:bg-white hover:text-black hover:scale-110
                     z-1100
                     max-md:top-3 max-md:right-3
                     max-[480px]:w-9 max-[480px]:h-9 max-[480px]:text-[18px]"
        >
          ✕
        </button>

        {/* Content */}
        <div className="w-full h-full flex flex-col items-center justify-center
                        px-7.5 py-10
                        max-md:px-4.5 max-md:py-7
                        max-[480px]:px-3.5 max-[480px]:py-5">
          <nav className="flex flex-col items-center justify-center gap-0 w-full">
            {menuItems.map((item, index) => {
              const isExternal = item.href.startsWith("http");
              const commonClass = "px-7 py-4 text-white text-[30px] font-semibold text-center transition-all duration-200 hover:bg-[rgba(76,88,255,0.06)] hover:text-[#bababd] hover:-translate-y-0.75 active:bg-[rgba(76,88,255,0.04)] max-md:px-5 max-md:py-3.5 max-md:text-[17px] max-[480px]:px-4 max-[480px]:py-3 max-[480px]:text-[16px]";

              if (isExternal) {
                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className={commonClass}
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link key={index} to={item.href} onClick={onClose} className={commonClass}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div></>
  );
};

export default Menu;
