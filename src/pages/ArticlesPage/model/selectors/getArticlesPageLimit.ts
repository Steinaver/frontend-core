import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesPageLimit = (state: StateSchema) => state?.articlesPage?.limit || 9;
