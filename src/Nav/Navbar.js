import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import styled, { useTheme } from 'styled-components';
import Link from 'next/link';
import { BiUserCircle } from 'react-icons/bi';

const Navbar = () => {
  const { t } = useTranslation();
  const LinkList = [
    { link: t('common:navigation.intro'), href: '/intro' },
    { link: t('common:navigation.findroom'), href: '/findroom' },
    { link: t('common:navigation.postroom'), href: '/postroom' },
    { link: t('common:navigation.customerService'), href: '/customerService' },
  ];
  const [offset, setOffset] = useState(0);
  const [screenNavHeight] = useState(window.innerHeight * 0.1);
  const [covered, setCovered] = useState(false);

  useEffect(() => {
    if (offset > screenNavHeight) {
      setCovered(true);
    } else {
      setCovered(false);
    }
  }, [offset]);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <NavWrapper covered={covered}>
      <NavContainer>
        <Link href="/">
          <a>
            <NavName>{t('common:companyName')}</NavName>
          </a>
        </Link>
        <NavLinkContainer>
          {LinkList.map((list, index) => {
            return (
              <Link href={list.href} key={index}>
                <a>
                  <NavLinkText>{list.link}</NavLinkText>
                </a>
              </Link>
            );
          })}
        </NavLinkContainer>

        <NavUserContainer>
          <BiUserCircle />
          <h3>
            <b>경재</b>님. 환영합니다.
          </h3>
        </NavUserContainer>
      </NavContainer>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  position: fixed;
  top:0;
  width: 100vw;
  height: 10vh;
  margin: 0 auto;
  background-color: ${({ theme, covered }) => covered ? theme.colors.primary : theme.colors.white};
`;
const NavContainer = styled.div`
  max-width: 1300px;
  height: 10vh;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NavName = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  flex: 1;
  color: ${({ theme }) => theme.colors.secondary};
`;
const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NavLinkText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: ${({ theme }) => theme.margin.xl};
  color: ${({ theme }) => theme.colors.white};
`;
const NavUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    background: transparent;
    width: 3.5rem;
    height: 3.5rem;
    cursor: pointer;
  }
  h3 {
    margin-top: ${({ theme }) => theme.margin.s};
    font-size: 1.2rem;
    b {
      color: ${({ theme }) => theme.colors.grey};
      background-color: transparent;
      font-size: 1.3rem;
    }
  }
`;

export default Navbar;
