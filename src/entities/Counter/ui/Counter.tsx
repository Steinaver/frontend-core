import { useDispatch } from 'react-redux';
import { Button } from '@/shared/ui/deprecated/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useCounterValue();
    const { increment, decrement, add } = useCounterActions();

    const handleInc = () => {
        increment();
    };

    const handleDec = () => {
        decrement();
    };

    const handleAddFive = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button onClick={handleAddFive} data-testid="increment-btn5">
                add 5
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button onClick={handleInc} data-testid="increment-btn">
                increment
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button onClick={handleDec} data-testid="decrement-btn">
                decrement
            </Button>
        </div>
    );
};
