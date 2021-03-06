import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | jumbo', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders jumbo component properly', async function (assert) {
    await render(hbs`
      <Jumbo>
        Hello world
      </Jumbo>
    `);

    assert.dom('.jumbo').exists();
    assert.dom('.jumbo').hasText('Hello world');
    assert.dom('.jumbo .tomster').exists();
  });
});
