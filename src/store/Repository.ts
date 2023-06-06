import { components } from '@octokit/openapi-types';
import { ListModel } from 'mobx-restful';
import queryString from 'query-string';

import { client } from './service';

export type Organization = components['schemas']['organization-full'];
export type Repository = components['schemas']['minimal-repository'];

export class RepositoryModel extends ListModel<Repository> {
  client = client;
  baseURI = 'orgs/idea2app/repos';

  async loadPage(page: number, per_page: number) {
    const { body: pageData } = await this.client.get<Repository[]>(
      `${this.baseURI}?${queryString.stringify({
        type: 'public',
        sort: 'pushed',
        page,
        per_page
      })}`
    );
    const [, organization] = this.baseURI.split('/');

    const { body } = await this.client.get<Organization>(
      `orgs/${organization}`
    );
    return { pageData: pageData!, totalCount: body!.public_repos };
  }
}

export default new RepositoryModel();
