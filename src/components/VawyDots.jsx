import { exact, number } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const VawyDots = ({ dotsCount }) => (
  <div className="wave">
    { [...Array(dotsCount)].map(() => <span className="dot" key={uuidv4()} />) }
  </div>
);

VawyDots.propTypes = exact({
  dotsCount: number.isRequired
}).isRequired;

export default VawyDots;
