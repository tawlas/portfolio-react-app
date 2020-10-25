import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SideNavItems, SideNavLink } from 'carbon-components-react/lib/components/UIShell';
import { StyledSideNav } from './styles';

const PREFIX_ROUTE = "portfolio-react-app"
const items = [
  { name: 'Me', path: '/' + PREFIX_ROUTE + '/' },
  { name: 'Projects', path: '/' + PREFIX_ROUTE + '/projects'},
  { name: 'Work', path: '/' + PREFIX_ROUTE + '/work' },
  { name: 'Education', path: '/' + PREFIX_ROUTE + '/education' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side navigation">
      <SideNavItems>
        {items.map(i => (
          <SideNavLink
            isActive={
              location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path
            }
            element={Link}
            to={i.path}
            key={i.name}
          >
            {i.name}
          </SideNavLink>
        ))}
      </SideNavItems>
    </StyledSideNav>
  );
};

export default Sidebar;
