import { Cartao, Id, Nome, Btn, Imagem } from "./styles";
import Link from "next/link";

export default function Card( {pokemon} ){
    return(
        <Cartao>
            <Id>{pokemon.id}</Id>
            <Imagem>
                <img 
                    src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                    width="180"
                    height="180"
                    alt={pokemon.name}
                />
            </Imagem>
            <Nome>{pokemon.name}</Nome>
            <Link href={`/pokemon/${pokemon.id}`}>
                <Btn>Saiba Mais</Btn>
            </Link>
        </Cartao>
    )
}