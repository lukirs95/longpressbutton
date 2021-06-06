const codes = document.querySelectorAll('code');
const msgbox = document.querySelector('.msgbox');

codes.forEach((code) => {
  code.addEventListener('click', () => {
    navigator.clipboard.writeText(code.textContent).then(() => {
      msgbox.textContent = 'Copied to Clipboard';
      msgbox.classList.toggle('hidden');
      window.setTimeout(() => {
        msgbox.classList.toggle('hidden');
      }, 3000);
    });
  });
});
