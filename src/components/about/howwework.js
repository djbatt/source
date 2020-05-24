import React from "react"
import { Box, Heading, Paragraph, Text } from "grommet"
import { Grow, ChatOption, Plan, Terminal } from "grommet-icons"
import Container from "../../utils/container"

export default () => (
  <Container pad="large">
    <Box>
      <Heading level={2} color="text">
        How we work
      </Heading>
      <Box width="large">
        <Paragraph color="text" fill>
          At Source we like to work with clients who have a specific goal in
          mind. Our process ensures that nothing gets lost in the details.
        </Paragraph>
      </Box>
      <ul
        css={`
          list-style: none;
          padding: 0;
        `}
      >
        <li>
          <Box direction="row" gap="small" pad={{vertical: 'small'}}>
            <ChatOption color="text" />
            <Text color="text" size="medium">
              Send us an email
            </Text>
          </Box>
        </li>
        <li>
          <Box direction="row" gap="small" pad={{vertical: 'small'}}>
            <Plan color="text" />
            <Text color="text" size="medium">
              A custom plan is discussed
            </Text>
          </Box>
        </li>
        <li>
          <Box direction="row" gap="small" pad={{vertical: 'small'}}>
            <Terminal color="text" />
            <Text color="text" size="medium">
              Your website is built
            </Text>
          </Box>
        </li>
        <li>
          <Box direction="row" gap="small" pad={{vertical: 'small'}}>
            <Grow color="text" />
            <Text color="text" size="medium">
              Grow your business
            </Text>
          </Box>
        </li>
      </ul>
    </Box>
  </Container>
)
