import React from "react"
import { Box } from "grommet"
import Container from "../../../utils/container"
import Responsive from "../../../utils/responsive"
import Card1 from "./card1"
import Card2 from "./card2"
import Card3 from "./card3"
import Card4 from './card4'
import Card5 from './card5'
import Card6 from './card6'

// If the screen is small, medium, or large these are the sizes of the columns
const columns = {
  small: ["auto"],
  medium: ["flex", "flex"],
  large: ["flex", "flex"],
}

// If the screen size is small, medium, or large these are the sizes of the rows
const rows = {
  small: ["auto", "auto", "auto", "auto", "auto", "auto"],
  medium: ["auto", "auto", "auto"],
  large: ["auto", "auto", "auto"],
}

// Set the different areas you need for every size
const fixedGridAreas = {
  small: [
    { name: "content-0", start: [0, 0], end: [0, 0] },
    { name: "content-1", start: [0, 1], end: [0, 1] },
    { name: "content-2", start: [0, 2], end: [0, 2] },
    { name: "content-3", start: [0, 3], end: [0, 3] },
    { name: "content-4", start: [0, 4], end: [0, 4] },
    { name: "content-5", start: [0, 5], end: [0, 5] },
  ],
  medium: [
    { name: "content-0", start: [0, 0], end: [0, 0] },
    { name: "content-1", start: [1, 0], end: [1, 0] },
    { name: "content-2", start: [0, 1], end: [0, 1] },
    { name: "content-3", start: [1, 1], end: [1, 1] },
    { name: "content-4", start: [0, 2], end: [0, 2] },
    { name: "content-5", start: [1, 2], end: [1, 2] },
  ],
  large: [
    { name: "content-0", start: [0, 0], end: [0, 0] },
    { name: "content-1", start: [1, 0], end: [1, 0] },
    { name: "content-2", start: [0, 1], end: [0, 1] },
    { name: "content-3", start: [1, 1], end: [1, 1] },
    { name: "content-4", start: [0, 2], end: [0, 2] },
    { name: "content-5", start: [1, 2], end: [1, 2] },
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
      <Box gridArea="content-3" fill direction="column" justify='start'>
        <Card4 />
      </Box>
      <Box gridArea="content-4" fill direction="column" justify='start'>
        <Card5 />
      </Box>
      <Box gridArea="content-5" fill direction="column" justify='start'>
        <Card6 />
      </Box>
    </Responsive>
  </Container>
)
