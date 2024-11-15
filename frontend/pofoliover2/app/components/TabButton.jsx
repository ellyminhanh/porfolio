import React from 'react'

const TabButton = ({active, selectTab,children}) => {
  const buttonClasses = active ? 'text-white border-b border-orange-400': 'text-[#ADB7BE]'
  return (
    <div>
        <button onClick={selectTab}>
          <p className={`mr-3 font-semibold  ${buttonClasses} `}>
            {children}
          </p>
            
        </button>
    </div>
  )
}

export default TabButton