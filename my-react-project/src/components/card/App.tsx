import React, { useState } from 'react'; // Импорт useState из библиотеки React.
import './AppCard.css'; // Импорт стилей для компонента AppCard.

interface AppCardProps {
  title: string;
  description: string;
  img?: string;
  action: string;
}

const AppCard: React.FC<AppCardProps> = ({ title = "Microsoft Word", description = "Create, Edit & Share Documents", img = "src/assets/word-icon.svg", action = "UPDATE" }) => {
  const [updateClicked, setUpdateClicked] = useState<boolean>(false); // Использование хука состояния для отслеживания, была ли нажата кнопка обновления.

  const handleUpdateClick = () => {
    // Установите состояние, указывающее, что процесс обновления начался.
    setUpdateClicked(true);

    // Имитировать процесс обновления, возвращение состояния обратно в false после задержки, указывающего, что процесс обновления завершен.
    setTimeout(() => {
      setUpdateClicked(false);
    }, 2000);
  };

  return (
    <div className='app-card-container'> {/* Контейнер для всего содержимого карты приложения. */}
      <div className="app-card"> {/* Контейнер для изображения приложения. */}
        <div className="image-block"> {/* Блок для изображения. */}
          <img src={img} alt="Word-Card" /> {/* Изображение приложения. */}
        </div>
      </div>
      <div className='text'> {/* Контейнер для текста. */}
        <h1 className="name">{title}</h1> {/* Название приложения. */}
        <h3 className="description">{description}</h3> {/* Описание приложения. */}
      </div>
      <button className={updateClicked ? "updating-text" : "update-button"} onClick={handleUpdateClick}> {/* Кнопка обновления, которая вызывает функцию handleUpdateClick при нажатии. */}
        {updateClicked ? 'UPDATING...' : action} {/* Текст кнопки изменяется в зависимости от состояния updateClicked. */}
      </button>
      <hr className={updateClicked ? "divider-update" : "divider"} /> {/* Горизонтальная линия, создана заранее в случае проблем с перемещением из-за width и margin */}
    </div>
  );
};

export default AppCard;