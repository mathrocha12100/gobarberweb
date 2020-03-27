import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Notifications from '~/components/Notifications';
import logo from '~/assets/logo2.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const avatar = profile.avatar
    ? profile.avatar.url
    : `https://api.adorable.io/avatars/50/${profile.name}.png`;

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="gobarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img src={avatar} alt={profile.name} />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
