import { Box, useTheme, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { faqData } from "../../data/faq";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Box sx={{ margin: "40px 0 0 0", backgroundColor: colors.primary[400] }}>
        {faqData.map((data) => (
          <Accordion
            key={data.id}
            sx={{ backgroundColor: colors.primary[400] }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5" color={colors.greenAccent[500]}>
                {data.summary}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>{data.summary}</AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQ;
