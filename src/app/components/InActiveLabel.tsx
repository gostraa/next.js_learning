import React from "react";
import styles from "./inActiveLabel.module.css";
export interface activeLabelProps {
  children: React.ReactNode;
}
export default function InActiveLabel({ children }: activeLabelProps) {
  return <span className={styles.label}>{children}</span>;
}
