import axios from 'axios';
import { formatUrl } from '@/helpers/url';

export default class Model {
  id;

  static modelName;

  static list(params) {
    return new Promise((resolve, reject) => {
      axios.get(formatUrl(`/api/${this.modelName}/list/`),
        {
          params,
        })
        .then(({ data }) => {
          resolve(data.map((record) => new this(record)));
        }).catch((error) => {
          reject(error);
        });
    });
  }

  static retrieve(id) {
    return new Promise((resolve, reject) => {
      axios.get(formatUrl(`/api/${this.modelName}/retrieve/${id}`))
        .then(({ data }) => {
          resolve(new this(data));
        })
        .catch((error) => {
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
