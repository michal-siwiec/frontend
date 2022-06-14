export const formattedPhoneNUmber = (phoneNumber) => {
  const dividedPartLength = 3;
  let initial = '';
  
  const cut = (i) => `${phoneNumber.substr(i * 3, dividedPartLength)} `;

  for (let i = 0; i < 3; i++) {
    initial += cut(i);
  };

  return initial;
};
