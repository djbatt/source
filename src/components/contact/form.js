import React from "react"
import {
  Form,
  FormField,
  TextInput,
  TextArea,
  Box,
  Text,
  Button,
} from "grommet"
import { Send } from "grommet-icons"

export default () => {
  const [nameVal, setNameVal] = React.useState("")
  const [emailVal, setEmailVal] = React.useState("")
  const [messageVal, setMessageVal] = React.useState("")

  return (
    <Form
      onChange={value => console.log("Change", value)}
      onSubmit={event => console.log("Submit", event.value, event.touched)}
    >
      <FormField name="name" htmlFor="name-input" label="Name">
        <TextInput
          id="name-input"
          name="name"
          value={nameVal}
          onChange={event => setNameVal(event.target.value)}
          placeholder="Enter your name..."
        />
      </FormField>
      <FormField name="email" htmlFor="email-input" label="Email">
        <TextInput
          id="email-input"
          name="email"
          value={emailVal}
          onChange={event => setEmailVal(event.target.value)}
          placeholder="Enter your email..."
        />
      </FormField>
      <FormField name="message" htmlFor="message-input" label="Message">
        <TextArea
          id="message-input"
          name="message"
          value={messageVal}
          onChange={event => setMessageVal(event.target.value)}
          placeholder="Add any important details here..."
        />
      </FormField>
      <Button plain primary type="submit">
        <Box direction="row" gap="xsmall" background="brand" pad="small">
          <Send color="text" />
          <Text color="text">Submit</Text>
        </Box>
      </Button>
    </Form>
  )
}
