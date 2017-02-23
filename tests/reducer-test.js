import reducer from '../app/reducer';

module('reducer', () => {
  test('default state', (assert) => {
    assert.deepEqual(reducer(null, {}), { snacks: [], bestCereal: null }, 'default state');
  });

  test('load all snacks', (assert) => {
    const oldState = { snacks: [] };
    const actionOne = { type: 'SNACK@FIND_ALL', data: [1, 2, 3] };
    const actionTwo = { type: 'SNACK@FIND_ALL', data: [{ name: 'Luna Bar' }] };

    const prvState = { snacks: [] };
    const actionThree = { type: 'SNACK@FIND_ALL', data: [1, 2, 3, 7] };

    assert.deepEqual(reducer(oldState, actionOne), { snacks: actionOne.data });
    assert.deepEqual(reducer(oldState, actionTwo), { snacks: actionTwo.data });
    assert.deepEqual(reducer(prvState, actionThree), { snacks: actionThree.data });
  });

  test('add a snack', (assert) => {
    const emptyState = { snacks: [] };
    const oldState = { snacks: [{ name: 'Doritos' }] };
    const actionOne = { type: 'SNACK@CREATE', data: { name: 'Luna Bar' } };
    const actionTwo = { type: 'SNACK@CREATE', data: { name: 'Clif Bar' } };

    assert.deepEqual(reducer(emptyState, actionOne), { snacks: [actionOne.data] });
    assert.deepEqual(reducer(emptyState, actionTwo), { snacks: [actionTwo.data] });

    assert.deepEqual(reducer(oldState, actionOne), { snacks: [actionOne.data, { name: 'Doritos' }] });
  });

  test('track best cereals', (assert) => {
    const bestCereal = { cereal: [] };
    const actionOne = { type: 'BEST_CEREAL', data: { name: 'Smores' } };  // Some more of what?

    assert.deepEqual(reducer(bestCereal, actionOne), { cereal: actionOne.data });
  });
});
