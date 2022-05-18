import s from "./searchRequestsComponent.module.css";
import { useQuery } from "@apollo/client";
import React, { ReactElement, useState } from "react";
import SEARCH_REQUSTS from "../../../queries/search-requst-query";

export default function SearchRequests(): ReactElement {
  const [skip, setSkip] = useState(0);
  const { loading, error, data } = useQuery(SEARCH_REQUSTS, {
    variables: { first: 3, skip: skip },
    refetchWritePolicy: "merge",
    fetchPolicy: "cache-first",
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const arr = [0, 1, 2, 3, 4];

  return (
    <div className={s.coverCompanies}>
      <div className={s.coverPaggBar}>
        <button
          className={s.arrowLeft}
          disabled={skip === 0}
          onClick={() => {
            setSkip(skip - 3);
          }}
        />
        {arr.map((page) => {
          return (
            <span
              key={page}
              style={skip / 3 === page ? { background: "lightgray" } : {}}
              onClick={() => {
                setSkip(page * 3);
              }}
            >
              {page + 1}
            </span>
          );
        })}
        <button
          className={s.arrowRight}
          disabled={skip === 12}
          onClick={() => {
            setSkip(skip + 3);
          }}
        />
      </div>
      {data.searchRequests.map((item: any) => {
        return (
          <div key={item.id} className={s.coverOneCompany}>
            <p>Business name: {item.business_name}</p>
            <p>Business mail: {item.business_mail}</p>
            <p>Business phone: {item.business_phone}</p>
            <p>Owners phone: {item.owners_phone}</p>
            <p>ID: {item.id}</p>
          </div>
        );
      })}
    </div>
  );
}
