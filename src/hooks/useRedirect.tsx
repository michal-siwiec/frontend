import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type useRedirectProps = { path: string, shouldRedirect: boolean };

const useRedirect = ({ path, shouldRedirect }: useRedirectProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!shouldRedirect) return;

    navigate(path);
  });
};

export default useRedirect;
