import reducer from '../app/reducer';

module('reducer', () => {
  test('default state', (assert) => {
    assert.deepEqual(reducer(null, {}), { snacks: [] }, 'default state');
  });

  test('load all snacks', (assert) => {
    const oldState = { snacks: [{ name: 'tabs' }] };
    const actionOne = { type: 'SNACK@FIND_ALL', data: { name: 'spaces' } };
    const actionTwo = { type: 'SNACK@FIND_ALL', data: { name: 'Luna Bar' } };

    assert.deepEqual(reducer(oldState, actionOne), { snacks: [actionOne.data, ...oldState.snacks] });
    assert.deepEqual(reducer(oldState, actionTwo), { snacks: [actionTwo.data, ...oldState.snacks] });
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

test('default cereal', (assert) => {
  const emptyState = { bestCereal: null };
  const actionOne = { type: 'BEST_CEREAL@FIND' };
  assert.equal(reducer(emptyState, actionOne), null);
});

test('set best cereal', (assert) => {
  const emptyState = { bestCereal: null };
  const actionOne = { type: 'BEST_CEREAL@SET', data: { bestCereal: 'Frosted Flakes' } };
  const actionTwo = { type: 'BEST_CEREAL@SET', data: { bestCereal: 'Capn Crunch' } };
  assert.equal(reducer(emptyState, actionOne), 'Frosted Flakes');
  assert.equal(reducer(emptyState, actionTwo), 'Capn Crunch');
});
