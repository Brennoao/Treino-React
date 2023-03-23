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
            avatarUrl={'undefined'}
            followers={1}
            following={1}
            company={'undefined'}
            location={'undefined'}
            email={'undefined'}
            blog={'undefined'}
          />
        </LeftSide>

        <RightSide>
          <Repos>
            <h2>Random Repos</h2>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;