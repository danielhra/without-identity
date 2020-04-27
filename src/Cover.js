import React from "react";
import styled from "styled-components";

const StyledCover = styled.div`
  --space: ${props => props.space || "var(--s1)"};
  --centered: ${props => props.centered || "h1"};
  display: flex;
  flex-direction: column;
  min-height: ${props => props.minHeight || "100vh"};
  padding: ${props => (props.noPad ? "0" : "var(--space)")};

  & > * {
    margin-top: var(--space);
    margin-bottom: var(--space);
  }

  & > :first-child:not(var(--centered)) {
    margin-top: 0;
  }
  & > :last-child:not(var(--centered)) {
    margin-bottom: 0;
  }

  & > ${props => props.centered || "h1"} {
    margin-top: auto;
    margin-bottom: auto;
  }
`;

function Cover(props) {
  return (
    <StyledCover
      centered={props.centered}
      space={props.space}
      minHeight={props.minHeight}
      noPad={props.noPad}
    >
      {props.children}
    </StyledCover>
  );
}

export default Cover;
