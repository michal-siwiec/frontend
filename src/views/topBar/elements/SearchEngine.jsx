import React, { useState } from 'react';
import useIsMobile from 'hooks/useIsMobile.jsx';
import { tooltipSecondaryText } from 'data/searchEngine.js';
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
      />
      <span
        onMouseEnter={() => setIsTooltipOpen(true)}
        onMouseLeave={() => setIsTooltipOpen(false)}
        className={`${blockName}__tooltip-wrapper`}
      >
        <Tooltip
          headerText="Wyszukiwarka produktów jest nie dostępna!"
          secondaryText={tooltipSecondaryText}
          placement={isMobile ? 'bottom' : 'right'}
          open={isTooltipOpen}
          classNames={`${blockName}__search-engine-tooltip`}
        >
          <i className={`icon-tooltip-prompt ${blockName}__tooltip-prompt`} />
        </Tooltip>
      </span>
    </div>
  );
};

export default SearchEngine;
