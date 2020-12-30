import React from "react";
// import axios from "axios";
// import baseUrl from "./baseUrl";
import { client as apiClient } from "./api-client";


const validateTag = (tag) =>
tag !== 'butt' &&
tag
.split('')
.every((stringCharacter) => stringCharacter.charCodeAt(0) !== 8204)



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
        {tags
          .filter(validateTag)
          .map((tag) => (
            <a href="" className="tag-pill tag-default">
              {tag}
            </a>
          ))}
      </div>
    </>
  );
}
