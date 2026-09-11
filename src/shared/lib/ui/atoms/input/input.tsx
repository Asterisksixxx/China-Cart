import { useColorScheme } from "../../../hooks";
import {
  InputAligns,
  InputBorderRadiuses,
  InputBorderWidths,
} from "./input.style";
import type { InputProps } from "./input.type";

const Input = ({
  align = "center",
  borderRadius = "s",
  children,
  color = "background",
  isDisabled = false,
  borderWidth = "s",
  placeholder = "",
}: InputProps) => {
  const { colors } = useColorScheme();
  const styles = {
    ...InputBorderRadiuses[borderRadius],
    ...InputBorderWidths[borderWidth],
    ...InputAligns[align],
    color: colors[color],
    cursor: isDisabled ? "not-allowed" : "pointer",
    opacity: isDisabled ? 0.5 : 1,
  };
  return (
    <>
      <input style={styles} placeholder={placeholder}>
        {children}
      </input>
    </>
  );
};
export default Input;
