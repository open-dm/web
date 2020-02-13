import Model from './Model';

export default class Monster extends Model {
  static modelName = 'monster';

  name;

  size;

  challenge;

  alignment;

  constructor({
    id,
    name,
    size,
    challenge,
    alignment,
  }) {
    super({ id });

    this.name = name;
    this.size = size;
    this.challenge = challenge;
    this.alignment = alignment;
  }

  test() {
    console.log(this.id, this.name);
  }
}
