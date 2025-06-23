import { useState, useEffect } from "react";

import classes from "./App.module.scss";
import WhileYouWait from "./components/menu-items/while-you-wait/WhileYouWait";
import Standard from "./components/menu-items/standard/Standard";
import Loader from "./components/loader/Loader";

type Options =
  | "GF"
  | "DF"
  | "GF/DF"
  | "GF available"
  | "DF available"
  | "GF/DF available";

type Allergens =
  | "Ce"
  | "Cr"
  | "E"
  | "F"
  | "G"
  | "Lu"
  | "Mi"
  | "Mo"
  | "Mu"
  | "N"
  | "Pnut"
  | "Se"
  | "So"
  | "Sd"
  | "V"
  | "Vg";

interface IMenuItem {
  name: string;
  description?: string;
  price: number;
  options?: Options;
  allergens?: Allergens[];
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [menuArrs, setMenuArrs] = useState<{
    whileYouWaitArr: IMenuItem[];
    startersArr: IMenuItem[];
    mainsArr: IMenuItem[];
    sidesArr: IMenuItem[];
    dessertsArr: IMenuItem[];
  }>({
    whileYouWaitArr: [],
    startersArr: [],
    mainsArr: [],
    sidesArr: [],
    dessertsArr: [],
  });

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://moness-backend-4c94e04e2f82.herokuapp.com/api/v1/flemmyng/"
        );
        if (!response.ok) throw new Error("Failed to fetch menu data");
        const data = await response.json();

        setMenuArrs({
          whileYouWaitArr: data.payload.whileYouWait || [],
          startersArr: data.payload.starters || [],
          mainsArr: data.payload.mains || [],
          sidesArr: data.payload.sides || [],
          dessertsArr: data.payload.desserts || [],
        });

        setDataIsLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
        setDataIsLoaded(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  const { whileYouWaitArr, startersArr, mainsArr, sidesArr, dessertsArr } =
    menuArrs;

  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <div className={classes.grid}>
          <div className={classes["header-container"]}>
            <h1 className={classes["h1-small"]}>The</h1>
            <h1 className={classes["h1-large"]}>Flemmyng Restaurant</h1>
          </div>

          {isLoading && (
            <div className={classes["loader-wrapper"]}>
              <Loader />
            </div>
          )}

          {!isLoading && !dataIsLoaded && (
            <div className={classes["loader-wrapper"]}>
              <p className={classes["error-message"]}>
                ⚠️ There was an error loading the menu data, please try again.
                ⚠️
              </p>
            </div>
          )}

          {!isLoading && dataIsLoaded && (
            <>
              <div className={classes.col}>
                {whileYouWaitArr.length > 0 && (
                  <div className={classes["while-you-wait-container"]}>
                    <h2 className={classes["heading--centered"]}>
                      While you wait
                    </h2>
                    {whileYouWaitArr.map((el) => (
                      <WhileYouWait
                        key={el.name}
                        name={el.name}
                        price={el.price}
                        allergens={el.allergens}
                      />
                    ))}
                  </div>
                )}

                {startersArr.length > 0 && (
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
                )}
              </div>

              <div className={classes.col}>
                {menuArrs.mainsArr.length > 0 && (
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
                )}

                {menuArrs.sidesArr.length > 0 && (
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
                )}
              </div>

              <div className={classes.col}>
                {menuArrs.dessertsArr.length > 0 && (
                  <>
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
                  </>
                )}

                <div className={classes["allergens-container"]}>
                  <h2 className={classes["heading--centered"]}>Allergens</h2>
                  <p className={classes["allergen-text"]}>
                    Dishes are prepared in our kitchens where all types of
                    ingredients are used. Whilst care is taken, the use of
                    shared equipment means we can't guarantee that your food and
                    drink will be entirely free from allergen contact.
                  </p>
                  <p className={classes["allergen-text"]}>
                    Celery - Ce, Crustaceans - Cr, Eggs - E, Fish - F, Gluten -
                    G, Lupin - Lu, Milk - Mi, Molluscs - Mo, Mustard - Mu, Nuts
                    - N, Peanut - Pnut, Sesame Seeds - Se, Soya - So, Sulphur
                    Dioxide - Sd
                  </p>
                  <p className={classes["allergen-text"]}>
                    Vegetarian – V, Vegan – Vg
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
