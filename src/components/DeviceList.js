import React from "react";
import { Devices } from "../data/Devices";

function DeviceList({ id }) {
  return (
    <div>
      {Object.values(Devices[id]).map((val, i) => {
        return <h3 key={i}>{val.model}</h3>;
      })}
    </div>
  );
}

export default DeviceList;
