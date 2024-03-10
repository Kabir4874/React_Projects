
import { useState } from 'react'
import './Header.scss'
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/movix-logo.svg';
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import ContentWrapper from '../contentWrapper/ContentWrapper';

const Header = () => {
  const [show,setShow]= useState('top');
  const [lastScrollY,setLastScrollY]= useState(0);
  const [mobileMenu, setMobileMenu]= useState(false);
  const [query,setQuery]=useState('');
  const [showSearch, setShowSearch]= useState('');
  const navigate= useNavigate();
  const location= useLocation();
  return (
    <div>Header</div>
  )
}

export default Header