import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
`

export const NoPages = styled.div`
  color: dimgrey;
  cursor: pointer;
  text-align: center;
`

export const Page = styled.div`
  color: ${(props) => props.selected ? 'darkred' : 'black'};
  cursor: pointer;
  border-bottom: 3px solid ${(props) => props.selected ? 'darkred' : 'black'};
  font-weight: ${(props) => props.selected ? 'bold' : 'normal'};
`
