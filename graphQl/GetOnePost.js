import { gql } from "graphql-request";

const GET_ONE_POST = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      datePublish
      author {
        id
        name
        avatar {
          id
          url
        }
      }
      content {
        html
      }
      coverPicture {
        id
        url
      }
    }
  }
`;

export default GET_ONE_POST;