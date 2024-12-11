import Link from 'next/link';

export function Sidebar() {
  return (
   <div className="sideBar">
    <h1 className="sideBarHeader"><Link href="/start">TacticWizz</Link></h1>
    <button className='sideBarButton'>Formations</button>
    <button className='sideBarButton'>Positions</button>
    <button className='sideBarButton'>Players</button>
   </div>
  );
}