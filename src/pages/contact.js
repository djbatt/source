import React from "react"
import Layout from "../utils/templates/layout"
import SEO from "../utils/seo"
import PageContent from "../components/contact"

export default () => {
  return (
    <Layout>
      <SEO
        description="We're taking on new clients right now and want to hear about your project. We're always available to chat. Reach out to us anytime."
        title="Source | We want to grow your business online. Contact us to start the conversation."
      />
      <PageContent />
    </Layout>
  )
}
