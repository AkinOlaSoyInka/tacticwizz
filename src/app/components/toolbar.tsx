'use client'
export default function Toolbar(page:any) {

    return (
     <div className="toolBar">
      <button className='toolBarButton'>Choose a {page.page} </button>
      <button className='toolBarButton'>Sort</button>
      <button className='toolBarButton'>Filter</button>
     </div>
    );
  }