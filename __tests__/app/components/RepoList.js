import React from 'react';
import renderer from 'react-test-renderer';

import RepoList from '../../../app/components/RepoList';
import { repos } from '../../../mockData/repos';

it('renders a RepoList using Snapshots', () => {
  const component = renderer.create(
    <RepoList
      repos={repos}
      selectRepo={jest.fn()}
    />
  );
  expect(component).toMatchSnapshot();
});
