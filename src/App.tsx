import classes from "./App.module.scss";

import {
  whileYouWaitArr,
  startersArr,
  mainsArr,
  sidesArr,
  dessertsArr,
} from "./dev/flemmyngMenu";

import WhileYouWait from "./components/menu-items/while-you-wait/WhileYouWait";
import Standard from "./components/menu-items/standard/Standard";

function App() {
  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <div className={classes.grid}>
          <div className={classes["header-container"]}>
            <h1 className={classes["h1-small"]}>The</h1>
            <h1 className={classes["h1-large"]}>Flemmyng Restaurant</h1>
          </div>

          <div className={classes.col}>
            <div className={classes.col}>
              <div className={classes["while-you-wait-container"]}>
                <h2 className={classes["heading--centered"]}>While you wait</h2>
                {whileYouWaitArr.map((el) => (
                  <WhileYouWait
                    key={el.name}
                    name={el.name}
                    price={el.price}
                    allergens={el.allergens}
                  />
                ))}
              </div>
            </div>
            <div className={classes.col}>
              <div className={classes.heading}>Starters</div>
              {startersArr.map((el) => (
                <Standard
                  key={el.name}
                  name={el.name}
                  price={el.price}
                  description={el.description}
                  options={el.options}
                  allergens={el.allergens}
                />
              ))}
            </div>
          </div>
          <div className={classes.col}>
            <div className={classes.col}>
              <div className={classes.heading}>Mains</div>
              {mainsArr.map((el) => (
                <Standard
                  key={el.name}
                  name={el.name}
                  price={el.price}
                  description={el.description}
                  options={el.options}
                  allergens={el.allergens}
                />
              ))}
            </div>
            <div className={classes.col}>
              <div className={classes["heading--margin-top"]}>Sides</div>
              {sidesArr.map((el) => (
                <Standard
                  key={el.name}
                  name={el.name}
                  price={el.price}
                  description={el.description}
                  options={el.options}
                  allergens={el.allergens}
                />
              ))}
            </div>
          </div>
          <div className={classes.col}>
            <div className={classes.heading}>Desserts</div>
            {dessertsArr.map((el) => (
              <Standard
                key={el.name}
                name={el.name}
                price={el.price}
                description={el.description}
                options={el.options}
                allergens={el.allergens}
              />
            ))}
            <div className={classes["allergens-container"]}>
              <h2 className={classes["heading--centered"]}>Allergens</h2>
              <p className={classes["allergen-text"]}>
                Dishes are prepared in our kitchens where all types of
                ingredients are used. Whilst care is taken, the use of shared
                equipment means we can't guarantee that your food and drink will
                be entirely free from allergen contact.
              </p>
              <p className={classes["allergen-text"]}>
                Celery - Ce, Crustaceans - Cr, Eggs - E, Fish - F, Gluten - G,
                Lupin - Lu, Milk - Mi, Molluscs - Mo, Mustard - Mu, Nuts - N,
                Peanut - Pnut, Sesame Seeds - Se, Soya - So, Sulphur Dioxide -
                Sd
              </p>
              <p className={classes["allergen-text"]}>
                Vegetarian – V, Vegan – Vg
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
