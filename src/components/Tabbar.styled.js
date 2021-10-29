import styled from 'styled-components'

export const Tabbar = styled.div`
  background: #0191F8;
  display: flex;
  grid-area: tabbar;
  flex-direction: column;
  border-radius: 30px 0 0 30px;
  padding: 20px 5px;
  grid-template-columns: auto;
  color: white;
  text-align: center;
  justify-content: space-between;
  flex-grow: 1;


  @media (max-width: 750px) {
    border-radius: 30px 30px 0 0;
    }
`;