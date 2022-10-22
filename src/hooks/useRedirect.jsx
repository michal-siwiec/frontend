import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useRedirect = ({ path, shouldRedirect }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!shouldRedirect) return;

    navigate(path);
  });
};

export default useRedirect;
