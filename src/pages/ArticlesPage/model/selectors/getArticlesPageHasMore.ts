import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesPageHasMore = (state: StateSchema) => state?.articlesPage?.hasMore;
