import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useEffect, useState } from "react";
function MainNavigation() {
  const token = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/login");
  };

  useEffect(() => {
    if (isLoggedIn === false) {
      if (token) {
        setIsLoggedIn(true);
      }
    }
  }, [isLoggedIn, token]);
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>

          {isLoggedIn && (
            <li>
              <NavLink
                to="/add"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Add Article
              </NavLink>
            </li>
          )}

          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Log out</button>
            </li>
          )}

          {!isLoggedIn && (
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Register
              </NavLink>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
