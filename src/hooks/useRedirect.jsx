import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useRedirect = ({ path, shouldRedirect }) => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!shouldRedirect) return;

    navigate(path);
  });
};

export default useRedirect;
