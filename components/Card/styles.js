import styled from "styled-components";

export const Cartao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25%;
  padding: 3em 1em;
  border-radius: 4em;
  border: 1px solid #ed5564;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
  background-color: #c8c8c8 ;
  margin-bottom: 4vw;
  color: #4a4a4a;
  transition: 0.6s;
  &:hover{
    box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.5);
  }
`;

export const Id = styled.p`
  font-size: 1.1em;
  border-radius: 50%;
  background-color: white;
  padding: 0.5em;
  width: 1em;
  height: 1em;
  text-align: center;
  margin: 0;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #ed5564;
  font-weight: bold;
  box-shadow: 4px 4px 10px #6b6b6b;
`;

export const Nome = styled.p`
  text-transform: capitalize;
  font-size: 2em;
  font-weight: bold;
  font-family: sans-serif;
  margin: 1vw 0;
  text-shadow: 1px 1px 2px white;
`;

export const Btn = styled.button`
  text-decoration: none;
  color: black;
  background: white;
  border-radius: 1em;
  padding: 0.6em 1.6em;
  font-weight: 500;
  transition: 0.4s;
  font-size: 1em;
  &:hover{
    background-color: #ed5564;
    cursor: pointer;
    color: white;
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
  }
`;

export const Imagem = styled.image`
  padding: 1vw;
  margin-top: 1vw;
`