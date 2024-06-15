const ele=React.createElement("div",
{id:"heading",className:"head"},  //Attributes
"Hello from React");

const nestedelement=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
    React.createElement("h1",{},"I am nested child")
    )
)

console.log(nestedelement)

//console.log(ele);  //return js object
const reactroot=ReactDOM.createRoot(document.getElementById("reactroot"));
reactroot.render(nestedelement) //render just take js object->react element and convert into html element