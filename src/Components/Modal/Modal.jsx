// import React, {Component} from 'react';
import styled from 'styled-components';



const Form = styled.form`

h1 {
    margin-left: 15px;
}

/* margin-top: -60px; */
margin-left: auto;
        margin-right: auto;
align-items: center;
    width: 400px;
    display: flex;
    flex-wrap: wrap;
    input {
        width: 80%;
        height: 30px;
        padding-left: 10px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 25px;
border: 1px solid #7E78D2;
margin-bottom: 25px;
    }

    textarea {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
`;
const SubmitClose = styled.button`
 background: transparent;
    font-size: 15px;

border-radius: 50%;
border: none;
    width: 50px;
    height: 50px;
    margin-left: auto;

`;

const SubmitButton = styled.button`
margin-top: 25px;
margin-left: auto;
        margin-right: auto;
    width: 90%;
    height: 40px;
    border: none;
    border-radius: 25px;
    color: white;
    font-size: 15px;

    background: #6F58C9;
`
function Modal({ close}) {
    return (
        <>
        
        <Form>
                <h1>Заповніть Форму</h1>
                <SubmitClose type="button" onClick={close} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path d="M18.6667 1.88L16.7867 0L9.33333 7.45334L1.88 0L0 1.88L7.45334 9.33333L0 16.7867L1.88 18.6667L9.33333 11.2133L16.7867 18.6667L18.6667 16.7867L11.2133 9.33333L18.6667 1.88Z" fill="#212121" />
                    </svg>
                </SubmitClose>
                <input type='text' placeholder='Name' name='name' />
                <input type='tell' placeholder='tell' name='tell' />
                <textarea rows="10" placeholder='Comment'></textarea>
                <SubmitButton type="submit" onClick={close}>Submit</SubmitButton>
            </Form>
      
          

        </>
    );
};
export default Modal;