import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { Box, Grid } from "@material-ui/core";
import { useState } from "react";

const styles = {
  accordionBox: {
    marginBottom: "20px",
    border: "1px solid #00000040",
  },
  expandedAccordionBox: {
    border: "1px solid #f6931f",
  },
  accordionSummary: {
    background: "#f6931f",
    color: "#7E563D",
  },
  iconColor: {
    color: "#7E563D",
  },
};

function Faq() {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <>
      <Grid container style={{ margin: "75px 0" }}>
        <Grid item xs={10} style={{ margin: "0 auto" }}>
          <Box style={{ margin: "40px 0" }}>
            <Box
              style={{
                ...styles.accordionBox,
                ...(expanded === "panel1" && styles.expandedAccordionBox),
              }}
            >
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  style={{
                    fontFamily: "Nunito Sans",
                    fontWeight: "700px",
                    fontSize: "20px",
                    color: "#2D2C2C",
                    ...(expanded === "panel1" && styles.accordionSummary),
                  }}
                  expandIcon={
                    expanded === "panel1" ? (
                      <RemoveIcon style={styles.iconColor} />
                    ) : (
                      <AddIcon style={{ color: "#202123" }} />
                    )
                  }
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  What are the modes of refund available after cancellation?
                </AccordionSummary>
                <AccordionDetails
                  style={{
                    fontFamily: "Nunito Sans",
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "rgba(32, 33, 35, 0.87)",
                  }}
                >
                  The different modes of refund available are: Payment mode:
                  Cash on Delivery 1. UPI (Amount less than Rs 1000) - Refund
                  will be processed to the UPI account for which UPI ID has to
                  be shared 2. Gift Card (Amount less than Rs 10000) - Refund
                  will be processed to Gift Card account 3. Bank account
                  (IMPS/NEFT) - Refund will be processed to bank account for
                  which bank details have to be shared Payment mode: Prepaid 1.
                  Back to source - Refund will be processed to the payment
                  mode(Debit/Credit card, NEFT, UPI) used to pay for the order
                  2. Gift Card (Amount less than Rs 10000) - Refund will be
                  processed to Gift Card account.
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              style={{
                ...styles.accordionBox,
                ...(expanded === "panel2" && styles.expandedAccordionBox),
              }}
            >
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  style={{
                    fontFamily: "Nunito Sans",
                    fontWeight: "700px",
                    fontSize: "20px",
                    color: "#2D2C2C",
                    ...(expanded === "panel2" && styles.accordionSummary),
                  }}
                  expandIcon={
                    expanded === "panel2" ? (
                      <RemoveIcon style={styles.iconColor} />
                    ) : (
                      <AddIcon style={{ color: "#202123" }} />
                    )
                  }
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  I've still not received the refund in my bank account.
                </AccordionSummary>
                <AccordionDetails
                  style={{
                    fontFamily: "Nunito Sans",
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "rgba(32, 33, 35, 0.87)",
                  }}
                >
                  If you have received a mail from us confirming your refund
                  request, it means that the refund has been initiated. You can
                  also contact your bank with the refund reference (ARN)/UTR
                  number you would have received for an update on the status of
                  your refund.
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              style={{
                ...styles.accordionBox,
                ...(expanded === "panel3" && styles.expandedAccordionBox),
              }}
            >
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  style={{
                    fontFamily: "Nunito Sans",
                    fontWeight: "700px",
                    fontSize: "20px",
                    color: "#2D2C2C",
                    ...(expanded === "panel3" && styles.accordionSummary),
                  }}
                  expandIcon={
                    expanded === "panel3" ? (
                      <RemoveIcon style={styles.iconColor} />
                    ) : (
                      <AddIcon style={{ color: "#202123" }} />
                    )
                  }
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  Why does it take time for the refund amount to be credited
                  when it was already processed by ELEGLAM?
                </AccordionSummary>
                <AccordionDetails
                  style={{
                    fontFamily: "Nunito Sans",
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "rgba(32, 33, 35, 0.87)",
                  }}
                >
                  Once the refund has been processed, the bank takes some time
                  to reverse your initial transaction and complete the refund.
                  However, the refund amount can be seen in your account within
                  the time frame provided to you. Please contact your bank with
                  the refund reference/UTR number in case you don't see the
                  refund amount in your account after the specified timeframe.
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box
              style={{
                ...styles.accordionBox,
                ...(expanded === "panel4" && styles.expandedAccordionBox),
              }}
            >
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  style={{
                    fontFamily: "Nunito Sans",
                    fontWeight: "700px",
                    fontSize: "20px",
                    color: "#2D2C2C",
                    ...(expanded === "panel4" && styles.accordionSummary),
                  }}
                  expandIcon={
                    expanded === "panel4" ? (
                      <RemoveIcon style={styles.iconColor} />
                    ) : (
                      <AddIcon style={{ color: "#202123" }} />
                    )
                  }
                  aria-controls="panel4-content"
                  id="panel4-header"
                >
                  Will I get a complete refund if the item is cancelled or
                  returned if I have paid for the order using the 'Credit Card
                  No Cost EMI' payment option?
                </AccordionSummary>
                <AccordionDetails
                  style={{
                    fontFamily: "Nunito Sans",
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "rgba(32, 33, 35, 0.87)",
                  }}
                >
                  Yes, you will get a complete refund to the extent of the EMIs
                  paid (if any) in case the order is cancelled or returned.
                  However, banks may charge some cancellation/refund or
                  pre-closure charges. Please check with your respective bank
                  for their policy for cancellations, refunds, and pre-closures.
                  *Orders for certain items cannot be cancelled after 24 hours
                  of order placement, or returned once delivered. Please check
                  the seller's cancellations & returns policy on the product
                  page for details.
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Faq;
