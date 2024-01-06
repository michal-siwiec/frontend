import React from 'react';
import { exact, arrayOf, shape, string, number, node } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Opinion from './Opinion.jsx';

const OpinionsList = ({ opinions }) => {
  const blockName = 'opinions';

  return (
    <div className={`${blockName}__opinion-list-wrapper`}>
      { opinions.map((opinion, index) => <Opinion opinionsData={opinion} index={index} key={uuidv4()} />) }
    </div>
  );
};

OpinionsList.propTypes = exact(
  arrayOf(
    shape({
      content: string.isRequired,
      mark: number.isRequired,
      updatedAt: string.isRequired,
      user: shape({
        email: string.isRequired,
        avatars: arrayOf(node)
      })
    })
  )
).isRequired;

export default OpinionsList;
