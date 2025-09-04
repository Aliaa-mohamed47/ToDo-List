import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router";
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
import { FaTrash } from "react-icons/fa";

const { Search } = Input;
const colorOptions = [
  { name: 'Red', value: 'red' },
  { name: 'Green', value: 'green' },
  { name: 'Blue', value: 'blue' },
];

const App = () => {
  const navigate = useNavigate();
  const [upcomingCount, setUpcomingCount] = useState(0);
  const [todayCount, setTodayCount] = useState(0);
  const [showSticky, setShowSticky] = useState(false);
  const [stickies, setStickies] = useState([]);
  const [lists, setLists] = useState([]);
  const [showAddList, setShowAddList] = useState(false);
  const [newListName, setNewListName] = useState('');
  const [newListColor, setNewListColor] = useState('red');
  const [showAllLists, setShowAllLists] = useState(false);
  const [showSignOutModal, setShowSignOutModal] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const listKey = currentUser ? `lists_${currentUser.email}` : "lists_guest";
  const stickyKey = currentUser ? `stickies_${currentUser.email}` : "stickies_guest";

  useEffect(() => {
    const savedLists = JSON.parse(localStorage.getItem(listKey)) || [
      { id: 1, name: 'Work', color: 'red' },
      { id: 2, name: 'Personal', color: 'blue' }
    ];
    setLists(savedLists);

    const savedStickies = JSON.parse(localStorage.getItem(stickyKey)) || [];
    setStickies(savedStickies);

    calculateCounts();
    window.addEventListener("storage", calculateCounts);
    return () => window.removeEventListener("storage", calculateCounts);
  }, []);

  const calculateCounts = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const key = currentUser ? `tasks_${currentUser.email}` : "tasks_guest";
    const savedTasks = JSON.parse(localStorage.getItem(key)) || { today: [], tomorrow: [], thisWeek: [] };
    const upcoming = savedTasks.today.filter(t => !t.completed).length +
                     savedTasks.tomorrow.filter(t => !t.completed).length +
                     savedTasks.thisWeek.filter(t => !t.completed).length;
    const today = savedTasks.today.filter(t => !t.completed).length;
    setUpcomingCount(upcoming);
    setTodayCount(today);
  };

  const addSticky = (text) => {
    const newStickies = [...stickies, { id: Date.now(), text }];
    setStickies(newStickies);
    localStorage.setItem(stickyKey, JSON.stringify(newStickies));
  };

  const deleteSticky = (id) => {
    const newStickies = stickies.filter(s => s.id !== id);
    setStickies(newStickies);
    localStorage.setItem(stickyKey, JSON.stringify(newStickies));
  };

  const handleAddList = () => {
    if (newListName.trim() === '') return;
    const newList = { id: Date.now(), name: newListName, color: newListColor };
    const updatedLists = [...lists, newList];
    setLists(updatedLists);
    localStorage.setItem(listKey, JSON.stringify(updatedLists));
    setNewListName('');
    setNewListColor('red');
    setShowAddList(false);
  };

  const handleDeleteList = (id) => {
    if(window.confirm("هل أنتِ متأكدة أنك تريدين حذف هذه القائمة؟")){
      const updatedLists = lists.filter(list => list.id !== id);
      setLists(updatedLists);
      localStorage.setItem(listKey, JSON.stringify(updatedLists));
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("currentUser");
    navigate("/"); // الرجوع للصفحة الرئيسية بعد تسجيل الخروج
  };

  const visibleLists = lists.filter(list => list.name !== 'Hobby' && list.name !== 'Shopping');

  const items = [
    {
      key: 'tasks',
      label: (
        <div className="flex flex-col gap-2 pl-10 text-black">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-lg text-black pt-8">Menu</span>
            <AiOutlineMenu />
          </div>
          <Search placeholder="Search" size="small" className="rounded-full" />
          <span className="font-semibold text-black mt-2 pt-7">Tasks</span>
        </div>
      ),
      type: 'group',
      children: [
        { key: '1', label: (
          <div className="pl-10 flex justify-between items-center text-gray-secondary">
            <div className="flex items-center gap-2">
              <AiOutlineDoubleRight />
              <Link to="/UpcomingPage">Upcoming</Link>
            </div>
            <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">
              {upcomingCount}
            </span>
          </div>
        ) },
        { key: '2', label: (
          <div className="pl-10 flex justify-between items-center text-gray-secondary">
            <div className="flex items-center gap-2">
              <AiOutlineUnorderedList />
              <Link to="/TodayPage">Today</Link>
            </div>
            <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">
              {todayCount}
            </span>
          </div>
        ) },
        { key: '3', label: (
          <div className="pl-10 flex items-center gap-2 text-gray-secondary">
            <AiOutlineCalendar />
            <Link to="/CalendarPage">Calendar</Link>
          </div>
        ) },
        { key: '4', label: (
          <div
            className="pl-10 flex items-center gap-2 text-gray-secondary cursor-pointer"
            onClick={() => setShowSticky(true)}
          >
            <MdStickyNote2 /> Sticky Wall
          </div>
        ) },
      ],
    },
    {
      key: 'lists',
      label: <span className="pl-10 text-black">Lists</span>,
      type: 'group',
      children: [
        ...(showAllLists ? visibleLists : visibleLists.slice(0,2)).map(list => ({
          key: `list-${list.id}`,
          label: (
            <div className="flex items-center justify-between w-[242px] h-[28px] bg-gray-100 rounded-full ml-7 pl-2 group">
              <div className="flex items-center gap-2">
                <span className="inline-block w-4 h-3 rounded-full" style={{ backgroundColor: list.color }}></span>
                {list.name}
              </div>
              <FaTrash
                className="text-red-500 opacity-0 group-hover:opacity-100 cursor-pointer mr-2"
                onClick={() => handleDeleteList(list.id)}
              />
            </div>
          )
        })),
        visibleLists.length > 2 && {
          key: 'view-toggle',
          label: (
            <span
              className="ml-7 flex items-center gap-2 text-blue-500 cursor-pointer"
              onClick={() => setShowAllLists(!showAllLists)}
            >
              {showAllLists ? 'View Less' : 'View More'}
            </span>
          )
        },
        { key: 'add-new', label: (
          <span
            className="ml-7 flex items-center gap-2 text-gray-secondary cursor-pointer"
            onClick={() => setShowAddList(true)}
          >
            <AiOutlinePlusCircle /> Add New List
          </span>
        ) },
      ],
    },
    { key: 'settings', label: <span className="pl-5 text-black flex items-center gap-2 pt-15 text-xl"><AiOutlineAlignCenter className="rotate-180" /> Settings</span>, type: 'group', children: [] },
    { key: 'signout', label: <span className="pl-5 text-black flex items-center gap-2 text-xl cursor-pointer" onClick={() => setShowSignOutModal(true)}><FiLogOut /> Sign Out</span>, type: 'group', children: [] },
  ];

  const StickyInput = ({ onAdd }) => {
    const [text, setText] = useState("");
    const handleAdd = () => {
      if (text.trim() !== "") {
        onAdd(text);
        setText("");
      }
    };
    return (
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="flex-1 border p-2 rounded"
          placeholder="Add a sticky..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 rounded"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    );
  };

  return (
    <div style={{ width: 346, height: 764, display: 'flex', flexDirection: 'column' }}>
      <Menu
        className="!bg-gray rounded-menu [&_.ant-menu-item:hover]:!bg-transparent [&_.ant-menu-item-selected]:!bg-transparent"
        defaultSelectedKeys={[]}
        mode="inline"
        defaultOpenKeys={['tasks', 'lists']}
        items={items}
        style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
      />

      {showAddList && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="absolute inset-0 bg-black opacity-30" onClick={() => setShowAddList(false)}></div>
          <div className="bg-white p-4 rounded shadow-md w-[250px] relative z-10">
            <h2 className="font-bold mb-2">Add New List</h2>
            <input type="text" className="border p-2 rounded w-full mb-2" placeholder="List Name" value={newListName} onChange={e => setNewListName(e.target.value)} />
            <select className="border p-2 rounded w-full mb-2" value={newListColor} onChange={e => setNewListColor(e.target.value)}>
              {colorOptions.map(color => <option key={color.value} value={color.value}>{color.name}</option>)}
            </select>
            <button className="bg-blue-500 text-white px-4 py-1 rounded w-full" onClick={handleAddList}>Add</button>
          </div>
        </div>
      )}

      {showSticky && (
        <div className="fixed inset-0 flex justify-center items-start pt-20 z-50">
          <div className="absolute inset-0 backdrop-blur-sm" onClick={() => setShowSticky(false)}></div>
          <div className="bg-white rounded-lg w-[400px] max-h-[600px] overflow-y-auto p-4 relative z-10">
            <button className="absolute top-2 right-2 text-xl font-bold" onClick={() => setShowSticky(false)}>×</button>
            <h2 className="text-xl font-bold mb-4">Sticky Wall</h2>
            <StickyInput onAdd={addSticky} />
            <div className="mt-4 flex flex-col gap-2">
              {stickies.map(sticky => (
                <div key={sticky.id} className="p-2 bg-yellow-200 rounded relative group">
                  {sticky.text}
                  <button
                    className="absolute top-1 right-1 text-red-600 opacity-0 group-hover:opacity-100 cursor-pointer"
                    onClick={() => { if(window.confirm("هل أنتِ متأكدة أنك تريدين حذف هذا sticky؟")) deleteSticky(sticky.id); }}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* مودال التأكيد على Sign Out */}
      {showSignOutModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="bg-white p-6 rounded shadow-md relative z-10 w-[300px] text-center">
            <h2 className="font-bold mb-4">Are you sure you want to Sign out?؟</h2>
            <div className="flex justify-around mt-4">
              <button className="bg-red-500 text-white px-4 py-1 rounded" onClick={handleSignOut}>Yes</button>
              <button className="bg-gray-300 px-4 py-1 rounded" onClick={() => setShowSignOutModal(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;