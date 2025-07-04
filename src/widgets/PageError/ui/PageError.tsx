import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import classes from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation('translation');

    const refreshPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(classes.PageError, {}, [className])}>
            <p>{t('unexpected_error')}</p>
            <Button onClick={refreshPage}>
                {t('refresh_page')}
            </Button>
        </div>
    );
};
