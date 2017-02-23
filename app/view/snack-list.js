class ItemView {
  constructor(data, store) {
    this.data = data;
    this.store = store;

    this.el = document.createElement('li');
    this.el.classList.add('grid__item');
    this.el.innerHTML = `
    <div class="snack-card">
      <h2 class="snack-card__name"></h2>

      <p class="snack-card__taste">Taste 5/10</p>
      <p class="snack-card__sweetness">Sweetness 5/10</p>
      <p class="snack-card__texture">Texture 5/10</p>
    </div>`;
  }

  mounted() {}

  render() {
    this.el.querySelector('.snack-card__name').innerText = this.data.name;
    this.el.querySelector('.snack-card__taste').innerText = `Taste ${this.data.taste}/10`;
    this.el.querySelector('.snack-card__sweetness').innerText = `Sweetness ${this.data.sweetness}/10`;
    this.el.querySelector('.snack-card__texture').innerText = `Texture ${this.data.texture}/10`;

    // Maybe change the color of the card with MATHS!!!
    const score = (parseInt(this.data.taste) + parseInt(this.data.sweetness) + parseInt(this.data.texture)) / 3;

    if (score < 5) {
      this.el.querySelector('.snack-card').classList.toggle('snack-card--garbage');
    } else if (score < 8) {
      this.el.querySelector('.snack-card').classList.toggle('snack-card--average');
    } else {
      this.el.querySelector('.snack-card').classList.toggle('snack-card--excellent');
    }
  }
}

export default class SnackListView {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    // Listen for the snacks list to change...
    this.store.subscribe(() => {
      // Re-Render
      this.render();
    });
  }

  // How do we translate data into UI?
  render() {
    // Clear the grid
    this.el.innerHTML = '';
    const snacks = this.store.getState().snacks;

    // Loop through snacks array
    snacks.forEach((current) => {
      // Create a new item view...
      const view = new ItemView(current, this.store);
      view.mounted();
      view.render();

      // Add the view's element into the list element
      this.el.appendChild(view.el);
    });
  }
}
