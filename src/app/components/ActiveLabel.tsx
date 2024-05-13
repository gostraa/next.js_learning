import React from "react";
import styles from "./activeLabel.module.css";
export interface activeLabelProps {
  children: React.ReactNode;
}
export default function ActiveLabel({ children }: activeLabelProps) {
  return <span className={styles.label}>{children}</span>;
}
