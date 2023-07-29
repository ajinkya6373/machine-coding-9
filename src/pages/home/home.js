import { styled } from "styled-components";
export const PageWrapper = styled.div`
display:flex;
`
export const CategorieContanier = styled.div`
display:flex;
flex-direction: column;
`
export const Categories  = styled.div`
display:flex;
flex-wrap: wrap;
gap: 1rem;
cursor:pointer;
margin-top: 1rem;
.category{
    display:flex;
    flex-direction: column;
}
`