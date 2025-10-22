import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page/Page';
import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('translation');
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(classes.ArticleEditPage, {}, [className])}>
            {isEdit
                ? `${t('editing_article')} ${id}`
                : t('creating_article')}
        </Page>
    );
});

export default ArticleEditPage;
