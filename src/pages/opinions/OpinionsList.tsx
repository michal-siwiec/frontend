import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Opinions } from 'types/opinion';
import Opinion from './Opinion.jsx';

type OpinionsListProps = { opinions: Opinions }

const OpinionsList = ({ opinions }: OpinionsListProps) => {
  const blockName = 'opinions';

  return (
    <div className={`${blockName}__opinion-list-wrapper`}>
      { opinions.map((opinion, index) => <Opinion opinionsData={opinion} index={index} key={uuidv4()} />) }
    </div>
  );
};

export default OpinionsList;
