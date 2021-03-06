import React from "react"
import {
  Form,
  FormField,
  TextInput,
  TextArea,
  Paragraph,
  Box,
  Text,
  Button,
} from "grommet"
import { Send } from "grommet-icons"

export default () => {
  const [nameVal, setNameVal] = React.useState("")
  const [emailVal, setEmailVal] = React.useState("")
  const [messageVal, setMessageVal] = React.useState("")
  const [index, setIndex] = React.useState(0)

  const sendEmail = () => {
    let url = "https://ejuvedvkbb.execute-api.us-east-1.amazonaws.com/email"

    let formData = {
      name: nameVal,
      email: emailVal,
      message: messageVal,
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      {index === 0 && (
        <Form
          onChange={value => console.log("Change", value)}
          onSubmit={event => {
            console.log("Submit", event.value, event.touched)
            console.log(nameVal, emailVal, messageVal)
            sendEmail()
            setIndex(1)
          }}
        >
          <FormField
            name="name"
            htmlFor="name-input"
            label="Name"
            required
            validate={[
              { regexp: /^[a-z]/i },
              name => {
                if (name && name.length > 50)
                  return "must be less than 50 characters"
                return undefined
              },
            ]}
          >
            <TextInput
              id="name-input"
              name="name"
              value={nameVal}
              onChange={event => setNameVal(event.target.value)}
              placeholder="Enter your name..."
            />
          </FormField>
          <FormField
            name="email"
            htmlFor="email-input"
            label="Email"
            required
            validate={[
              {
                regexp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            ]}
          >
            <TextInput
              id="email-input"
              name="email"
              value={emailVal}
              onChange={event => setEmailVal(event.target.value)}
              placeholder="Enter your email..."
            />
          </FormField>
          <FormField
            name="message"
            htmlFor="message-input"
            label="Message"
            required
            validate={[
              { regexp: /^[a-z]/i },
              name => {
                if (name && name.length > 6000)
                  return "must be less than 6000 characters"
                return undefined
              },
            ]}
          >
            <TextArea
              id="message-input"
              name="message"
              css={`
                min-height: 200px;
              `}
              resize="vertical"
              fill={false}
              value={messageVal}
              onChange={event => setMessageVal(event.target.value)}
              placeholder="Add any important details here..."
            />
          </FormField>
          <Button plain type="submit">
            <Box
              direction="row"
              gap="xsmall"
              background="brand"
              pad="small"
              type="submit"
            >
              <Send color="text" />
              <Text color="text">Submit</Text>
            </Box>
          </Button>
        </Form>
      )}
      {index === 1 && <Paragraph color='text' fill>Thank you {nameVal}, We'll be reaching out to you soon. </Paragraph>}
    </>
  )
}
