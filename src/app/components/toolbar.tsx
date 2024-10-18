export function Toolbar(page: string) {
    return (
     <div className="toolBar">
      <button className='toolBarButton'>Choose a {page}</button>
      <button className='toolBarButton'>Sort</button>
      <button className='toolBarButton'>Filter</button>
     </div>
    );
  }