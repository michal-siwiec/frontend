import React, { useState } from 'react';
import Rating from '../../reusable/Rating.jsx';
import { useQuery } from '@apollo/client';
import { GET_OPINIONS } from '../../../graphql/queries/opinion';
import { ADD_OPINION } from '../../../graphql/mutations/opinion';
import useIsLogged from '../../../hooks/useIsLogged.jsx';

const Opinions = () => {
  const opinionsBlockName = 'opinions';
  const opinionBlockName = 'opinion';
  const addOpinionBlockName = 'add-opinion';

  const { loading, error, data } = useQuery(GET_OPINIONS);
  // alternatywnie mozna to tez trzymac w redux - chociaz moze to zly pomysl bo stan z reduxa sie traci
  const isLogged = useIsLogged();
  const [addedOpinion, setAddedOpinion] = useState('')

  const handleAddOpinionOnChange = ({ target: { value } }) => {
    setAddedOpinion(value);
  };

  const handleAddOpinionSubmit = () => {
    console.log('submit')
  };

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>error</h1>

  return (
    <div className={`main__${opinionsBlockName} ${opinionsBlockName}`}>
      <h2 className={`${opinionsBlockName}__header`}>Opinie</h2>
      <div className={`${opinionsBlockName}__wrapper-list`}>
        {
          data.opinions.map(({ content, mark, updatedAt, user: { email } }) => (
            <div className={`${opinionBlockName}`}>
              <div className={`${opinionBlockName}__picture`} />
              <div className={`${opinionBlockName}__user-name`}>{email}</div>
              <div className={`${opinionBlockName}__user-email`}>{email}</div>
              <div className={`${opinionBlockName}__updated-at`}>{updatedAt}</div>
              <div className={`${opinionBlockName}__mark`}>
                <Rating value={mark} readOnly />
              </div>
              <div className={`${opinionBlockName}__content-wrapper`}>
                <p className={`${opinionBlockName}__content`}>{content}</p>
              </div>
            </div>
          ))
        }
      </div>
      {
        isLogged && (
          <div className={`${addOpinionBlockName}__wrapper`}>
            <h2 className={`${addOpinionBlockName}__header`}>Dodaj opinie</h2>
            <textarea
              className={`${addOpinionBlockName}__textarea`}
              value={addedOpinion}
              onChange={handleAddOpinionOnChange}
            />
            <div>
              <input
                type="submit"
                value="Wyślij"
                className={`${addOpinionBlockName}__input-submit`}
                onClick={handleAddOpinionSubmit}
              />
            </div>
          </div>
        )
      }
    </div>
  )
};

export default Opinions;
