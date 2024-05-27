import { ArrowCircleRightOutlined } from "@mui/icons-material"
import { Button, Container, Grid } from "@mui/material"
import CardGallery from "components/CardGallery"

const cardGalleries = [
  {
    description:
      "Keep larger company announcements organized, whether it's a company FYI or response to a major work event.",
    image: "/assets/1.png",
    links: "Add links, docs, and examples to any thread.",
    title: "Announcements",
  },
  {
    description:
      "Stay connected by sharing music, discussing hobbies, or posting memes. The office watercooler has a home on Threads.",
    image: "/assets/2.png",
    links: "Add links from YouTube, Spotify, and more.",
    title: "Culture",
  },
  {
    description:
      "Organize customer feedback in its own channel to help involve other parties like eng or product. Install various integrations for higher visibility and to track progress.",
    image: "/assets/3.png",
    links: "Add Intercom and Linear integrations",
    title: "Customer Feedback",
  },
  {
    description:
      "Keep an internal dialogue going by creating channels that focus on different teams, making it easier for people to stay in the loop and collaborate.",
    image: "/assets/4.png",
    links: "Add links from YouTube, Spotify, and more.",
    title: "Internal Questions",
  },
  {
    description: "Cancel the meeting entirely by making it easier to share daily or weekly updates with your team.",
    image: "/assets/5.png",
    links: "Write to a select few or to an entire channel",
    title: "Team Updates",
  },
  {
    description:
      "Keep your team in the loop with OOO (out of office) updates, HR requests, and more, all within Threads.",
    image: "/assets/6.png",
    links: "A great way to give everyone a heads up",
    title: "Logistics",
  },
  {
    description:
      "Bugs can appear any time, and with dedicated channels in Threads, easily capture and track them to resolution.",
    image: "/assets/7.png",
    links: "Add screenshots and track issues in Linear",
    title: "Bug Reports",
  },
  {
    description:
      "Threads make it easy to write a technical summary of events, resulting in a clear set of next steps and action items.",
    image: "/assets/8.png",
    links: "Writing a report has never been easier.",
    title: "Post Mortems",
  },
  {
    description:
      "Allow your team to follow the design process by sharing context on decisions, the thought behind why a change is being made, and more.",
    image: "/assets/9.png",
    links: "Use video narrations and presentation mode",
    title: "Share Designs",
  },
]

const HomePage = () => {
  return (
    <Container className="my-20 flex flex-col items-center justify-center md:my-[168px]">
      <div
        className="text-3xl md:text-5xl"
        style={{
          textShadow: "10px -10px 10px #000000, 20px 20px 20px #000000, 20px 0px 40px #000000, 0px 1px 100px #000000",
        }}
      >
        Threads Gallery
      </div>
      <Container className="mb-6 mt-2 text-center text-2xl font-light" maxWidth="md">
        Become an expert on how to write threads by taking inspiration from our own teams' curated examples and use
        cases.
      </Container>
      <div className="rounded-xl border-[#A18AFF3D] p-1" style={{ background: "#A18AFF3D" }}>
        <Button
          className="h-14 w-48"
          color="primary"
          endIcon={<ArrowCircleRightOutlined fontSize="large" />}
          variant="contained"
        >
          Sign up today
        </Button>
      </div>
      <Grid className="my-6" container spacing={3}>
        {cardGalleries.map((gallery, index) => (
          <Grid item key={index} md={4}>
            <CardGallery
              description={gallery.description}
              image={gallery.image}
              links={gallery.links}
              title={gallery.title}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default HomePage
