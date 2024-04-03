/*app.jsx*/
import { useState } from 'react'  // Импорт хука состояния из библиотеки React.
import PropTypes from 'prop-types'; // Импорт PropTypes.
import './AppCard.css' // Импорт стилей для компонента AppCard.

const AppCard = ({ title="Microsoft Word", description="Create, Edit & Share Documents", img="src/assets/word-icon.svg", action="UPDATE" }) => { // Объявление функционального компонента React с именем AppCard.
  const [updateClicked, setUpdateClicked] = useState(false) // Использование хука состояния для отслеживания, была ли нажата кнопка обновления.

  const handleUpdateClick = () => {  // Объявление функции, которая будет вызываться при нажатии кнопки обновления.
    // Установите состояние, указывающее, что процесс обновления начался.
    setUpdateClicked(true)
  
    // Имитировать процесс обновления, возвращение состояния обратно в false после задержки, указывающего, что процесс обновления завершен.
    setTimeout(() => {
      setUpdateClicked(false)
    }, 2000)
  }

  return ( // Компонент возвращает JSX, который будет отрендерен.
    <div className='app-card-container'> {/* Контейнер для всего содержимого карты приложения.*/}
      <div className="app-card"> {/* Контейнер для изображения приложения. */}
        <div className="image-block">  {/* Блок для изображения.*/}
          <img src={img} alt="Word-Card" /> {/*Изображение приложения.*/}
        </div>
      </div> 
      <div className='text'> {/*Контейнер для текста.*/}
        <h1 className="name">{title}</h1> {/*Название приложения.*/}
        <h3 className="description">{description}</h3> {/*Описание приложения.*/}
      </div> 
      <button className={updateClicked ? "updating-text" : "update-button"} onClick={() => handleUpdateClick(() => action)}> {/*Кнопка обновления, которая вызывает функцию handleUpdateClick при нажатии.*/} 
        {updateClicked ? 'UPDATING...' : action /*Текст кнопки изменяется в зависимости от состояния updateClicked.*/}
      </button>
      <hr className={updateClicked ? "divider-update" : "divider"} /> {/*Горизонтальная линия, создал заранее если вдруг будут проблемы с перемещением из-за width-а и margin-ов*/}
    </div> 
  )
}

// Определение типов свойств.
AppCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string,
  action: PropTypes.string.isRequired,
}

export default AppCard