import React, { useRef } from "react";

function UseRefComponent() {
  const emailRef = useRef(null);
  const textrea = useRef(null);
  const nameRef = useRef(null);

  function btn() {
    emailRef.current.value = "";
    textrea.current.value = "";
  }

  const color = () => {
    if (nameRef.current.value !== "") {
      nameRef.current.style.border = "1px solid green";
    } else {
      nameRef.current.style.border = "1px solid red";
    }
    if (emailRef.current.value !== "") {
      emailRef.current.style.border = "1px solid green";
    } else {
      emailRef.current.style.border = "1px solid red";
    }
    if (textrea.current.value !== "") {
      textrea.current.style.border = "1px solid green";
    } else {
      textrea.current.style.border = "1px solid red";
    }
  };

  let stuleImput = {
    
  }

  return (
    <div>
      <label style={{ display: "flex", flexDirection: "column" }}>
        <input ref={nameRef} type="text" placeholder="name" />
        <input ref={emailRef} type="email" placeholder="email" />
        <textarea ref={textrea} placeholder="message" />
        <div style={{display: 'flex', margin: '20px', gap: '20px'}}>
            <button onClick={btn} style={{background: 'red'}} >Очистить</button>
        <button onClick={color} style={{background: 'green'}}>submit</button>
        </div>
      </label>
    </div>
  );
}

export default UseRefComponent;

/*Завдання:
Створи форму з полями:Ім’я, Email, Повідомлення (textarea) та кнопку очисти, 
 при кліку на кнопку очищувати emailm textarea.  
 Також додати кнопку submit при кліку на яку підсвітити поля червоною рамкою якщо вони порожні */
