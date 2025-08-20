import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import AvatarStorybook from 'shared/assets/tests/storybook.jpg';
import { Profile } from '../../model/types/profile';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
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

    if (isLoading) {
        return (
            <div className={classNames(classes.ProfileCard, {}, [className, classes.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(classes.ProfileCard, {}, [className, classes.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('unexpected_error')}
                    text={t('refresh_page')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [classes.editing]: !readonly,
    };

    return (
        <div className={classNames(classes.ProfileCard, mods, [className])}>
            <div className={classes.data}>
                {__PROJECT__ === 'storybook' && (
                    <div className={classes.avatarWrapper}>
                        <Avatar src={AvatarStorybook} />
                    </div>
                )}
                {data?.avatar && (
                    <div className={classes.avatarWrapper}>
                        <Avatar src={data?.avatar} />
                    </div>
                )}
                <Input
                    value={data?.first}
                    placeholder={t('firstname')}
                    className={classes.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('lastname')}
                    className={classes.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('age')}
                    className={classes.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('city')}
                    className={classes.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('username')}
                    className={classes.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
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
            </div>
        </div>
    );
};
