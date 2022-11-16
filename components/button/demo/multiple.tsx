import React from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';

const onMenuClick: MenuProps['onClick'] = e => {
  console.log('click', e);
};

const items = [
  {
    key: '1',
    label: '1st item',
  },
  {
    key: '2',
    label: '2nd item',
  },
  {
    key: '3',
    label: '3rd item',
  },
];

const App: React.FC = () => (
  <>
    <Button type="primary">primary</Button>
    <Button>secondary</Button>
    <Dropdown.Button menu={{ items, onClick: onMenuClick }}>Actions</Dropdown.Button>
  </>
);

export default App;