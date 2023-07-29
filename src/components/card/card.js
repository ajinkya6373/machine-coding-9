import { styled } from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1);
    opacity:0.8;
  }
`;


export const CardTop = styled.div`
display:flex;
position: relative;
img{
    width: 100%;
    object-fit: cover;
}
svg{
    color:  #66a0d0;
    background: white;
    position: absolute;
    z-index: 9;
    border-radius: 0px 0px 0px 6px;
    right:0;
    cursor:pointer;
    padding: 2px;
    font-size: 2rem;
}

`
export const CardBottom = styled.div`
display:flex;
gap: 0.7rem;
margin:0.5rem 0rem;
    >img{
        width: 50px;
        border-radius: 50%;
        height: 50px;
        object-fit: cover;
    }
    span{
        display: block;
        font-weight: bold;
        opacity: 0.8;
        font-size: 0.9rem;
        margin:0.1rem 0rem;
    }
    p{
        font-size: 15px;
    }
`
