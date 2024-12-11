'use client'
import { Sidebar } from "../components/sidebar"
// import  Toolbar  from "../components/toolbar"
import { positionBlock } from "../components/blocks/positionBlock";
import { useState } from "react";
import {positionData} from "../data/positiondata";



//const [isFilter, toggleFilter] = useState(false);

let  filteredPosData:any = [];
const positionList: any = positionData.positionList;




export default function Page(){
    const [filter, setFilter] = useState(positionData.positionList);
    const [filterName, setFilterName] = useState('All');
    const [sort, setSort] = useState('');
    filteredPosData = positionData.positionList;
    //let formattedPositionData = formatPositionData(positionData);

    function Toolbar(page:any) {
        return (
         <div className="toolBar">
          <button className='toolBarButton'>Choose a {page.page} </button>
          <label className='toolBarButton'> Sort 
          <select 
          value={sort}
          onChange={(e) =>{
            setSort(e.target.value)
            sortPositionData(filter, e.target.value)
        }}>
            <option value=''> None </option>
            <option value='order'>A-Z</option>
            <option value='reverse'>Z-A</option>
          </select>
          </label>
          <label className='toolBarButton'>
          Filter
          <select value={filterName} onChange={(e) => filterPositionData(positionList, e.target.value) }>
            <option value='All'>None</option>
            <option value='Goalkeeper'>Goalkeeper</option>
            <option value='Defender'>Defenders</option>
            <option value='Midfielder'>Midfielders</option>
            <option value='Forward'>Forwards</option>
          </select>
          </label>
         </div>
        );
      }
      function sortPositionData(positions: any, sort:any){
        console.log('Sort value', sort);
        let sortedPostData:any = [];
        if (sort == 'order'){
            sortedPostData = positions.sort((a:any,b:any) => a.name.localeCompare(b.name));
            setFilter(sortedPostData);
        } else if (sort == 'reverse') {
            sortedPostData = positions.sort((a:any,b:any) => -1 * a.name.localeCompare(b.name));
            setFilter(sortedPostData);
        } else {
            setFilter(positions);
        }
    }

    function filterPositionData(positions: any, filter: string){
        setSort('');
        setFilterName(filter);
        filteredPosData = [];
        let names:any = [];
        if (filter == 'Goalkeeper' || filter == 'Defender' || filter == 'Midfielder' || filter == 'Forward') {
            positions.forEach((object: { name: string; secondaryName: string[]; abreviation: string; general:string }) => {
                if (object.general === filter){
                filteredPosData.push(object);
                names.push(object.name);
                }
            })
        } else if (filter == 'All'){
            filteredPosData = positionData.positionList;
        }
        setFilter(filteredPosData); 
    
    }
    
    function formatPositionElements(array:any){
        let formattedElements:any = []
        if (array.length > 0){
        array.forEach((object: { name: string; secondaryName: string[]; abreviation: string; }) => {
            formattedElements.push(positionBlock(object.name, object.secondaryName, object.abreviation));
        });
        return formattedElements;
    } else {
        return(<div>No information to display</div>)
    }
    
    }
    function determineFunction(e: any){
        return e.target.outerText
    }
    return (
    <div>
        <Sidebar/>
        <Toolbar page='Position' action={determineFunction}/>
        <div className="displayContainer">
            {formatPositionElements(filter)}
        </div>
    </div>
)
}