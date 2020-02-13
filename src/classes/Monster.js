import Model from './Model';

export default class Monster extends Model {
  static modelName = 'monster';

  name;

  size;

  challenge;

  alignment;

  abilites;

  constructor({
    id,
    name,
    size,
    challenge,
    alignment,
    abilities,
  }) {
    super({ id });

    this.name = name;
    this.size = size;
    this.challenge = challenge;
    this.alignment = alignment;
    this.abilities = abilities;
  }

  test() {
    console.log(this.id, this.name);
  }
}
