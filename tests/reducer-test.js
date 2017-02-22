import reducer from '../app/reducer';

module('reducer', () => {
  test('default state', (assert) => {
    assert.deepEqual(reducer(null, {}), { snacks: [] }, 'default state');
  });

  test('load all snacks', (assert) => {
    const oldState = { snacks: [] };
    const actionOne = { type: 'SNACK@FIND_ALL', data: [1, 2, 3] };
    const actionTwo = { type: 'SNACK@FIND_ALL', data: [{ name: 'Luna Bar' }] };

    assert.deepEqual(reducer(oldState, actionOne), { snacks: [1, 2, 3] });
    assert.deepEqual(reducer(oldState, actionTwo), { snacks: [{ name: 'Luna Bar' }] });
  });

  test('add a snack', (assert) => {
    const emptyState = { snacks: [] };
    const oldState = { snacks: [{ name: 'Doritos' }] };
    const actionOne = { type: 'SNACK@CREATE', data: { name: 'Luna Bar' } };
    const actionTwo = { type: 'SNACK@CREATE', data: { name: 'Clif Bar' } };

    assert.deepEqual(reducer(emptyState, actionOne), { snacks: [{ name: 'Luna Bar' }] });
    assert.deepEqual(reducer(emptyState, actionTwo), { snacks: [{ name: 'Clif Bar' }] });

    assert.deepEqual(reducer(oldState, actionOne), { snacks: [{ name: 'Luna Bar' }, { name: 'Doritos' }] });
  });
});
