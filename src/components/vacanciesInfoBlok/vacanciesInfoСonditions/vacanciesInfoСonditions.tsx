import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import { Typography, IconButton } from '@mui/material';

const fieldStyles = {
    width: '100%',
    '& div': {
        p: '0',
    },
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
    title: 'Работу в амбициозном проекте на ранней стадии; Дружную команду единомышленников; Возможность роста. Мы ценим стремление наших сотрудников профессионально развиваться; Стабильную официальную зарплату без задержек; Работа удаленно или в гибридном формате, гибкое начало рабочего дня.'
}

const VacanciesInfoСonditions = () => {
    const { control, handleSubmit, reset } = useForm();
    const [isEditing, setEditing] = React.useState(false);

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
                        <Typography fontSize={'18px'} lineHeight={'24px'} fontWeight={'700'}>Условия работы</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Controller
                                name="data"
                                control={control}
                                defaultValue={dataSet.title}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        sx={fieldStyles}
                                        fullWidth
                                        multiline
                                    />
                                )}
                            />
                        </Box>
                    </Box>
                ) : (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <Typography fontSize={'18px'} lineHeight={'24px'} fontWeight={'700'}>Условия работы</Typography>
                        <Typography fontSize={'16px'} lineHeight={'24px'} fontWeight={'400'} color={'#797981'}>
                                {dataSet.title.split('; ').map((sentence, index) => (
                                    <li key={index}>{sentence}</li>
                                ))}
                        </Typography>
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

export default VacanciesInfoСonditions;