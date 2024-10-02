import {BrowserRouter , Route , Switch} from 'react-router-dom'
import Header from './components/HeaderComponent/Header'
import Footer from './components/FooterComponent/Footer'
import Home from './containers/HomeContainer/Home'
import Collection from './containers/CollectionContainer/Collection'
import Details from './containers/DetailsContainer/Details'
import NotFound from './containers/NotFoundContainer/NotFound'



const App = () =>  (
  
    <BrowserRouter>
      
  
    
        <Switch>

            <Route component={MainLayout(Home)} path='/' exact />
            <Route  component={MainLayout(Collection)} path='/collection/:version' /> 
            <Route  component={MainLayout(Details)} path='/Details/:version/:id' /> 
            <Route component={NotFound}  />

        </Switch>
     
    </BrowserRouter>
  )

  const MainLayout = (WrappedComponent) => {
    return (props) => (
      <div>
      <Header />
      <WrappedComponent {...props}/>
      <Footer />

      </div>
    )
  }



export default App;
