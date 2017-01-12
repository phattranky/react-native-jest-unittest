import React from 'react';
import renderer from 'react-test-renderer';

import RepoItem from '../../../app/components/RepoItem';
import { repos } from '../../../mockData/repos';

it('renders a RepoItem using Snapshots', () => {
  expect(renderer.create(
    <RepoItem
      repo={repos[0]}
      selectRepo={jest.fn()}
    />
  )).toMatchSnapshot();
});

it('renders a selected RepoItem using Snapshots', () => {
  expect(renderer.create(
    <RepoItem
      isSelected
      repo={repos[0]}
      selectRepo={jest.fn()}
    />
  )).toMatchSnapshot();
});
