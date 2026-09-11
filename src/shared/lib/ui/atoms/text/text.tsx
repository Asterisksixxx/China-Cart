import { useColorScheme } from "../../../hooks";
import { textAligns, textSizes, textWeights } from "./text.style";
import type { TextProps } from "./text.type";

const Text = ({
  children,
  style,
  align = "start",
  size = "m",
  color = "foreground",
  weight = "regular",
}: TextProps) => {
  const { colors } = useColorScheme();
  const styles = {
    ...textSizes[size],
    ...textAligns[align],
    ...textWeights[weight],
    ...(style || {}),
    color: colors[color],
  };

  return (
    <>
      <span style={styles}>{children}</span>
    </>
  );
};
export default Text;
