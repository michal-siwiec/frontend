import Basket from './elements/basket/Basket.jsx';
import Logo from './elements/Logo.jsx';
import Authorization from './elements/Authorization.jsx';
import MenuList from './elements/MenuList.jsx';

const DesktopContent = () => {
  const blockName = 'top-bar-elements';

  return (
    <div className={blockName}>
      <Logo />
      <Authorization />
      <MenuList />
      <Basket />
    </div>
  );
};

export default DesktopContent;
