import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// TODO: uninstall propTypes after migrating to TS

type VawyDotsProps = {
  dotsCount: number
}

const VawyDots = ({ dotsCount }: VawyDotsProps) => (
  <div className="wave">
    { [...Array(dotsCount)].map(() => <span className="dot" key={uuidv4()} />) }
  </div>
);

export default VawyDots;
