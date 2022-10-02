import logo from './logo.svg';
import './App.css';

function App() {
  //<></> tags are necessary in jsx to enclose within a single tag 
  let name= "Ashu";
  return (
    <> 
    <div className="blank">This is lovely lets render this on out website </div>
    {/* //just type div.name of class u want and enter from suggestion , now suppose the content inside className Blank has to be colored then we go in the App.css and do .(name of class of whom content u want to style so here blank){ color: red; } this way it will be colored and since app.js is importing app.css so change will be reflected  */}
    {/* now suppose we need to make a navbar for our website */}
<h1>
  Welcome {name}  
  {/* now above we have taken curly brackets and whatever is there in the curly bracket is the js so this way also it can be used hence in jsx you can use js along with html*/}
</h1>
<nav>
<li>HOME</li>
<li>ABOUT</li>
<li>CONTACT</li>
</nav>
{/* to use an image the below line of code is used */}
<img src="" alt=""/> 
<div className="container"> 
{/* here just a className container so as to make sure it contanis the para , its like whatever content we need to render on website we have to make sure it gets displayed in a specific way/style so for that we use className which basically invokes and also what content to be rendered between tags as done */}
<p>
  nfdsouowuenfownfnwpfnrnfrenvonervnerojvneorjnvrrrrrrrrrrrrrreookpweeeeeeeeeeeeeeeeeeeeeekfoooooooooooooooooewmcnwwwwwwwwwwwwwjnqjwndnccccccccccccccccccccnashuqwwwwwwwwwwdhiqwh
</p>

</div>


    </>
  );
}

export default App;
