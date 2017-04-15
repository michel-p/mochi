import APIUtils from '../utils/APIUtils'
import configuration from '../config';

var API = {  
  authenticate: function(username, password) {
    url_auth = configuration.MOCHI_API_URL
            + "/authenticate.py?username=" + username
            + "&password=" + password;
    return fetch(url_auth)
      .then(APIUtils.checkStatus)
      .then(response => response.json())
      .catch(e => false)
  },
  getMeals: function() {
    url_meals = configuration.MOCHI_API_URL + "/meals.py"
    return fetch(url_meals)
      .then(APIUtils.checkStatus)
      .then(response => response.json())
      .catch(e => false)
  },
  feedMochi: function(username) {
    url_feed = configuration.MOCHI_API_URL + "/feed.py?username=" + username
    return fetch(url_feed)
      .then(APIUtils.checkStatus)
      .then(response => response.json())
      .catch(e => false)
  },
  lightCage: function() {
    url_light = configuration.MOCHI_API_URL + "/light.py"
    return fetch(url_light)
      .then(APIUtils.checkStatus)
      .then(response => response.json())
      .catch(e => false)
  }
}

export { API as default };
