import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './pages/main';
//import Col from './components/Col';
import Display from './components/Display';
import SearchForm from './components/SearchForm';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import API from './utils/API';
import "./App.css";


class App extends React.Component {

  state = { employees: [], search: '' };

  componentDidMount() {
    API.search()
      .then((res) => {
        console.log(res);
        this.setState({
          employees: res.data.results.map((e, i) => ({
            firstName: e.name.first,
            lastName: e.name.last,
            picture: e.picture.large,
            email: e.email,
            phone: e.phone,
            city: e.location.city,
            key: i,
          })),
        });
      })
      .catch((err) => console.log(err));
  }

  refreshPage() {
    window.location.reload(false);
  }

  searchEmployee = (filter) => {
    console.log('Search', filter);
    const filteredList = this.state.employees.filter((employee) => {
      // merge data together, then check to see if employee exists
      let values = Object.values(employee).join('').toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    // Update the employee list with the filtered value
    this.setState({ employees: filteredList });
  };

  handleInputChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log('Handle ', this.state.search);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Button Clicked', this.state.search, e);
    this.searchEmployee(this.state.search);
  };


  render() {
    return (
      <Router>
        <div className="App">
          <Wrapper>
            <Navbar />
            <Route exact path="/" component={Main} />
            <Route exact path="/main" component={Main} />
          </Wrapper>
        </div>
        <SearchForm />
        {[...this.state.employees].map((item) => (
                  <Display
                    picture={item.picture}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    email={item.email}
                    phone={item.phone}
                    city={item.city}
                    key={item.key}
                  />
                ))}
      </Router>
    );
  }
}

export default App;