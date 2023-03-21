import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';
import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={'Brennoao'}
            name={'Brenno Alves'}
            avatarUrl={''}
            followers={1}
            following={1}
            company={''}
            location={''}
            email={undefined}
          />
        </LeftSide>

        <RightSide></RightSide>
      </Main>
    </Container>
  );
}

export default Profile;