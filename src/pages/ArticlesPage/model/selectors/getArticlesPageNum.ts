import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesPageNum = (state: StateSchema) => state?.articlesPage?.page || 1;
