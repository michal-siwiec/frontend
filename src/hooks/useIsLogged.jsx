import Cookies from 'js-cookie'

// To bardzo naiwna metoda - ktos moze z palca ustawic cookie

const useIsLogged = () => {
  const userID = Cookies.get('user_id');
  if (!userID) return { status: true, userID: "bb00575b-cdbe-45d3-86d3-d680e589de01" };

  return { status: false, userID: null }
};

export default useIsLogged;
