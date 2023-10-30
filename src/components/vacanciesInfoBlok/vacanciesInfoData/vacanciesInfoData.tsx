import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import { Typography, IconButton } from '@mui/material';
import { useAppSelector } from '../../../redux/store';
import { vacanciesIdSelect } from '../../../redux/getVacanciesId/getVacanciesId';

const fieldStyles = {
    width: 'auto',
    '& fieldset': {
        border: 'none'
    },
    '& input': {
        p: '0',
        fontSize: '14px',
        fontWeight: '400',
    },
};

const dataSet = {
    data: '12.10.2023',
    city: 'Караганда',
    experience: '12 лет',
    money: '90000 руб',
    job: '2/2'
}

const VacanciesInfoData = () => {
    const { control, handleSubmit, reset } = useForm();
    const [isEditing, setEditing] = React.useState(false);
    const vacancyId = useAppSelector(vacanciesIdSelect);

    const onSubmit = (data: object) => {
        // Обработка данных формы (data)
        console.log(data);
        setEditing(false);
    };

    const handleEdit = () => {
        setEditing(true);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box
                sx={{
                    mt: '18px',
                    boxShadow: '0px 4px 40px 0px rgba(215, 215, 215, 1)',
                    padding: '20px 16px',
                    position: 'relative',
                    borderRadius: '6px',
                    border: isEditing ? '1px solid #1D6BF3' : 'initial',
                }}
            >

                {isEditing ? (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography fontSize={'14px'} lineHeight={'20px'} fontWeight={'700'}>Дата публикации:</Typography>

                            <TextField
                                sx={fieldStyles}
                                defaultValue={vacancyId?.pub_date}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography fontSize={'14px'} lineHeight={'20px'} fontWeight={'700'}>Город:</Typography>
                            <Controller
                                name="city"
                                control={control}
                                defaultValue={vacancyId?.location}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        sx={fieldStyles}
                                    />
                                )}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography fontSize={'14px'} lineHeight={'20px'} fontWeight={'700'}>Опыт работы:</Typography>
                            <Controller
                                name="experience"
                                control={control}
                                defaultValue={vacancyId?.experience}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        sx={fieldStyles}
                                    />
                                )}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography fontSize={'14px'} lineHeight={'20px'} fontWeight={'700'}>З/п:</Typography>
                            <Controller
                                name="money"
                                control={control}
                                defaultValue={dataSet.money}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        sx={fieldStyles}
                                    />
                                )}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography fontSize={'14px'} lineHeight={'20px'} fontWeight={'700'}>Формат работы:</Typography>
                            <Controller
                                name="job"
                                control={control}
                                defaultValue={vacancyId?.form}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        sx={fieldStyles}
                                    />
                                )}
                            />
                        </Box>
                    </Box>
                ) : (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography fontSize={'14px'} lineHeight={'20px'} fontWeight={'700'}>Дата публикации:</Typography>
                            <Typography fontSize={'14px'} lineHeight={'20px'} fontWeight={'400'}>{`\u00A0${vacancyId?.pub_date}`}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography fontSize={'14px'} lineHeight={'20px'} fontWeight={'700'}>Город:</Typography>
                            <Typography fontSize={'14px'} lineHeight={'20px'} fontWeight={'400'}>{`\u00A0${vacancyId?.location}`}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography fontSize={'14px'} lineHeight={'20px'} fontWeight={'700'}>Опыт работы:</Typography>
                            <Typography fontSize={'14px'} lineHeight={'20px'} fontWeight={'400'}>{`\u00A0${vacancyId?.experience}`}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography fontSize={'14px'} lineHeight={'20px'} fontWeight={'700'}>З/п:</Typography>
                            <Typography fontSize={'14px'} lineHeight={'20px'} fontWeight={'400'}>{`\u00A0${dataSet.money}`}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography fontSize={'14px'} lineHeight={'20px'} fontWeight={'700'}>Формат работы:</Typography>
                            <Typography fontSize={'14px'} lineHeight={'20px'} fontWeight={'400'}>{`\u00A0${vacancyId?.form}`}</Typography>
                        </Box>
                    </Box>
                )}

                {isEditing ? (
                    <Box
                        sx={{
                            mt: '20px',
                            display: 'flex',
                            justifyContent: 'end',
                            gap: '8px'
                        }}
                    >
                        <Button
                            type="submit"
                            variant="default"
                            color="primary"
                        >
                            Сохранить
                        </Button>
                        <Button
                            onClick={() => {
                                reset();
                                setEditing(false);
                            }}
                            variant="outlined"
                            color="secondary"
                        >
                            Отменить
                        </Button>
                    </Box>
                ) : (
                    <IconButton
                        sx={{
                            position: 'absolute',
                            top: '0',
                            right: '0'
                        }}
                        onClick={handleEdit}
                    >
                        <EditIcon />
                    </IconButton>
                )}
            </Box>
        </form>
    )
}

export default VacanciesInfoData;