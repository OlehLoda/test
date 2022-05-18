import s from "./mainPageComponent.module.css";
import React from "react";
import SearchRequests from "./SearchRequestsComponent/searchRequestsComponent";

export default function MainPageComponent() {
  return (
    <div className={s.coverContainer}>
      <div className={s.container}>
        <h1>PAGE</h1>
        <SearchRequests />
      </div>
    </div>
  );
}
