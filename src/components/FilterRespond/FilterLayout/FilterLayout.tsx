import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Checkbox, Box, Autocomplete, TextField, InputAdornment } from '@mui/material';
import del from '../../../assets/delete.svg';
import SearchIcon from '@mui/icons-material/Search';

export default function FilterLayout() {
  const [openStatus, setOpenStatus] = React.useState(false);
  const [openСity, setOpenCity] = React.useState(false);
  const [openSalary, setOpenSalary] = React.useState(false);
  const [openFormat, setOpenFormat] = React.useState(false);
  const [openPortfolio, setOpenPortfolio] = React.useState(false);

  const handleClickStatus = () => {
    setOpenStatus(!openStatus);
  };

  const handleClickCity = () => {
    setOpenCity(!openСity);
  };
  const handleClickSalary = () => {
    setOpenSalary(!openSalary);
  };
  const handleClickFormat = () => {
    setOpenFormat(!openFormat);
  };
  const handleClickPortfolio = () => {
    setOpenPortfolio(!openPortfolio);
  };

  const listCityMok = [
    {
      id: 1,
      name: 'Москва',
    },
    {
      id: 2,
      name: 'Питер',
    },
    {
      id: 3,
      name: 'Калнинград',
    },
  ];

  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClickStatus}>
        <ListItemText primary="Статус" />
        {openStatus ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openStatus} timeout="auto" unmountOnExit>
        <List sx={{ padding: '4px' }} component="div" disablePadding>
          <ListItemButton>
            <Checkbox />

            <ListItemText primary="Откликнулись" />
          </ListItemButton>
          <ListItemButton>
            <Checkbox />

            <ListItemText primary="Без отклика" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickCity}>
        <ListItemText primary="Город" />
        {openСity ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openСity} timeout="auto" unmountOnExit>
        <List sx={{ padding: '4px' }} component="div" disablePadding>
          <ListItemButton>
            <Autocomplete
              disableCloseOnSelect
              filterSelectedOptions
              disablePortal
      
              options={listCityMok}
              getOptionLabel={(option) => option.name}
              sx={{ width: '330px' }}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              renderInput={(params) => (
                <TextField
                  {...params}
            
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Поиск по названию"
                />
              )}
            />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickSalary}>
        <ListItemText primary="Зарплата" />
        {openSalary ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openSalary} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Box
            sx={{ display: 'flex', flexDirection: 'row', gap: '5px', pl: 4 }}
          >
            <TextField placeholder="От" fullWidth />
            <TextField placeholder="До" fullWidth />
          </Box>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickFormat}>
        <ListItemText primary="Форматы работы" />
        {openFormat ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openFormat} timeout="auto" unmountOnExit>
        <List sx={{ padding: '4px' }} component="div" disablePadding>
          <ListItemButton>
            <Checkbox />

            <ListItemText primary="Офис" />
          </ListItemButton>
          <ListItemButton>
            <Checkbox />

            <ListItemText primary="Гибрид" />
          </ListItemButton>
          <ListItemButton>
            <Checkbox />

            <ListItemText primary="Удаленка" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickPortfolio}>
        <ListItemText primary="Наличие портфолио" />
        {openPortfolio ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openPortfolio} timeout="auto" unmountOnExit>
        <List sx={{ padding: '4px' }} component="div" disablePadding>
          <ListItemButton>
            <Checkbox />

            <ListItemText primary="Есть портфолио" />
          </ListItemButton>
          <ListItemButton>
            <Checkbox />

            <ListItemText primary="Есть сопроводительное письмо" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton
        sx={{ display: 'flex', flexDirection: 'row', gap: '5px' }}
      >
        <img src={del} alt={'delete'} />
        <ListItemText primary="Отчистить фильтры" />
      </ListItemButton>
    </List>
  );
}
