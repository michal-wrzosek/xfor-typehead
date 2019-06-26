import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px;
  color: red;
`;

export const Typehead: React.FC<{}> = () => (
  <Wrapper>
    <input type="text" name="" id="" />
  </Wrapper>
);
