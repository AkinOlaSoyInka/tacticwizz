import { Sidebar } from "../components/sidebar"
import { Toolbar } from "../components/toolbar"



export default function Page(){
    return (
    <div>
        <Sidebar/>
        {Toolbar('Position')}
    </div>
)
}