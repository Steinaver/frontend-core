import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';
import classes from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

function getSkeletons(view: ArticleView) {
    return Array.from({ length: view === ArticleView.SMALL ? 9 : 3 }, (_, index) => (
        <ArticleListItemSkeleton className={classes.card} key={index} view={view} />
    ));
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
    } = props;

    const { t } = useTranslation('translation');

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={classes.card}
            key={article.id}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(classes.ArticleList, {}, [className, classes[view]])}>
                <Text size={TextSize.L} title={t('articles_not_found')} />
            </div>
        );
    }

    return (
        <div className={classNames(classes.ArticleList, {}, [className, classes[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
