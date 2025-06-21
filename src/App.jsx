import { useState } from "react"
import Container from "./components/Container.jsx"
import Content from "./components/Content.jsx";
import Header from "./components/Header.jsx"
import Search from "./components/Search.jsx"
export default function App(){
  const [data,setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  return(
    <div>
      <Container>
        <Header/>
        <Search setData={setData} setIsLoading={setIsLoading}/>
        <Content isLoading = {isLoading} data={data}/>
      </Container>
    </div>
  )
}