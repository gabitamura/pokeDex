import React from 'react';
import { Header, Footer, Card, Container } from "../components"
import Head from "next/head"

export async function getServerSideProps() { //https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
  const URL_pokemon = "https://pokeapi.co/api/v2/pokemon";
  const response = await fetch(`${URL_pokemon}/?limit=30`)
  const data = await response.json()

  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return{
    //propriedade do q vai ser exibido
    props: {
      pokemons: data.results,
    },
  }
}

export default function Home( {pokemons} ) {
  return (
      <>
      <Head>
        <link rel="shortcut icon" href="/pokeball.png" />
        <title>PokeGabi</title>
      </Head>
      
      <Header />
      
      <Container>
        {pokemons?.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </Container>
      
      <Footer />
      </>
  )
}
