import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='nav'>
          <div className='nav__logo'></div>
          <div className='nav__titles'>
            <div className='nav__title'>Недвижимость</div>
            <div className='nav__title _active'>Новостройки</div>
            <div className='nav__title'>Аренда</div>
            <div className='nav__title'>О компании</div>
            <div className='nav__title'>Каналы</div>
          </div>
          <div className='nav__phoneNumber'>+34865607015</div>
          <select name="langs" className='nav__language' id="language">
            <option value="ru">RU</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
          <button className='nav__answer __changeLang'>Заявка</button>
        </div>
        <header>
          <h1 className='__changeLang'>ARCOSTEC - Агенство недвижимости</h1>
          <div className='header__social'>
            <div className='social__telegram'></div>
            <div className='social__whatsapp'></div>
          </div>
        </header>
        <div className='search'>
          <form></form>
          <div className='search__place'></div>
        </div>
        <div className='projects'></div>
      </div>
    </div>
  );
}

export default App;
