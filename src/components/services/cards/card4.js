import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Heading, Paragraph } from "grommet"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "kon-karampelas-N82naZ0N4TY-unsplash.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Img
        fluid={data.file.childImageSharp.fluid}
        css={`
          max-height: 360px;
          box-shadow: 0 0px 0.6px -3px rgba(0, 0, 0, 0.073),
            0 0px 2px -3px rgba(0, 0, 0, 0.107),
            0 0px 9px -3px rgba(0, 0, 0, 0.18);
        `}
        alt="Email"
      />
      <Heading level={3} color="text">
        Email Templating
      </Heading>
      <Paragraph color="text">
        One of the easiest ways to stay in touch with your customers is through email. We make custom email templates so your company stands out.
      </Paragraph>
    </>
  )
}
