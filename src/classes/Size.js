import Model from './Model';

export default class Size extends Model {
  static modelName = 'size';

  name;

  code;

  constructor({
    id,
    name,
    code,
  }) {
    super({ id });

    this.name = name;
    this.code = code;
  }
}
