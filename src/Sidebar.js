import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { GlobalContext } from "./context";

const Sidebar = () => {
  const { sidebarOpen, closeSidebar } = GlobalContext();
  return (
    <aside
      className={`${sidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"}`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((link, index) => {
            const { page, links } = link;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a key={index} href={url}>
                        {icon} {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
