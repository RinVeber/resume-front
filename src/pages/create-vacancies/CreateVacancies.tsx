import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormHelperText from '@mui/material/FormHelperText';

type FormData = {
  companyName: string;
  companyInfo: string;
  vacanciesName: string;
  city: string;
  category: string;
  vacancyDescription: string;
  responsibilities: string;
  program: {
    weight?: string | undefined;
    tag: string;
  }[];
  // ... Другие поля формы ...
  refusalMessage: string;
};

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
  category: yup.string().required('Выберите категорию').notOneOf(['Выбрать'], 'Выберите категорию'),
  vacancyDescription: yup.string().required('Введите описание вакансии'),
  responsibilities: yup.string().required('Введите обязанности сотрудника'),
  program: yup
    .array()
    .of(
      yup.object().shape({
        tag: yup.string().required('Введите тег'),
        weight: yup.string().notOneOf(['Выбрать вес'], 'Выберите вес'),
      })
    )
    .required('Добавьте хотя бы один тег'),
  incomeLevel: yup.string().required('Укажите уровень дохода'),
  workFormat: yup.string().required('Выберите формат работы'),
  workConditions: yup.string().required('Введите условия работы'),
  additionalInfo: yup.string().required('Введите дополнительную информацию'),
  tags: yup.string().required('Добавьте хотя бы один тег'),
  refusalMessage: yup.string().required('Введите сообщение об отказе'),
});

export default function CreateVacancies() {
  const navigate = useNavigate();
  const { handleSubmit, control, formState, getValues } = useForm({
    resolver: yupResolver(schema),
  });
  // const { isDirty, isSubmitting, isSubmitted } = formState;

  const [category, setCategory] = useState('Выбрать');
  const [money, setMoney] = useState('Валюта');
  const [workFormat, setWorkFormat] = useState('Выбрать');
  const [tags, setTags] = useState<{ tag: string; weight: string }[]>([]);
  const [selectedTag, setSelectedTag] = useState({ tag: '', weight: 'Выбрать вес' });
  const [isInputValid, setInputValid] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [inputText, setInputText] = useState('');

  const onSubmit = () => {
    const formData = getValues();
    console.log('Данные формы:', formData);
  };

  const onSaveDraft = () => {
    const formData = getValues();
    console.log('Данные формы:', formData);
  };

  useEffect(() => {
    setInputValid(selectedTag.tag !== '' && selectedTag.weight !== 'Выбрать вес');
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
    setSelectedTag({ ...selectedTag, tag: event.target.value });
  };

  const handleWeightChange = (event: SelectChangeEvent) => {
    setSelectedTag({ ...selectedTag, weight: event.target.value });
  };

  const handleAddTag = () => {
    if (selectedTag.tag && selectedTag.weight) {
      setTags([...tags, selectedTag]);
      setSelectedTag({ tag: '', weight: '' });
      setInputValid(false);
    }
  };

  const handleRemoveTag = (index: number) => {
    const updatedTags = tags.filter((_, i) => i !== index);
    setTags(updatedTags);
  };

  const handleEnterKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && isInputValid) {
      event.preventDefault();
      handleAddTag();
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Box sx={{
      mt: '40px',
      ml: '40px',
      mb: '100px',
      maxWidth: '785px'
    }}>
      <Button sx={{
        color: '#797981',
        mb: '28px',
        p: '0'
      }} onClick={goBack}>
        <ArrowBackIcon />
        Назад
      </Button>

      {/* первый блок */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{
          m: '44px 40px',
          maxWidth: '707px'
        }}>
          <Typography variant="h2">Общая информация о вакансии</Typography>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: '20px',
            width: '100%'
          }}>
            <Typography variant="h4">Название  компании*</Typography>
            <Controller
              name="companyName"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  sx={fieldStyles}
                  placeholder="ООО «Квант»"
                  fullWidth
                  multiline
                  rows={1}
                  error={!!fieldState.error}
                  helperText={fieldState.error ? fieldState.error.message : ''}
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
            <Typography variant="h4">Информация о компании</Typography>
            <Controller
              name="companyInfo"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  sx={fieldStyles}
                  id="companyInfo"
                  placeholder="Наша компания является разработчиком игровых платформ. У нас классный и дружный коллектив, работаем на удаленке."
                  fullWidth
                  multiline
                  error={!!fieldState.error}
                  helperText={fieldState.error ? fieldState.error.message : ''}
                />
              )}
            />
          </Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: '20px',
            width: '100%'
          }}>
            <Typography variant="h4">Название  вакансии*</Typography>
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
                  fullWidth
                  multiline
                  rows={1}
                  error={!!fieldState.error}
                  helperText={fieldState.error ? fieldState.error.message : ''}
                />
              )}
            />
          </Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: '20px',
            width: '100%'
          }}>
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
                  fullWidth
                  multiline
                  rows={1}
                  error={!!fieldState.error}
                  helperText={fieldState.error ? fieldState.error.message : ''}
                />
              )}
            />
          </Box>
        </Box>

        {/* второй блок */}

        <Box sx={{
          m: '44px 40px',
          maxWidth: '707px'
        }}>
          <Typography variant="h2">Требования к вакансии</Typography>

          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: '16px',
            width: '100%',
          }}>
            <Typography variant="h4">Выберите категорию*</Typography>
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
                      color:
                      field.value === 'Выбрать'
                          ? '#797981'
                          : 'black',
                    },
                  }}
                  id="category"
                  fullWidth
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(e);
                    handleCategoryChange(e);
                  }}
                  error={!!fieldState.error}
                >
                  <MenuItem disabled value="Выбрать" style={{ color: 'grey' }}>Выбрать</MenuItem>
                  <MenuItem value="до 1 года">до 1 года</MenuItem>
                  <MenuItem value="1-3 года">1-3 года</MenuItem>
                  <MenuItem value="3-6 лет">3-6 лет</MenuItem>
                  <MenuItem value="более 6 лет">более 6 лет</MenuItem>
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
            <Typography variant="h4">Описание  вакансии*</Typography>
            <Controller
              name="vacancyDescription"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  sx={fieldStyles}
                  id="companyName"
                  placeholder="У нас классный и дружный коллектив, работаем на удаленке."
                  fullWidth
                  multiline
                  error={!!fieldState.error}
                  helperText={fieldState.error ? fieldState.error.message : ''}
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
            <Typography variant="h4">Обязанности сотрудника*</Typography>
            <Controller
              name="responsibilities"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  sx={fieldStyles}
                  id="companyName"
                  placeholder="Наша компания является разработчиком игровых платформ."
                  fullWidth
                  multiline
                  error={!!fieldState.error}
                  helperText={fieldState.error ? fieldState.error.message : ''}
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
                  fullWidth
                  multiline
                  value={selectedTag.tag}
                  onChange={handleTagChange}
                  onKeyPress={handleEnterKeyPress}
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
                  fullWidth
                  value={selectedTag.weight}
                  onChange={handleWeightChange}
                >
                  <MenuItem disabled value="Выбрать вес" style={{ color: 'grey' }}>Выбрать вес</MenuItem>
                  <MenuItem value="Критически важно">Критически важно</MenuItem>
                  <MenuItem value="Желательно">Желательно</MenuItem>
                  <MenuItem value="Будет преимуществом">Будет преимуществом</MenuItem>
                </Select>
              </Box>
              <Box sx={{ mt: '12px', display: 'flex', gap: '10px' }}>
                {tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag.tag}
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
                <TextField
                  sx={fieldStyles}
                  id="companyName"
                  placeholder="999999"
                  fullWidth
                  multiline
                />
                <Select
                  sx={{
                    maxWidth: '400px',
                    '& div': {
                      p: '10px 12px',
                    },
                    '& .MuiSelect-select': { color: money == "Валюта" ? '#797981' : 'black' }
                  }}
                  id="category"
                  fullWidth
                  value={money}
                  onChange={handleMoneyChange}
                >
                  <MenuItem disabled value="Валюта" style={{ color: 'grey' }}>Валюта</MenuItem>
                  <MenuItem value="rub">Рубль</MenuItem>
                  <MenuItem value="teng">Тенге</MenuItem>
                  <MenuItem value="com">Сомм</MenuItem>
                </Select>
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
            <Select
              sx={{
                maxWidth: '400px',
                '& div': {
                  p: '10px 12px',
                },
                '& .MuiSelect-select': { color: workFormat == "Выбрать" ? '#797981' : 'black' }
              }}
              id="category"
              fullWidth
              value={workFormat}
              onChange={handleWorkFormatChange}
            >
              <MenuItem disabled value="Выбрать" style={{ color: 'grey' }}>Выбрать</MenuItem>
              <MenuItem value="rub">В Офисе</MenuItem>
              <MenuItem value="teng">Удаленно</MenuItem>
            </Select>
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
                  fullWidth
                  multiline
                  error={!!fieldState.error}
                  helperText={fieldState.error ? fieldState.error.message : ''}
                />
              )}
            />
          </Box>
        </Box>

        {/* четвертый блок */}

        <Box sx={{
          m: '44px 40px',
          maxWidth: '707px'
        }}>
          <Typography variant="h2">Дополнительная информация</Typography>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: '20px',
            width: '100%'
          }}>
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
                  fullWidth
                  multiline
                  rows={1}
                  error={!!fieldState.error}
                  helperText={fieldState.error ? fieldState.error.message : ''}
                />
              )}
            />
          </Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: '20px',
            width: '100%'
          }}>
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
                  fullWidth
                  multiline
                  rows={1}
                  error={!!fieldState.error}
                  helperText={fieldState.error ? fieldState.error.message : ''}
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
            <Typography variant="h4">Отказ соискателю</Typography>
            <Controller
              name="refusalMessage"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  sx={fieldStyles}
                  id="companyName"
                  placeholder="Уважаемый кандидат,  благодарим вас за внимание к нашей компании. В данный момент мы не готовы сделать вам предложение. Надеемся, что сможем сотрудничать в будущем."
                  fullWidth
                  multiline
                  error={!!fieldState.error}
                  helperText={fieldState.error ? fieldState.error.message : ''}
                />
              )}
            />
          </Box>
        </Box>

        {/* нижние кнопки */}

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: '32px 0',
          minHeight: '43px'
        }}>
          <FormControlLabel
            control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />}
            label="Показать инпут"
          />

          {isChecked && (
            <TextField
              sx={checkboxStyles}
              fullWidth
              multiline
              placeholder="Сопроводительное письмо"
              variant="outlined"
              value={inputText}
              onChange={handleInputChange}
            />
          )}
        </Box>

      </form>
        <Box sx={{ display: 'flex', gap: '56px' }}>
          <Button
            type="submit"
            onClick={onSubmit}
            sx={{
              p: '15px 42px',
              backgroundColor: '#5A9BFF',
              color: '#fff',
              fontSize: '16px',
              '&:hover': {
                color: '#000',
              },
            }}>Разместить вакансию</Button>
          <Button
            onClick={onSaveDraft}
            sx={{
              p: '15px 42px',
              backgroundColor: '#fff',
              border: '1px solid #1D6BF3',
              color: '#1D6BF3',
              fontSize: '16px',
            }}>Сохранить черновик</Button>
        </Box>
    </Box >
  )
}
