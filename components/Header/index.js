import { Cabecalho, Titulo, Logo, Links } from "./styles";
import Link from "next/link";

export default function Header(){
    return(
        <Cabecalho>
            <div style={{display: "flex"}}>
            <Logo>
                <img src={"/pokeball.png"} width="50" height="50"/>
            </Logo>
            <Titulo>PokeDex</Titulo>
            </div>
            <div style={{display: "flex"}}>
            <Links>
                <Link href="https://github.com/gabitamura/pokeDex"><img src={"/github.png"} width="50" height="50"/></Link>
            </Links>
            <Links style={{marginRight: "1vw"}}>
                <Link href="/"><img src={"/home.png"} width="40" height="40"/></Link>
            </Links>
            </div>
        </Cabecalho>
    )
}