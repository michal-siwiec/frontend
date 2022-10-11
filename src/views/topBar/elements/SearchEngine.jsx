import React from 'react';
import TextInput from 'components/inputs/TextInput.jsx';

const SearchEngine = () => {
  const blockName = 'top-bar-elements';

  return (
    <div className={`${blockName}__search-engine`}>
      <TextInput
        placeholder="Wyszukaj produktów"
        classNames="text-input--search-engine"
        value=""
        onChange={() => {}}
      />
    </div>
  );
};

export default SearchEngine;
