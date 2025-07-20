import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../Stack';
import { Text } from '../Text';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';

interface BreadCrumbsProps {
    className?: string;
}

export const BreadCrumbs = (props: BreadCrumbsProps) => {
    const { className } = props;
    const isMobile = useDevice();

    return (
        <HStack gap="10" className={classNames('', {}, [className])}>
            <Text text="Главные новости →" size={isMobile ? 'l' : '4xl'} />
            <Text
                rectangle
                text="KASE"
                size={isMobile ? 'l' : '4xl'}
                weight="bold"
            />
        </HStack>
    );
};
