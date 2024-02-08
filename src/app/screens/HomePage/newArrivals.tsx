import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";

import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { CssVarsProvider } from '@mui/joy/styles';
import { CardOverflow, IconButton } from '@mui/joy';
import { Favorite } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';

export function NewArrivals() {
  return (
    <div className="new_arrival_frame">
      <Container>
        <Stack 
          flexDirection={"column"}
            alignItems={"center"}
              sx={{ mt: "45px" }}
                >  
                 <Box className="category_title"> New Arrivals </Box>
                   <Stack sx={{ mt: "43px" }} flexDirection={"row"} m={"16px"} ml={"45px"}>
                      <CssVarsProvider>
                          <Card
                              sx={{
                                  minHeight: '500px',
                                  width: "325px",
                                  mr: "15px",
                                  cursor: "pointer",
                              }}>
                              <CardCover> 
                           <img                            
                             src="/shops/2023-11-23.jpg"                                                             
                                loading="lazy"                               
                                  alt=""                               
                                  />  
                                </CardCover>                       
                               <CardCover                           
                              sx={{           
                            background:                                    
                          'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',                                
                        }}                           
                      />                       
                    <CardContent sx={{ justifyContent: 'flex-end' }}>                           
                      <Typography level="h2" textColor="#fff">                               
                         Prado                            
                           </Typography>                            
                             <Typography                               
                               startDecorator={<LocationOnRoundedIcon />}                               
                                  textColor="neutral.300"                               
                                    >                               
                                      France, Paris 9-0-1                              
                                    </Typography>                           
                              </CardContent> 
                              <CardOverflow
                                  sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 1.5,
                                    py: 1.5,
                                    px: 'var-(--Card-padding)',
                                    borderTop: "1px solid",    
                                  }}
                              >
                                <IconButton
                                  aria-label='like minimal photography'
                                  size='md'
                                  variant='solid'
                                  color='neutral'
                                    sx={{
                                       position: "absolute",
                                       zIndex: 2,
                                       borderRadius: "50%",
                                       right: "1rem",
                                       bottom: 45,
                                       transform: "translateY(50%)",
                                       color: "rgba(0,0,0,.4)",
                                      }}
                                  > 
                                      <Favorite style={{ fill: "white" }} />  
                                  </IconButton>
                                  <Typography 
                                      level="body-sm"
                                        sx={{
                                           fontSize: "16px",
                                            lineHeight: "1.5",
                                            fontWeight: "md",
                                            color: "neutral.300",
                                            alignItems: "center",
                                            display: "flex",
                                        }}
                                      >
                                        100K{""}   
                                      <VisibilityIcon sx={{ fontsize: 20, marginLeft: "5px"}} />
                                    </Typography>
                                    <Box sx={{ width: 2, bgcolor: "divider"}}/>
                                    <Typography
                                        sx={{
                                           fontWeight: "md",
                                           color: "neutral.300",
                                           alignItems: "center",
                                           display: "flex",
                                        }}
                                      >
                                    <div>10K</div>
                                 <Favorite sx={{ fontsize: 20, marginLeft: "5px"}} /> 
                               </Typography>
                              </CardOverflow>
                          </Card>
                          
                          <Card
                              sx={{
                                  minHeight: '500px',
                                  width: "325px",
                                  mr: "15px",
                                  cursor: "pointer",
                              }}>
                         <CardCover> 
                           <img                            
                             src="/shops/2023-12-07.jpg"                                                             
                                loading="lazy"                               
                                  alt=""                               
                                   />                           
                                </CardCover>                       
                               <CardCover                           
                              sx={{           
                            background:                                    
                          'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',                                
                        }}                           
                      />                       
                    <CardContent sx={{ justifyContent: 'flex-end' }}>                           
                      <Typography level="h2" textColor="#fff">                               
                         Armani                            
                           </Typography>                            
                             <Typography                               
                               startDecorator={<LocationOnRoundedIcon />}                               
                                  textColor="neutral.300"                               
                                    >                               
                                      Italy, Roma 44-1                              
                                    </Typography>                           
                              </CardContent> 
                              <CardOverflow
                                  sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 1.5,
                                    py: 1.5,
                                    px: 'var-(--Card-padding)',
                                    borderTop: "1px solid",    
                                  }}
                              >
                                <IconButton
                                  aria-label='like minimal photography'
                                  size='md'
                                  variant='solid'
                                  color='neutral'
                                    sx={{
                                       position: "absolute",
                                       zIndex: 2,
                                       borderRadius: "50%",
                                       right: "1rem",
                                       bottom: 45,
                                       transform: "translateY(50%)",
                                       color: "rgba(0,0,0,.4)",
                                      }}
                                  > 
                                      <Favorite style={{ fill: "white" }} />  
                                  </IconButton>
                                  <Typography 
                                      level="body-sm"
                                        sx={{
                                           fontSize: "16px",
                                            lineHeight: "1.5",
                                            fontWeight: "md",
                                            color: "neutral.300",
                                            alignItems: "center",
                                            display: "flex",
                                        }}
                                      >
                                        100K{""}   
                                      <VisibilityIcon sx={{ fontsize: 20, marginLeft: "5px"}} />
                                    </Typography>
                                    <Box sx={{ width: 2, bgcolor: "divider"}}/>
                                    <Typography
                                        sx={{
                                           fontWeight: "md",
                                           color: "neutral.300",
                                           alignItems: "center",
                                           display: "flex",
                                        }}
                                      >
                                    <div>10K</div>
                                 <Favorite sx={{ fontsize: 20, marginLeft: "5px"}} /> 
                               </Typography>
                              </CardOverflow>
                          </Card>
                          
                          <Card
                              sx={{
                                  minHeight: '500px',
                                  width: "325px",
                                  mr: "15px",
                                  cursor: "pointer",
                              }}>
                         <CardCover> 
                           <img                            
                             src="/shops/2023-11-23.jpg"                                                            
                                loading="lazy"                               
                                  alt=""                               
                                   />                           
                                </CardCover>                       
                               <CardCover                           
                              sx={{           
                            background:                                    
                          'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',                                
                        }}                           
                      />                       
                    <CardContent sx={{ justifyContent: 'flex-end' }}>                           
                      <Typography level="h2" textColor="#fff">                               
                         Polo                            
                           </Typography>                            
                             <Typography                               
                               startDecorator={<LocationOnRoundedIcon />}                               
                                  textColor="neutral.300"                               
                                    >                               
                                      France, Paris 9-0-1                                
                                    </Typography>                           
                              </CardContent> 
                              <CardOverflow
                                  sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 1.5,
                                    py: 1.5,
                                    px: 'var-(--Card-padding)',
                                    borderTop: "1px solid",    
                                  }}
                              >
                                <IconButton
                                  aria-label='like minimal photography'
                                  size='md'
                                  variant='solid'
                                  color='neutral'
                                    sx={{
                                       position: "absolute",
                                       zIndex: 2,
                                       borderRadius: "50%",
                                       right: "1rem",
                                       bottom: 45,
                                       transform: "translateY(50%)",
                                       color: "rgba(0,0,0,.4)",
                                      }}
                                  > 
                                      <Favorite style={{ fill: "white" }} />  
                                  </IconButton>
                                  <Typography 
                                      level="body-sm"
                                        sx={{
                                           fontSize: "16px",
                                            lineHeight: "1.5",
                                            fontWeight: "md",
                                            color: "neutral.300",
                                            alignItems: "center",
                                            display: "flex",
                                        }}
                                      >
                                        100K{""}   
                                      <VisibilityIcon sx={{ fontsize: 20, marginLeft: "5px"}} />
                                    </Typography>
                                    <Box sx={{ width: 2, bgcolor: "divider"}}/>
                                    <Typography
                                        sx={{
                                           fontWeight: "md",
                                           color: "neutral.300",
                                           alignItems: "center",
                                           display: "flex",
                                        }}
                                      >
                                    <div>10K</div>
                                 <Favorite sx={{ fontsize: 20, marginLeft: "5px"}} /> 
                               </Typography>
                              </CardOverflow>
                          </Card>

                          <Card
                              sx={{
                                  minHeight: '500px',
                                  width: "325px",
                                  mr: "35px",
                                  cursor: "pointer",
                              }}>
                         <CardCover> 
                           <img                            
                             src="/shops/2023-12-07.jpg"                                                            
                                loading="lazy"                               
                                  alt=""                               
                                   />                           
                                </CardCover>                       
                               <CardCover                           
                              sx={{           
                            background:                                    
                          'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',                                
                        }}                           
                      />                       
                    <CardContent sx={{ justifyContent: 'flex-end' }}>                           
                      <Typography level="h2" textColor="#fff">                               
                         Boss                            
                           </Typography>                            
                             <Typography                               
                               startDecorator={<LocationOnRoundedIcon />}                               
                                  textColor="neutral.300"                               
                                    >                               
                                      Italy, Roma 44-1                              
                                    </Typography>                           
                              </CardContent> 
                              <CardOverflow
                                  sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 1.5,
                                    py: 1.5,
                                    px: 'var-(--Card-padding)',
                                    borderTop: "1px solid",    
                                  }}
                              >
                                <IconButton
                                  aria-label='like minimal photography'
                                  size='md'
                                  variant='solid'
                                  color='neutral'
                                    sx={{
                                       position: "absolute",
                                       zIndex: 2,
                                       borderRadius: "50%",
                                       right: "1rem",
                                       bottom: 45,
                                       transform: "translateY(50%)",
                                       color: "rgba(0,0,0,.4)",
                                      }}
                                  > 
                                      <Favorite style={{ fill: "white" }} />  
                                  </IconButton>
                                  <Typography 
                                      level="body-sm"
                                        sx={{
                                           fontSize: "16px",
                                            lineHeight: "1.5",
                                            fontWeight: "md",
                                            color: "neutral.300",
                                            alignItems: "center",
                                            display: "flex",
                                        }}
                                      >
                                        100K{""}   
                                      <VisibilityIcon sx={{ fontsize: 20, marginLeft: "5px"}} />
                                    </Typography>
                                    <Box sx={{ width: 2, bgcolor: "divider"}}/>
                                    <Typography
                                        sx={{
                                           fontWeight: "md",
                                           color: "neutral.300",
                                           alignItems: "center",
                                           display: "flex",
                                        }}
                                      >
                                    <div>10K</div>
                                 <Favorite sx={{ fontsize: 20, marginLeft: "5px"}} /> 
                               </Typography>
                              </CardOverflow>
                          </Card>
                        </CssVarsProvider>    
                  </Stack>
                  
                  <Stack
                      flexDirection={"row"}
                      justifyContent={"flex-end"}
                      style={{ width: "100%"  }}
                  >
                      <Button style={{ background: "#1c4a2c", color: "#ffffff" }}>
                          See All
                      </Button>
                  </Stack>
                </Stack>
            </Container>
        </div>
    );
}