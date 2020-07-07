import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Box, Heading, Paragraph } from "grommet"
import Img from "gatsby-image"
import Container from "../../utils/container"
import Responsive from "../../utils/responsive"

// If the screen is small, medium, or large these are the sizes of the columns
const columns = {
  small: ["auto"],
  medium: ["auto"],
  large: ["auto"],
}

// If the screen size is small, medium, or large these are the sizes of the rows
const rows = {
  small: ["600px"],
  medium: ["500px"],
  large: ["500px"],
}

// Set the different areas you need for every size
const fixedGridAreas = {
  small: [{ name: "hero", start: [0, 0], end: [0, 0] }],
  medium: [{ name: "hero", start: [0, 0], end: [0, 0] }],
  large: [{ name: "hero", start: [0, 0], end: [0, 0] }],
}

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "katherine-auguste-BYu27KSdkD4-unsplash.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Box background="#526D93" direction="column">
      <Responsive
        columns={columns}
        rows={rows}
        areas={fixedGridAreas}
        css={`
          position: relative;
        `}
      >
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Hero Image"
          css={`
            opacity: 0.2;
          `}
        />
        <Box
          gridArea="hero"
          direction="column"
          justify="center"
          fill
          css={`
            position: absolute;
          `}
        >
          <Container>
            <Box pad="large">
              <Heading level={1} color="text">
                Do you need a new website?
              </Heading>
              <Box width="large">
                <Paragraph color="text" size="large" fill>
                  We make websites that outrank your competitors. One size
                  doesn't fit all because every business is different. A custom
                  website from Source makes you stand out, boosting traffic and
                  driving sales.
                </Paragraph>
              </Box>
            </Box>
          </Container>
        </Box>
      </Responsive>
    </Box>
  )
}
