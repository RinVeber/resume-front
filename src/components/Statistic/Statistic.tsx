import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

const Statistic = () => {
    return (
        <Box sx={{
            mt:'20px',
            ml:'20px',
            textAlign:'left'
        }}>
            <Typography fontSize={'18px'} lineHeight={'24px'} fontWeight={'700'}>Статистика по вакансии</Typography>
            <BarChart
            title='Отклики по месяцам, чел.'
                xAxis={[
                    {
                        data: ['Июль', 'Авг', 'Сент', 'Окт'],
                        scaleType: 'band',
                    },
                ]}
                series={[{data: [2, 5, 3, 7]}]}
                leftAxis={null}
                width={300}
                height={200}
                sx={{
                    ml:'0',
                    '& .svg': {
                    },
                    '& .MuiBarElement-root': {
                        fill: '#1D6BF3',
                        borderRadius:'6px'
                    },
                }}
            />
        </Box>
    )
}

export default Statistic;