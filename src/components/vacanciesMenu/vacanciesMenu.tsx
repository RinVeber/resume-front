import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const VacanciesMenu = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    return (
        <Box sx={{ minWidth: '237px', paddingTop: '40px', paddingLeft: '24px' }}>
            <Button sx={{
                fontFamily: ['YS-Text', 'sans-serif'],
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '20px',
                color:'#fff',
                backgroundColor: '#5A9BFF',
                borderRadius: '6px',
                padding: '10px 20px',
                '&:hover': {
                    color: 'black',
                },
            }}>Создать вакансию</Button>
            <Box>
                <Button onClick={toggleExpansion}>
                Активные {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </Button>
                <Collapse in={expanded}>
                    <div>
                        <p>Содержимое 1</p>
                        <p>Содержимое 2</p>
                        <p>Содержимое 3</p>
                    </div>
                </Collapse>
            </Box>
        </Box>
    )
}

export default VacanciesMenu;