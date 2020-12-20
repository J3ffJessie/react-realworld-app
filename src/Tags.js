import React from "react";
// import axios from "axios";
// import baseUrl from "./baseUrl";
import { client as apiClient } from "./api-client";
export function TagList() {
  const [tagRequestState, setTagRequestState] = React.useState("idle");
  const [tags, setTags] = React.useState([]);
  React.useEffect(() => {
    setTagRequestState("pending");
    apiClient
      .get("/tags")
      .then((response) => {
        setTagRequestState("success");
        setTags(response.data.tags);
      })
      .catch((error) => {
        setTagRequestState("failure");
        console.log(error);
      });
  }, []);
  return (
    <>
      <p>Popular Tags: &zwnj; &zwnj; </p>
      <div className="tag-list">
        {tags.filter(tags => {
          let bool = true;
          tags.split('').forEach(char => {
	  		console.log({charCode: char.charCodeAt(0), test: char.charCodeAt(0) == 8204});
            if (char.charCodeAt(0) === 8204) {
              bool = false;
            }
          })
          return bool
        }).map((tag) => (
          <a href="" className="tag-pill tag-default">
            {tag}
          </a>
        ))
        }
      </div>
    </>
  );
}