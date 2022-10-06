import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import React from 'react';

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle1">ABOUT ME</span>
        <img
          src="https://scontent.fabv2-1.fna.fbcdn.net/v/t1.6435-9/55560671_10156557421278173_6936111323906310144_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeH1g_qMf8kbPsjHAv_UyG2FiPLRCDE2CM-I8tEIMTYIz5UjmLHo9KhiD13NR0jhNilBp4EF9vYmtT_t4Qz5wpDt&_nc_ohc=57-4Asr1NqIAX_nBv2M&_nc_ht=scontent.fabv2-1.fna&oh=00_AT_Zdmh-zKzAth7nHmeQjjlPVLsY4qs_xMWqusbFJNXLPA&oe=63604906"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit.voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantiummodi minima sunt esse temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle1">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle2">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-youtube-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
