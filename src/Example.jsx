const youtuber ="technical";
const favprog = "React JS";

export default youtuber;
// we can only use default in exporting the first one 
export {favprog};
// now in the main file we can directly write 
import youtuber from './App';
// in place of youtuber we can use anything we just have to mention the right destination file
// so there are total 2 elements so our import line will be
import youtuber ,{favprog} from "./App";
import reactDom from 'react-dom';
// similarly if any other elements we wan to add than they will be added with the others in the curly braces
// if we want to access any variable then we directly write
reactDom.render(
<>
<ol>
    <li>{ques.default}</li>
    <li>{ques.favprog}</li>
    <li>{ques.myName()}</li>
    <li>{ques.myNames()}</li>
</ol>
</>
);
// another method is
import  * as ques from "./App";
//now in question everything is stored

