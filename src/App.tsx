import Navbar from './navbar';
import About from './about';
import Experience from './experience';
import Contact from './contact';
import Projects from './Projects';
import Footer from './footer';

function App() {

// useEffect(() => {


// async function postData() {

//  let postURL="https://jsonplaceholder.typicode.com/posts";
//  let getURL="https://jsonplaceholder.typicode.com/todos/1";

//  .............. get request using axios in reactJs..................
//  let response=await axios.get(getURL);
//  console.log(response.data);
 
// let postingOBJ={
//   userINFO:{
//   firstName:'farhad',
//   lastName:"Khan",
//   bloodGropt:'A+',
//   age:25,
//   email:'farhadkhan@gmail.com',
//   },
//   userADDRESS:
//   {
// address:"h13",
// city:"Islamabad",
// country:"Pakistan",
//   }
// }
//  ............... post request using axios in reactJs ...............
// let response=await axios.post(postURL,postingOBJ);
  
// console.log('post response',response);
// let data=response.data.userINFO;
// console.log('back data fetched',data);
// for (const key in data) {
  // console.log(`${key}: ${data[key]}`);
  // You can also access nested properties like this:
  // }
// }

//  let response=await fetch(postURL,{
//   method:"POST",
//   headers:{
//     'content-type':'application/json',
//   },
//   body:JSON.stringify({
//     name:'taib',
//     age:22,
//     email:'taib.khan323@gmail.com',
//   })

//  });
//  let data=await response.json();
//  console.log('back data fetched',data);

// }

// postData()
// },[])

  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
