import reducer from '../app/reducer';

module('reducer', () => {
  test('default state', (assert) => {
    assert.deepEqual(reducer(null, {}), { snacks: [], cereal: null }, 'default state');
  });

  test('load all snacks', (assert) => {
    const oldState = { snacks: [] };
    const oldStateTwo = { snacks: ['x'] };
    const actionOne = { type: 'SNACK@FIND_ALL', data: [1, 2, 3] };
    const actionTwo = { type: 'SNACK@FIND_ALL', data: [{ name: 'Luna Bar' }] };
    const actionThree = { type: 'SNACK@FIND_ALL', data: [1, 2, 3, 'x'] };

    assert.deepEqual(reducer(oldState, actionOne), { snacks: actionOne.data });
    assert.deepEqual(reducer(oldState, actionTwo), { snacks: actionTwo.data });
    assert.deepEqual(reducer(oldStateTwo, actionThree), { snacks: actionThree.data });
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

  test('trackBestCereal', (assert) => {
    const bestCereal = { cereal: null };
    const actionOne = { type: 'BEST_CEREAL', data: { name: 'Oatmeal' } };


    assert.deepEqual(reducer(bestCereal, actionOne), { cereal: { name: 'Oatmeal' } });
  });
});
