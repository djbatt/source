import React from "react"
import { Box, Heading, Text } from "grommet"
import Container from "../../utils/container"
import Responsive from "../../utils/responsive"
import Form from "./form"

// If the screen is small, medium, or large these are the sizes of the columns
const columns = {
  small: ["auto"],
  medium: ["flex", "flex"],
  large: ["flex", "flex"],
}

// If the screen size is small, medium, or large these are the sizes of the rows
const rows = {
  small: ["auto", "auto"],
  medium: ["auto"],
  large: ["auto"],
}

// Set the different areas you need for every size
const fixedGridAreas = {
  small: [
    { name: "content-0", start: [0, 0], end: [0, 0] },
    { name: "content-1", start: [0, 1], end: [0, 1] },
  ],
  medium: [
    { name: "content-0", start: [0, 0], end: [0, 0] },
    { name: "content-1", start: [1, 0], end: [1, 0] },
  ],
  large: [
    { name: "content-0", start: [0, 0], end: [0, 0] },
    { name: "content-1", start: [1, 0], end: [1, 0] },
  ],
}

export default () => (
  <Container pad="large">
    <Heading level={2} color="text">
      We want to help you grow your business online. Start the conversation by
      sending an email.
    </Heading>
    <Responsive
      columns={columns}
      rows={rows}
      areas={fixedGridAreas}
      gap="large"
    >
      <Box gridArea="content-0" fill direction="column" justify="start">
        <Heading level={3} color="text">
          Reach out
        </Heading>
        <Text color="text">contact@sourcerva.com</Text>
        <Heading level={3} color="text">
          Location
        </Heading>
        <Text color="text">Richmond, VA United States</Text>
      </Box>
      <Box gridArea="content-1" fill direction="column" justify="start">
        <Form />
      </Box>
    </Responsive>
  </Container>
)
