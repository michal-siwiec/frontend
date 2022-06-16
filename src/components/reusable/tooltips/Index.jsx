import React, { Fragment } from 'react';
import { Tooltip as MuiTooltip } from '@mui/material/';
import { propTypes, defaultProps } from './types';

const Tooltip = ({
  headerText,
  secondaryText,
  open,
  placement,
  children,
}) => {
  const blockName = 'tooltip';

  return (
    <MuiTooltip
      open={open}
      arrow
      placement={placement}
      classes={{ popper: blockName }}
      title={
        <Fragment>
          <h2 className={`${blockName}__header`}>
            {headerText}
          </h2>
          <p className={`${blockName}__text`}>
            {secondaryText}
          </p>
        </Fragment>
      }
    >
      {children}
    </MuiTooltip>
  )
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
