import Image from "../../atoms/image";
import Text from "../../atoms/text";
import type { CardProps } from "./card.type";
import styles from "./card.module.css";

const Card = ({
  // children, надо ли вообще карточке children?
  itemCost = "300$",
  itemImage = "https://a.allegroimg.com/s720/116d8e/850201d54289a5b474405ba2df7e/ogromny-i-super-dlugi-korek-analny-wtyczka-penis",
  itemName = "Залупа коня на присосках",
  itemDescription = "35 см длина, 12 см диаметр",
  itemReference = "https://aliexpress.ru/item/1005012278750108.html?sku_id=12000057938937245&spm=a2g2w.productlist.search_results.0.138739bcQJ2p8y",
}: CardProps) => {
  return (
    <>
      <li className={styles.item}>
        <div className={styles.drag}>sds</div>
        <div className={styles.main}>
          <div className={styles.image}>
            <Image source={itemImage} size="m" align="center"></Image>
          </div>
          <div className={styles.info}>
            <Text size="l" weight="semibold">
              {itemName}
            </Text>
            <Text>{itemDescription}</Text>
            <span className="item__cost">{itemCost}</span>
          </div>
        </div>
        <div className={styles.action}>
          <div className={styles.check}></div>
          <ul className={styles.buttons}>
            <link href={itemReference}></link>
            <li className="item__update"></li>
            <li className="item__delete"></li>
          </ul>
        </div>
      </li>
    </>
  );
};

export default Card;
