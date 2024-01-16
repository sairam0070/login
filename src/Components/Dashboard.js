// import React from 'react'
import style from '../style/Dashboard.module.css';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';



export default function Dashboard() {
    const navigate = useNavigate();

    // Simulate user authentication and role retrieval
    const user = {
      isAuthenticated: true,
      role: 'admin',
    };

    
  useEffect(() => {
    // Redirect if the user is not authenticated or not an admin
    if (!user.isAuthenticated || user.role !== 'admin') {
      navigate('/login'); // Redirect to the login page
    }
  }, [user, navigate]);
  return (
    <>
       <title>Your Website</title>

<body>
    <header className={style.header }>
        <h1>Your Website Header</h1>
    </header>

    <nav className={style.nav}>
        <ul>
            <li>
                <a href="#">Home</a>
                <ul className="dropdown">
                    <li><a href="#">Subitem 1</a></li>
                    <li><a href="#">Subitem 2</a></li>
                    <li><a href="#">Subitem 3</a></li>
                </ul>
            </li>
            <li>
                <a href="#">About</a>
                <ul className={style.dropdown}>
                    <li><a href="#">Subitem 1</a></li>
                    <li><a href="#">Subitem 2</a></li>
                    <li><a href="#">Subitem 3</a></li>
                </ul>
            </li>
            <li>
                <a href="#">Services</a>
                <ul className={style.dropdown}>
                    <li><a href="#">Subitem 1</a></li>
                    <li><a href="#">Subitem 2</a></li>
                    <li><a href="#">Subitem 3</a></li>
                </ul>
            </li>
            <li>
                <a href="#">Contact</a>
                <ul className={style.dropdown}>
                    <li><a href="#">Subitem 1</a></li>
                    <li><a href="#">Subitem 2</a></li>
                    <li><a href="#">Subitem 3</a></li>
                </ul>
            </li>
        </ul>
    </nav>

    <section className={style.container}>
        <article>
            <h2>Main Content Section</h2>
            <p>This is the main content of your website.</p>
            <p>This is the main content of your website.</p>
        </article>

        <aside className={style.sidebar}>
            <h3>Sidebar</h3>
            <p>This is the sidebar content.</p>
        </aside>
    </section>

    <footer>
        <p>&copy; 2023 Your Website. All Rights Reserved.</p>
    </footer>
</body>
    </>
  )
}
// AdminDashboard.js

