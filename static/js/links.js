  document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('a[href^="http://"], a[href^="https://"]').forEach(link => {
      if (link.hostname !== window.location.hostname) {
        link.target = '_blank';
        // Optional: Add rel="noopener noreferrer" for security and performance reasons
        link.rel = 'noopener noreferrer';
      }
    });
  });