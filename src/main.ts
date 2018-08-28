import { sayHello } from "./greet";

function showHello(divId: string, name: string){
  const element = document.getElementById(divId);
  element.innerText = sayHello(name);
}

showHello("greeting","Typescript");