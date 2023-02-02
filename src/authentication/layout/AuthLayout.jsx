import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({children, title = ''}) => {
  /* Returning a Grid component with the following props:
  container: true
  spacing: 0
  direction: column
  alignItems: center
  justifyContent: center
  sx: {minHeight: "100vh", minWidth: "100vw", backgroundColor: 'primary.main', padding: 4} */
  return (
    <Grid
      container
      spacing={0}
      direction ="column"
      alignItems="center"
      justifyContent = "center"
      sx={{minHeight: "100vh", minWidth: "100vw", backgroundColor: 'primary.main', padding: 4}}>
        <Grid item
          className="box-shadow"
          xs= {3}
          sx= {{backgroundColor: 'white', padding: 3, borderRadius: 2}}>
            <Typography variant = 'h5' sx={{mb:1}}>{title}</Typography>
              {children}
        </Grid>
    </Grid>
  )
}
