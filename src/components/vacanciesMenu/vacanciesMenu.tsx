import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Typography from '@mui/material/Typography';
import { vacanciesSelect } from '../../redux/getVacancies/getVacancies';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import { getVacanciesIdApi } from '../../redux/getVacanciesId/getVacanciesId';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../routes/routes/paths';

const VacanciesMenu = () => {
    const dispatch = useAppDispatch();
    const [expanded, setExpanded] = useState(false);
    const [archive, setArchive] = useState(false);
    const [draft, setDraft] = useState(false);
    const [planned, setPlanned] = useState(false);
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
    const vacancies = useAppSelector(vacanciesSelect);
    const navigate = useNavigate();

    const toggleExpansion = () => {
        setExpanded(!expanded);
        setSelectedItem(null);
    };

    const toggleArchive = () => {
        setArchive(!archive);
    };

    const toggleDraft = () => {
        setDraft(!draft);
    };

    const togglePlanned = () => {
        setPlanned(!planned);
    };

    const handleItemClick = (itemIndex: number) => {
        setSelectedItem(itemIndex);
        dispatch(getVacanciesIdApi({id: itemIndex}))
    };

    function determineLevel(experience: string) {
        if (experience === "до 1 года") {
            return "Junior";
        } else if (experience === "1-3 года") {
            return "Middle";
        } else if (experience === "3-6 лет") {
            return "Senior";
        } else if (experience === "более 6 лет") {
            return "Senior";
        }
    }

    return (
        <Box sx={{ minWidth: '237px', height: 'calc(100vh - 60px)', borderRight: '1px solid #E6E6E6', backgroundColor: '#F9FAFB' }}>
            <Button href='/create'
                variant='default'
                sx={{
                    fontFamily: 'YS-Text',
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '20px',
                    mt: '40px',
                    ml: '24px',
                    padding: '10px 20px',
                }}>Создать вакансию</Button>
            <Box sx={{ mt: '28px', mb: '8px', ml: '24px', }}>
                <Button onClick={toggleExpansion} sx={{
                    color: '#000',
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '20px',
                    m: '0',
                    p: '0'
                }}>
                    Активные {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </Button>
                <Collapse in={expanded} sx={{ display: 'flex', flexDirection: 'column' }}>
                    {vacancies.map((vacancy) => (
                        <Box
                            key={vacancy.id}
                            sx={{
                                m: '12px 0',
                                cursor: 'pointer',
                                padding: '4px 4px',
                                backgroundColor:  vacancy.id === selectedItem ? '#F1F6FF' : null,
                                borderRight: vacancy.id === selectedItem ? '2px solid black' : 'transparent',
                                '&:hover': {
                                    backgroundColor: '#F1F6FF'
                                } 
                            }}
                            onClick={() => {
                                navigate(`${paths.vacancies}/${vacancy.id}`)
                                handleItemClick(vacancy.id)}}
                        >
                            <Typography sx={{
                                fontSize: '14px',
                                fontWeight: '400',
                                lineHeight: '20px',
                            }}>{vacancy.name}</Typography>
                            <Typography sx={{
                                fontSize: '12px',
                                fontWeight: '400',
                                lineHeight: '20px',
                                color: '#afafaf',
                            }}>{determineLevel(vacancy.experience)}</Typography>
                        </Box>
                    ))}
                </Collapse>
            </Box>
            <Box sx={{ m: '8px 0', ml: '24px', }}>
                <Button onClick={toggleArchive} sx={{
                    color: '#000',
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '20px',
                    m: '0',
                    p: '0'
                }}>
                    Архив {archive ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </Button>
                <Collapse in={archive} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Box sx={{
                        m: '12px 0'
                    }}>
                        <Typography sx={{
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '20px',
                        }}>Frontent-разработчик</Typography>
                        <Typography sx={{
                            fontSize: '12px',
                            fontWeight: '400',
                            lineHeight: '20px',
                            color: '#afafaf'
                        }}>Middle</Typography>
                    </Box>
                    <Box sx={{
                        m: '12px 0'
                    }}>
                        <Typography sx={{
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '20px',
                        }}>Frontent-разработчик</Typography>
                        <Typography sx={{
                            fontSize: '12px',
                            fontWeight: '400',
                            lineHeight: '20px',
                            color: '#afafaf'
                        }}>Middle</Typography>
                    </Box>
                </Collapse>
            </Box>
            <Box sx={{ m: '8px 0', ml: '24px', }}>
                <Button onClick={toggleDraft} sx={{
                    color: '#000',
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '20px',
                    m: '0',
                    p: '0'
                }}>
                    Черновики {draft ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </Button>
                <Collapse in={draft} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Box sx={{
                        m: '12px 0'
                    }}>
                        <Typography sx={{
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '20px',
                        }}>Frontent-разработчик</Typography>
                        <Typography sx={{
                            fontSize: '12px',
                            fontWeight: '400',
                            lineHeight: '20px',
                            color: '#afafaf'
                        }}>Middle</Typography>
                    </Box>
                </Collapse>
            </Box>
            <Box sx={{ m: '8px 0', ml: '24px', }}>
                <Button onClick={togglePlanned} sx={{
                    color: '#000',
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '20px',
                    m: '0',
                    p: '0'
                }}
                    disabled
                >
                    Запланированные {planned ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </Button>
                <Collapse in={planned} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Box sx={{
                        m: '12px 0'
                    }}>
                        <Typography sx={{
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '20px',
                        }}>Frontent-разработчик</Typography>
                        <Typography sx={{
                            fontSize: '12px',
                            fontWeight: '400',
                            lineHeight: '20px',
                            color: '#afafaf'
                        }}>Middle</Typography>
                    </Box>
                </Collapse>
            </Box>
        </Box>
    )
}

export default VacanciesMenu;
