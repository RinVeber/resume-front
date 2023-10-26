import Box from '@mui/material/Box';
import VacanciesInfoData from '../../components/vacanciesInfoBlok/vacanciesInfoData/vacanciesInfoData';
import VacanciesInfoDiscrip from '../../components/vacanciesInfoBlok/vacanciesInfoDiscrip/vacanciesInfoDiscrip';
import VacanciesInfoResponsibilities from '../../components/vacanciesInfoBlok/vacanciesInfoResponsibilities/vacanciesInfoResponsibilities';
import VacanciesInfoProgram from '../../components/vacanciesInfoBlok/vacanciesInfoProgram/vacanciesInfoProgram';
import VacanciesInfoСonditions from '../../components/vacanciesInfoBlok/vacanciesInfoСonditions/vacanciesInfoСonditions';
import VacanciesInfoCompany from '../../components/vacanciesInfoBlok/vacanciesInfoCompany/vacanciesInfoCompany';
import VacanciesInfoTags from '../../components/vacanciesInfoBlok/vacanciesInfoTags/vacanciesInfoTags';
import Statistic from '../../components/Statistic/Statistic';
import Interview from '../../components/interview/interview';
const VacanciesInfo = () => {

    return (
        <Box sx={{display:'flex', flexDirection:'row', gap:'20px'}}>
            <Box sx={{width:'570px'}}>
                <VacanciesInfoData />
                <VacanciesInfoDiscrip />
                <VacanciesInfoResponsibilities />
                <VacanciesInfoProgram />
                <VacanciesInfoСonditions />
                <VacanciesInfoCompany />
                <VacanciesInfoTags />
            </Box>
            <Box>
                <Statistic />
                <Interview />
            </Box>
        </Box>
    )
}

export default VacanciesInfo;