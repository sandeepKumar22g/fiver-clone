import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // const currentUser = null

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar sticky-md-top active" : "navbar sticky-md-top"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/" style={{textDecoration:"none"}}>
            <span className="text">fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Liverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {currentUser.isSeller && (
                  <>
                    <Link className="link" to="/mygigs" style={{textDecoration:"none"}}>
                      Gigs
                    </Link>
                    <Link className="link" to="/add" style={{textDecoration:"none"}}>
                      Add New Gig
                    </Link>
                  </>
                )}
                <Link className="link" to="/orders" style={{textDecoration:"none"}}>
                  Orders
                </Link>
                <Link className="link" to="/messages" style={{textDecoration:"none"}}>
                  Messages
                </Link>
                <Link className="link" to="/" style={{textDecoration:"none"}}>
                  Logout
                </Link>
              </div>}
            </div>
          ) : (
            <>
              <span>Sign in</span>
              <Link className="link" to="/register" style={{textDecoration:"none"}}>
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="container p-0"> 
          <div className="menu">
            <Link className="link menuLink" to="/" style={{textDecoration:"none"}} >
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/" style={{textDecoration:"none"}} >
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/" style={{textDecoration:"none"}} >
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/" style={{textDecoration:"none"}} >
              AI Services
            </Link>
            <Link className="link menuLink" to="/" style={{textDecoration:"none"}} >
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/" style={{textDecoration:"none"}} >
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/" style={{textDecoration:"none"}} >
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/" style={{textDecoration:"none"}} >
              Business
            </Link>
            <Link className="link menuLink" to="/" style={{textDecoration:"none"}} >
              Lifestyle
            </Link>
          </div>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;