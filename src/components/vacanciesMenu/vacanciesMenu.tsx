import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Typography from '@mui/material/Typography';

const VacanciesMenu = () => {
    const [expanded, setExpanded] = useState(false);
    const [archive, setArchive] = useState(false);
    const [draft, setDraft] = useState(false);
    const [planned, setPlanned] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

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

    const handleItemClick = (itemIndex) => {
        setSelectedItem(itemIndex);
      };

    return (
        <Box sx={{ minWidth: '237px', borderRight:'1px solid #E6E6E6' }}>
            <Button sx={{
                fontFamily: ['YS-Text', 'sans-serif'],
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '20px',
                color: '#fff',
                backgroundColor: '#5A9BFF',
                borderRadius: '6px',
                mt:'40px',
                ml:'24px',
                padding: '10px 20px',
                '&:hover': {
                    color: 'black',
                },
            }}>Создать вакансию</Button>
            <Box sx={{ mt: '28px', mb:'8px', ml:'24px', }}>
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
                <Collapse in={expanded} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Box key={1} sx={{
                        m:'12px 0',
                        cursor:'pointer',
                        borderRight: 1 == selectedItem ? '2px solid black' : 'transparent',
                    }}
                    onClick={() => handleItemClick(1)}
                    >
                        <Typography sx={{
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '20px',
                        }}>Frontent-разработчик</Typography>
                        <Typography sx={{
                            fontSize: '12px',
                            fontWeight: '400',
                            lineHeight: '20px',
                            color:'#afafaf'
                        }}>Middle</Typography>
                    </Box>
                    <Box key={2} sx={{
                        m:'12px 0',
                        cursor:'pointer',
                        borderRight: 2 == selectedItem ? '2px solid black' : 'transparent',
                    }}
                    onClick={() => handleItemClick(2)}
                    >
                        <Typography sx={{
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '20px',
                        }}>Frontent-разработчик</Typography>
                        <Typography sx={{
                            fontSize: '12px',
                            fontWeight: '400',
                            lineHeight: '20px',
                            color:'#afafaf'
                        }}>Middle</Typography>
                    </Box>
                    <Box key={3} sx={{
                        m:'12px 0',
                        cursor:'pointer',
                        borderRight: 3 == selectedItem ? '2px solid black' : 'transparent',
                    }}
                    onClick={() => handleItemClick(3)}
                    >
                        <Typography sx={{
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '20px',
                        }}>Frontent-разработчик</Typography>
                        <Typography sx={{
                            fontSize: '12px',
                            fontWeight: '400',
                            lineHeight: '20px',
                            color:'#afafaf'
                        }}>Middle</Typography>
                    </Box>
                </Collapse>
            </Box>
            <Box sx={{ m: '8px 0', ml:'24px', }}>
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
                        m:'12px 0'
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
                            color:'#afafaf'
                        }}>Middle</Typography>
                    </Box>
                    <Box sx={{
                        m:'12px 0'
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
                            color:'#afafaf'
                        }}>Middle</Typography>
                    </Box>
                </Collapse>
            </Box>
            <Box sx={{ m: '8px 0', ml:'24px', }}>
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
                        m:'12px 0'
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
                            color:'#afafaf'
                        }}>Middle</Typography>
                    </Box>
                </Collapse>
            </Box>
            <Box sx={{ m: '8px 0', ml:'24px', }}>
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
                        m:'12px 0'
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
                            color:'#afafaf'
                        }}>Middle</Typography>
                    </Box>
                </Collapse>
            </Box>
        </Box>
    )
}

export default VacanciesMenu;
