// Импорт React и ReactDOM для использования библиотек React и ReactDOM.
import React from 'react';
import ReactDOM from 'react-dom';

// Импорт компонента AppCard из файла App.jsx.
import AppCard from './src/components/card/App';

// Получение корневого элемента с идентификатором "root" из DOM.
const rootElement: HTMLElement | null = document.getElementById('root');

// Если корневой элемент найден, добавляем в него новый элемент div (если его ещё нет).
rootElement?.appendChild(document.createElement('div'));

// Если корневой элемент существует, рендерим компонент AppCard внутри React.StrictMode.
if (rootElement) {
  ReactDOM.render(
    <React.StrictMode>
      {/* Передаём свойства title, description и action в компонент AppCard. */}
      <AppCard 
        title="Microsoft Word"
        description="Create, Edit & Share Documents"
        action="UPDATE"
      />
    </React.StrictMode>,
    rootElement
  );
} else {
  // Если корневой элемент не найден, выводим сообщение об ошибке в консоль.
  console.error("Root element not found in the DOM.");
}