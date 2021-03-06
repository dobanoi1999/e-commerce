import styled from "styled-components";

export const Item = styled.div`
    min-width:240px;
    position:relative;
    margin-right:20px;
    margin-top:40px;
    width: calc(100% / 4 - 20px);
    border:1px solid #ced4da;
    padding:10px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    > *{
        margin-top:5px;
    }

`
export const Image = styled.img`
    display:block;
    object-fit:cover;
    overflow: hidden;
    width:100%;
    height:250px;
    cursor: pointer;
`
export const NameProduct = styled.p`
    font-size:1.3rem;
    color:red;
    font-weight:bold;

`
export const Desc = styled.p`
     opacity:0.5;
`

export const Price = styled.span`
    font-size:1.5rem;
   
`
export const BtnDel = styled.span`
    position:absolute;
    cursor: pointer;
    top:-6px;
    left:0px;
    border:1px solid #000;
    padding:0 2px;
    background-color:red;
    color:#fff;
    display:${props => props.hide};
    :active{
        background-color:#dc3545;
    };
`
export const Modal = styled.div`
    z-index:3;
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:#fff;
    display:sticky; 
`