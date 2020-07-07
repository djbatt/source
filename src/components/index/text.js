import React from "react"
import { Box, Heading, Paragraph } from "grommet"
import Container from "../../utils/container"

export default () => (
  <Container pad="large">
    <Box>
      <Heading level={2} color="text">
        Local expertise
      </Heading>
      <Box width="large">
        <Paragraph color="text" fill>
          Our focus is on businesses and individuals in Richmond, VA. We
          specialize in websites, search engine optimization, and professional
          emailing. Creating the perfect online presence for your brand is our
          job.
        </Paragraph>
      </Box>
    </Box>
  </Container>
)
