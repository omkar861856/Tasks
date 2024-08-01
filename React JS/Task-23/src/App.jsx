import DrawerAppBar from "./components/Navbar"

function App() {
  

  return (
    <>
     <DrawerAppBar/>
     <Container>
      <Typography variant="h4">My Form</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="username"
          control={control}
          render={({ field }) => <TextField {...field} label="Username" error={!!errors.username} helperText={errors.username?.message} fullWidth />}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => <TextField {...field} label="Email" type="email" error={!!errors.email} helperText={errors.email?.message} fullWidth />}
        />
        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </form>
    </Container>
    </>
  )
}

export default App
