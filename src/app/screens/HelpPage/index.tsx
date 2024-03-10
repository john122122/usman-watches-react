import React from "react";
import {
  Container,
  Box,
  Stack,
  Tab,
  Accordion,
  Typography,
  AccordionDetails,
  Button,
} from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TabContext, TabPanel } from "@mui/lab";
import TabList from "@mui/lab/TabList";
import "../../../css/help.css";
import Marginer from "../../components/marginer";

export function HelpPage() {
  // Initializations//
  const [value, setValue] = React.useState("1");
  const faq = [
    {
      question: "How is the payment made?",
      answer: "You can pay by Click, PayMe, VisaCard, MasterCard",
    },
    {
      question: "How long will the order arrive?",
      answer:
        "Your order will arrive depending on what you have purchased Maximum 2 hours",
    },
    {
      question: "Is data security guaranteed if I use the site?",
      answer:
        "Of course, our developers keep your data safe",
    },
    {
      question: "Who do I contact if there is a problem with the site?",
      answer:
        "Please contact the admin using the message hiring section",
    },
    {
      question:
        "I want to use the site as a businessman, not a user",
      answer: "Dear customer, please contact the numbers provided on the website",
    },
    {
      question:
        "Can I order clothes for my family from Korea to Uzbekistan?",
      answer:
        "Of course, you can pay by payme from abroad, in addition to visa and master!",
    },
    {
      question: "I want to contribute to the development of the site",
      answer: "Of course, you can leave a message to the admin for this",
    },
    {
      question: "Where do I enter my card details?",
      answer:
        "Enter your card details in the table on the right side of my page!",
    },
    {
      question: "Want you to write an article?",
      answer:
        "You can write an article by clicking the write article button on my page!",
    },
  ];
  const rules = [
    `Making full orders from the site`,
     `You must register to use live chats.`,
     `*You can cancel your orders after you have paid for them
      it is not possible, so please check before making payments.`,
     `The use of obscene words during live communication is strictly prohibited.''`,
     `It is impossible to write and distribute personal ads without the permission of the admin.''`,
     `Your articles must not go beyond the scope of decency.''`,
     `All your actions are under the control of our admins, so please respect our requirements.''`,
     "If you have any complaints, contact our admins!",
     "Please respect each other, dear users!",
     "Our website is copyrighted!",
     "If you like this website, please share it with your loved ones!",
  ];

  // Handlers//
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="help_page">
      <Container sx={{ mt: "50px", mb: "50px" }}>
        <TabContext value={value}>
          <Box className={"help_menu"}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Tab
                  style={{ marginLeft: "150px", marginRight: "150px" }}
                  label="Rules"
                  value={"1"}
                />
                <Tab
                  style={{ marginLeft: "150px", marginRight: "150px" }}
                  label="FAQ"
                  value={"2"}
                />
                <Tab
                  style={{ marginLeft: "150px", marginRight: "150px" }}
                  label="Contact Us"
                  value={"3"}
                />
              </TabList>
            </Box>
          </Box>
          <Stack alignItems={"center"} sx={{ width: "100%", height: "auto" }}>
            <Stack className="help_main_content">
              <Box sx={{ mt: "30px" }}>
                <Marginer width="1272px" height="1" bg="#fff" />
              </Box>

              <TabPanel value={"1"}>
                <Stack className="theRules_box">
                  <Box className="theRulesFrame">
                    {rules.map((ele) => {
                      return <p>{ele}</p>;
                    })}
                  </Box>
                </Stack>
              </TabPanel>

              <TabPanel value={"2"}>
                <Stack className="accordian_menu">
                  {faq.map((ele) => {
                    return (
                      <Accordion>
                        <AccordionSummary
                          style={{ marginLeft: "35px" }}
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panella-cintent"
                          id="panella-header"
                        >
                          <Typography sx={{ mb: "15px" }}>
                            {ele.question}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>{ele.answer}</Typography>
                        </AccordionDetails>
                      </Accordion>
                    );
                  })}
                </Stack>
              </TabPanel>

              <TabPanel value={"3"}>
                <Stack className="admin_letter_box">
                  <Stack className="admin_letter_container">
                    <Box className="admin_letter_frame">
                      <span>Leave a message to the Admin</span>
                      <p>
                      Hello! Forms to leave a message to the admin
                         fill it up{" "}
                      </p>
                    </Box>
                    <form
                      action="#"
                      method="POST"
                      className="admin_letter_frame"
                    >
                      <div className="admin_input_box">
                        <label>Name</label>
                        <input type="text" name="mb_nick" placeholder="Name" />
                      </div>
                      <div className="admin_input_box">
                        <label>Email</label>
                        <input
                          type="text"
                          name="mb_email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="admin_input_box">
                        <label>Message</label>
                        <textarea name="mb_msg" placeholder="Message"></textarea>
                      </div>
                      <Box
                        className="admin_btn"
                        display={"flex"}
                        justifyContent={"flex-end"}
                        sx={{ mt: "30px" }}
                      >
                        <Button
                          style={{ marginTop: "10px" }}
                          type="submit"
                          variant="contained"
                        >
                          Send
                        </Button>
                      </Box>
                    </form>
                  </Stack>
                </Stack>
              </TabPanel>
            </Stack>
          </Stack>
        </TabContext>
      </Container>
    </div>
  );
}