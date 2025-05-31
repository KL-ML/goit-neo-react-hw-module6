import { useState } from 'react';

import Backdrop from '../../components/Backdrop/Backdrop';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Section from '../../components/Section/Section';
import Sidebar from '../../components/Sidebar/Sidebar';
import logoImgPath from '../../images/logo.svg';
import menuItems from '../../data/sidebarMenu.json';
import { Outlet } from 'react-router-dom';

const homeWork = {
  number: '6',
  title: 'Redux basics.',
};

export default function MainLayout() {
  const [mobileMenuStatus, setMobileMenuStatus] = useState(false);

  //open-close mobile menu sidebar
  function updateMobileMenuStatus(mobileMenuStatus) {
    setMobileMenuStatus((mobileMenuStatus = !mobileMenuStatus));
  }
  return (
    <>
      <Section>
        <Header
          logoImgPath={logoImgPath}
          moduleNumber={homeWork.number}
          moduleTitle={homeWork.title}
          onUpdate={updateMobileMenuStatus}
        />
        <Main>
          <Outlet />
        </Main>
        <Footer />
        <Backdrop mobileMenu={mobileMenuStatus}>
          <Sidebar
            menuItems={menuItems}
            variant="mobileMenu"
            mobileMenu={mobileMenuStatus}
            moduleNumber={homeWork.number}
            moduleTitle={homeWork.title}
            onUpdate={updateMobileMenuStatus}
          />
        </Backdrop>
      </Section>
    </>
  );
}
