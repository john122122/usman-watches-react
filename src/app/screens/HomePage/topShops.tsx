import React from "react";
import { Box, Container, Stack } from "@mui/material";

import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { CssVarsProvider } from '@mui/joy/styles';
import { CardOverflow, IconButton } from '@mui/joy';
import { Favorite } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';

export function TopShops() {
  return (
    <div
      className="top_shops_frame"
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <Container>
        <Stack 
          flexDirection={"column"}
            alignItems={"center"}
              sx={{ mt: "45px" }}
              >  
                <Box className="category_title">Top Shops</Box>
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
                             src="/shops/guy.jpg"                                                             
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
                         Guy Laroche                            
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
                             src="/shops/guy.jpg"                                                             
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
                         Guy Laroche                            
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
                             src="/shops/guy.jpg"                                                             
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
                         Guy Laroche                            
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
                                  mr: "35px",
                                  cursor: "pointer",
                              }}>
                         <CardCover> 
                           <img                            
                             src="/shops/guy.jpg"                                                             
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
                         Guy Laroche                            
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
                </Stack>
            </Container>
        </div>
    );
}