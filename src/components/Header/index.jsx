import { StyledHeader } from './styles';
import { FiAlignJustify } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import logo from '../../assets/marvel.png';

export default function Header() {
  return (
    <div>
      <StyledHeader>
        <FiAlignJustify />
        <img src={logo} alt="" />
        <AiOutlineShoppingCart />
      </StyledHeader>
    </div>
  );
}
