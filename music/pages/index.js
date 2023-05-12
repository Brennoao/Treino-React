import Head from 'next/head';
import apiSpotify, { getTokenSilently } from '../services/apiSpotify';
import styles from '../styles/Home.module.css';

export default function Home({ Artista }) {

  console.log(Artista)
  return (
    <div>

    </div>
  )
}

export async function getServerSideProps(context) {
  const token = await getTokenSilently();
  console.log(token)

  const Artistas = await apiSpotify.get('/artists', { headers: {Authorization: `Bearer ${token}`,},});
  const Artista = Artistas.data.artists;

  return {
    props: { Artista }, // will be passed to the page component as props
  }
}