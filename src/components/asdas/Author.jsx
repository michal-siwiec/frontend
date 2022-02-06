import React from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_AUTHOR } from '../../graphql/queries/author';

const Author = () => {
  const [getAuthor, { data, error, loading }] = useLazyQuery(GET_AUTHOR, {
    variables: { id: '78e92bc5-0518-4857-93da-196b0230ee9b' }
  })

  if(loading) return <h1>Logind...</h1>
  if(error) return <h1>Something went wrong!</h1>

  return (
    <div className="part">
      <button onClick={() => getAuthor()}>Pobierz autora</button>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>firstName</th>
            <th>lastName</th>
          </tr>
        </thead>
        <tbody>
          {
            data && (
              <tr>
              <td>{data.author.id}</td>
              <td>{data.author.firstName}</td>
              <td>{data.author.lastName}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Author;
