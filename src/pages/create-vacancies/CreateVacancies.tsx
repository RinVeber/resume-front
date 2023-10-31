import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomCheckbox from '../../components/Checkbox';
import { useAppDispatch } from '../../redux/store';
import { postVacanciesApi } from '../../redux/postVacancies/postVacancies';
import PublicVacanciesModal from '../../components/Modals/PublicVacanciesModal/PublicVacanciesModal';
import CloseVacanciesModal from '../../components/Modals/CloseVacanciesModal/CloseVacanciesModal';
import { useNavigate } from 'react-router-dom';

const fieldStyles = {
  maxWidth: '400px',
  '& textarea': {
    fontSize: '14px',
    fontWeight: '400',
  },
  '& div': {
    p: '10px 12px',
  },
};

const checkboxStyles = {
  maxWidth: '500px',
  textAlign: 'center',
  '& fieldset': {
    whiteSpace: 'pre-wrap',
  },
  '& textarea': {
    fontSize: '14px',
    fontWeight: '400',
  },
  '& div': {
    p: '10px 12px',
  },
};

const schema = yup.object().shape({
  companyName: yup.string().required('Введите название компании'),
  companyInfo: yup.string().required('Введите информацию о компании'),
  vanaciesName: yup.string().required('Введите название вакансии'),
  city: yup.string().required('Введите город в котором размещаете вакансию'),
  category: yup
    .string()
    .required('Выберите категорию')
    .notOneOf(['Выбрать'], 'Выберите категорию'),
  vacancyDescription: yup.string().required('Введите описание вакансии'),
  responsibilities: yup.string().required('Введите обязанности сотрудника'),
  incomeLevelMoney: yup.number().required('Укажите уровень дохода'),
  incomeLevelRub: yup.string().required('Укажите валюту').notOneOf(['Валюта'], 'Выберите категорию'),
  workFormat: yup.string().required('Выберите формат работы').notOneOf(['Выбрать'], 'Выберите категорию'),
  workConditions: yup.string().required('Введите условия работы'),
  additionalInfo: yup.string().required('Введите дополнительную информацию'),
  tags: yup.string().required('Добавьте хотя бы один тег'),
  refusalMessage: yup.string().required('Введите сообщение об отказе'),
});

interface IVacanciesData {
  category: string,
  vacancyDescription: string,
  companyName: string,
  companyInfo: string,
  city: string,
  vanaciesName: string,
  incomeLevelMoney: number,
  responsibilities: string,
  workConditions: string,
  refusalMessage: string,
  additionalInfo: string,
  workFormat: string
}

export default function CreateVacancies() {
  const dispatch = useAppDispatch();
  const [isPublicVacancies, setPublickVacancies] = useState(false);
  const [isCloseVacancies, setCloseVacancies] = useState(false);
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });
  // const { isDirty, isSubmitting, isSubmitted } = formState;

  const [category, setCategory] = useState('Выбрать');
  const [money, setMoney] = useState('Валюта');
  const [workFormat, setWorkFormat] = useState('Выбрать');
  const [tags, setTags] = useState<{ name: string; weight: string }[]>([]);
  const [selectedTag, setSelectedTag] = useState({ name: '', weight: '' });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isInputValid, setInputValid] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [inputText, setInputText] = useState('');

  function handlePublicVacancies() {
    setPublickVacancies(!isPublicVacancies);
  }
  function handleCloseVacancies() {
    setCloseVacancies(!isCloseVacancies);
  }

  const navigate = useNavigate()

  const onSubmit = (data: IVacanciesData) => {
    const dataToSend = {
      tags: [data.category],
      skills: tags,
      company_name: data.companyName,
      company_info: data.companyInfo,
      location: data.city,
      name: data.vanaciesName,
      experience: data.category,
      description: data.vacancyDescription,
      form: data.workFormat,
      reject_letter: data.refusalMessage,
      additional_info: data.additionalInfo,
      responsibilities: data.responsibilities,
    };
    dispatch(postVacanciesApi({ data: dataToSend }));
    console.log('Данные:', data);
    navigate(-1);
  };

  const onSaveDraft = (data: object) => {
    console.log('Данные:', data);
  };

  useEffect(() => {
    setInputValid(
      selectedTag.name !== '' && selectedTag.weight !== 'Выбрать вес',
    );
  }, [selectedTag]);

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const handleMoneyChange = (event: SelectChangeEvent) => {
    setMoney(event.target.value);
  };

  const handleWorkFormatChange = (event: SelectChangeEvent) => {
    setWorkFormat(event.target.value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTag({ ...selectedTag, name: event.target.value });
  };

  const handleWeightChange = (event: SelectChangeEvent) => {
    setSelectedTag({ ...selectedTag, weight: event.target.value });
  };
  
  const handleRemoveTag = (index: number) => {
    const updatedTags = tags.filter((_, i) => i !== index);
    setTags(updatedTags);
  };

  const handleAddTag = () => {
    if (selectedTag.name && selectedTag.weight) {
      setTags([...tags, selectedTag]);
      setSelectedTag({ name: '', weight: '' });
      setInputValid(false);
    }
  };

  useEffect(() => {
    handleAddTag();
  }, [selectedTag.name && selectedTag.weight]);

  const goBack = () => {
    handleCloseVacancies();
  };

  return (
    <>
      <Box
        sx={{
          mt: '40px',
          ml: '40px',
          mb: '100px',
          maxWidth: '785px',
        }}
      >
        <Button
          sx={{
            color: '#797981',
            mb: '28px',
            p: '0',
          }}
          onClick={goBack}
        >
          <ArrowBackIcon />
          Назад
        </Button>

        {/* первый блок */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              m: '44px 40px',
              maxWidth: '707px',
            }}
          >
            <Typography variant="h2">Общая информация о вакансии</Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: '20px',
                width: '100%',
              }}
            >
              <Typography variant="h4">Название компании*</Typography>
              <Controller
                name="companyName"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    sx={fieldStyles}
                    placeholder="ООО «Квант»"
                    multiline
                    fullWidth
                    rows={1}
                    error={!!fieldState.error}
                    helperText={
                      fieldState.error ? fieldState.error.message : ''
                    }
                  />
                )}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: '16px',
                width: '100%',
              }}
            >
              <Typography variant="h4">Информация о компании</Typography>
              <Controller
                name="companyInfo"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    sx={fieldStyles}
                    id="companyInfo"
                    placeholder="Наша компания является..."
                    multiline
                    fullWidth
                    error={!!fieldState.error}
                    helperText={
                      fieldState.error ? fieldState.error.message : ''
                    }
                  />
                )}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: '20px',
                width: '100%',
              }}
            >
              <Typography variant="h4">Название вакансии*</Typography>
              <Controller
                name="vanaciesName"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    value={field.value}
                    sx={fieldStyles}
                    id="vanaciesName"
                    placeholder="Web-разработчик"
                    multiline
                    fullWidth
                    rows={1}
                    error={!!fieldState.error}
                    helperText={
                      fieldState.error ? fieldState.error.message : ''
                    }
                  />
                )}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: '20px',
                width: '100%',
              }}
            >
              <Typography variant="h4">Город *</Typography>
              <Controller
                name="city"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    sx={fieldStyles}
                    id="companyName"
                    placeholder="Москва"
                    multiline
                    fullWidth
                    rows={1}
                    error={!!fieldState.error}
                    helperText={
                      fieldState.error ? fieldState.error.message : ''
                    }
                  />
                )}
              />
            </Box>
          </Box>

          {/* второй блок */}

          <Box
            sx={{
              m: '44px 40px',
              maxWidth: '707px',
            }}
          >
            <Typography variant="h2">Требования к вакансии</Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: '16px',
                width: '100%',
              }}
            >
              <Typography variant="h4">Требуемый опыт*</Typography>
              <Controller
                name="category"
                control={control}
                render={({ field, fieldState }) => (
                  <Select
                    {...field}
                    sx={{
                      maxWidth: '400px',
                      '& div': {
                        p: '10px 12px',
                      },
                      '& .MuiSelect-select': {
                        color: category === 'Выбрать' ? '#797981' : 'black',
                      },
                    }}
                    id="category"
                    value={category}
                    fullWidth
                    onChange={(e) => {
                      field.onChange(e);
                      handleCategoryChange(e);
                    }}
                    error={!!fieldState.error}
                  >
                    <MenuItem
                      disabled
                      value="Выбрать"
                      style={{ color: 'grey' }}
                    >
                      Выбрать
                    </MenuItem>
                    <MenuItem value="до 1 года">до 1 года</MenuItem>
                    <MenuItem value="1-3 года">1-3 года</MenuItem>
                    <MenuItem value="3-6 лет">3-6 лет</MenuItem>
                    <MenuItem value="более 6 лет">более 6 лет</MenuItem>
                  </Select>
                )}
              />
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: '16px',
                width: '100%',
              }}
            >
              <Typography variant="h4">Описание вакансии*</Typography>
              <Controller
                name="vacancyDescription"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    sx={fieldStyles}
                    id="companyName"
                    placeholder="У нас классный и дружный коллектив..."
                    multiline
                    fullWidth
                    error={!!fieldState.error}
                    helperText={
                      fieldState.error ? fieldState.error.message : ''
                    }
                  />
                )}
              />
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: '16px',
                width: '100%',
              }}
            >
              <Typography variant="h4">Обязанности сотрудника*</Typography>
              <Controller
                name="responsibilities"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    sx={fieldStyles}
                    id="companyName"
                    placeholder="Наша компания является..."
                    multiline
                    fullWidth
                    error={!!fieldState.error}
                    helperText={
                      fieldState.error ? fieldState.error.message : ''
                    }
                  />
                )}
              />
            </Box>

          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: '16px',
            width: '100%'
          }}>
            <Typography variant="h4">Знание программ* </Typography>
            <Box>
              <Box sx={{
                display: 'flex',
                width: '400px',
                gap: '20px'
              }}>
                <TextField
                  sx={fieldStyles}
                  id="companyName"
                  placeholder="Тег"
                  multiline
                  fullWidth
                  value={selectedTag.name}
                  onChange={handleTagChange}
                  // onKeyPress={handleEnterKeyPress}
                />
                <Select
                  sx={{
                    maxWidth: '400px',
                    '& div': {
                      p: '10px 12px',
                    },
                    '& .MuiSelect-select': { color: selectedTag.weight == "Выбрать вес" ? '#797981' : 'black' }
                  }}
                  id="category"
                  value={selectedTag.weight}
                  fullWidth
                  onChange={handleWeightChange}
                >
                  <MenuItem disabled value="Выбрать вес" style={{ color: 'grey' }}>Выбрать вес</MenuItem>
                  <MenuItem value={1}>Критически важно</MenuItem>
                  <MenuItem value={2}>Желательно</MenuItem>
                  <MenuItem value={3}>Будет преимуществом</MenuItem>
                </Select>
              </Box>
              <Box sx={{ mt: '12px', display: 'flex', gap: '10px' }}>
                {tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag.name}
                    onDelete={() => handleRemoveTag(index)}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

          {/* третий блок */}

        <Box sx={{
          m: '44px 40px',
          maxWidth: '707px'
        }}>
          <Typography variant="h2">Условия сотрудничества</Typography>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: '16px',
            width: '100%'
          }}>
            <Typography variant="h4">Уровень дохода*</Typography>
            <Box>
              <Box sx={{
                display: 'flex',
                width: '400px',
                gap: '20px'
              }}>
                <Controller
                  name="incomeLevelMoney"
                  control={control}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      sx={fieldStyles}
                      placeholder="999999"
                      multiline
                      fullWidth
                      error={!!fieldState.error}
                      helperText={fieldState.error ? fieldState.error.message : ''}
                    />
                  )}
                />
                <Controller
                  name="incomeLevelRub"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Select
                      {...field}
                      sx={{
                        maxWidth: '400px',
                        height: '43px',
                        '& div': {
                          p: '10px 12px',
                        },
                        '& .MuiSelect-select': { color: money == "Валюта" ? '#797981' : 'black' }
                      }}
                      id="category"
                      value={money}
                      fullWidth
                      onChange={(e) => {
                        field.onChange(e);
                        handleMoneyChange(e);
                      }}
                      error={!!fieldState.error}
                    >
                      <MenuItem disabled value="Валюта" style={{ color: 'grey' }}>Валюта</MenuItem>
                      <MenuItem value="RUB">Рубль</MenuItem>
                      <MenuItem value="EUR">Евро</MenuItem>
                      <MenuItem value="USD">Доллар</MenuItem>
                    </Select>
                  )}
                />
              </Box>
            </Box>
          </Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: '20px',
            width: '100%'
          }}>
            <Typography variant="h4">Формат работы</Typography>
            <Controller
              name="workFormat"
              control={control}
              render={({ field, fieldState }) => (
                <Select
                  {...field}
                  sx={{
                    maxWidth: '400px',
                    '& div': {
                      p: '10px 12px',
                    },
                    '& .MuiSelect-select': { color: workFormat == "Выбрать" ? '#797981' : 'black' }
                  }}
                  value={workFormat}
                  fullWidth
                  onChange={(e) => {
                    field.onChange(e);
                    handleWorkFormatChange(e);
                  }}
                  error={!!fieldState.error}
                >
                  <MenuItem disabled value="Выбрать" style={{ color: 'grey' }}>Выбрать</MenuItem>
                  <MenuItem value="В Офисе">В Офисе</MenuItem>
                  <MenuItem value="Удаленно">Удаленно</MenuItem>
                </Select>
              )}
            />
          </Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: '16px',
            width: '100%'
          }}>
            <Typography variant="h4">Условия работы*</Typography>
            <Controller
              name="workConditions"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  sx={{
                    maxWidth: '400px',
                    '& fieldset': {
                      whiteSpace: 'pre-wrap',
                    },
                    '& textarea': {
                      fontSize: '14px',
                      fontWeight: '400',
                    },
                    '& div': {
                      p: '10px 12px',
                    },
                  }}
                  id="companyName"
                  placeholder="Рабские"
                  multiline
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error ? fieldState.error.message : ''}
                />
              )}
            />
          </Box>
        </Box>

          {/* четвертый блок */}

          <Box
            sx={{
              m: '44px 40px',
              maxWidth: '707px',
            }}
          >
            <Typography variant="h2">Дополнительная информация</Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: '20px',
                width: '100%',
              }}
            >
              <Typography variant="h4">Доп информация</Typography>
              <Controller
                name="additionalInfo"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    sx={fieldStyles}
                    id="companyName"
                    placeholder="Готов вкалывать"
                    multiline
                    fullWidth
                    rows={1}
                    error={!!fieldState.error}
                    helperText={
                      fieldState.error ? fieldState.error.message : ''
                    }
                  />
                )}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: '20px',
                width: '100%',
              }}
            >
              <Typography variant="h4">Теги*</Typography>
              <Controller
                name="tags"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    sx={fieldStyles}
                    id="companyName"
                    placeholder="#Город-дорог"
                    multiline
                    fullWidth
                    rows={1}
                    error={!!fieldState.error}
                    helperText={
                      fieldState.error ? fieldState.error.message : ''
                    }
                  />
                )}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: '16px',
                width: '100%',
              }}
            >
              <Typography variant="h4">Отказ соискателю</Typography>
              <Controller
                name="refusalMessage"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    sx={fieldStyles}
                    id="companyName"
                    placeholder="Уважаемый кандидат,  благодарим вас..."
                    multiline
                    fullWidth
                    error={!!fieldState.error}
                    helperText={
                      fieldState.error ? fieldState.error.message : ''
                    }
                  />
                )}
              />
            </Box>
          </Box>

          {/* нижние кнопки */}

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              p: '32px 0',
              minHeight: '43px',
            }}
          >
            <FormControlLabel
              control={
                <CustomCheckbox
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
              }
              label="Сопроводительное письмо"
            />

            {isChecked && (
              <TextField
                sx={checkboxStyles}
                multiline
                fullWidth
                placeholder="Сопроводительное письмо"
                variant="outlined"
                value={inputText}
                onChange={handleInputChange}
              />
            )}
          </Box>
          <Box sx={{ display: 'flex', gap: '56px' }}>
            <Button
              variant="default"
              onClick={() => {
                handlePublicVacancies();
                // handleSubmit(onSubmit);
              }}
              sx={{
                p: '15px 42px',
                backgroundColor: '#5A9BFF',
                color: '#fff',
                fontSize: '16px',
                '&:hover': {
                  color: '#000',
                },
              }}
            >
              Разместить вакансию
            </Button>

            <Button
              onClick={handleSubmit(onSaveDraft)}
              sx={{
                p: '15px 42px',
                backgroundColor: '#fff',
                border: '1px solid #1D6BF3',
                color: '#1D6BF3',
                fontSize: '16px',
              }}
            >
              Сохранить черновик
            </Button>
          </Box>

          <PublicVacanciesModal
            open={isPublicVacancies}
            handleClose={handlePublicVacancies}
            onSubmit={handleSubmit(onSubmit)}
          />
        </form>
      </Box>

      <CloseVacanciesModal
        open={isCloseVacancies}
        handleClose={handleCloseVacancies}
      />
    </>
  );
}
