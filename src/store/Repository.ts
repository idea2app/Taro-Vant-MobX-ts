import { stringify } from 'query-string';
import { ListModel } from 'mobx-restful';

import { client } from './service';

export type Repository = Record<'full_name' | 'html_url', string>;

export class RepositoryModel extends ListModel<Repository> {
  client = client;
  baseURI = 'orgs/idea2app/repos';

  async loadPage(page: number, per_page: number) {
    const { body } = await this.client.get<Repository[]>(
      `${this.baseURI}?${stringify({ page, per_page })}`
    );
    return { pageData: body! };
  }
}
