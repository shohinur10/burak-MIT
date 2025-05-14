/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import CardOverflow from "@mui/joy/CardOverflow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";


import { useSelector} from "react-redux";
import { createSelector} from "reselect";
import { Product } from '../../lib/types/product';
import { retrievePopularDishes } from "./selector";
import { serverApi } from "../../lib/config";

/** Redux Slice and selection */

const popularDishesRetriever =createSelector(
  retrievePopularDishes,
  (popularDishes) => ({popularDishes})
);



export default function PopularDishes() {
   const {popularDishes} = useSelector(popularDishesRetriever);
 
   console.log("popularDishes", popularDishes);

  return (
    <div className="popular-dishes-frame">
      <Container>
        <Stack className="popular-section">
          <Box className="category-title">Popular Dishes</Box>
          <Stack className="cards-frame">
            {popularDishes.length !==0 ? (
            popularDishes.map((product:Product) => {
              const imagePath = product.productImages && product.productImages.length > 0
                ? `${serverApi}/${product.productImages[0]}`
                : "/default-image.jpg"; // Fallback image if none is available
                return (
              <CssVarsProvider key={product._id}>
                <Card className={"card"}>
                  <CardCover>
                    <img src={imagePath} alt="" />
                  </CardCover>
                      <CardCover className={"card-cover"} />
                      <CardContent sx={{ justifyContent: "flex-end" }}>
                        <Stack
                          flexDirection={"row"}
                          justifyContent={"space-between"}
                        >
                          <Typography
                            level="h2"
                            fontSize="lg"
                            textColor="#fff"
                            mb={1}
                          >
                            {product.productName}
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "md",
                              color: "neutral.300",
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            {product.productViews}
                            <VisibilityIcon
                              sx={{ fontSize: 25, marginLeft: "5px" }}
                            />
                          </Typography>
                        </Stack>
                      </CardContent>
                      <CardOverflow
                        sx={{
                          display: "flex",
                          gap: 1.5,
                          py: 1.5,
                          px: "var(--Card-padding)",
                          borderTop: "1px solid",
                          height: "60px",
                        }}
                      >
                        <Typography
                          startDecorator={<DescriptionOutlinedIcon />}
                          textColor="neutral.300"
                        >
                          ${product.productDesc}
                        </Typography>
                      </CardOverflow>
                    </Card>
                  </CssVarsProvider>
                );
              })
            ) : (
                 <Box className="no-date">Popular products are not available </Box>
            )}
            
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
