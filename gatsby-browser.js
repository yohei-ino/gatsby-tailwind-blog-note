import './src/styles/global.css';

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  // document.documentElement.classList.add('dark')
  document.querySelector("html").classList.add("dark");
} else {
  // document.documentElement.classList.remove('dark')
  document.querySelector("html").classList.remove("dark");

}
