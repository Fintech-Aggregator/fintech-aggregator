import React from "react";
import styles from "./table.module.css";
interface Props {
  licenseName: string;
  address: string;
  addressType: string;
  selectedRows: Set<number>;
  toggleRowSelection: (id: number) => void;
  className?: string;
}

export const TableContent: React.FC<Props> = ({
  licenseName,
  address,
  addressType,
  selectedRows,
  toggleRowSelection,
  className,
}) => {
  return (
    <tr className={styles.tableRow}>
      <td
        className="font-medium"
        style={{ width: "294px", paddingLeft: "25px" }}
      >
        {licenseName}
      </td>
      <td
        className="font-medium"
        style={{
          width: "320px",

          paddingTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {address}
      </td>
      <td className="font-medium text-base" style={{ width: "125px" }}>
        {addressType}
      </td>
    </tr>
  );
};
