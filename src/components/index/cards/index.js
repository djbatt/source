import React from "react"
import { Box } from "grommet"
import Container from "../../../utils/container"
import Responsive from "../../../utils/responsive"
import Card1 from "./card1"
import Card2 from "./card2"
import Card3 from "./card3"

// If the screen is small, medium, or large these are the sizes of the columns
const columns = {
  small: ["auto"],
  medium: ["flex", "flex", "flex"],
  large: ["flex", "flex", "flex"],
}

// If the screen size is small, medium, or large these are the sizes of the rows
const rows = {
  small: ["auto", "auto", "auto"],
  medium: ["auto"],
  large: ["auto"],
}

// Set the different areas you need for every size
const fixedGridAreas = {
  small: [
    { name: "content-0", start: [0, 0], end: [0, 0] },
    { name: "content-1", start: [0, 1], end: [0, 1] },
    { name: "content-2", start: [0, 2], end: [0, 2] },
  ],
  medium: [
    { name: "content-0", start: [0, 0], end: [0, 0] },
    { name: "content-1", start: [1, 0], end: [1, 0] },
    { name: "content-2", start: [2, 0], end: [2, 0] },
  ],
  large: [
    { name: "content-0", start: [0, 0], end: [0, 0] },
    { name: "content-1", start: [1, 0], end: [1, 0] },
    { name: "content-2", start: [2, 0], end: [2, 0] },
  ],
}

export default () => (
  <Container pad="large">
    <Responsive
      columns={columns}
      rows={rows}
      areas={fixedGridAreas}
      gap="large"
    >
      <Box gridArea="content-0" fill direction="column" justify='start'>
        <Card1 />
      </Box>
      <Box gridArea="content-1" fill direction="column" justify='start'>
        <Card2 />
      </Box>
      <Box gridArea="content-2" fill direction="column" justify='start'>
        <Card3 />
      </Box>
    </Responsive>
  </Container>
)
