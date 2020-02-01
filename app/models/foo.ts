import DS from 'ember-data';

export default class Foo extends DS.Model {
  @DS.attr('string') bar!: string;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'foo': Foo;
  }
}
