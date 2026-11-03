import type { TableProps } from "./table.type";

const Table = ({
  title = "",
  counter = 0,
  description = "",
  footer = null,
}: TableProps) => {
  return (
    <>
      <section>
        <div>
          <div>
            <h3>{title}</h3>
            <h3>{description}</h3>
          </div>
          <span>{counter}</span>
        </div>
        <div>
          <ul></ul>
        </div>
        {footer}
      </section>
    </>
  );
};
export default Table;
