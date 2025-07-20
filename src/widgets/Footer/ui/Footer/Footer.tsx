import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Footer.module.scss';
import { VStack } from '@/shared/ui/Stack';
import { AppLogo } from '@/shared/ui/AppLogo';
import { Text } from '@/shared/ui/Text';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';

interface FooterProps {
    className?: string;
}

const footerText =
    'Центр деловой информации Kapital.kz — информационное агентство, ' +
    'информирующее о событиях в экономике, бизнесе и финансах в Казахстане и за рубежом. ' +
    'При работе с материалами Центра деловой информации Kapital.kz разрешено использование ' +
    'лишь 30% текста с обязательной гиперссылкой на источник. При использовании полного ' +
    'материала необходимо разрешение редакции. Редакция Kapital.kz не всегда разделяет ' +
    'мнения авторов статей. При нарушении условий размещения материалов редакция делового ' +
    'портала имеет право на решение спорных моментов в законодательном порядке';

export const Footer = memo((props: FooterProps) => {
    const { className } = props;
    const isMobile = useDevice();

    return (
        <VStack
            gap={isMobile ? '20' : '10'}
            className={classNames(cls.Footer, {}, [className])}
        >
            <AppLogo
                inverted
                width={isMobile ? 117 : 190}
                height={isMobile ? 31 : 50}
            />
            <Text
                text={footerText}
                size={isMobile ? '8xs' : '2xs'}
                weight={isMobile ? 'medium' : 'semi-bold'}
                variant={isMobile ? 'grey' : 'light-grey'}
            />
        </VStack>
    );
});
