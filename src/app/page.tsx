import React from "react";

import StatusLabel, { Status } from "./components/statusLabel";
import ActiveLabel from "./components/ActiveLabel";
import InActiveLabel from "./components/InActiveLabel";

export default function Home() {
  return (
    <main>
      <h1 className={""}>Home Page</h1>
      <ActiveLabel>Active</ActiveLabel>
      <InActiveLabel>Not active</InActiveLabel>
      <StatusLabel status={Status.Active}>Status</StatusLabel>
    </main>
  );
}
