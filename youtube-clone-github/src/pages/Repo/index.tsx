import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Breadcrump, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrump>
        <RepoIcon />
        <Link className={'username'} to={'/aas'}>

        </Link>
        <span>/</span>

        <Link className={'reponame'} to={'/asda/afasad'}></Link>
      </Breadcrump>

      <p></p>
      <Stats>
        <li>
          <StarIcon />
          <p>0</p>
          <span>stars</span>
        </li>

        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={''}>
        <GithubIcon />
        <span>view on Github</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;