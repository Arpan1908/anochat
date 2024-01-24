import Togglecolor from './Tooglecolor';
import Views from './Views';
import {Grid,GridItem,Tabs} from '@chakra-ui/react'
import Sidebar from './Home/Sidebar';


function Home() {
  return (
    <Grid templateColumns="repeat(10,1fr)" h="100vh" as={Tabs}>
      <GridItem colSpan="3" borderRight="solid 1px gray">
        <Sidebar />
      </GridItem>
      <GridItem colSpan="7"></GridItem>
    </Grid>
  );
}

export default Home;
