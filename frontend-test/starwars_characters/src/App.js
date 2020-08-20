import React from 'react';
import { useQuery } from '@apollo/client';
import GET_ALL_PERSON from './services/queries';
import PersonList from './components/personList';

function App() {
  const { loading, error, data } = useQuery(GET_ALL_PERSON, {
    variables: { first: 10 },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  const { allPersons } = data;

  return (
    <div>
      <PersonList persons={allPersons} />
    </div>
  );
}

export default App;
