import * as React from 'react';
import { Stack } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { FilterTooltip } from './CustomFilterTooltip/CustomFillterTooltip';
import { FilterForm } from './FilterForm/FilterForm';



type FilterRespondProps = {
  children?: React.ReactNode;
};

export default function FilterRespond({ children }: FilterRespondProps) {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(!open);
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div>
        <FilterTooltip
          sx={{
            width: '285px',
          }}
          PopperProps={{
            disablePortal: false,
          }}
          onClose={handleTooltipClose}
          open={open}
          placement="bottom-start"
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={<FilterForm />}
        >
          <Stack
            display={'flex'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            onClick={handleTooltipOpen}
          >
            {children}
          </Stack>
        </FilterTooltip>
      </div>
    </ClickAwayListener>
  );
}
