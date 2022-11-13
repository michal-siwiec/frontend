import React, { Fragment } from 'react';
import { Tooltip as MuiTooltip } from '@mui/material';
import { exact, string, bool, element } from 'prop-types';

const Tooltip = ({ headerText, secondaryText, open, placement, children, classNames, id }) => {
  const blockName = 'tooltip';

  return (
    <MuiTooltip
      open={open}
      arrow
      placement={placement}
      classes={{ popper: `${blockName} ${classNames}` }}
      id={id}
      title={(
        <Fragment>
          <h2 className={`${blockName}__header`}>{headerText}</h2>
          <p className={`${blockName}__text`}>{secondaryText}</p>
        </Fragment>
      )}
    >
      {children}
    </MuiTooltip>
  );
};

Tooltip.propTypes = exact({
  headerText: string.isRequired,
  secondaryText: string,
  open: bool.isRequired,
  placement: string,
  classNames: string,
  children: element.isRequired,
  id: string
}).isRequired;

Tooltip.defaultProps = {
  placement: 'top',
  secondaryText: null,
  classNames: '',
  id: null
};

export default Tooltip;
