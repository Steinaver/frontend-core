import { ChangeEvent, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    };

    const optionsList = useMemo(() => options?.map((optionData) => (
        <option
            className={classes.option}
            value={optionData.value}
            key={optionData.value}
        >
            {optionData.content}
        </option>
    )), [options]);

    return (
        <div className={classNames(classes.Wrapper, {}, [className])}>
            {label && (
                <span className={classes.label}>
                    {`${label}>`}
                </span>
            )}
            <select
                disabled={readonly}
                className={classes.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
};
