import Button from "../../atoms/button";
import Text from "../../atoms/text";
import type { PreorderProps } from "./preorder.type";

const Preorder = ({
  title = "",
  value = 0,
  valute = "USD",
  count = 0,
}: PreorderProps) => {
  return (
    <>
      <div>
        <div>
          <h3>{title}</h3>
          <h4>
            {value} {valute}
          </h4>
        </div>
        <Button>
          <Text align="center" size="m">
            Оформить {count}
          </Text>
        </Button>
      </div>
    </>
  );
};

export default Preorder;
