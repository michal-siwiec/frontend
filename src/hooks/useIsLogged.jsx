// To bardzo naiwna metoda - ktos moze z palca ustawic cookie

const useIsLogged = () => {
  const userID = localStorage.getItem("userID")
  if (userID) return true;

  return false;
};

export default useIsLogged;
