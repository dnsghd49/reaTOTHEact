import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  emps: function () {
    return axios.get('https://randomuser.me/api/?results=20&nat=us');
  },
};
