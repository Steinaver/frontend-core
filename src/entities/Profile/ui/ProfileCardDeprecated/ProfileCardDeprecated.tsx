import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import classes from './ProfileCardDeprecated.module.scss';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Loader } from '@/shared/ui/deprecated/Loader';
import {
    Text as TextDeprecated,
    TextAlign,
    TextTheme,
} from '@/shared/ui/deprecated/Text';

export const ProfileCardDeprecatedError = () => {
    const { t } = useTranslation('profile');

    return (
        <HStack
            justify="center"
            max
            className={classNames(classes.ProfileCard, {}, [classes.error])}
        >
            <TextDeprecated
                theme={TextTheme.ERROR}
                title={t('unexpected_error')}
                text={t('refresh_page')}
                align={TextAlign.CENTER}
            />
        </HStack>
    );
};

export const ProfileCardDeprecatedLoader = () => {
    return (
        <HStack
            justify="center"
            max
            className={classNames(classes.ProfileCard, {}, [classes.loading])}
        >
            <Loader />
        </HStack>
    );
};

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const { t } = useTranslation('profile');

    const mods: Mods = {
        [classes.editing]: !readonly,
    };

    return (
        <VStack
            gap="8"
            max
            className={classNames(classes.ProfileCard, mods, [className])}
        >
            {data?.avatar && (
                <HStack justify="center" max>
                    <AvatarDeprecated src={data?.avatar} />
                </HStack>
            )}
            <InputDeprecated
                value={data?.first}
                placeholder={t('firstname')}
                className={classes.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
            />
            <InputDeprecated
                value={data?.lastname}
                placeholder={t('lastname')}
                className={classes.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="ProfileCard.lastname"
            />
            <InputDeprecated
                value={data?.age}
                placeholder={t('age')}
                className={classes.input}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <InputDeprecated
                value={data?.city}
                placeholder={t('city')}
                className={classes.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <InputDeprecated
                value={data?.username}
                placeholder={t('username')}
                className={classes.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <InputDeprecated
                value={data?.avatar}
                placeholder={t('avatar')}
                className={classes.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                value={data?.currency}
                onChange={onChangeCurrency}
                className={classes.input}
                readonly={readonly}
            />
            <CountrySelect
                value={data?.country}
                onChange={onChangeCountry}
                className={classes.input}
                readonly={readonly}
            />
        </VStack>
    );
});
