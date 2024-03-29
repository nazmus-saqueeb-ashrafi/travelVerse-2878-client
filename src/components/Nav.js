/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

import React from 'react'



const navigation = [
  { name: 'Refresh', href: '#', current: true },
  // { name: 'Team', href: '#', current: false },
  // { name: 'Projects', href: '#', current: false },
  // { name: 'Calendar', href: '#', current: false },
]


// add our event listener for the click
const burgerButtonClick = () =>{
  const sidebar = document.querySelector(".sidebarController");

  sidebar.classList.toggle("translate-x-64");
  sidebar.classList.toggle("md:-translate-x-64");

  // ['transform','translate-x-0', 'transition', 'duration-200','ease-in-out'].map(v=> sidebar.classList.toggle(v) )

}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Nav = ({dark,setDark}) => {


    // const darkBtn = ()=>{
    //     setDark('dark')
    // }

    

  

    
  return (
    <Disclosure as="nav" className="bg-gray-300 dark:bg-base-200">
      {({ open }) => (
        <>
          <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
            
            <div className="relative flex items-center justify-between h-16">
                {/* <button onClick={darkBtn}>Dark mode</button> */}
              
              {/* Mobile menu button */}
              <div onClick={burgerButtonClick} className="mobile-menu-button xs:absolute inset-y-0 left-0 flex items-center hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    // <XIcon className="block h-6 w-6" aria-hidden="true" />
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
                
              </div>
              
              {/* <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className={"absolute left-0 top-20"}>
                  <Sidebar/>
                </Disclosure.Panel>
              </Transition> */}
              

              
              <div className="flex-1 flex items-center justify-start ml-5 xl:ml-0 sm:items-stretch sm:justify-start">

                
                  {/* Mobile menu button */}
                  {/* <div className="inset-y-0 left-0 flex items-center ">
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div> */}
                
                
                
                <div className="flex-shrink-0 flex items-center sm:ml-6">
                  <h1 class="font-['Abril'] italic font-medium text-2xl text-sky-600 pb-0 flex flex-col text-center w-full mr-10 sm:mr-5">Travelverse</h1>
                  {/* <h1 class="font-['Abril'] font-bold italic text-5xl text-sky-500">Around the world</h1> */}
                </div>
                  
                {/* refresh button */}
                <div className="hidden sm:block sm:ml-5">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-100 text-gray-400 dark:bg-gray-900 dark:text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              

              {/* rightside */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* notification button */}
                <button
                  type="button"
                  className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 focus:ring-offset-gray-400 dark:focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-400 dark:focus:ring-offset-gray-800 dark:focus:ring-white z-50">
                      <span className="sr-only">Open user menu</span>
                      {/* profile picture */}
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>

                  {/* profile pic menu */}
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <>
                          {/* <Link to="/profile"> */}
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Your Profile
                            </a>
                            
                          {/* </Link> */}

                             <a
                              href="/login"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                             
                            >
                              Logout
                            </a>


                          </>
                          

                          
                        )}
                      </Menu.Item>
                      {/* <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item> */}
                      {/* <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item> */}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          
          {/* nav open after mobile */}
          {/* <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">

              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}

            </div>
            
          </Disclosure.Panel> */}
        </>
      )}
      
    </Disclosure>
  )
}

export default Nav