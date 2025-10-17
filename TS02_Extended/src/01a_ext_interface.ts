export {}

declare global {
  interface Window {
    isAuth?: boolean;
  }
}

// Работает только в браузерах где есть window в node его нету
window.isAuth = true;

if (window.isAuth) {
  console.log("User isAuth");
}