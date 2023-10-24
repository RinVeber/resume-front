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


export default function CreateVacancies() {
  const navigate = useNavigate();
  const [category, setCategory] = useState('Выбрать');
  const [money, setMoney] = useState('Валюта');
  const [workFormat, setWorkFormat] = useState('Выбрать');
  const [tags, setTags] = useState<{ tag: string; weight: string }[]>([]);
  const [selectedTag, setSelectedTag] = useState({ tag: '', weight: 'Выбрать вес' });
  const [isInputValid, setInputValid] = useState(false);

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
      ml: '40px'
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
          <TextField
            sx={{
              maxWidth: '400px',
              '& textarea': {
                fontSize: '14px',
                fontWeight: '400',
              },
              '& div': {
                p: '10px 12px',
              },
            }}
            id="companyName"
            placeholder="ООО «Квант»"
            fullWidth
            multiline
            rows={1}
          />
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: '16px',
          width: '100%'
        }}>
          <Typography variant="h4">Информация о компании</Typography>
          <TextField
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
            placeholder="Наша компания является разработчиком игровых платформ. У нас классный и дружный коллектив, работаем на удаленке."
            fullWidth
            multiline
          />
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: '20px',
          width: '100%'
        }}>
          <Typography variant="h4">Название  вакансии*</Typography>
          <TextField
            sx={{
              maxWidth: '400px',
              '& textarea': {
                fontSize: '14px',
                fontWeight: '400',
              },
              '& div': {
                p: '10px 12px',
              },
            }}
            id="companyName"
            placeholder="Web-разработчик"
            fullWidth
            multiline
            rows={1}
          />
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: '20px',
          width: '100%'
        }}>
          <Typography variant="h4">Город *</Typography>
          <TextField
            sx={{
              maxWidth: '400px',
              '& textarea': {
                fontSize: '14px',
                fontWeight: '400',
              },
              '& div': {
                p: '10px 12px',
              },
            }}
            id="companyName"
            placeholder="Москва"
            fullWidth
            multiline
            rows={1}
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
          <Select
            sx={{
              maxWidth: '400px',
              '& div': {
                p: '10px 12px',
              },
              '& .MuiSelect-select': { color: category == "Выбрать" ? '#797981' : 'black' }
            }}
            id="category"
            fullWidth
            value={category}
            onChange={handleCategoryChange}
          >
            <MenuItem disabled value="Выбрать" style={{ color: 'grey' }}>Выбрать</MenuItem>
            <MenuItem value="category1">До 1 года</MenuItem>
            <MenuItem value="category2">1-3 года</MenuItem>
            <MenuItem value="category3">3-6 лет</MenuItem>
            <MenuItem value="category3">более 6 лет</MenuItem>
          </Select>
        </Box>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: '16px',
          width: '100%'
        }}>
          <Typography variant="h4">Описание  вакансии*</Typography>
          <TextField
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
            placeholder="У нас классный и дружный коллектив, работаем на удаленке."
            fullWidth
            multiline
          />
        </Box>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: '16px',
          width: '100%'
        }}>
          <Typography variant="h4">Обязанности сотрудника*</Typography>
          <TextField
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
            placeholder="Наша компания является разработчиком игровых платформ."
            fullWidth
            multiline
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
                <MenuItem value="category1">Критически важно</MenuItem>
                <MenuItem value="category2">Желательно</MenuItem>
                <MenuItem value="category3">Будет преимуществом</MenuItem>
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
          <Typography variant="h4">Название  компании*</Typography>
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
          <TextField
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
          <TextField
            sx={{
              maxWidth: '400px',
              '& textarea': {
                fontSize: '14px',
                fontWeight: '400',
              },
              '& div': {
                p: '10px 12px',
              },
            }}
            id="companyName"
            placeholder="Готов вкалывать"
            fullWidth
            multiline
            rows={1}
          />
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: '20px',
          width: '100%'
        }}>
          <Typography variant="h4">Теги*</Typography>
          <TextField
            sx={{
              maxWidth: '400px',
              '& textarea': {
                fontSize: '14px',
                fontWeight: '400',
              },
              '& div': {
                p: '10px 12px',
              },
            }}
            id="companyName"
            placeholder="#Город-дорог"
            fullWidth
            multiline
            rows={1}
          />
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: '16px',
          width: '100%'
        }}>
          <Typography variant="h4">Отказ соискателю</Typography>
          <TextField
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
            placeholder="Уважаемый кандидат,  благодарим вас за внимание к нашей компании. В данный момент мы не готовы сделать вам предложение. Надеемся, что сможем сотрудничать в будущем."
            fullWidth
            multiline
          />
        </Box>
      </Box>
    </Box >
  )
}
