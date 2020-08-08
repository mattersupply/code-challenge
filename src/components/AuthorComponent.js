import ButtonCreateNewPostComponent from "../components/ButtonCreateNewPostComponent";

const AuthorComponent = () => (
  <article>
    <figure>
      <img src="/images/profile-image.png" alt="" />
      <figcaption>
        <h4>Austin Kleon</h4>
        <p>Post</p>
      </figcaption>
    </figure>
    <ButtonCreateNewPostComponent />
  </article>
);

export default AuthorComponent;
