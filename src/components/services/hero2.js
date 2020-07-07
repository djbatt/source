import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Box, Heading, Paragraph, Text } from "grommet"
import { Contact } from "grommet-icons"
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
      file(relativePath: { eq: "aral-tasher-vWsubsaym3o-unsplash.jpg" }) {
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
              <Heading level={2} color="text">
                Lets get started
              </Heading>
              <Box width="large">
                <Paragraph color="text" size="large" fill>
                We're experts in web development. Let us focus on your website, so you can focus on running your business.
                </Paragraph>
              </Box>
              <Link to="/contact" css={`text-decoration: none; width: max-content;`}>
                <Box
                  direction="row"
                  gap="small"
                  border={{
                    color: "text",
                    size: "3px",
                    style: "solid",
                    side: "all",
                  }}
                  width="fit-content"
                  pad="small"
                >
                  <Contact color='text' />
                  <Text color='text'>Contact Us</Text>
                </Box>
              </Link>
            </Box>
          </Container>
        </Box>
      </Responsive>
    </Box>
  )
}
