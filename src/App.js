import {BrowserRouter , Route , Switch} from 'react-router-dom'
import Header from './components/HeaderComponent/Header'
import Footer from './components/FooterComponent/Footer'
import Home from './containers/HomeContainer/Home'


const App = () =>  (
    <BrowserRouter>
      <Header />
        <Switch>

            <Route component={Home} path='/' exact />
            <Route component={() => <p>not found</p>}  />

        </Switch>
      <Footer />

    </BrowserRouter>
  )


export default App;
