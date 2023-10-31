import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Typography from '@mui/material/Typography';
import {
  Checkbox,
  TextField,
  List,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControlLabel,
  Chip,
  Stack,
} from '@mui/material';

const schema = yup.object().shape({
  location: yup.string(),
  experience: yup.string(),
  employment: yup.string(),
  skill: yup.string(),
  salaryFrom: yup.string(),
  salaryTo: yup.string(),
  portfolio: yup.boolean(),
});

type SearchMenuProps = {
  setСandidates: (newState: [] | null) => void;
};

const SearchMenu = ({setСandidates}: SearchMenuProps) => {
  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const [experienceType, setExperienceType] = useState('Выбрать');
  const [employmentType, setEmploymentType] = useState('Выбрать');
  const [skill, setSkill] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [checkSalary, setCheckSalary] = useState(false);
  const [checkPortfolio, setCheckPortfolio] = useState(false);

  const onSubmit = (data: object) => {
    console.log('Данные:', data);
  };

  const handleExperienceTypeChange = (event: SelectChangeEvent) => {
    setExperienceType(event.target.value);
  };

  const handleEmploymentTypeChange = (event: SelectChangeEvent) => {
    setEmploymentType(event.target.value);
  };

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSkill(event.target.value);
  };

  const handleAddSkills = (event: React.KeyboardEvent) => {
    if (!skill) return;
    if (event.key === 'Enter') {
      event.preventDefault();
      setSkills([...skills, skill]);
      setSkill('');
    }
  };

  const handleRemoveSkill = (index: number) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  }

  const handleCheckSalary = () => {
    setCheckSalary(!checkSalary);
  };

  const handleCheckPortfolio = () => {
    setCheckPortfolio(!checkPortfolio);
  };

  const clearFilters = () => {
    reset();
    setExperienceType('Выбрать');
    setEmploymentType('Выбрать');
    setSkills([]);
    setCheckSalary(false);
    setCheckPortfolio(false);
  }

  return (
    <Box sx={{ minWidth: '237px', height: 'calc(100vh - 60px)', borderRight: '1px solid #E6E6E6', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Button sx={{
        fontFamily: ['YS-Text', 'sans-serif'],
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '20px',
        color: '#fff',
        backgroundColor: '#5A9BFF',
        borderRadius: '6px',
        mt: '40px',
        padding: '10px 20px',
        minWidth: '190px',
        alignSelf: 'center',
        '&:hover': {
          color: 'black',
        },
      }}>Расширенный поиск</Button>
      <Box sx={{ mt: '28px', mb: '20px', ml: '24px', alignSelf: 'baseline' }}>
        <Typography sx={{
          fontSize: '18px',
          fontWeight: '500',
          lineHeight: '24px'
        }}>Фильтры</Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} width={'200px'}>
          <Box>
            <Typography sx={{
              fontSize: '13px',
              fontWeight: '500',
              lineHeight: '16px',
              mb: '4px'
            }}>Местоположение</Typography>
            <Controller
              name='location'
              control={control}
              defaultValue=''
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  sx={{
                    '& div': {
                      p: '10px 12px',
                    }
                  }}
                  id='location'
                  placeholder='Введите город'
                  fullWidth
                  multiline
                  rows={1}
                  error={!!fieldState.error}
                  helperText={fieldState.error ? fieldState.error.message : ''}
                />
              )}
            />
          </Box>
          <Box>
            <Typography sx={{
              fontSize: '13px',
              fontWeight: '500',
              lineHeight: '16px',
              mb: '4px'
            }}>Опыт работы</Typography>
            <Controller
              name='experience'
              control={control}
              defaultValue=''
              render={({ field, fieldState }) => (
                <Select
                  {...field}
                  sx={{
                    maxWidth: '200px',
                    '& div': {
                      p: '10px 12px',
                    },
                    '& .MuiSelect-select': {
                      color:
                        experienceType === 'Выбрать'
                          ? '#797981'
                          : 'black',
                    },
                  }}
                  id='experience'
                  fullWidth
                  value={experienceType}
                  onChange={(e) => {
                    field.onChange(e);
                    handleExperienceTypeChange(e);
                  }}
                  error={!!fieldState.error}
                >
                  <MenuItem disabled value='Выбрать' style={{ color: 'grey' }}>Выбрать</MenuItem>
                  <MenuItem value='до 1 года'>до 1 года</MenuItem>
                  <MenuItem value='1-3 года'>1-3 года</MenuItem>
                  <MenuItem value='3-6 лет'>3-6 лет</MenuItem>
                  <MenuItem value='более 6 лет'>более 6 лет</MenuItem>
                </Select>
              )}
            />
          </Box>
          <Box>
            <Typography sx={{
              fontSize: '13px',
              fontWeight: '500',
              lineHeight: '16px',
              mb: '4px'
            }}>Тип занятности</Typography>
            <Controller
              name='employment'
              control={control}
              defaultValue=''
              render={({ field, fieldState }) => (
                <Select
                  {...field}
                  sx={{
                    maxWidth: '200px',
                    '& div': {
                      p: '10px 12px',
                    },
                    '& .MuiSelect-select': {
                      color:
                        employmentType === 'Выбрать'
                          ? '#797981'
                          : 'black',
                    },
                  }}
                  id='category'
                  fullWidth
                  value={employmentType}
                  onChange={(e) => {
                    field.onChange(e);
                    handleEmploymentTypeChange(e);
                  }}
                  error={!!fieldState.error}
                >
                  <MenuItem disabled value='Выбрать' style={{ color: 'grey' }}>Выбрать</MenuItem>
                  <MenuItem value='Полная'>Полная</MenuItem>
                  <MenuItem value='Частичная'>Частичная</MenuItem>
                </Select>
              )}
            />
          </Box>
          <Box>
            <Typography sx={{
              fontSize: '13px',
              fontWeight: '500',
              lineHeight: '16px',
              mb: '4px'
            }}>Навыки и инструменты</Typography>
            <Controller
              name='skill'
              control={control}
              defaultValue=''
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  fullWidth
                  id='skills'
                  multiline
                  variant='outlined'
                  value={skill}
                  onChange={handleSkillChange}
                  onKeyPress={handleAddSkills}
                  error={!!fieldState.error}
                  helperText={fieldState.error ? fieldState.error.message : ''}
                  sx={{
                    '& div': {
                      p: '10px 12px',
                    },
                  }}
                />
              )}
            />
            <Box sx={{ maxWidth: '200px' }}>
              {skills.map((i, index) => (
                <Chip
                  key={index}
                  label={i}
                  onDelete={() => handleRemoveSkill(index)}
                  sx={{ marginTop: '5px', marginRight: '5px' }}
                />
              ))}
            </Box>
          </Box>
          <Box>
            <Typography sx={{
              fontSize: '13px',
              fontWeight: '500',
              lineHeight: '16px',
              mb: '4px'
            }}>Зарплата</Typography>
            <List component='div' disablePadding sx={{ display: 'flex', flexDirection: 'row', gap: '5px', justifyContent: 'space-between' }}>
              <Controller
                name='salaryFrom'
                control={control}
                defaultValue=''
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    sx={{
                      width: '95px',
                      '& div': {
                        p: '10px 12px',
                      }
                    }}
                    id='salaryFrom'
                    placeholder='От'
                    fullWidth
                    multiline
                    rows={1}
                    error={!!fieldState.error}
                    helperText={fieldState.error ? fieldState.error.message : ''}
                    disabled={!checkSalary}
                  />
                )}
              />
              <Controller
                name='salaryTo'
                control={control}
                defaultValue=''
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    sx={{
                      width: '95px',
                      '& div': {
                        p: '10px 12px',
                      }
                    }}
                    id='salaryTo'
                    placeholder='До'
                    fullWidth
                    multiline
                    rows={1}
                    error={!!fieldState.error}
                    helperText={fieldState.error ? fieldState.error.message : ''}
                    disabled={!checkSalary}
                  />
                )}
              />
            </List>
          </Box>
          <Box>
            <FormControlLabel
              control={<Checkbox checked={checkSalary} onChange={handleCheckSalary} sx={{ pt: '0', pb: '0' }} />}
              label='Указана'
            />
          </Box>
          <Box>
            <Controller
              name='portfolio'
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <FormControlLabel
                  {...field}
                  id='portfolio'
                  control={<Checkbox checked={checkPortfolio} onChange={handleCheckPortfolio} sx={{ pt: '0', pb: '0' }} />}
                  label='Только с портфолио'
                />
              )}
            />
          </Box>
          <Button ></Button>
          <Button
            type='submit'
            sx={{
              fontFamily: ['YS-Text', 'sans-serif'],
              fontSize: '14px',
              fontWeight: '500',
              lineHeight: '20px',
              color: '#fff',
              backgroundColor: '#5A9BFF',
              borderRadius: '6px',
              mt: '40px',
              padding: '10px 20px',
              minWidth: '190px',
              alignSelf: 'center',
              '&:hover': {
                color: 'black',
              },
            }}>Отправить форму</Button>
          <Button sx={{
            fontFamily: ['YS-Text', 'sans-serif'],
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '20px',
            color: '#5A9BFF',
            backgroundColor: '#FFF',
            border: '1px solid #5A9BFF',
            borderRadius: '6px',
            mt: '40px',
            padding: '10px 20px',
            minWidth: '190px',
            alignSelf: 'center',
            '&:hover': {
              color: 'black',
              borderColor: 'black'
            }
          }}
            onClick={clearFilters}>Очистить</Button>
        </Stack>
      </form>
    </Box>
  )
}

export default SearchMenu;