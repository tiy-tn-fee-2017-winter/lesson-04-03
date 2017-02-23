export default class SnackFormView {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    // Listen for submit events...
    this.el.addEventListener('submit', (ev) => {
      // Stop the browser's default behavior
      ev.preventDefault();

      // Collect the form data
      const data = {
        name: this.el.querySelector('.snack-form__name').value,
        taste: this.el.querySelector('.snack-form__taste').value,
        sweetness: this.el.querySelector('.snack-form__sweetness').value,
        texture: this.el.querySelector('.snack-form__texture').value,
      };

      this.store.dispatch({ type: 'SNACK@CREATE', data });
    });
  }
}
