import Cookies from 'js-cookie'

// To bardzo naiwna metoda - ktos moze z palca ustawic cookie

const useIsLogged = () => {
  const userID = Cookies.get('user_id');
  if (userID) return true;

  return true;
};

export default useIsLogged;
