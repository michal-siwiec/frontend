export const generateTooltipHeaderText = ({ index, selectedAvatar }) => selectedAvatar === index
  ? 'Główny avatar'
  : 'Oznacz jako główny avatar';

export const generateTooltipSecondaryText = ({ index, selectedAvatar }) => selectedAvatar === index
  ? 'Główny avatar jest wyświetlany jako zdjęcie profiowe'
  : 'Główny avatar bedzie uzywany jako zdjecie profilowe.';
