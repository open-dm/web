import Model from './Model';

export default class Alignment extends Model {
  static modelName = 'alignment';

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
