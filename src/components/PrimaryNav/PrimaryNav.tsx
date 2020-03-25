import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as Icons from 'react-icons/md';
import { useAuth } from 'gatsby-theme-firebase';
import useProfileUrl from '../../hooks/useInviteUrl';
import NavButton from './NavButton';

const query = graphql`
  query PrimaryNav {
    navigation: allNavigationYaml {
      nodes {
        name
        icon
        link
      }
    }
  }
`;

interface QueryResult {
  navigation: {
    nodes: {
      name: string;
      icon: string;
      link: string;
    }[];
  };
}

const PrimaryNav: React.FC = () => {
  const {
    navigation: { nodes }
  } = useStaticQuery<QueryResult>(query);
  const { isLoggedIn } = useAuth();

  return (
    <>
      {nodes.map(item => (
        <NavButton
          key={item.link}
          Icon={Icons[item.icon]}
          to={item.link}
          label={item.name}
        />
      ))}
      {isLoggedIn && [
        <NavButton
          key="nav-profile"
          Icon={Icons.MdInput}
          to="/app/profile"
          label="Profile"
        />,
        <NavButton
          key="nav-log"
          Icon={Icons.MdEdit}
          to="/app/log"
          label="Log Contact"
        />,
        <NavButton
          key="nav-contacts"
          Icon={Icons.MdGroup}
          to="/app/contacts"
          label="Contacts"
        />,
        <NavButton
          key="nav-settings"
          Icon={Icons.MdSettings}
          to="/app/settings"
          label="Settings"
        />
      ]}
    </>
  );
};

export default PrimaryNav;
