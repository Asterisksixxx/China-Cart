import "./App.css";
import Button from "@/shared/lib/ui/atoms/button";
import Card from "@/shared/lib/ui/molecules/card/card";
import Icon from "@/shared/lib/ui/atoms/icon/icon";

function App() {
  return (
    <>
      <div className="body">
        <div className="container">
          <nav className="topBar">
            <div className="topBar__logo">
              <Icon name="bag" size="xl" />
            </div>
            <div className="topBar__main">
              <h1 className="topBar__name">AliCart</h1>
              <h3 className="topBar__description">
                Рабочая корзина AliExpress
              </h3>
            </div>
            <ul className="topBar__action">
              <li className="topBar__span">
                <span>
                  {} товаров * {} выбрано
                </span>
              </li>
              <li className="topBar__theme-toggler"></li>
              <li className="topBar__button">
                <Button variant="primary" size="xs">
                  <h2>Добавить товар</h2>
                </Button>
              </li>
            </ul>
          </nav>
          <section className="palette">
            <h2>Палитра (--color-*)</h2>
            <ul className="palette__list">
              {[
                "primary",
                "neutral",
                "background",
                "foreground",
                "danger",
                "warning",
                "success",
                "contrast",
                "matter",
              ].map((name) => (
                <li key={name} className="palette__item">
                  <span
                    className="palette__swatch"
                    style={{ background: `var(--color-${name})` }}
                  ></span>
                  <span className="palette__label">{name}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="panel">
            <div className="panel__header">
              <div className="panel__text">
                <div className="panel__name">
                  <h2> Все товары</h2>
                </div>
                <div className="panel__description">
                  <h3>Перетащите карточку вправо или отметьте галочкой</h3>
                </div>
              </div>
              <div className="panel__counter">
                <span>3</span>
              </div>
            </div>
            <ul className="panel__list">
              {/* <li className="panel__item">
                <div className="item__drag"></div>
                <div className="item__main">
                  <img className="item__image"></img>
                  <div className="item__info">
                    <h2 className="item__name"></h2>
                    <h3 className="item__description"></h3>
                    <span className="item__cost"></span>
                  </div>
                </div>
                <div className="item__action">
                  <div className="item__check"></div>
                  <ul className="item__buttons">
                    <li className="item__reference"></li>
                    <li className="item__update"></li>
                    <li className="item__delete"></li>
                  </ul>
                </div>
              </li> */}
              <Card></Card>
            </ul>
          </section>
          <section className="panel">
            <div className="panel__header">
              <div className="panel__text">
                <div className="panel__name">
                  <h2> Все товары</h2>
                </div>
                <div className="panel__description">
                  <h3>Перетащите карточку вправо или отметьте галочкой</h3>
                </div>
              </div>
              <div className="panel__counter">
                <span>3</span>
              </div>
            </div>
            <ul className="panel__list">
              <li className="panel__item"></li>
              <li className="panel__item"></li>
              <li className="panel__item"></li>
            </ul>
            <div className="panel__footer">
              <div className="panel__sum">
                <div className="panel__amount-text"></div>
                <div className="panel__amount-value"></div>
              </div>
              <div className="panel__action">
                <button>
                  <h2>Оформить {0}</h2>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
