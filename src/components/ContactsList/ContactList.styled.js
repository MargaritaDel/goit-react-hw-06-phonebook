import styled from '@emotion/styled';
export const ContainerList = styled.ul`
  padding: 12px;
  min-width: 300px;
  display: flex;
  gap: 4px;
  flex-direction: column;
  justify-content: center;
`;

export const ContainerItem = styled.li`
  padding: 12px;
  min-width: 300px;
  display: flex;
  gap: 16px;
  flex-direction: row;
  justify-content: left;
`;


export const ContainerButtons =styled.button`
    padding: 4px 8px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    &:hover,
    &:focus  {
  background-color: blue;
  color: #fff;
}
    `;