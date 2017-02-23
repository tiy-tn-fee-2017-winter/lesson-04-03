// app/controller/app.js
import SnackFormView from '../view/snack-form';

export default class AppController {
  constructor(el, store) {
    this.el = el;
    this.store = store;

    // Maybe initialize some other classes/objects
    this.snackForm = new SnackFormView(this.el.querySelector('.snack-form'), this.store);
  }

  // We'll manually fire this when the app is done being created
  created() {
    // Listen for changes in the store and save them in local storage
    this.store.subscribe(() => {
      // Save the list of snacks as a JSON String in localstorage
      const snacks = this.store.getState().snacks;
      window.localStorage.snacks = JSON.stringify(snacks);
    });

    // Get the stringified list of snacks or a default of an empty array
    const dataString = window.localStorage.snacks || '[]';
    // Dispatch FIND_ALL to the store with the data loaded from localstorage
    this.store.dispatch({ type: 'SNACK@FIND_ALL', data: JSON.parse(dataString) });

    // "mount" (Start up) views
    this.snackForm.mounted();
  }
}
