import React from 'react';

const Menu = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#FFFF00',
      color: '#000',
      minHeight: '100vh',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    header: {
      backgroundColor: '#000',
      color: '#FFF',
      textAlign: 'left',
      width: '100%',
      padding: '10px',
      marginBottom: '20px',
    },
    section: {
      margin: '20px 0',
      padding: '20px',
      backgroundColor: '#FFFACD',
      borderRadius: '10px',
      width: '80%',
      maxWidth: '600px',
      textAlign: 'center',
      transition: 'transform 0.3s ease',
    },
    sectionHover: {
      transform: 'scale(1.05)',
    },
    button: {
      backgroundColor: '#FFD700',
      border: 'none',
      padding: '10px 20px',
      margin: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
    },
    buttonHover: {
      transform: 'scale(1.1)',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Naki's Portfolio</h1>
        <nav>
          <a href="index.html" style={{color: '#FFF', marginRight: '20px'}}>Home</a>
          <a href="contacts.html" style={{color: '#FFF', marginRight: '20px'}}>Contacts</a>
          <a href="socials.html" style={{color: '#FFF', marginRight: '20px'}}>Socials</a>
          <a href="projects.html" style={{color: '#FFF'}}>Projects</a>
        </nav>
      </header>

      <div
        style={styles.section}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      >
        <h2>About Me</h2>
        <p>This is a brief description about me. I am passionate about web development and creating amazing user experiences.</p>
      </div>

      <div
        style={styles.section}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      >
        <h2>Contacts</h2>
        <p><i className="fas fa-envelope"></i> Email: example@email.com</p>
        <p><i className="fas fa-phone"></i> Phone: (123) 456-7890</p>
        <button
          style={styles.button}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          Contact Me
        </button>
      </div>

      <div
        style={styles.section}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      >
        <h2>Socials</h2>
        <a href="https://www.linkedin.com/in/kian-agulan-656884369" target="_blank" style={{textDecoration: 'none', color: 'inherit', backgroundColor: '#FFD700', border: 'none', padding: '10px 20px', margin: '10px', borderRadius: '5px', cursor: 'pointer', transition: 'transform 0.3s ease', display: 'inline-block'}} onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}><i className="fab fa-linkedin"></i> LinkedIn</a>
        <a href="https://www.instagram.com/theycallme_naki" target="_blank" style={{textDecoration: 'none', color: 'inherit', backgroundColor: '#FFD700', border: 'none', padding: '10px 20px', margin: '10px', borderRadius: '5px', cursor: 'pointer', transition: 'transform 0.3s ease', display: 'inline-block'}} onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}><i className="fab fa-instagram"></i> Instagram</a>
        <a href="https://www.facebook.com/theycallme.Naki" target="_blank" style={{textDecoration: 'none', color: 'inherit', backgroundColor: '#FFD700', border: 'none', padding: '10px 20px', margin: '10px', borderRadius: '5px', cursor: 'pointer', transition: 'transform 0.3s ease', display: 'inline-block'}} onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}><i className="fab fa-facebook"></i> Facebook</a>
        <a href="https://github.com/Kian-Agulan" target="_blank" style={{textDecoration: 'none', color: 'inherit', backgroundColor: '#FFD700', border: 'none', padding: '10px 20px', margin: '10px', borderRadius: '5px', cursor: 'pointer', transition: 'transform 0.3s ease', display: 'inline-block'}} onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}><i className="fab fa-github"></i> GitHub</a>
      </div>

      <div
        style={styles.section}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      >
        <h2>Projects</h2>
        <p>Here are some of my projects:</p>
        <button
          style={styles.button}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          Project 1
        </button>
        <button
          style={styles.button}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          Project 2
        </button>
      </div>
    </div>
  );
};

export default Menu;
