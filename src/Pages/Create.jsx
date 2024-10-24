import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Create = () => {

  return (
    <>

    <Container>
        <Typography 
            variant='h6'
            component='h2'
            gutterBottom
            color='textSecondary'
        >
        Create a New Note
        </Typography>

        <Button 
            color='info' 
            type='submit' 
            variant='contained'
            disableElevation
            endIcon={<KeyboardArrowRightIcon />}
            sx={{
                backgroundColor: 'red',
                fontSize: 60,
                '&:hover': {
                    backgroundColor: 'blue',
                }
            }}
        >
        Submit
        </Button>
    </Container>

    </>
  )
}

export default Create
