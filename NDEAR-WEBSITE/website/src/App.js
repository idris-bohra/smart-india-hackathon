import { BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Ndear_registration from '../src/components/Ndear.js/Ndear_registration'
import Ndear_login from '../src/components/Ndear.js/Ndear_login'
import School_registration from '../src/components/School/School_registration'
import School_login from '../src/components/School/School_login'
import Gov from './components/government header/GovermentOfIndia'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Teachers_registration from './components/Teachers/Teachers_registration'
import Ndear_logged_in from './components/Ndear.js/Ndear_logged_in';
import SchoolHome from './components/School/SchoolHome';
import TeachersdetailsforSchool from './components/Teachers/TeachersdetailsforSchool';
import SelectClassandSection from './components/Ndear.js/SelectClassandSection';
import SelectClassandSectionforschool from './components/School/SelectClassandSectionforschool'
import ShowMealofschool from './components/Scanneddoc/ShowMealofschool';
import ShowResourceofschool from './components/Scanneddoc/ShowResourceofschool';
import ShowMealforNdear from './components/Scanneddoc/ShowMealforNdear'
import ShowResourcesforNdear from './components/Scanneddoc/ShowResourcesforNdear'
import ShowTeachersforNdear from './components/Teachers/ShowTeachersforNdear'
import Notfound from './components/Notfound'


function App() {


  return (
    <>
    <Gov/>
    <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/adminregistration">
            <Ndear_registration/>
          </Route>
          <Route exact path="/adminlogin">
            <Ndear_login/>
          </Route>
          <Route exact path="/ndear/schools">
            <Ndear_logged_in/>
          </Route>
          <Route exact path="/ndear/school/attendance/:id">
            <SelectClassandSection/>
          </Route>
          <Route exact path="/ndear/school/middaymealrecords/:id">
            <ShowMealforNdear/>
          </Route>
          <Route exact path="/ndear/school/resources/:id">
            <ShowResourcesforNdear/>
          </Route>
          <Route exact path="/ndear/school/teachers/:id">
            <ShowTeachersforNdear/>
          </Route>

          {/* SCHOOL ROUTES */}

          <Route exact path="/schoolregistration">
            <School_registration/>
          </Route>
          <Route exact path="/schoollogin">
            <School_login/>
          </Route>
          <Route exact path="/schoolhome">
            <SchoolHome/>
          </Route>
          <Route exact path="/school/createuser">
            <Teachers_registration/>
          </Route>
          <Route exact path="/school/teachers">
            <TeachersdetailsforSchool/>
          </Route>
          <Route exact path="/school/mealconsumption">
            <ShowMealofschool/>
          </Route>
          <Route exact path="/school/resources">
            <ShowResourceofschool/>
          </Route>
          <Route exact path="/school/attendence">
            <SelectClassandSectionforschool/>
          </Route>

          {/* FOR NOT FOUND PAGE */}

          <Route exact path="*">
            <Notfound/>
          </Route>
        </Switch>
    </Router>
    <Footer/>
   </>

  );
}

export default App;
