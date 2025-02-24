import React, { useState } from 'react';
import useIsMobile from 'hooks/useIsMobile.jsx';
import { TOOLTIP_SECONDARY_TEXT } from 'data/uiElements.js';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TextInput from 'components/inputs/TextInput.jsx';
import Tooltip from 'components/Tooltip.jsx';

const SearchEngine = () => {
  const blockName = 'top-bar-elements';
  const isMobile = useIsMobile();
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  return (
    <div className={`${blockName}__search-engine`}>
      <TextInput
        placeholder="Wyszukaj produktów"
        classNames="text-input--search-engine"
        value=""
        disabled
        onChange={() => {}}
        isDisabled
        dataCy="topbar-search-engine"
      />
      <span
        onMouseEnter={() => setIsTooltipOpen(true)}
        onMouseLeave={() => setIsTooltipOpen(false)}
        className={`${blockName}__tooltip-wrapper`}
      >
        <Tooltip
          headerText="Wyszukiwarka produktów jest nie dostępna!"
          secondaryText={TOOLTIP_SECONDARY_TEXT}
          placement={isMobile ? 'bottom' : 'right'}
          open={isTooltipOpen}
          classNames={`${blockName}__search-engine-tooltip`}
          id="search-engine-tooltip"
        >
          <LiveHelpIcon className={`${blockName}__tooltip-prompt`} data-cy="search-engine-prompt" />
        </Tooltip>
      </span>
    </div>
  );
};

export default SearchEngine;
