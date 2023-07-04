import { Fragment } from "react";
import Card from "./components/Card/Card";
import swPosterImg from "./assets/sw-poster.jpg"
import esbPosterImg from "./assets/esb-poster.jpg"
import rotjPosterImg from "./assets/rotj-poster.jpg"

export default function App(){
  return(
    <Fragment>
      <Card title="Pôster: Star Wars (1977)" posterImage={swPosterImg}/>
      <Card title="Pôster: Empire Stikes Back (1980)" posterImage={esbPosterImg}/>
      <Card title="Pôster: Return of the Jedi (1983)" posterImage={rotjPosterImg}/>
    </Fragment>
  )
}