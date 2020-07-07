import React from "react"
import { Link } from "gatsby"
import { Box, Heading, Paragraph, Text } from "grommet"
import { Home } from 'grommet-icons'
import Container from "../../utils/container"

export default () => (
  <Container pad="large">
    <Box alignContent="center">
      <Heading level={2} color="text">
        Uh Oh. Looks like this page doesn't exist!
      </Heading>
      <Box width="large">
        <Paragraph color="text" fill>
          It's okay though. Click the button below to go back to the home page.
        </Paragraph>
      </Box>
      <Link
        to="/contact"
        css={`
          text-decoration: none;
          width: max-content;
        `}
      >
        <Box
          direction="row"
          gap="small"
          background='brand'
          width="fit-content"
          pad="small"
        >
          <Home color="text" />
          <Text color="text">Home</Text>
        </Box>
      </Link>
    </Box>
  </Container>
)
