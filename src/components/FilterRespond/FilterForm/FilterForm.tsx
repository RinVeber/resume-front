import React from 'react';
import FilterLayout from '../FilterLayout/FilterLayout';

export const FilterForm = React.forwardRef(function FilterForm(
  props,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <div {...props} ref={ref}>
      <FilterLayout />
    </div>
  );
});
