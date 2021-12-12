import React from 'react';
import { gql, useQuery } from '@apollo/client';

const Books = () => {
  const GET_BOOKS = gql(`
    query {
      books: getBooks {
        id,
        title,
        comments {
          id,
          content
        },
        authors {
          id,
          firstName
        }
      }
    }
  `)

  // Pooling - odpytywanie
  // const { loading, error, data } = useQuery(GET_BOOKS, {
  //   pollInterval: 4000
  // })

  const { loading, error, data, refetch } = useQuery(GET_BOOKS)

  if(loading) return <h1>Logind...</h1>
  if(error) return <h1>Something went wrong!</h1>

  return (
    <div className="part">
      {/* Ponowne odpytywanie - refetching */}
      <button onClick={() => refetch()}>Refetch</button>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>authors</th>
            <th>comments</th>
          </tr>
        </thead>
        <tbody>
          {data.books.map(book => {
            return (
              <tr>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>
                  {book.authors.map(author => author.firstName).join(', ')}
                </td>
                <td>
                  {book.comments.map(comment => comment.content).join(', ')}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Books;
