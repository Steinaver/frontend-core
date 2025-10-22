import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
    const { t } = useTranslation('translation');
    return (
        <div className={classNames(classes.NotFoundPage, {}, [className])}>
            {t('page_not_found')}
        </div>
    );
});
