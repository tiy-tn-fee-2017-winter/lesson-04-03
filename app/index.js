import 'whatwg-fetch';
import store from './store';
import AppController from './controller/app';

// Look up the app element
const appEl = document.querySelector('.app');

// Make a new app controller
const app = new AppController(appEl, store);
// Start the app controller
app.created();

// Hook up the form to listen for submit events and dispatch an action to redux
// Get all of the snacks and create list items for each one
// On each list item listen for a delete event
