import React from "react"
import { Footer, Box, Text } from "grommet"
import { Facebook, Instagram, Twitter, Linkedin } from "grommet-icons"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Container from "../../utils/container"

export default () => (
  <Footer background="brand">
    <Container pad={{ vertical: "large", horizontal: "12px" }}>
      <Box
        direction="column"
        gap="medium"
        margin={{ bottom: "medium" }}
        alignContent="center"
      >
        <Box direction="row" gap="medium" justify="center">
          <OutboundLink
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/source.rva/"
          >
            <Instagram />
          </OutboundLink>
          <OutboundLink
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/sourcerva/"
          >
            <Facebook />
          </OutboundLink>
          <OutboundLink
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/sourcerva"
          >
            <Twitter />
          </OutboundLink>
          <OutboundLink
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/company/73513241/"
          >
            <Linkedin />
          </OutboundLink>
        </Box>
      </Box>
      <Box direction="row" justify="center">
        <Text size="xsmall">
          © {new Date().getFullYear()} SourceRVA LLC. All rights reserved.
        </Text>
      </Box>
    </Container>
  </Footer>
)
