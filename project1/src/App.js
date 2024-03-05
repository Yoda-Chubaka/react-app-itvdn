import React from "react";
import './App.css';
import image from "../src/img/karpathy.jpg";

function App() {

  // const students = [
  //   { name: "John", surname: "Smith", phone: "0675483190" },
  //   { name: "Jack", surname: "Black", phone: "0675488190" },
  //   { name: "Peter", surname: "Potter", phone: "0475483190" },
  //   { name: "Jean", surname: "White", phone: "0675483191" },
  //   { name: "Mike", surname: "Brown", phone: "0675413190" }
  // ]

  // function callName() {
  //   // return "My name is Anastasiia";
  //   console.log("My name is Anastasiia");
  // }

  // const myStyle = {
  //   "color": "red",
  //   "fontWeight": "bold",
  //   "textTransform": "uppercase"
  // }

  // const styles = "green-text";

  // let x = 0;
  
  // function funcForm() {
  //   console.log(this.value)
  // }

  // funcForm();

  const elem1 = React.createElement('h1', {}, "It's React Header");
  const elem2 = React.createElement('p', {}, "Hjkdskl vjkdlsghv opfkj dtsnmbz. Hjkdskl vjkdlsghv opfkj dtsnmbz. Hjkdskl vjkdlsghv opfkj dtsnmbz.");
  const elem3 = React.createElement('img', { src: image, alt: "mounteens", width: 400});

  return (
    <>
      <h1>It's React Header</h1>
      <p>Hjkdskl vjkdlsghv opfkj dtsnmbz. Hjkdskl vjkdlsghv opfkj dtsnmbz. Hjkdskl vjkdlsghv opfkj dtsnmbz.</p>
      <img src={image} alt={'mounteens'} width={400} />
      {elem1}
      {elem2}
      {elem3}
      {/* <button onClick={funcForm}>Form</button> */}
      <form action="">
        <label htmlFor="html">HTML</label>
        <br />
        <input type="text" value="First Name" />
        <input type="text" value="Last Name" />
        <input type="number" value="Mobile phone"/>
        <input type="submit" value="Submit"/>
      </form>
      {/* <p style={myStyle}>Lorem gjskg ajruioewthwn iwopirqghvj newoiqjvwqphbvpivahivheuiap. Lorem gjskg ajruioewthwn iwopirqghvj newoiqjvwqphbvpivahivheuiap. Lorem gjskg ajruioewthwn iwopirqghvj newoiqjvwqphbvpivahivheuiap.
      </p>
      <p className={styles}>Lorem gjskg ajruioewthwn iwopirqghvj newoiqjvwqphbvpivahivheuiap. Lorem gjskg ajruioewthwn iwopirqghvj newoiqjvwqphbvpivahivheuiap. Lorem gjskg ajruioewthwn iwopirqghvj newoiqjvwqphbvpivahivheuiap.
      </p>
      {x === 0 &&
      <h1>Hello world!</h1>} */}
    </>
    // <ul>
    //   {students.map((elem, idx) => <li key={idx}>{elem.name} {elem.surname} {elem.phone}</li>)}
    // </ul>
    // <>
    //   {/*It's my new comment.
    //   There are 2 rows of comment */}
    //   <h1>Hello World!</h1>
    //   <p>It's me!!! Hi!</p>
    //   {/* {callName()}; */}
    //   <button onClick={callName}>Click on me!</button>
    // </>
  );
}

export default App;
