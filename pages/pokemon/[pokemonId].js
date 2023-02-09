import { Header, Title, Poke, Type, TextTitle, Text } from "../../components"
import Head from "next/head"

export const getStaticPaths = async () => {
    const URL_pokemon = "https://pokeapi.co/api/v2/pokemon";
    const response = await fetch(`${URL_pokemon}/?limit=31`)
    const data = await response.json()
  
    const paths = data.results.map((pokemon, index) => {
      return {
        params: { pokemonId: index.toString() }, 
      }
    })
  
    return {
      paths,
      fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.pokemonId
  
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  
    const data = await res.json()
  
    return {
      props: { pokemon: data },
    }
  }


export default function Pokemon({ pokemon }){
    return(
        <>
        <Head>
          <link rel="shortcut icon" href="/pokeball.png" />
          <title>PokeGabi</title>
        </Head> 

        <Header/>
        
          <Poke>

            <Title>{pokemon.name}</Title>

                <img 
                    src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                    width="300"
                    height="300"
                    alt={pokemon.name}
                    style={{margin: "1em auto"}}
                />

                <div style={{display: "flex", flexDirection: "column"}}>

                  <div style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "auto"}}>
                    {pokemon.types.map((item, index) => (
                      <Type key={index}>
                          {item.type.name}
                      </Type>
                    ))}
                  </div>
                
                  <div style={{display: "flex", flexDirection: "row", margin: "auto"}}>
                    <TextTitle>Altura: </TextTitle>
                    <Text>{pokemon.height * 10} cm</Text>
                  </div>

                  <div style={{display: "flex", flexDirection: "row", margin: "auto"}}>
                    <TextTitle>Peso: </TextTitle>
                    <Text>{pokemon.weight} g</Text>
                  </div>
                  
                </div>

          </Poke>

        </>
    )
}