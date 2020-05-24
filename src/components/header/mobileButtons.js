import React from "react"
import styled from "styled-components"
import { Text, Box } from "grommet"
import { Menu, Close } from "grommet-icons"

const ClickMe = styled.button`
  height: fit-content;
  margin: auto 0;
  padding: 0px 4px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  :hover {
    cursor: pointer;
  }
`

export default props => (
  <>
    {!props.passedState.visible && (
      <ClickMe onClick={props.open}>
        <Box direction="row" gap="xsmall">
          <Text color="text">MENU</Text>
          <Menu color="text" size="medium" />
        </Box>
      </ClickMe>
    )}
    {props.passedState.visible && (
      <ClickMe onClick={props.close}>
        <Box direction="row" gap="xsmall">
          <Text color="text">CLOSE</Text>
          <Close color="text" size="medium" />
        </Box>
      </ClickMe>
    )}
  </>
)
