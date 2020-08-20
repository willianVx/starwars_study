import { gql } from '@apollo/client';

const GET_ALL_PERSON = gql`
  query getAllPerson($first: Int!) {
    allPersons(first: $first) {
      id
      name
      hairColor
      eyeColor
      birthYear
    }
  }
`;

export default GET_ALL_PERSON;
