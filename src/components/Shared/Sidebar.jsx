import React from 'react';
import { Menu, Input } from 'antd';
import { 
  AiOutlineUnorderedList,
  AiOutlineCalendar,
  AiOutlinePlusCircle,
  AiOutlineDoubleRight,
  AiOutlineAlignCenter,
  AiOutlineMenu
} from 'react-icons/ai';
import { MdStickyNote2 } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";


const { Search } = Input;

const items = [
  {
    key: 'tasks',
    label: (
      <div className="flex flex-col gap-2 pl-10 text-black">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-lg text-black pt-8">Menu</span>
          {/* <span className="flex flex-col items-center gap-1 pt-8">
            <span className="w-[18px] h-[1px] bg-gray-secondary"></span>
            <span className="w-[18px] h-[1px] bg-gray-secondary"></span>
            <span className="w-[18px] h-[1px] bg-gray-secondary"></span>
            <span className="w-[18px] h-[1px] bg-gray-secondary"></span>
          </span> */}
          <AiOutlineMenu />
        </div>
        <Search placeholder="Search" size="small" className="rounded-full" />
        <span className="font-semibold text-black mt-2 pt-7">Tasks</span>
      </div>
    ),
    type: 'group',
    children: [
      { key: '1', label: <span className="pl-10 flex items-center gap-2 text-gray-secondary"><AiOutlineDoubleRight />Upcoming</span> },
      { key: '2', label: <span className="pl-10 flex items-center gap-2 text-gray-secondary"><AiOutlineUnorderedList />Today</span> },
      { key: '3', label: <span className="pl-10 flex items-center gap-2 text-gray-secondary"><AiOutlineCalendar />Calendar</span> },
      { key: '4', label: <span className="pl-10 flex items-center gap-2 text-gray-secondary"><MdStickyNote2 />Sticky Wall</span> },
    ],
  },
  {
    key: 'lists',
    label: <span className="pl-10 text-black">Lists</span>,
    type: 'group',
    children: [
      { key: '5', label: (
        <span className="flex items-center gap-2 w-[242px] h-[28px] bg-gray rounded-full ml-7 pl-1">
          <span className="inline-block w-4 h-3 rounded-full bg-red"></span>
          Work
        </span>
      )},
      { key: '6', label: (
        <span className="flex items-center gap-2 w-[242px] h-[28px] bg-gray rounded-full ml-7 pl-1">
          <span className="inline-block w-4 h-3 rounded-full bg-blue"></span>
          Personal
        </span>
      )},
      { key: '7', label: (
        <span className="flex items-center gap-2 w-[242px] h-[28px] bg-gray rounded-full ml-7 pl-1">
          <span className="inline-block w-4 h-3 rounded-full bg-green"></span>
          Study
        </span>
      )},
      { key: '8', label: <span className="ml-7 flex items-center gap-2 text-gray-secondary"><AiOutlinePlusCircle />Add New List</span> },
    ],
  },
  {
    key: 'settings',
    label: <span className="pl-5 text-black flex items-center gap-2 pt-15 text-xl"><AiOutlineAlignCenter className="rotate-180" /> Settings</span>,
    type: 'group',
    children: [],
  },
  {
    key: 'signout',
    label: <span className="pl-5 text-black flex items-center gap-2 text-xl"><FiLogOut /> Sign Out</span>,
    type: 'group',
    children: [],
  }
];


const App = () => {
  const onClick = e => {
    console.log('click ', e);
  };

  return (
    <div style={{ width: 346, height: 764, display: 'flex', flexDirection: 'column' }}>
      <Menu
        onClick={onClick}
        className="rounded-menu"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['tasks', 'lists']}
        mode="inline"
        items={items}
        style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
      />
    </div>
  );
};

export default App;
