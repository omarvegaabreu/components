import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="sam"
        date="8/12/2019"
        content="Hi I am Sam"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="alex"
        date="8/13/2019"
        content="Hi I am alex"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="omar"
        date="8/14/2019"
        content="Hi I am Omar"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
