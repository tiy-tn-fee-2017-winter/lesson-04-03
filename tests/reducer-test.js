import reducer from '../app/reducer';

module('reducer', () => {
  test('default state', (assert) => {
    assert.deepEqual(reducer(null, {}), { snacks: [] }, 'default state');
  });

  test('load all snacks', (assert) => {
    const oldState = { snacks: [] };
    const actionOne = { type: 'SNACK@FIND_ALL', data: [1, 2, 3] };
    const actionTwo = { type: 'SNACK@FIND_ALL', data: [{ name: 'Luna Bar' }] };

    assert.deepEqual(reducer(oldState, actionOne), { snacks: actionOne.data });
    assert.deepEqual(reducer(oldState, actionTwo), { snacks: actionTwo.data });
  });
// Change
  test('load all snacks with old snacks', (assert) => {
    const oldState = { snacks: [] };
    const existingList = { snacks: [9, 5] };
    const actionOne = { type: 'SNACK@FIND_ALL', data: [1, 2, 3] };
    const actionTwo = { type: 'SNACK@FIND_ALL', data: [{ name: 'Luna Bar' }] };

    assert.deepEqual(reducer(oldState, actionOne), { snacks: actionOne.data });
    assert.deepEqual(reducer(oldState, actionTwo), { snacks: actionTwo.data });
    assert.deepEqual(reducer(existingList, actionOne), { snacks: existingList.snacks + actionOne.data });
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
});
