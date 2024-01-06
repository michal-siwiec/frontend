import { isEmpty } from 'lodash';

const validateOpinion = ({ opinion }) => !isEmpty(opinion);

export default validateOpinion;
