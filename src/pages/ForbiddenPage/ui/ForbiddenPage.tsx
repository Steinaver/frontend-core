import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page/Page';

const ForbiddenPage = memo(() => {
    const { t } = useTranslation('translation');

    return (
        <Page>
            {t('forbidden_page')}
        </Page>
    );
});

export default ForbiddenPage;
