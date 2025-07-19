import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Footer.module.scss';
import { VStack } from '@/shared/ui/Stack';
import { AppLogo } from '@/shared/ui/AppLogo';
import { Text } from '@/shared/ui/Text';

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

    return (
        <VStack gap="10" className={classNames(cls.Footer, {}, [className])}>
            <AppLogo inverted width={190} height={50} />
            <Text
                text={footerText}
                size="2xs"
                weight="semi-bold"
                variant="light-grey"
            />
        </VStack>
    );
});
