import { StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import { ViewResources } from 'aurelia-framework';

import { Bar } from '../../src/bar';

describe('the app', () => {
  let component;
  let au;

  beforeEach(() => {
    component = StageComponent
      .withResources('foo')
      .inView('<foo></foo>');

    component.bootstrap(aurelia => {
      aurelia.use.standardConfiguration();

      // aurelia.container.unregister(Bar);

      au = aurelia;
    });
  });

  it('should render foo without bar', done => {
    component.create(bootstrap).then(() => {
      const vrs = au.container.get(ViewResources);
      console.log(Object.keys(vrs.elements).join(','));

      const h1s = document.querySelectorAll('h1');
      console.log(document.querySelector('#target-div'));
      console.log(au.container.hasResolver(Bar));

      expect(h1s.length).toBe(1);
      done();
    }).catch(e => { console.log(e.toString()); });
  });

  afterEach(() => {
    component.dispose();
  });
});
