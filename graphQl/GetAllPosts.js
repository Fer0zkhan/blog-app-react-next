import { gql } from "graphql-request";

const GET_ALL_POSTS_QUERY = gql`
  {
    posts {
      id
      title
      slug
      datePublish
      coverPicture {
        id
        url
      }
      content {
        html
      }
      author {
        id
        name
        avatar {
          id
          url
        }
      }
    }
  }
`;

export default GET_ALL_POSTS_QUERY;