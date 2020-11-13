import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 50px 0;
  max-width: 350px;

  h1 {
    font-size: 52px;
    margin: 0;
  }

  p {
    font-size: 18px;
    margin: 15px 0 0;
  }
`;

const PageInfo = ({title, description}) => (
<Wrapper>
<h1>{title}</h1>
<p>{description}</p>
</Wrapper>
)

export default PageInfo;