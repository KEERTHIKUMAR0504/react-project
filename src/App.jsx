import { useReducer } from "react";
import "./App.css";

export default function App() {
  const users = [
    {
      name: "Sivakumar",
      pic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    },
    {
      name: "Valarmathi",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwHvEGamFasFcudDxAlTzNzd2ZsSRKsmf4Uw&usqp=CAU",
    },
    {
      name: "Keerthi",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUKPmu8M0apKcy1oABXStYt3eHAbDCoLsC9OASEYxJXCaDMmSy3IYnujBENMZXQznsSNY&usqp=CAU",
    },
  ];
  return (
    <div className="App">
      {users}.map((usr) = (
      <Welcome name={usr.name} pic={usr.pic} />
      ))
    </div>
  );
}

// function Welcome({name,pic}){
//   // const {name, pic} = props;
//   return(
//     <div>
//       <img alt={name} className="pro-pic" src={pic}/>
//       <h1>Hello,{name}😎✔ </h1>
//     </div>
