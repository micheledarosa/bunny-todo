import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #B3A398;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Bunny = styled.img`
    width: 6.25rem;
`;

export const TodoList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background-color: #FFF;
    padding: 2rem;
    border-radius: 0.35rem;
    height: 32rem;
    width: 22.5rem;
    overflow-y: auto;
    border: 0.125rem solid #FFF;
    max-height: calc(90vh - 0.375rem); 
`;

export const List = styled.ul`
    padding: 0;
`;

export const Item = styled.li `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 0.85rem;
    color: #000;
    font-weight: 400;
    background-color: #FFE5E5;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.1);
    list-style-type: none;
    border-radius: 0.35rem;
    margin-bottom: 1.25rem;
    height: auto;
    width: 20rem;
    padding: 0.625rem;
`;

export const Input = styled.input`
    border: 0.15rem solid #EC9DAF;
    background-color: #FFE5E5;
    border-radius: 0.35rem;
    height: 1rem;
    font-size: 0.85rem;
    font-weight: 400;
    outline: none;
    padding: 0.625rem;
    width: 71%;
`;

export const Button = styled.button`
    background: #503C3C;
    border-radius: 0.25rem;
    min-height: 2.38rem;
    border: none;
    width: 78%;
    color: #FFF;

    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:focus {
        outline: none;
    }
`;