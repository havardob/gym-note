import { ChangeEvent, Fragment, useState } from 'react';
import { ClickOutsideHandler } from '@/app/_components/ClickOutside/ClickOutside';

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
    <>
      <div className={'counter'}>
        <button className={'counter-button'} onClick={handleDecrease}>-</button>
        <input className={'counter-input'} type={'text'} value={value?.toFixed(2)} onChange={handleOnChange} readOnly={true} onClick={() => setPickerOpen(true)} />
        <button className={'counter-button'} onClick={handleIncrease}>+</button>
        <ClickOutsideHandler onClick={() => setPickerOpen(false)}>
          <div className={'counter-picker'} data-open={pickerOpen}>
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

      <style jsx>{`
         .counter {
            display: grid;
            grid-template-columns: min-content 10ch min-content;
            column-gap: .25rem;
         }

         .counter-button {
            aspect-ratio: 1;
            border-radius: .25rem;
            width: 3.5rem;
            color: var(--color-button-text-primary);
            background-color: var(--color-button-background-primary);
            border: 0;
            font-size: 1.5rem;
            transform-origin: center center;
            transition: scale .15s ease;
            user-select: none;

            &:active {
               transition: scale .15s ease;
               scale: .75;
            }
         }

         .counter-input {
            font-size: 1.25rem;
            border-radius: .25rem;
            border: 1px solid var(--color-border-neutral-default);
            text-align: center;
            font-family: var(--ff-mono), monospace;
         }

         .counter-picker {
            position: fixed;
            inset: .5rem;
            inset-block-start: 20dvh;
            inset-block-end: 10dvh;
            overflow-y: auto;
            flex-direction: column;
            row-gap: .25rem;
            z-index: 1000;
            background-color: var(--color-background-neutral-default);
            padding: .5rem;
            border-radius: .5rem;
            display: none;
            box-shadow: 0 0 0 100vmax rgba(0 0 0 / .2);
               font-family: var(--ff-mono), monospace;

            &[data-open="true"] {
               display: flex;
            }
            
            h2 {
               background-color: var(--color-background-neutral-default);
               position: sticky;
               width: 100%;
               top: -.5rem;
               font-size: 1rem;
               font-weight: 500;
               padding-block: .5rem;
               text-align: center;
            }

            button {
               border-radius: .25rem;
               border: 0;
               padding-block: 1rem;
               background-color: var(--color-background-neutral-subtle);
            }
         }

      `}</style>
    </>
  );
};