import {Navbar,Welcome,Dock} from "#components";
import { TerminalWithWrapper } from "#windows";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import { SafariWithWrapper } from "#windows";

gsap.registerPlugin(Draggable);
const App = () => {
    return (
        <main>
            <Navbar />   
            <Welcome />   
            <Dock />
            <TerminalWithWrapper />
            <SafariWithWrapper />
        </main> 
    );
}
export default App;