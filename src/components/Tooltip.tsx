import React, { Fragment, ReactElement } from 'react';
import { Tooltip as MuiTooltip } from '@mui/material';
import { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip';

type TooltipProps = {
  headerText: string,
  secondaryText?: string,
  open: boolean,
  placement?: MuiTooltipProps['placement'],
  children: ReactElement,
  classNames?: string,
  id?: string
}

const Tooltip = ({ headerText, secondaryText = '', open, placement = 'top', children, classNames = '', id = undefined }: TooltipProps) => {
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

export default Tooltip;
