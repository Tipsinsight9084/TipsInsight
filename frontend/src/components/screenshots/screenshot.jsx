import BasicExample from "./screenshot_card"
import MI from '../../assets/MI.png'
import NavBar from "../navbarr"
import Heading from "../Heading"
export default function Screenshot(){

  let previous_heading_wc24 = "T20 World Cup 2024"
    return(
        <>
        <NavBar/>
        <Heading heading={previous_heading_wc24}/>
        <div className="grid grid-cols-3">
        <BasicExample League="IPL" matchno={1} imgsrc={MI} des="MI won by 8 wickets"/>
        <BasicExample League="IPL" matchno={1} imgsrc={MI} des="MI won by 8 wickets"/>
        <BasicExample League="IPL" matchno={1} imgsrc={MI} des="MI won by 8 wickets"/>

        <BasicExample League="IPL" matchno={1} imgsrc={MI} des="MI won by 8 wickets"/>
        
        </div>
        </>
    )
}