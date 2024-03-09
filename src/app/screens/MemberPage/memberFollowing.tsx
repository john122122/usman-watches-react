import Button from "@mui/material/Button";
import { Avatar, Box } from "@mui/material";
import { Stack } from "@mui/system";

const followings = [
    { mb_nick: "" },
    { mb_nick: "" },
    { mb_nick: "" },
];

export function MemberFollowing(props: any) {
  return (
    <Stack>
        {followings.map((following) => {
        const image_url = "/community/david.png";
            return (
                <Box className={"follow_box"}>
                  <Avatar alt={""} src={image_url} sx={{ width: 89, height: 89 }} />
                    <div
                      style={{
                        width: "400px",
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "25px",
                        height: "85%",
                      }}
                    >
                      <span className={"username_text"}>@david_bekham</span>
                      <span className={"name_text"}>David Bekham</span>
                        </div>
                          {props.actions_enabled && (
                            <Button
                              variant={"contained"}
                              startIcon={
                                <img
                                  src={"/icons/follow_back.svg"}
                                  style={{ width: "40px", margin: "16px" }}
                                />
                              }
                             className={"follow_cancel_btn"}
                            >
                              Cancel
                          </Button>
                        )}
                    </Box>
                );
            })}
        </Stack>
    );
}