import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { getArticles } from '../../model/slices/articlesPageSlice';
import { getArticlesPageIsLoading } from '../../model/selectors/getArticlesPageIsLoading';
import { getArticlesPageError } from '../../model/selectors/getArticlesPageError';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('article-list');

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    if (error) {
        return <Text text={t('unexpected_error')} />;
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
});
