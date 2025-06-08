import { useState, useEffect, use } from "react";
import BasicEffect from "./components/BasicEffect";
import CounterEffect from "./components/CounterEffect";
import FetchDataEffect from "./components/FetchDataEffect";

export function App() {
  

  return (
    <div>
      <BasicEffect />
      <CounterEffect />
      <FetchDataEffect />
    </div>
  );
}