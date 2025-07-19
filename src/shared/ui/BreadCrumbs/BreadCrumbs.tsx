import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../Stack';
import { Text } from '../Text';

interface BreadCrumbsProps {
    className?: string;
}

export const BreadCrumbs = (props: BreadCrumbsProps) => {
    const { className } = props;

    return (
        <HStack gap="10" className={classNames('', {}, [className])}>
            <Text text="Главные новости →" size="4xl" />
            <Text text="KASE" size="4xl" weight="bold" />
        </HStack>
    );
};
