import Container from '@mui/material/Container';
import { Header } from '../../../shared/components/Header';
import Grid from '@mui/material/Grid';
import Question from '../components/Question';
import Ide from '../components/Ide';
// import { Buttons } from '../components/Buttons';
const QuestionPage = ()=>{
    return ( <Container >
                <Header/>
                <Grid container spacing={2}>
        <Grid item xs={6}>
            <Question/>
        </Grid>
        <Grid item xs={6}>
            {/* <Buttons/> */}
            <Ide/>
        </Grid>
        </Grid>
    </Container>)
}
export default QuestionPage