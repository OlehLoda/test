import gql from "graphql-tag";

const LOGIN_WITH_LOGIN_PASS = gql`
  mutation loginWidthLoginPass($login: String!, $password: String!) {
    loginWidthLoginPass(login: $login, password: $password)
  }
`;
export default LOGIN_WITH_LOGIN_PASS;
