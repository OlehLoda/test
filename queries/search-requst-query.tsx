import gql from "graphql-tag";

const SEARCH_REQUSTS = gql`
  query searchRequests($first: Float, $skip: Float) {
    searchRequests(first: $first, skip: $skip) {
      address {
        id
        name
      }
      business_mail
      business_phone
      business_name
      link_to_map
      link_to_site
      id
      owners_phone
      schedule {
        id
        name
      }
      services
    }
  }
`;
export default SEARCH_REQUSTS;
