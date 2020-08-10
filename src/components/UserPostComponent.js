import { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";

/**Styles */
import { css } from "@emotion/core";
import { colors } from "../styles/colors";
import { breakpoint } from "../styles/breakPoints";

const userPostStyles = css`
  form {
    .input {
      position: relative;
      &::after {
        content: url("/images/icon-search.svg");
        left: 2rem;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      input {
        border: none;
        background-color: ${colors.lightGrey};
        border-radius: 50px;
        color: ${colors.darkGrey};
        font-size: 1.5rem;
        padding: 1.5rem;
        padding-left: 4rem;
        position: relative;
        width: 70%;
      }
    }
    button {
      display: none;
      ${breakpoint("sm")} {
        color: ${colors.white};
        background-color: ${colors.mainBlue};
        border: none;
        border-radius: 50px;
        display: block;
        font-size: 1.5rem;
        margin: auto;
        margin-top: 3rem;
        padding: 1rem 2rem;
        width: 50%;
      }
    }
  }
  article {
    margin-top: 5rem;
    figure {
      border-radius: 50px;
      display: inline-block;
      height: 70px;
      margin-top: 0;
      overflow: hidden;
      width: 70px;
      img {
        height: auto;
        width: 100%;
      }
    }
    aside {
      display: inline-block;
      p:first-of-type {
        font-size: 2rem;
        margin-top: 0;
        margin-bottom: 0;
      }
      p:last-of-type {
        color: ${colors.mainBlue};
        font-size: 1rem;
      }
    }
  }
  .gists-list {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      border-bottom: 1px solid grey;
      color: ${colors.mainBlue};
      font-size: 0.6rem;
      padding: 3rem 0;
      a {
        color: ${colors.mainBlue};
        float: right;
        font-size: 2rem;
        text-decoration: none;
        transition: 0.5s linear;
        &:hover {
          text-decoration: underline;
          transition: 0.5s linear;
        }
      }
      span {
        color: ${colors.black};
        display: block;
        font-size: 2rem;
        margin-top: 0.5rem;
      }
    }
  }
`;

const UserPostComponent = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserInput] = useState("");
  const [gistTitle, setGistTitle] = useState("");

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
    if (!data.length) {
      console.log("The user does not have Gists");
    } else {
      for (let i = 0; i < data.length; i++) {
        const listContainer = document.querySelector(".gists-list");
        const listItem = document.createElement("li");
        const title = document.createElement("span");
        const link = document.createElement("a");

        const titles = Object.entries(data[i].files);
        const linkUrl = Object.entries(data[i]);

        link.setAttribute("href", linkUrl[7][1]);
        listContainer.appendChild(listItem).innerHTML = new Date(
          data[i].created_at
        );
        listItem.appendChild(title).innerHTML = titles[0][0];
        title.appendChild(link).innerHTML = "Read";
      }
    }
  };

  const searchFunction = (e) => {
    setUserInput(e.target.value);
  };

  const changeUserUrl = () => {
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
      <Form onSubmit={changeUserUrl}>
        <Form.Group>
          <Form.Input
            className="regular-font"
            placeholder="GitHub Username"
            name="name"
            onChange={searchFunction}
          />
          <Form.Button className="regular-font" content="Search" />
        </Form.Group>
      </Form>

      <article>
        <figure>
          <img src={avatar} alt={userName} />
        </figure>
        <aside>
          <p className="regular-font">{name}</p>
          <p className="light-font">{userName}</p>
        </aside>
        <ul className="gists-list regular-font"></ul>
      </article>
    </section>
  );
};
export default UserPostComponent;
