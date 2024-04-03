/*main.jsx*/
import React from 'react' // Эта строка импортирует библиотеку React, которая является основой для создания компонентов в React.
import ReactDOM from 'react-dom/client' // Эта строка импортирует библиотеку ReactDOM, которая предоставляет методы для взаимодействия с DOM в веб-браузере.
import AppCard from './App.jsx' // Эта строка импортирует компонент AppCard из файла App.jsx. Этот компонент будет использоваться в качестве корневого компонента приложения.
import './main.css' // Эта строка импортирует CSS-стили из файла main.css. Эти стили будут применены ко всему приложению.

/* Рендер компонента <AppCard> в элемент HTML с идентификатором "root", 
обернутого в <React.StrictMode>, чтобы выявить потенциальные проблемы во время разработки.*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppCard />
  </React.StrictMode>,
)
