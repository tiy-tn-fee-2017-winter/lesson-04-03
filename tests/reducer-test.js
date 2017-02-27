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

  test('add a snack', (assert) => {
    const emptyState = { snacks: [] };
    const oldState = { snacks: [{ name: 'Doritos' }] };
    const actionOne = { type: 'SNACK@CREATE', data: { name: 'Luna Bar' } };
    const actionTwo = { type: 'SNACK@CREATE', data: { name: 'Clif Bar' } };

    assert.deepEqual(reducer(emptyState, actionOne), { snacks: [actionOne.data] });
    assert.deepEqual(reducer(emptyState, actionTwo), { snacks: [actionTwo.data] });

    assert.deepEqual(reducer(oldState, actionOne), { snacks: [actionOne.data, { name: 'Doritos' }] });
  });

  test('set best cereal', (assert) => {
    const emptyCereal = { cereal: [] };
    const newCereal = { type: 'BEST_CEREAL@SET', data: { name: 'Frosted Flakes' } };

    const oldCereal = { cereal: [] };
    const newerCereal = { type: 'BEST_CEREAL@SET', data: { name: 'Frosted Flakes' } };

    assert.deepEqual(reducer(emptyCereal, newCereal), { cereal: newCereal.data });
    assert.deepEqual(reducer(oldCereal, newerCereal), { cereal: newerCereal.data });
  });
});
