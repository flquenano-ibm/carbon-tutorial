import React from 'react';
import RepoTable from './RepoTable';

const RepoPage = () => {
  const headers = [
    {
      key: 'name',
      header: 'Name',
    },
    {
      key: 'createdAt',
      header: 'Created',
    },
  ];

  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
      <div className="bx--row repo-page__r1">
        <div className="bx--col-lg-16">
          <RepoTable headers={headers} />
        </div>
      </div>
    </div>
  );
};

export default RepoPage;
