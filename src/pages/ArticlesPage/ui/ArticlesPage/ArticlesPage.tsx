import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';
import classes from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('translation');

    return (
        <div className={classNames(classes.ArticlesPage, {}, [className])}>
            <ArticleList
                view={ArticleView.BIG}
                articles={[]}
            />
        </div>
    );
};

export default memo(ArticlesPage);
