import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";

const ProductDetails = () => {
  return (
    <Box sx={{
        flexDirection: { xs: "column", sm: "row" },
        display: "flex", alignItems: "center", gap: 2.5 }}>
      <Box sx={{ display: "flex" }}>
        <img width={300} src="src/images/1.jpg" alt="" />
      </Box>

      <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>

        <Typography variant="h5">WOMEN'S FASHION</Typography>

        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          $12.99
        </Typography>
        <Typography variant="body1">
          Form dialogs allow users to fill out form fields within a dialog. For
          example, if your site prompts for potential subscribers to fill in
          their email address, they can fill out the email field and touch
        </Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          {["src/images/1.jpg", "src/images/2 (1).jpg"].map((item) => {
            return (
              <img
                key={item}
                style={{ borderRadius: 3 }}
                height={100}
                width={90}
                src={item}
                alt=""
              />
            );
          })}
        </Stack>

        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >

            <AddShoppingCartOutlined sx={{ mr: 1}} fontSize="small" />
            Buy now
        </Button>
         

      </Box>
    </Box>
  );
};

export default ProductDetails;
