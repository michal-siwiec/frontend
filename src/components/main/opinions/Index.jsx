import React from 'react';
import Rating from '../../reusable/Rating.jsx';
import { useQuery } from '@apollo/client';
import { GET_OPINIONS } from '../../../graphql/queries/opinion';

const Opinions = () => {
  const opinionsBlockName = 'opinions';
  const opinionBlockName = 'opinion';

  const { loading, error, data } = useQuery(GET_OPINIONS);

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>error</h1>

  const { opinions } = data

  return (
    <div className={`main__${opinionsBlockName} ${opinionsBlockName}`}>
      <h2 className={`${opinionsBlockName}__header`}>Opinie</h2>
      <div className={`${opinionsBlockName}__wrapper`}>
        {
          opinions.map(({ content, mark, updatedAt, user: { email } }) => (
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
    </div>
  )
};

export default Opinions;
