import { gql, useQuery } from '@apollo/client'
import Persons from './modules/Persons'
import PersonForm from './modules/PersonForm'
import { ALL_PERSONS } from './services/queries'

const App = () => {
  const result = useQuery(ALL_PERSONS, {
    pollInterval: 2000
  })

  if (result.loading)  {
    return <div>loading...</div>
  }

  return (
    <div>
    <Persons persons={result.data.allPersons}/>
    <PersonForm />
    </div>
  )
}

export default App