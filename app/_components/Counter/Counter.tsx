import { ChangeEvent, Fragment, useState } from 'react';
import { ClickOutsideHandler } from '@/app/_components/ClickOutside/ClickOutside';
import "./Counter.css";

interface CounterProps {
  initialValue?: number;
  step?: number;
  maxNumber?: number;
}

export const Counter = ({ initialValue = 10, step = .5, maxNumber = 200 }: CounterProps) => {
  const [value, setValue] = useState(initialValue);
  const [pickerOpen, setPickerOpen] = useState(false);

  const handleIncrease = () => {
    setValue((current) => current + step);
  };

  const handleDecrease = () => {
    setValue((current) => current !== 0 ? current - step : 0);
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(event.target.value);
    if (!isNaN(inputValue)) {
      setValue(inputValue);
    } else {
      alert('Must be a number');
    }
  };

  const picker = Array.from({ length: maxNumber / step }, (_, i) => (i + 1) * step);

  const handlePick = (pickedValue: number) => {
    setValue(pickedValue);
    setPickerOpen(false);
  };

  return (
    <div className={'counter'}>
      <button className={'counter__button'} onClick={handleDecrease}>-</button>
      <input className={'counter__input'} type={'text'} value={value?.toFixed(2)} onChange={handleOnChange} readOnly={true} onClick={() => setPickerOpen(true)} />
      <button className={'counter__button'} onClick={handleIncrease}>+</button>
      <ClickOutsideHandler onClick={() => setPickerOpen(false)}>
        <div className={'counter__picker'} data-open={pickerOpen}>
          <h2>0</h2>
          {picker.map((count) => {
            return (
              <Fragment key={`pick_${count}`}>
                {count % 10 === 0 && (
                  <h2>{count}</h2>
                )}
                <button onClick={() => handlePick(count)}>{count.toFixed(2)}</button>
              </Fragment>
            );
          })}
        </div>
      </ClickOutsideHandler>
    </div>
  );
};