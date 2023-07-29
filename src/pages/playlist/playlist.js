import { styled } from "styled-components";
export const PageWrapper = styled.div`
display:flex;
flex-direction: column;
`
export const PlayListItem = styled.div`
display:flex;
flex-direction: column;
cursor:pointer;

`
export const AddIcon  = styled.div`
justify-content: center;
align-items: center;
display: flex;
svg{

    font-size: 3rem;
}

`

export const ModalContenet = styled.div`
display: flex;
flex-direction: column;
gap:0.7rem;
padding:1rem;
input{
    padding:1rem;
    outline:none;
}
button{
    width:100%;
    color:white;
    cursor:pointer;
    padding:1rem;
    border:none;
    border-radius:1rem;
    background:#66a0d0;
    &:hover{
        opacity:0.7;
    }
}
`