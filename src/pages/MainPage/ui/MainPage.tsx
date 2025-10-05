import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { HStack } from 'shared/ui/Stack';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Page } from 'widgets/Page/Page';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('main_page')}
        </Page>
    );
});

export default MainPage;
