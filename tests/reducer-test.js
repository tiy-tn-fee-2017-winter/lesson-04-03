import reducer from '../app/reducer';

module('reducer', () => {
  test('default state', (assert) => {
    assert.deepEqual(reducer(null, {}), { snacks: [] }, 'default state');
  });

  test('load all snacks', (assert) => {
    const oldState = { snacks: [] };
    const actionOne = { type: 'SNACK@FIND_ALL', data: [1, 2, 3] };
    const actionTwo = { type: 'SNACK@FIND_ALL', data: [{ name: 'Luna Bar' }] };


    const prvState = {snacks: [7]};
    const actionThree = { type: 'SNACK@FIND_ALL', data: [1,2,3,7] };


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
});

test('track best cereal', (assert) => {
  const bestCereal =  { snacks: null };
  const actionOne = {type: 'SNACK@BEST_CEREAL', data: null}

  assert.deepEqual(reducer(bestCereal, actionOne), null);
})

test('testing to see if best cereal SETS', (assert) => {
  const oldState = { snacks: null };
  const actionOne = { type: 'SNACK@SET_CEREAL', data: { snacks: 'Smores' } };

  assert.deepEqual(reducer(oldState, actionOne), 'Smores')
})
