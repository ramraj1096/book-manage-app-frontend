import React, { useEffect } from 'react';

function MenuComponent() {
  useEffect(() => {
    const linkColor = document.querySelectorAll('.nav-link');
    linkColor.forEach(link => {
      if (window.location.href.endsWith(link.getAttribute('href') || '')) {
        link.classList.add('active');
      }
      link.addEventListener('click', () => {
        linkColor.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div>
      {/* Your menu component UI goes here */}
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default MenuComponent;
