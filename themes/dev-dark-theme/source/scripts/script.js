window.app = () => {
  let scrollY = 0;
  let header = document.getElementsByClassName('navbar')[0];

  document.querySelectorAll('a[whatsapp-link]').forEach(element => {
    const url = new URL(element.getAttribute('href'));
    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) return;
    element.href = `whatsapp://send?text=${url.searchParams.get('text')}`;
  });
  
  if (!header) return;
  const changeHeader = () => {
    if (window.scrollY === 0) {
      header.classList.add('clear');
      header.classList.remove('invisible');
    } else {
      header.classList.remove('clear');
      if (window.scrollY > scrollY) {
        header.classList.add('invisible');
      } else {
        header.classList.remove('invisible');
      }
    }
    scrollY = window.scrollY;
  };
  window.onscroll = e => changeHeader();
  window.ontouchmove = e => changeHeader();
};

window.app();