import styled from "styled-components";

export const Publication = styled.div`
    display: block;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    width: 80%;
    background-color: green;

`;





export const Information = styled.div`
    display: block;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    width: 100%;
    > h1 {
        font-size: 15px;
        font-weight: bold;
        font-weight: 100;

    }
    > h2 {
        font-size: 20px;
        font-weight: bold;
        font-weight: 100;

    }

`;

export const Profile = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    border: 1px solid black;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    width: 100%;
    gap: 10px;
`;

export const ProfilePhoto = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    border-radius: 50%;
    height: 75px;
    width: 75px;
    ;
`;