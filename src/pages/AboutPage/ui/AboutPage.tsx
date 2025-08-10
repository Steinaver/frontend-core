import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const AboutPage = memo(() => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('about_us')}
        </div>
    );
});

export default AboutPage;
