import React from 'react';

import BirthList from '../components/BirthList';
import EmployList from '../components/EmployList';

export default function EmployeersPage() {
  return (
    <div>
      <div className='ui grid'>
        <EmployList />
        <BirthList />
      </div>
    </div>
  );
}
