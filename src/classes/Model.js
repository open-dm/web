import axios from 'axios';
import { formatUrl } from '@/helpers/url';

export default class Model {
  id;

  static modelName = 'monster';

  static list() {
    return new Promise((resolve, reject) => {
      axios.get(formatUrl(`/api/${this.modelName}/list/`))
        .then(({ data }) => {
          resolve(data.map((record) => new this(record)));
        }).catch((error) => {
          reject(error);
        });
    });
  }

  constructor({
    id,
  }) {
    this.id = id;
  }
}
