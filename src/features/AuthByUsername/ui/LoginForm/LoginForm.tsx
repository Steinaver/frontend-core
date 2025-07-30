import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('translation');

    return (
        <div className={classNames(classes.LoginForm, {}, [className])}>
            <Input
                autofocus
                type="text"
                className={classes.input}
                placeholder={t('username')}
            />
            <Input
                type="text"
                className={classes.input}
                placeholder={t('password')}
            />
            <Button className={classes.loginBtn}>{t('login')}</Button>
        </div>
    );
};
