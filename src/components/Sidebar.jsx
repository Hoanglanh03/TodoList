import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <form className="sb-form">
        <div className="sb-form-filed">
          <label htmlFor="sb-name">Todo name</label>
          <input id="sb-name" name="name" type="text" />
        </div>
        <div className="sb-form-filed">
          <label htmlFor="sb-important">Is important?</label>
          <input id="sb-important" name="important" type="checkbox" />
        </div>
        <div className="sb-form-filed">
          <label htmlFor="sb-completed">Is completed?</label>
          <input id="sb-completed" name="completed" type="checkbox" />
        </div>
      </form>
      <div className="sb-footer">
        <button>save</button>
        <button>cancel</button>
      </div>
    </div>
  );
};

export default Sidebar;
