import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";

const activeUsers =[
    {memberNick:"Martin", memberImage:"/img/martin.webp"},
    {memberNick:"Justin", memberImage:"/img/justin.webp"},
    {memberNick:"Rose", memberImage:"/img/rose.webp"},
    {memberNick:"Nusret", memberImage:"/img/nusret.webp"},
];

export default function ActiveUsers() {
    return (
      <div className={"active-users-frame"}>
        <Container>
          <Stack className={"main"}>
            <Box className={"category-title"}>Active Users</Box>
            <Stack className={"cards-frame"}>
              <CssVarsProvider>
                {activeUsers.length !== 0 ? (
                  activeUsers.map((member, index) => (
                    <Card key={index} variant="outlined" className={"card"}>
                      <CardOverflow>
                        <AspectRatio ratio="1">
                          <img src={member.memberImage} alt={member.memberNick} />
                        </AspectRatio>
                      </CardOverflow>
                      <CardOverflow>
                        <Typography className={"member-nickname"}>
                          {member.memberNick}
                        </Typography>
                      </CardOverflow>
                    </Card>
                  ))
                ) : (
                  <Box className="no-data">No Active Users!</Box>
                )}
              </CssVarsProvider>
            </Stack>
          </Stack>
        </Container>
      </div>
    );
  }
  