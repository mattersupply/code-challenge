import { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";

import { css } from "@emotion/core";

const userPostStyles = css`
  figure {
    display: none;
  }
`;
console.log(userPostStyles);
const UserPostComponent = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserInput] = useState("");
  const [gistTitle, setGistTitle] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/octocat")
      .then((res) => res.json())
      .then((data) => {
        setDataUser(data);
      });

    fetch("https://api.github.com/users/octocat/gists")
      .then((res) => res.json())
      .then((data) => {
        setDataGists(data);
      });
  }, []);

  const setDataUser = ({ name, login, avatar_url }) => {
    setName(name);
    setUserName(login);
    setAvatar(avatar_url);
  };

  const setDataGists = (data) => {
    for (let i = 0; i < data.length; i++) {
      const dataElements = Object.keys(data[i].files);
      dataElements.map((item, index) => {
        <li key={index}>{item}</li>;
      });

      setGistTitle(dataElements);
      console.log(dataElements);
    }
  };

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        setDataUser(data);
      }),
      fetch(`https://api.github.com/users/${userInput}/gists`)
        .then((res) => res.json())
        .then((data) => {
          setDataGists(data);
        });
  };

  return (
    <section css={userPostStyles}>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Input placeholder="Name" name="name" onChange={handleSearch} />
          <Form.Button content="search" />
        </Form.Group>
      </Form>

      <article>
        <figure>
          <img src={avatar} alt={userName} />
          <figcaption>
            <p>{name}</p>
            <p>{userName}</p>
          </figcaption>
        </figure>
        <ul className="gists-list">{gistTitle}</ul>
      </article>
    </section>
  );
};
export default UserPostComponent;
