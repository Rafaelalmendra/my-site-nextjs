import Container from "./style";

const Content = ({ post }) => (
  <Container>
    {post?.content?.map((content) => (
      <>
        {content?.subtitle ? <h2>{content?.subtitle}</h2> : null}
        {content?.text ? <p>{content?.text}</p> : null}
        {content?.image ? (
          <img src={content?.image?.url} alt={content.image?.alt} />
        ) : null}
        {content?.link ? <p>{content?.link}</p> : null}
        {content?.urlLink ? (
          <a href={content?.urlLink} target="_blank" rel="noopener noreferrer">
            {content?.link}
            {content?.urlLink}
          </a>
        ) : null}
      </>
    ))}
  </Container>
);

export default Content;
