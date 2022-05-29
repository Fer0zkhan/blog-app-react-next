
import { gql } from "graphql-request";

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export default SLUGLIST;