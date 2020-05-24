import React from "react"
import { Accordion, AccordionPanel, Box, Text } from "grommet"
import { Contact } from "grommet-icons"
import { Link } from "gatsby"

export default props => {
  return (
    <Accordion animate={true} activeIndex={props.passedState.index}>
      <AccordionPanel header={<></>}>
        <Box
          direction="column"
          gap="large"
          overflow="auto"
          margin={{ top: "large" }}
        >
          {props.passedPages.map(page => (
            <Link
              to={page.path}
              key={page.label}
              css={`
                text-decoration: none;
              `}
            >
              <Box direction="row" gap="xsmall" pad='small'>
                {page.icon}
                <Text color="text" size='large'>{page.label}</Text>
              </Box>
            </Link>
          ))}
          <Link
            to='/contact'
            css={`
              text-decoration: none;
            `}
          >
            <Box direction="row" gap="xsmall" background='brand' pad='small'>
              <Contact color='text'/>
              <Text color="text" size='large'>Contact Us</Text>
            </Box>
          </Link>
        </Box>
      </AccordionPanel>
    </Accordion>
  )
}
