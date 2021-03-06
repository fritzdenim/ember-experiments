import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('student-list', 'Integration | Component | student list', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{student-list}}`);

  assert.equal(this.$('button:eq(0)').text().trim(), 'Remove', 'has Remove');
  assert.equal(this.$('button:eq(1)').text().trim(), 'Reset','has Reset');

  // Template block usage:
  // this.render(hbs`
  //   {{#student-list}}
  //     template block text
  //   {{/student-list}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
